function esc(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function row(label, value) {
  return `<tr>
    <td style="padding:10px 12px;border-bottom:1px solid #ece8f4;color:#6b6580;font-size:13px;width:140px;vertical-align:top;">${esc(label)}</td>
    <td style="padding:10px 12px;border-bottom:1px solid #ece8f4;color:#1a1228;font-size:14px;line-height:1.5;">${esc(value)}</td>
  </tr>`;
}

export function buildInternalLeadEmail(lead) {
  const roleLabel =
    lead.role === "buyer"
      ? "Buyer / Advertiser"
      : lead.role === "publisher"
        ? "Publisher"
        : "Other";

  const html = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><title>New Lead from website</title></head>
<body style="margin:0;padding:24px;background:#f6f4fb;font-family:Segoe UI,Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;margin:0 auto;">
    <tr><td style="padding:0 0 16px;">
      <div style="font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#5d62dd;">RidgeRise Media</div>
      <h1 style="margin:8px 0 0;font-size:22px;color:#1a1228;">New Lead from website</h1>
      <p style="margin:8px 0 0;color:#6b6580;font-size:14px;">Submitted via ridgerisemedia.com contact form.</p>
    </td></tr>
    <tr><td style="background:#ffffff;border:1px solid #e6e0f0;border-radius:16px;overflow:hidden;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
        ${row("Role", roleLabel)}
        ${row("Name", lead.full_name)}
        ${row("Email", lead.email)}
        ${row("Phone", lead.phone)}
        ${row("Company", lead.company)}
        ${row("EIN", lead.company_ein)}
        ${row("Vertical", lead.vertical_name || lead.vertical_slug || "—")}
        ${row("Message", lead.message)}
        ${row("Submitted", new Date().toISOString())}
      </table>
    </td></tr>
  </table>
</body>
</html>`;

  const text = [
    "New Lead from website",
    "",
    `Role: ${roleLabel}`,
    `Name: ${lead.full_name}`,
    `Email: ${lead.email}`,
    `Phone: ${lead.phone}`,
    `Company: ${lead.company}`,
    `EIN: ${lead.company_ein}`,
    `Vertical: ${lead.vertical_name || lead.vertical_slug || "—"}`,
    "",
    "Message:",
    lead.message,
  ].join("\n");

  return { html, text };
}

export function buildThankYouEmail(lead) {
  const firstName = esc(lead.full_name.split(/\s+/)[0] || "there");

  const html = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><title>Thank you for contacting RidgeRise Media</title></head>
<body style="margin:0;padding:24px;background:#f6f4fb;font-family:Segoe UI,Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;margin:0 auto;">
    <tr><td style="padding:28px 32px;background:linear-gradient(135deg,#5d62dd,#45e9b5);border-radius:20px 20px 0 0;">
      <div style="font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:rgba(255,255,255,0.9);">RidgeRise Media</div>
      <h1 style="margin:10px 0 0;font-size:24px;line-height:1.25;color:#ffffff;">Thank you for reaching out</h1>
    </td></tr>
    <tr><td style="padding:28px 32px;background:#ffffff;border:1px solid #e6e0f0;border-top:none;border-radius:0 0 20px 20px;">
      <p style="margin:0 0 16px;font-size:16px;line-height:1.65;color:#1a1228;">Hi ${firstName},</p>
      <p style="margin:0 0 16px;font-size:15px;line-height:1.65;color:#3d3650;">
        Thank you for contacting <strong>RidgeRise Media</strong>. We received your inquiry and a member of our team is reviewing the details you provided.
      </p>
      <p style="margin:0 0 16px;font-size:15px;line-height:1.65;color:#3d3650;">
        If your request is related to buying calls, leads, or traffic, our buyer onboarding team will follow up with next steps. If you applied as a publisher or partner, our partnerships team will reach out once your submission has been reviewed.
      </p>
      <p style="margin:0 0 20px;font-size:15px;line-height:1.65;color:#3d3650;">
        We typically respond within <strong>one business day</strong>. If your campaign is time-sensitive, reply to this email or call us at <a href="tel:+12027737162" style="color:#5d62dd;text-decoration:none;font-weight:600;">+1 (202) 773-7162</a>.
      </p>
      <div style="padding:16px 18px;border-radius:14px;background:#f3f1fa;border-left:4px solid #5d62dd;">
        <p style="margin:0;font-size:14px;line-height:1.6;color:#3d3650;">
          <strong>What happens next:</strong> A relevant specialist will contact you at <strong>${esc(lead.email)}</strong> to confirm your vertical, volume needs, and campaign requirements before anything goes live.
        </p>
      </div>
      <p style="margin:24px 0 0;font-size:14px;line-height:1.6;color:#6b6580;">
        — The RidgeRise Media team<br>
        <a href="mailto:info@ridgerisemedia.com" style="color:#5d62dd;text-decoration:none;">info@ridgerisemedia.com</a>
      </p>
    </td></tr>
  </table>
</body>
</html>`;

  const text = [
    `Hi ${lead.full_name.split(/\s+/)[0] || "there"},`,
    "",
    "Thank you for contacting RidgeRise Media. We received your inquiry and a member of our team is reviewing the details you provided.",
    "",
    "A relevant specialist will get back to you within one business day at the email address you submitted.",
    "",
    "RidgeRise Media",
    "info@ridgerisemedia.com",
    "+1 (202) 773-7162",
  ].join("\n");

  return { html, text };
}
