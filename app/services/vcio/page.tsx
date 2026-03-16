import { CTA } from "@/components/layout";
import { CardGrid, Hero, Section } from "@/components/page";

export default function VCIOPage() {
  return (
    <main>
      <Hero
        title="Strategic IT Leadership — At a Fraction of the Cost"
        subtitle="Fractional technology leadership for organizations that need direction, governance, and clear prioritization."
      />
      <Section title="What Is Included">
        <CardGrid
          items={[
            { title: "Technology Roadmapping", body: "Multi-year plans aligned to mission and growth goals." },
            { title: "Budget Planning", body: "Predictable planning aligned with stewardship priorities." },
            { title: "Vendor Management", body: "Contract support, evaluation, and accountability." },
            { title: "Security Oversight", body: "Policy and control guidance to reduce avoidable risk." },
            { title: "Quarterly Reviews", body: "Structured checkpoints to measure progress and adjust priorities." },
            { title: "Transformation Guidance", body: "Practical modernization without overwhelming your team." }
          ]}
        />
      </Section>
      <CTA title="Need strategic guidance without a full-time CIO hire?" />
    </main>
  );
}
