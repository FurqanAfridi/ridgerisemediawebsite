const EMAIL_RE =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

const EIN_RE = /^\d{2}-?\d{7}$/;

const ROLES = new Set(["buyer", "publisher", "other"]);

export function digitsOnly(value) {
  return String(value ?? "").replace(/\D/g, "");
}

export function formatPhoneInput(value) {
  const digits = digitsOnly(value).slice(0, 11);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  if (digits.length <= 10) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  }
  return `+${digits.slice(0, 1)} (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7, 11)}`;
}

export function formatEinInput(value) {
  const digits = digitsOnly(value).slice(0, 9);
  if (digits.length <= 2) return digits;
  return `${digits.slice(0, 2)}-${digits.slice(2)}`;
}

export function normalizeEin(value) {
  const digits = digitsOnly(value);
  if (digits.length !== 9) return "";
  return `${digits.slice(0, 2)}-${digits.slice(2)}`;
}

export function isValidEmail(value) {
  return EMAIL_RE.test(String(value ?? "").trim());
}

export function isValidPhone(value) {
  const digits = digitsOnly(value);
  return digits.length === 10 || (digits.length === 11 && digits.startsWith("1"));
}

export function isValidEin(value) {
  return EIN_RE.test(String(value ?? "").trim());
}

export function validateLeadPayload(body) {
  const errors = {};
  const role = String(body?.role ?? "").trim();

  if (!ROLES.has(role)) errors.role = "Select whether you are a buyer, publisher, or other.";

  const fullName = String(body?.fullName ?? body?.name ?? "").trim();
  if (fullName.length < 2) errors.fullName = "Enter your full name.";

  const email = String(body?.email ?? "").trim().toLowerCase();
  if (!isValidEmail(email)) errors.email = "Enter a valid work email address.";

  const phoneRaw = String(body?.phone ?? "").trim();
  if (!isValidPhone(phoneRaw)) {
    errors.phone = "Enter a valid US phone number (10 digits).";
  }

  const company = String(body?.company ?? "").trim();
  if (company.length < 2) errors.company = "Enter your company name.";

  const companyEin = normalizeEin(body?.companyEin ?? body?.ein ?? "");
  if (!isValidEin(companyEin)) {
    errors.companyEin = "Enter a valid 9-digit EIN (format: XX-XXXXXXX).";
  }

  const verticalSlug = String(body?.verticalSlug ?? body?.vertical ?? "").trim();
  const verticalName = String(body?.verticalName ?? "").trim();

  const message = String(body?.message ?? "").trim();
  if (message.length > 0 && message.length < 12) {
    errors.message = "If you add a message, use at least 12 characters.";
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  const phoneDigits = digitsOnly(phoneRaw);
  const phone =
    phoneDigits.length === 11 && phoneDigits.startsWith("1")
      ? `+1${phoneDigits.slice(1)}`
      : phoneDigits;

  return {
    ok: true,
    data: {
      role,
      full_name: fullName,
      email,
      phone,
      company,
      company_ein: companyEin,
      vertical_slug: verticalSlug || null,
      vertical_name: verticalName || null,
      message,
      user_agent: String(body?.userAgent ?? "").slice(0, 500) || null,
      source: "website",
    },
  };
}
