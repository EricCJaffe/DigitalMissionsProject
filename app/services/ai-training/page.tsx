import { CTA } from "@/components/layout";
import { CardGrid, Hero, Section } from "@/components/page";

export default function AITrainingPage() {
  return (
    <main>
      <Hero
        title="Equip Your Team with AI — Multiply Your Impact"
        subtitle="Hands-on workshops that help staff and volunteers use AI responsibly for real mission outcomes."
      />
      <Section title="Workshop Tracks">
        <CardGrid
          items={[
            { title: "AI Foundations for Leaders", body: "Strategic and ethical AI decisions for pastors, directors, and boards." },
            { title: "Team Productivity", body: "Practical AI workflows for writing, planning, and communication." },
            { title: "AI Coding Workflows", body: "Tooling and process improvements for technical teams and volunteers." },
            { title: "AI for Ministry & Mission", body: "Use cases for outreach, follow-up, and stewardship communication." }
          ]}
        />
      </Section>
      <Section title="Every Participant Receives">
        <ul className="list-disc space-y-2 pl-6 text-slate-700">
          <li>Working workflows built during the session.</li>
          <li>Role-specific prompt libraries.</li>
          <li>Setup guides and 30-day follow-up support.</li>
        </ul>
      </Section>
      <CTA title="Ready to train your team for practical AI use?" />
    </main>
  );
}
