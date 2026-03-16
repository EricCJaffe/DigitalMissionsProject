import { CTA } from "@/components/layout";
import { CardGrid, Hero, Section } from "@/components/page";

export default function CustomAppsPage() {
  return (
    <main>
      <Hero
        title="Digital Tools Built for Your Mission"
        subtitle="Websites, member portals, dashboards, and applications designed around how your organization actually works."
      />
      <Section title="Common Use Cases">
        <CardGrid
          items={[
            { title: "Church Websites", body: "Mobile-first sites with sermons, events, and giving integrations." },
            { title: "Member Portals", body: "Self-service updates, volunteer signups, and event registration." },
            { title: "Dashboards", body: "Live visibility into attendance, giving, and engagement metrics." },
            { title: "Grant & Donor Tools", body: "Track pledges, reporting deadlines, and communication touchpoints." },
            { title: "Operations Apps", body: "Room booking, maintenance requests, and internal workflow support." },
            { title: "Outreach Platforms", body: "Community-facing forms, directories, and scheduling experiences." }
          ]}
        />
      </Section>
      <Section title="Delivery Process">
        <ol className="list-decimal space-y-2 pl-6 text-slate-700">
          <li>Understand your vision and constraints.</li>
          <li>Design and prototype before full build.</li>
          <li>Integrate with your existing systems.</li>
          <li>Launch with training and handoff documentation.</li>
        </ol>
      </Section>
      <CTA title="Ready to build digital tools around your mission?" />
    </main>
  );
}
