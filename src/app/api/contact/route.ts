import { NextResponse } from "next/server";
import {
  formMailConfig,
  renderEmailDocument,
  renderFieldRows,
  resend,
} from "@/lib/resend";

function required(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const formData = await request.formData();

  const name = required(formData.get("name"));
  const email = required(formData.get("email"));
  const organization = required(formData.get("organization"));
  const subject = required(formData.get("subject"));
  const message = required(formData.get("message"));

  if (!name || !email || !subject || !message) {
    return NextResponse.redirect(new URL("/contact?status=missing", request.url));
  }

  if (!resend) {
    return NextResponse.redirect(new URL("/contact?status=config-error", request.url));
  }

  try {
    await resend.emails.send({
      from: formMailConfig.from,
      to: formMailConfig.to,
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: renderEmailDocument(
        "New Contact Form Submission",
        "A new message was submitted through the Digital Missions Project contact form.",
        renderFieldRows([
          { label: "Name", value: name },
          { label: "Email", value: email },
          { label: "Organization", value: organization },
          { label: "Subject", value: subject },
          { label: "Message", value: message },
        ]),
      ),
    });

    return NextResponse.redirect(new URL("/contact?status=success", request.url));
  } catch {
    return NextResponse.redirect(new URL("/contact?status=error", request.url));
  }
}
