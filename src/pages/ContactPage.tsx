import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import {
  Building2,
  Check,
  CircleHelp,
  Loader2,
  Mail,
  Megaphone,
  MessageSquare,
  Phone,
  Send,
  ShoppingBag,
  UserRound,
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { useSearchParams } from "react-router-dom";
import { PageHero } from "@/components/layout/PageHero";
import { Seo } from "@/components/Seo";
import { site } from "@/data/site";
import { contactFaqs } from "@/data/faqs";
import { pageSeo } from "@/data/seo";
import {
  contactVerticalGroups,
  verticalLabelForSlug,
} from "@/data/contact-verticals";
import { buildFaqJsonLd, FaqSection } from "@/components/ui/faq-section";
import {
  formatEinInput,
  formatPhoneInput,
  getFieldError,
  getFormProgress,
  isFieldValid,
  type ContactFormErrors,
  type ContactFormState,
  type LeadRole,
  submitContactLead,
  validateContactForm,
} from "@/lib/contact-validation";
import "./pages.css";

function roleFromParam(value: string | null): LeadRole {
  if (value === "buyer") return "buyer";
  if (value === "publisher") return "publisher";
  return "publisher";
}

const emptyForm = (role: LeadRole): ContactFormState => ({
  role,
  fullName: "",
  email: "",
  phone: "",
  company: "",
  companyEin: "",
  verticalSlug: "",
  message: "",
});

const ROLE_OPTIONS = [
  {
    id: "buyer" as const,
    label: "Buyer",
    sub: "Buy calls & leads",
    Icon: ShoppingBag,
  },
  {
    id: "publisher" as const,
    label: "Publisher",
    sub: "Monetize traffic",
    Icon: Megaphone,
  },
  {
    id: "other" as const,
    label: "Other",
    sub: "General inquiry",
    Icon: CircleHelp,
  },
];

const ROLE_TIPS: Record<LeadRole, string> = {
  buyer:
    "Include vertical, target states, intake hours, exclusivity needs, and how you define a qualified call or lead. CPL vs cost per call if you know it.",
  publisher:
    "Include traffic type (search, social, native), verticals you run, monthly volume, and how you track calls today.",
  other:
    "Tell us what you're trying to accomplish. If it's partnership or press, include timelines and the best number to reach you.",
};

type FieldProps = {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  valid?: boolean;
  hint?: string;
  showCheck?: boolean;
  children: ReactNode;
};

function ContactField({
  id,
  label,
  required,
  error,
  valid,
  hint,
  showCheck = true,
  children,
}: FieldProps) {
  return (
    <label
      htmlFor={id}
      className={[
        "contact-field",
        error ? "is-invalid" : "",
        valid ? "is-valid" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span className="contact-field__label">
        {label}
        {required ? <span className="contact-form__req">*</span> : null}
      </span>
      <span className="contact-field__control">{children}</span>
      {error ? (
        <span className="contact-form__error" role="alert">
          {error}
        </span>
      ) : hint ? (
        <span className="contact-form__hint">{hint}</span>
      ) : null}
      {valid && showCheck ? (
        <span className="contact-field__check" aria-hidden="true">
          <Check size={14} strokeWidth={3} />
        </span>
      ) : null}
    </label>
  );
}

export default function ContactPage() {
  const [params] = useSearchParams();
  const initialRole = roleFromParam(params.get("role"));
  const reduce = useReducedMotion();
  const [form, setForm] = useState<ContactFormState>(() => emptyForm(initialRole));
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof ContactFormState, boolean>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const progress = useMemo(() => getFormProgress(form), [form]);
  const formReady = progress.percent === 100;

  const roleLabel = useMemo(() => {
    if (form.role === "buyer") return "Buyer / Advertiser";
    if (form.role === "publisher") return "Publisher";
    return "Other";
  }, [form.role]);

  function showError(key: keyof ContactFormState) {
    return touched[key] ? errors[key] : undefined;
  }

  function showValid(key: keyof ContactFormState) {
    if (!touched[key] && !form[key]) return false;
    return isFieldValid(key, form);
  }

  function updateField<K extends keyof ContactFormState>(key: K, value: ContactFormState[K]) {
    setForm((prev) => {
      const next = { ...prev, [key]: value };
      const fieldError = getFieldError(key, next);
      setErrors((prevErrors) => {
        const updated = { ...prevErrors };
        if (fieldError) updated[key] = fieldError;
        else delete updated[key];
        return updated;
      });
      return next;
    });
    setTouched((prev) => ({ ...prev, [key]: true }));
    setSubmitError("");
  }

  function markTouched(key: keyof ContactFormState) {
    setTouched((prev) => ({ ...prev, [key]: true }));
    const fieldError = getFieldError(key, form);
    setErrors((prev) => {
      const next = { ...prev };
      if (fieldError) next[key] = fieldError;
      else delete next[key];
      return next;
    });
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTouched({
      fullName: true,
      email: true,
      phone: true,
      company: true,
      companyEin: true,
    });

    const check = validateContactForm(form);
    if (!check.ok) {
      setErrors(check.errors);
      return;
    }

    setSubmitting(true);
    setSubmitError("");

    const result = await submitContactLead(form, verticalLabelForSlug(form.verticalSlug));

    setSubmitting(false);

    if (!result.ok) {
      if (result.errors) setErrors(result.errors);
      setSubmitError(result.error || "Could not send your message. Please try again.");
      return;
    }

    setSubmitted(true);
  }

  const messageCount = form.message.trim().length;

  return (
    <main>
      <Seo {...pageSeo.contact} jsonLd={buildFaqJsonLd(contactFaqs)} />

      <PageHero
        eyebrow="Contact"
        title={
          <>
            Tell us what you need{" "}
            <span className="grad-mint">on the phone</span>
          </>
        }
        description="Buyers: vertical, states, hours, and what a qualified call looks like. Publishers: traffic type and verticals. We respond within one business day."
      />

      <section className="inner-section">
        <div className="contact-actions" aria-label="Contact us directly">
          <a href={site.phoneHref} className="contact-actions__btn contact-actions__btn--call">
            <Phone size={18} strokeWidth={2.2} aria-hidden />
            Call {site.phone}
          </a>
          <a href={`mailto:${site.email}`} className="contact-actions__btn contact-actions__btn--email">
            <Mail size={18} strokeWidth={2.2} aria-hidden />
            Email {site.email}
          </a>
        </div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              className="contact-success"
              initial={reduce ? false : { opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 320, damping: 26 }}
            >
              <span className="contact-success__icon" aria-hidden="true">
                <Check size={28} strokeWidth={2.5} />
              </span>
              <h2>Thanks. We got your note.</h2>
              <p className="inner-section__sub" style={{ margin: 0 }}>
                A confirmation email is on its way to <strong>{form.email}</strong>. Someone on
                the team will review what you sent and follow up within one business day.
              </p>
              <div className="contact-success__actions">
                <a href={site.phoneHref} className="btn btn--purple">
                  Call us
                </a>
                <a href={`mailto:${site.email}`} className="btn btn--mint">
                  Email us
                </a>
              </div>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              className={`contact-form${formReady ? " contact-form--ready" : ""}`}
              onSubmit={onSubmit}
              noValidate
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <div className="contact-form__top">
                <p className="contact-form__intro">
                  Required fields are marked <span className="contact-form__req">*</span>. We
                  verify company EIN for legitimate business inquiries.
                </p>
                <div className="contact-form__progress-wrap" aria-live="polite">
                  <div className="contact-form__progress-meta">
                    <span>Form progress</span>
                    <strong>
                      {progress.completed}/{progress.total}
                    </strong>
                  </div>
                  <div className="contact-form__progress-track">
                    <motion.span
                      className="contact-form__progress-bar"
                      initial={false}
                      animate={{ width: `${progress.percent}%` }}
                      transition={{ type: "spring", stiffness: 280, damping: 28 }}
                    />
                  </div>
                </div>
              </div>

              <fieldset className="contact-form__section">
                <legend className="contact-form__legend">
                  <UserRound size={16} strokeWidth={2.2} aria-hidden />
                  I am a…
                </legend>
                <div className="contact-form__role-grid" role="radiogroup" aria-label="I am a">
                  {ROLE_OPTIONS.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      className={`contact-form__role-card${form.role === option.id ? " is-active" : ""}`}
                      aria-pressed={form.role === option.id}
                      onClick={() => updateField("role", option.id)}
                    >
                      <option.Icon size={20} strokeWidth={2.2} aria-hidden />
                      <span className="contact-form__role-title">{option.label}</span>
                      <span className="contact-form__role-sub">{option.sub}</span>
                    </button>
                  ))}
                </div>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={form.role}
                    className="contact-form__tip"
                    initial={reduce ? false : { opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={reduce ? undefined : { opacity: 0, height: 0 }}
                    transition={{ duration: 0.28 }}
                  >
                    <strong>{roleLabel}:</strong> {ROLE_TIPS[form.role]}
                  </motion.p>
                </AnimatePresence>
              </fieldset>

              <fieldset className="contact-form__section">
                <legend className="contact-form__legend">
                  <UserRound size={16} strokeWidth={2.2} aria-hidden />
                  Your details
                </legend>
                <div className="contact-form__grid">
                  <ContactField
                    id="fullName"
                    label="Full name"
                    required
                    error={showError("fullName")}
                    valid={showValid("fullName")}
                  >
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Alex Rivera"
                      value={form.fullName}
                      onChange={(e) => updateField("fullName", e.target.value)}
                      onBlur={() => markTouched("fullName")}
                      aria-invalid={Boolean(showError("fullName"))}
                    />
                  </ContactField>

                  <ContactField
                    id="email"
                    label="Work email"
                    required
                    error={showError("email")}
                    valid={showValid("email")}
                  >
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      inputMode="email"
                      placeholder="alex@company.com"
                      value={form.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      onBlur={() => markTouched("email")}
                      aria-invalid={Boolean(showError("email"))}
                    />
                  </ContactField>

                  <ContactField
                    id="phone"
                    label="Phone"
                    required
                    error={showError("phone")}
                    valid={showValid("phone")}
                    hint={showError("phone") ? undefined : "US number, 10 digits"}
                  >
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      inputMode="tel"
                      placeholder="(202) 555-0142"
                      value={form.phone}
                      onChange={(e) => updateField("phone", formatPhoneInput(e.target.value))}
                      onBlur={() => markTouched("phone")}
                      aria-invalid={Boolean(showError("phone"))}
                    />
                  </ContactField>
                </div>
              </fieldset>

              <fieldset className="contact-form__section">
                <legend className="contact-form__legend">
                  <Building2 size={16} strokeWidth={2.2} aria-hidden />
                  Company
                </legend>
                <div className="contact-form__grid contact-form__grid--duo">
                  <ContactField
                    id="company"
                    label="Company name"
                    required
                    error={showError("company")}
                    valid={showValid("company")}
                  >
                    <input
                      id="company"
                      name="company"
                      type="text"
                      required
                      autoComplete="organization"
                      placeholder="Legal or DBA name"
                      value={form.company}
                      onChange={(e) => updateField("company", e.target.value)}
                      onBlur={() => markTouched("company")}
                      aria-invalid={Boolean(showError("company"))}
                    />
                  </ContactField>

                  <ContactField
                    id="companyEin"
                    label="Company EIN"
                    required
                    error={showError("companyEin")}
                    valid={showValid("companyEin")}
                    hint={showError("companyEin") ? undefined : "Format: XX-XXXXXXX"}
                  >
                    <input
                      id="companyEin"
                      name="companyEin"
                      type="text"
                      required
                      inputMode="numeric"
                      autoComplete="off"
                      placeholder="XX-XXXXXXX"
                      value={form.companyEin}
                      onChange={(e) => updateField("companyEin", formatEinInput(e.target.value))}
                      onBlur={() => markTouched("companyEin")}
                      aria-invalid={Boolean(showError("companyEin"))}
                    />
                  </ContactField>
                </div>
              </fieldset>

              <fieldset className="contact-form__section">
                <legend className="contact-form__legend">
                  <MessageSquare size={16} strokeWidth={2.2} aria-hidden />
                  Campaign brief
                </legend>

                <ContactField id="vertical" label="Primary vertical">
                  <select
                    id="vertical"
                    name="vertical"
                    value={form.verticalSlug}
                    onChange={(e) => updateField("verticalSlug", e.target.value)}
                    className={form.verticalSlug ? "has-value" : ""}
                  >
                    <option value="">Select a vertical…</option>
                    <option value="other">Other / Multiple verticals</option>
                    {Object.entries(contactVerticalGroups).map(([category, items]) => (
                      <optgroup key={category} label={category}>
                        {items.map((item) => (
                          <option key={item.slug} value={item.slug}>
                            {item.name}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </ContactField>

                <ContactField
                  id="message"
                  label="How can we help?"
                  error={showError("message")}
                  valid={showValid("message")}
                  showCheck={false}
                  hint="Optional: vertical, states, hours, volume, or anything we should know"
                >
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder={
                      form.role === "buyer"
                        ? "Vertical, states, hours, exclusivity, duration floor, and how you define qualified…"
                        : `Traffic type, verticals, monthly volume, or what you need as a ${roleLabel.toLowerCase()}…`
                    }
                    value={form.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    onBlur={() => markTouched("message")}
                    aria-invalid={Boolean(showError("message"))}
                  />
                  <span className="contact-form__counter" aria-live="polite">
                    {messageCount > 0
                      ? `${messageCount} character${messageCount === 1 ? "" : "s"}`
                      : "Optional"}
                  </span>
                </ContactField>
              </fieldset>

              {submitError ? (
                <p className="contact-form__submit-error" role="alert">
                  {submitError}
                </p>
              ) : null}

              <div className="contact-form__submit-row">
                <button
                  type="submit"
                  className="btn btn--purple contact-form__submit"
                  disabled={submitting}
                >
                  {submitting ? (
                    <>
                      <Loader2 size={18} className="contact-form__spin" aria-hidden />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={18} aria-hidden />
                      {formReady ? "Send message" : `Complete ${progress.total - progress.completed} more field${progress.total - progress.completed === 1 ? "" : "s"}`}
                    </>
                  )}
                </button>
                {formReady ? (
                  <span className="contact-form__ready-note">All set. Ready to send</span>
                ) : null}
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </section>

      <FaqSection
        title="Contact FAQ"
        description="What to include as a buyer or publisher, and how we follow up."
        items={contactFaqs}
      />
    </main>
  );
}
