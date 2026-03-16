import { CTA } from "@/components/layout";
import { CardGrid, Hero, Section } from "@/components/page";

export default function AutomationPage() {
  return (
    <main>
      <Hero
        title="Automate What Drains Your Team — So They Can Focus on Ministry"
        subtitle="Custom-configured workflows for repetitive administrative tasks, with human oversight at every critical step."
      />
      <Section title="What Is Workflow Automation?">
        <p className="max-w-4xl text-slate-700">Workflow automation connects your existing tools and replaces manual data movement, reminders, and approvals with reliable digital workflows.</p>
      </Section>
      <Section title="Common Use Cases">
        <CardGrid
          items={[
            { title: "Volunteer & Staff Onboarding", body: "Automated welcome sequences, training tasks, and access workflows." },
            { title: "Donation Processing", body: "Receipts, allocation logic, and reporting pipelines that reduce manual reconciliation." },
            { title: "Event Scheduling", body: "Booking confirmations, reminders, and checklist-driven task routing." },
            { title: "Communication Routing", body: "Prayer requests and inquiries routed to the right teams quickly." },
            { title: "Compliance Reporting", body: "Recurring reporting assembled from trusted data sources." },
            { title: "Custom Mission Workflows", body: "If your team repeats it, we can likely automate it." }
          ]}
        />
      </Section>
      <Section title="Safety & Control">
        <ul className="list-disc space-y-2 pl-6 text-slate-700">
          <li>Human-in-the-loop approvals on sensitive tasks.</li>
          <li>Role-based access control and audit trails.</li>
          <li>Manual override for exceptions and pastoral care moments.</li>
        </ul>
      </Section>
      <CTA title="Ready to free up hours every month?" />
    </main>
  );
}
