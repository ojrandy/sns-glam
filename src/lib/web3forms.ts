export async function submitWeb3Form(payload: Record<string, unknown>) {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  if (!accessKey) throw new Error("FORM_NOT_CONFIGURED");
  const response = await fetch("https://api.web3forms.com/submit", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ access_key: accessKey, from_name: "SnS Glams Website", ...payload }) });
  const result = await response.json() as { success?: boolean; message?: string };
  if (!response.ok || !result.success) throw new Error(result.message || "SUBMISSION_FAILED");
  return result;
}
