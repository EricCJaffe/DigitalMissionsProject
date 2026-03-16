import { CTA } from "@/components/layout";
import { CardGrid, Hero, Section } from "@/components/page";

export default function ResultsPage() {
  return (
    <main>
      <Hero
        title="Typical Results for Mission-Driven Organizations"
        subtitle="Representative impact metrics from churches, nonprofits, and faith-based organizations."
      />
      <Section title="Results by Organization Type">
        <CardGrid
          items={[
            { title: "Churches", body: "40+ hours/month returned, 90%+ volunteer scheduling reliability, and dramatically faster visitor follow-up." },
            { title: "Nonprofits", body: "Up to 60% less reporting effort, faster donor stewardship, and improved compliance consistency." },
            { title: "Faith-Based Businesses", body: "Operational efficiency gains, faster onboarding, and clearer roadmap alignment." }
          ]}
        />
      </Section>
      <Section title="How We Measure Success">
        <ol className="list-decimal space-y-2 pl-6 text-slate-700"><li>Time Freed</li><li>Stewardship Impact</li><li>Team Capacity</li><li>Mission Reach</li></ol>
      </Section>
      <CTA title="Ready to unlock measurable mission capacity?" />
    </main>
  );
}
