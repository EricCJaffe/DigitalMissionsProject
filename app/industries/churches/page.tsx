import { CTA } from "@/components/layout";
import { BadgeRow, CardGrid, Hero, Section } from "@/components/page";

export default function ChurchesPage() {
  return (
    <main>
      <Hero title="Your Congregation Needs Your Presence — Not Your Paperwork" subtitle="We automate administrative burden so pastoral teams can focus on ministry." />
      <BadgeRow items={["40+ Hrs/Month Freed from Admin", "Enterprise-Grade Security", "Integrates with Your ChMS", "Deployed in 4–6 Weeks"]} />
      <Section title="Common Pain Points">
        <CardGrid items={[
          { title: "Admin Overload", body: "Staff pulled from pastoral care into repetitive operations." },
          { title: "Volunteer Coordination", body: "Manual scheduling creates missed follow-up and burnout." },
          { title: "Giving Reports", body: "Treasurer workflows become spreadsheet-heavy and fragile." },
          { title: "Fragmented Communications", body: "Updates spread across disconnected tools and channels." },
          { title: "Disconnected Systems", body: "ChMS, email, website, and giving tools do not sync cleanly." },
          { title: "No IT Strategy", body: "Technology choices become reactive instead of mission-aligned." }
        ]} />
      </Section>
      <CTA title="Ready to reclaim ministry time every week?" />
    </main>
  );
}
