import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;

export const resend = resendApiKey ? new Resend(resendApiKey) : null;

export const formMailConfig = {
  from: "ejaffe@integrityitsolutions.net",
  to: "eric@foundationstoneadvisors.com",
} as const;

export function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function renderFieldRows(fields: Array<{ label: string; value: string }>) {
  return fields
    .map(({ label, value }) => {
      const safeValue = value.trim() ? escapeHtml(value) : "<em>Not provided</em>";

      return `
        <tr>
          <td style="padding:12px 16px;border:1px solid #d9e2f2;font-weight:700;color:#1b366d;vertical-align:top;">${escapeHtml(label)}</td>
          <td style="padding:12px 16px;border:1px solid #d9e2f2;color:#445678;">${safeValue.replaceAll("\n", "<br />")}</td>
        </tr>
      `;
    })
    .join("");
}

export function renderEmailDocument(title: string, intro: string, rows: string) {
  return `
    <div style="background:#f3f7fd;padding:32px;font-family:Arial,Helvetica,sans-serif;">
      <div style="max-width:760px;margin:0 auto;background:#ffffff;border:1px solid #d9e2f2;border-radius:24px;overflow:hidden;">
        <div style="background:linear-gradient(135deg,#173879,#2e62e6);padding:28px 32px;color:#ffffff;">
          <p style="margin:0 0 8px;font-size:12px;font-weight:700;letter-spacing:0.28em;text-transform:uppercase;opacity:0.72;">Digital Missions Project</p>
          <h1 style="margin:0;font-size:32px;line-height:1.1;">${escapeHtml(title)}</h1>
        </div>
        <div style="padding:28px 32px;">
          <p style="margin:0 0 20px;color:#5b6c8e;font-size:18px;line-height:1.7;">${escapeHtml(intro)}</p>
          <table style="width:100%;border-collapse:collapse;border-radius:18px;overflow:hidden;">
            <tbody>${rows}</tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}
