import { readFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

function parseEnvValue(raw) {
  let value = raw.trim();
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    value = value.slice(1, -1);
  }
  return value;
}

export function loadEnvFile() {
  const envPath = resolve(root, ".env");
  if (!existsSync(envPath)) return false;

  for (const line of readFileSync(envPath, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const withoutExport = trimmed.startsWith("export ") ? trimmed.slice(7).trim() : trimmed;
    const eq = withoutExport.indexOf("=");
    if (eq === -1) continue;

    const key = withoutExport.slice(0, eq).trim();
    const value = parseEnvValue(withoutExport.slice(eq + 1));
    if (!key) continue;

    // Always prefer values from .env so edits apply after server reload.
    process.env[key] = value;
  }

  return true;
}

export function getLeadConfig() {
  loadEnvFile();

  return {
    port: Number(process.env.PORT || 3020),
    supabaseUrl: process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL || "",
    supabaseKey:
      process.env.SUPABASE_SERVICE_ROLE_KEY ||
      process.env.VITE_SUPABASE_ANON_KEY ||
      process.env.SUPABASE_ANON_KEY ||
      "",
    table: process.env.VITE_SUPABASE_TABLE || "rrm_leads",
    notifyTo: (process.env.LEAD_NOTIFY_TO || "furqan@ridgerisemedia.com")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean)
      .join(", "),
    emailFrom: process.env.EMAIL_FROM || "Ridge Rise Media <info@ridgerisemedia.com>",
    smtp: {
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: process.env.SMTP_SECURE !== "false",
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  };
}

export function logLeadConfigStatus(config) {
  const supabaseOk = Boolean(config.supabaseUrl && config.supabaseKey);
  const smtpOk = Boolean(config.smtp.host && config.smtp.user && config.smtp.pass);

  console.log(
    `[leads] Supabase: ${supabaseOk ? "ready" : "NOT CONFIGURED — check .env (VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY)"}`,
  );
  console.log(`[leads] SMTP: ${smtpOk ? "ready" : "not configured (emails skipped)"}`);
}
