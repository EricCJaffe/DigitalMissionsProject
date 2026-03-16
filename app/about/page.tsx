import { CTA } from "@/components/layout";
import { CardGrid, Hero, Section } from "@/components/page";

export default function AboutPage() {
  return (
    <main>
      <Hero
        title="Technology Partners Who Share Your Mission"
        subtitle="We're not just IT consultants. We're people who believe technology should serve the mission — and that cost should not be a barrier."
      />
      <Section title="Our Story">
        <p className="max-w-4xl text-slate-700">
          Digital Missions Project was created to close a persistent gap: churches and nonprofits doing critical community work often cannot access the same digital capabilities available to commercial organizations. Our team brings proven enterprise methodology and tools, then applies discounted and grant-supported pricing so mission-driven teams can move forward with confidence.
        </p>
      </Section>
      <Section title="What We Stand For">
        <CardGrid
          items={[
            { title: "Integrity", body: "No hidden fees, no surprises, and clear communication throughout every engagement." },
            { title: "Stewardship", body: "We treat every dollar like it matters because it does." },
            { title: "Empowerment", body: "Our goal is internal capability, not vendor lock-in." },
            { title: "Kingdom Impact", body: "Technology is a tool that supports your calling and community service." }
          ]}
        />
      </Section>
      <Section title="Meet the Team">
        <CardGrid
          items={[
            { title: "Eric Jaffe — Managing Partner", body: "Brings deep executive leadership and founded DMP to make enterprise-grade technology accessible to ministry organizations." },
            { title: "Tyler Miller — Partner", body: "Leads discovery and systems mapping to identify bottlenecks and quick wins." },
            { title: "Joey Bushe — Senior Business Analyst", body: "Designs practical automation workflows that return time to staff and volunteers." }
          ]}
        />
      </Section>
      <CTA title="Looking for a mission-aligned technology partner?" />
    </main>
  );
}
