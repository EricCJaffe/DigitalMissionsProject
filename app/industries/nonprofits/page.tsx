import { CTA } from "@/components/layout";
import { BadgeRow, CardGrid, Hero, Section } from "@/components/page";

export default function NonprofitsPage() {
  return (
    <main>
      <Hero title="Spend Less Time on Reports — More Time on Impact" subtitle="Automation and strategy support for nonprofits that need to do more with less." />
      <BadgeRow items={["60% Reduction in Manual Reporting", "Grant Compliance Automated", "Donor Management Streamlined", "4–6 Week Deployment"]} />
      <Section title="Common Pain Points">
        <CardGrid items={[
          { title: "Grant Reporting Load", body: "Manual compliance work consumes strategic program time." },
          { title: "Donor Data Fragmentation", body: "Stewardship suffers when records are spread across tools." },
          { title: "Board Reporting Delays", body: "Quarterly reporting takes days of manual assembly." },
          { title: "Volunteer Tracking Gaps", body: "Limited visibility into hours, outcomes, and capacity." },
          { title: "Organic Tech Growth", body: "Stack complexity grows without long-term architecture." },
          { title: "Reactive IT", body: "Budget pressure drives break-fix decisions over planning." }
        ]} />
      </Section>
      <CTA title="Ready to increase mission capacity with better systems?" />
    </main>
  );
}
