import { site } from "@/data/site";

// Every enquiry is delivered to site.email. Delivery is attempted in order:
//   1. Web3Forms   — used when VITE_WEB3FORMS_ACCESS_KEY is set (key must be registered to site.email)
//   2. FormSubmit  — posts straight to site.email, no key needed (one-time activation link is emailed on first use)
//   3. mailto:     — opens the visitor's email app pre-filled, so the message is never lost
export type Enquiry = {
  subject: string;
  replyTo: string;
  fields: Record<string, FormDataEntryValue | undefined>;
};
export type DeliveryResult = "sent" | "mailto";

const FROM_NAME = "SnS Glams Website";
const LABELS: Record<string, string> = {
  name: "Name",
  email: "Email",
  phone: "Phone",
  subject: "Subject",
  message: "Message",
  service: "Services",
  package: "Packages",
  estimate: "Estimated total",
  occasion: "Occasion",
  people: "Number of people",
  location: "Location",
  address: "Venue address",
  date: "Preferred date",
  time: "Preferred time",
  notes: "Notes",
  deposit: "Deposit acknowledged",
  travel: "Relocation fee & travel terms acknowledged",
};

function clean(fields: Enquiry["fields"]) {
  const out: Record<string, string> = {};
  for (const [key, value] of Object.entries(fields)) {
    if (key === "botcheck" || typeof value !== "string" || !value.trim()) continue;
    out[LABELS[key] ?? key] = key === "deposit" || key === "travel" ? "Yes" : value.trim();
  }
  return out;
}

async function viaWeb3Forms({ subject, replyTo }: Enquiry, fields: Record<string, string>) {
  const accessKey = import.meta.env["VITE_WEB3FORMS_ACCESS_KEY"];
  if (!accessKey) throw new Error("WEB3FORMS_NOT_CONFIGURED");
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      from_name: FROM_NAME,
      subject,
      replyto: replyTo,
      ...fields,
    }),
  });
  const result = (await response.json()) as { success?: boolean; message?: string };
  if (!response.ok || !result.success) throw new Error(result.message || "WEB3FORMS_FAILED");
}

async function viaFormSubmit({ subject, replyTo }: Enquiry, fields: Record<string, string>) {
  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(site.email)}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      _subject: subject,
      _replyto: replyTo,
      _template: "table",
      _captcha: "false",
      ...fields,
    }),
  });
  const result = (await response.json()) as { success?: boolean | string; message?: string };
  if (!response.ok || String(result.success) !== "true")
    throw new Error(result.message || "FORMSUBMIT_FAILED");
}

function viaMailto({ subject }: Enquiry, fields: Record<string, string>) {
  const body = Object.entries(fields)
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");
  window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export async function sendEnquiry(enquiry: Enquiry): Promise<DeliveryResult> {
  // Honeypot filled in: a bot. Pretend success without sending anything.
  if (enquiry.fields["botcheck"]) return "sent";
  const fields = clean(enquiry.fields);
  const channels = [
    ["Web3Forms", viaWeb3Forms],
    ["FormSubmit", viaFormSubmit],
  ] as const;
  for (const [channel, send] of channels) {
    try {
      await send(enquiry, fields);
      return "sent";
    } catch (err) {
      console.warn(`Enquiry delivery via ${channel} failed:`, err);
    }
  }
  viaMailto(enquiry, fields);
  return "mailto";
}
