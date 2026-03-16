import { NextResponse } from "next/server";
import {
  formMailConfig,
  renderEmailDocument,
  renderFieldRows,
  resend,
} from "@/lib/resend";

function valueOf(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const formData = await request.formData();

  const organizationName = valueOf(formData, "organization_name");
  const organizationType = valueOf(formData, "organization_type");
  const contactName = valueOf(formData, "contact_name");
  const email = valueOf(formData, "email");
  const phone = valueOf(formData, "phone");
  const website = valueOf(formData, "website");
  const projectType = valueOf(formData, "project_type");
  const projectDescription = valueOf(formData, "project_description");
  const challenges = valueOf(formData, "challenges");
  const timeline = valueOf(formData, "timeline");
  const budget = valueOf(formData, "budget");
  const referralSource = valueOf(formData, "referral_source");
  const grantInterest = formData.get("grant_interest") ? "Yes" : "No";

  if (
    !organizationName ||
    !organizationType ||
    !contactName ||
    !email ||
    !projectType ||
    !projectDescription
  ) {
    return NextResponse.redirect(
      new URL("/submit-project?status=missing", request.url),
    );
  }

  if (!resend) {
    return NextResponse.redirect(
      new URL("/submit-project?status=config-error", request.url),
    );
  }

  try {
    await resend.emails.send({
      from: formMailConfig.from,
      to: formMailConfig.to,
      replyTo: email,
      subject: `Project Request: ${organizationName}`,
      html: renderEmailDocument(
        "New Project Request",
        "A new project request was submitted through the Digital Missions Project website.",
        renderFieldRows([
          { label: "Organization Name", value: organizationName },
          { label: "Organization Type", value: organizationType },
          { label: "Contact Name", value: contactName },
          { label: "Email", value: email },
          { label: "Phone", value: phone },
          { label: "Website", value: website },
          { label: "Project Type", value: projectType },
          { label: "Describe Your Project", value: projectDescription },
          { label: "Current Challenges", value: challenges },
          { label: "Ideal Timeline", value: timeline },
          { label: "Budget Range", value: budget },
          { label: "Interested In Grants", value: grantInterest },
          { label: "How They Heard About Us", value: referralSource },
        ]),
      ),
    });

    return NextResponse.redirect(
      new URL("/submit-project?status=success", request.url),
    );
  } catch {
    return NextResponse.redirect(
      new URL("/submit-project?status=error", request.url),
    );
  }
}
