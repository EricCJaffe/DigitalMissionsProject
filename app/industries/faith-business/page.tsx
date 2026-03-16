import { CTA } from "@/components/layout";
import { CardGrid, Hero, Section } from "@/components/page";

export default function FaithBusinessPage() {
  return (
    <main>
      <Hero title="Run Your Business with Excellence — And Purpose" subtitle="IT strategy and automation for faith-based businesses pursuing integrity, efficiency, and service." />
      <Section title="Common Pain Points">
        <CardGrid items={[
          { title: "Operational Inefficiency", body: "Manual handoffs and duplicate entry slow delivery and increase errors." },
          { title: "Tooling Sprawl", body: "Disconnected systems limit visibility and team coordination." },
          { title: "No Strategic Guidance", body: "Technology investments happen without a coherent roadmap." },
          { title: "Scaling Constraints", body: "Growth is limited by brittle or manual internal processes." },
          { title: "Staff Capacity Drain", body: "High-value contributors spend time on repetitive admin tasks." },
          { title: "Mission Drift Risk", body: "Operations pressure can pull attention from purpose-driven priorities." }
        ]} />
      </Section>
      <CTA title="Ready to align operations with your purpose?" />
    </main>
  );
}
