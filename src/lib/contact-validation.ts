export type LeadRole = "buyer" | "publisher" | "other";

export type ContactFormState = {
  role: LeadRole;
  fullName: string;
  email: string;
  phone: string;
  company: string;
  companyEin: string;
  verticalSlug: string;
  message: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormState, string>>;

export const MESSAGE_MIN_LENGTH = 12;

const EMAIL_RE =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

const EIN_RE = /^\d{2}-?\d{7}$/;

export function digitsOnly(value: string) {
  return value.replace(/\D/g, "");
}

export function formatPhoneInput(value: string) {
  const digits = digitsOnly(value).slice(0, 11);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  if (digits.length <= 10) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  }
  return `+${digits.slice(0, 1)} (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7, 11)}`;
}

export function formatEinInput(value: string) {
  const digits = digitsOnly(value).slice(0, 9);
  if (digits.length <= 2) return digits;
  return `${digits.slice(0, 2)}-${digits.slice(2)}`;
}

export function normalizeEin(value: string) {
  const digits = digitsOnly(value);
  if (digits.length !== 9) return "";
  return `${digits.slice(0, 2)}-${digits.slice(2)}`;
}

export function isValidEmail(value: string) {
  return EMAIL_RE.test(value.trim());
}

export function isValidPhone(value: string) {
  const digits = digitsOnly(value);
  return digits.length === 10 || (digits.length === 11 && digits.startsWith("1"));
}

export function isValidEin(value: string) {
  return EIN_RE.test(value.trim());
}

export function getFieldError(
  key: keyof ContactFormState,
  form: ContactFormState,
): string | undefined {
  switch (key) {
    case "fullName":
      if (!form.fullName.trim() || form.fullName.trim().length < 2) {
        return "Enter your full name.";
      }
      return undefined;
    case "email":
      if (!isValidEmail(form.email)) return "Enter a valid work email address.";
      return undefined;
    case "phone":
      if (!isValidPhone(form.phone)) return "Enter a valid US phone number (10 digits).";
      return undefined;
    case "company":
      if (!form.company.trim() || form.company.trim().length < 2) {
        return "Enter your company name.";
      }
      return undefined;
    case "companyEin":
      if (!isValidEin(normalizeEin(form.companyEin))) {
        return "Enter a valid 9-digit EIN (format: XX-XXXXXXX).";
      }
      return undefined;
    case "message":
      if (form.message.trim() && form.message.trim().length < MESSAGE_MIN_LENGTH) {
        return `If you add a message, use at least ${MESSAGE_MIN_LENGTH} characters.`;
      }
      return undefined;
    default:
      return undefined;
  }
}

export function isFieldValid(key: keyof ContactFormState, form: ContactFormState) {
  if (key === "role" || key === "verticalSlug" || key === "message") {
    return !getFieldError(key, form);
  }
  const value = form[key];
  if (typeof value === "string" && !value.trim()) return false;
  return !getFieldError(key, form);
}

const PROGRESS_KEYS = [
  "fullName",
  "email",
  "phone",
  "company",
  "companyEin",
] as const satisfies readonly (keyof ContactFormState)[];

export function getFormProgress(form: ContactFormState) {
  const completed = PROGRESS_KEYS.filter((key) => isFieldValid(key, form)).length;
  const total = PROGRESS_KEYS.length;
  return {
    completed,
    total,
    percent: Math.round((completed / total) * 100),
  };
}

export function validateContactForm(
  form: ContactFormState,
): { ok: true } | { ok: false; errors: ContactFormErrors } {
  const errors: ContactFormErrors = {};

  for (const key of PROGRESS_KEYS) {
    const message = getFieldError(key, form);
    if (message) errors[key] = message;
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return { ok: true };
}

export async function submitContactLead(
  form: ContactFormState,
  verticalName: string,
): Promise<{ ok: true } | { ok: false; errors?: ContactFormErrors; error?: string }> {
  const check = validateContactForm(form);
  if (!check.ok) return check;

  const phoneDigits = digitsOnly(form.phone);
  const phone =
    phoneDigits.length === 11 && phoneDigits.startsWith("1")
      ? `+1${phoneDigits.slice(1)}`
      : phoneDigits;

  const res = await fetch("/api/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      role: form.role,
      fullName: form.fullName.trim(),
      email: form.email.trim().toLowerCase(),
      phone,
      company: form.company.trim(),
      companyEin: normalizeEin(form.companyEin),
      verticalSlug: form.verticalSlug || null,
      verticalName: verticalName || null,
      message: form.message.trim(),
    }),
  });

  const payload = (await res.json().catch(() => ({}))) as {
    ok?: boolean;
    errors?: ContactFormErrors;
    error?: string;
  };

  if (!res.ok) {
    if (payload.errors) return { ok: false, errors: payload.errors };
    return { ok: false, error: payload.error || "Something went wrong. Please try again." };
  }

  return { ok: true };
}
