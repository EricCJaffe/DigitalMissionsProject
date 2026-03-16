import { CTA } from "@/components/layout";
import { CardGrid, Hero, Section } from "@/components/page";

export default function ProcessPage() {
  return (
    <main>
      <Hero
        title="Discovery → Transformation → Release"
        subtitle="A proven framework trusted by commercial teams and adapted for mission-driven organizations."
      />
      <Section title="The 7 Phases">
        <CardGrid
          items={[
            { title: "Phase 0", body: "Alignment & Commitment" },
            { title: "Phase 1", body: "Organizational Understanding" },
            { title: "Phase 2", body: "Current State Assessment" },
            { title: "Phase 3", body: "Deep Dive Discovery" },
            { title: "Phase 4", body: "Quick Wins & Prioritization" },
            { title: "Phase 5", body: "Roadmap & Implementation" },
            { title: "Phase 6", body: "Equip, Empower, Release — we transfer capability, not dependency." }
          ]}
        />
      </Section>
      <Section title="7-Layer Analysis">
        <ol className="list-decimal space-y-2 pl-6 text-slate-700">
          <li>Mission Alignment</li><li>Success Metrics</li><li>People & Org</li><li>Communication</li><li>Processes</li><li>Pain Points</li><li>Automation Opportunities</li>
        </ol>
      </Section>
      <CTA title="Ready for a rigorous process that builds internal capacity?" />
    </main>
  );
}
