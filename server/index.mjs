import http from "node:http";
import nodemailer from "nodemailer";
import { validateLeadPayload } from "./validate-lead.mjs";
import { buildInternalLeadEmail, buildThankYouEmail } from "./email-templates.mjs";
import { getLeadConfig, loadEnvFile, logLeadConfigStatus } from "./load-env.mjs";

function json(res, status, body) {
  res.writeHead(status, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  });
  res.end(JSON.stringify(body));
}

async function readJson(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const raw = Buffer.concat(chunks).toString("utf8");
  if (!raw) return {};
  return JSON.parse(raw);
}

async function insertLead(row, config) {
  if (!config.supabaseUrl || !config.supabaseKey) {
    throw new Error(
      "Supabase is not configured on the server. Restart the API after updating .env (npm run dev:api).",
    );
  }

  const res = await fetch(`${config.supabaseUrl.replace(/\/$/, "")}/rest/v1/${config.table}`, {
    method: "POST",
    headers: {
      apikey: config.supabaseKey,
      Authorization: `Bearer ${config.supabaseKey}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(row),
  });

  if (!res.ok) {
    const detail = await res.text();
    throw new Error(`Database save failed (${res.status}): ${detail}`);
  }
}

function createMailer(config) {
  const { host, user, pass } = config.smtp;
  if (!host || !user || !pass) return null;

  return nodemailer.createTransport({
    host,
    port: config.smtp.port,
    secure: config.smtp.secure,
    auth: { user, pass },
  });
}

async function sendLeadEmails(lead, config) {
  const transporter = createMailer(config);
  if (!transporter) {
    console.warn("[leads] SMTP not configured — skipped email notifications.");
    return;
  }

  const internal = buildInternalLeadEmail(lead);
  await transporter.sendMail({
    from: config.emailFrom,
    to: config.notifyTo,
    subject: "New Lead from website",
    text: internal.text,
    html: internal.html,
  });

  const thanks = buildThankYouEmail(lead);
  await transporter.sendMail({
    from: config.emailFrom,
    to: lead.email,
    subject: "Thank you for contacting RidgeRise Media",
    text: thanks.text,
    html: thanks.html,
  });
}

loadEnvFile();
const bootConfig = getLeadConfig();

const server = http.createServer(async (req, res) => {
  const config = getLeadConfig();

  if (req.method === "OPTIONS" && req.url === "/api/leads") {
    return json(res, 204, {});
  }

  if (req.method === "GET" && req.url === "/api/health") {
    return json(res, 200, {
      ok: true,
      supabase: Boolean(config.supabaseUrl && config.supabaseKey),
      smtp: Boolean(config.smtp.host && config.smtp.user && config.smtp.pass),
    });
  }

  if (req.method !== "POST" || req.url !== "/api/leads") {
    return json(res, 404, { ok: false, error: "Not found" });
  }

  try {
    const body = await readJson(req);
    const parsed = validateLeadPayload({
      ...body,
      userAgent: req.headers["user-agent"],
    });

    if (!parsed.ok) {
      return json(res, 400, { ok: false, errors: parsed.errors });
    }

    const lead = parsed.data;
    await insertLead(lead, config);

    try {
      await sendLeadEmails(lead, config);
    } catch (mailErr) {
      console.error("[leads] Email failed (lead saved):", mailErr);
    }

    return json(res, 200, { ok: true });
  } catch (err) {
    console.error("[leads]", err);
    return json(res, 500, {
      ok: false,
      error: err instanceof Error ? err.message : "Server error",
    });
  }
});

server.listen(bootConfig.port, () => {
  console.log(`[leads] API listening on http://localhost:${bootConfig.port}`);
  logLeadConfigStatus(bootConfig);
});
