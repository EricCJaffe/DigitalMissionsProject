import Link from "next/link";
import { CTA } from "@/components/layout";
import { BadgeRow, CardGrid, Hero, Section } from "@/components/page";

const services = [
  { title: "Workflow Automation", body: "Automate repetitive tasks that pull your team away from mission-critical work.", href: "/services/automation" },
  { title: "Custom Apps & Websites", body: "Websites, portals, and custom tools built around your ministry workflows.", href: "/services/custom-apps" },
  { title: "AI Training & Workshops", body: "Hands-on training that equips staff and volunteers with practical AI skills.", href: "/services/ai-training" },
  { title: "vCIO Services", body: "Strategic IT leadership without the full-time executive cost.", href: "/services/vcio" }
];

export default function HomePage() {
  return (
    <main>
      <Hero
        title="Technology That Serves Your Mission"
        subtitle="Enterprise-grade automation, custom applications, AI training, and IT strategy — made accessible for churches, nonprofits, and faith-based organizations through discounted services and available grant funding."
        actions={
          <>
            <Link href="/contact" className="rounded-lg bg-white px-5 py-3 font-semibold text-blue-700">Schedule Your Discovery Call</Link>
            <Link href="/grants" className="rounded-lg border border-white px-5 py-3 font-semibold">Learn About Grants</Link>
          </>
        }
      />

      <BadgeRow items={["Discounted & Grant-Supported", "Enterprise-Grade Security", "Human-in-the-Loop Safeguards", "Deployed in 4–6 Weeks"]} />

      <Section title="Your Team Was Called to Serve — Not to Fight with Technology">
        <p className="max-w-3xl text-lg text-slate-700">
          Organizations doing the most important work often have the least access to modern tools. We help mission-driven teams reduce administrative drag, improve communication, and build systems that support long-term stewardship.
        </p>
      </Section>

      <Section title="Our Four Service Pillars">
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="card">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-slate-700">{service.body}</p>
              <p className="mt-2 text-sm text-blue-700">Discounted rates available · Grant funding may apply</p>
              <Link href={service.href} className="mt-3 inline-block font-semibold text-blue-700">Learn more →</Link>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Typical Results">
        <CardGrid
          items={[
            { title: "Churches", body: "40+ hours per month returned to pastoral care and member engagement." },
            { title: "Nonprofits", body: "Up to 60% reduction in manual reporting and compliance admin." },
            { title: "Faith-Based Businesses", body: "30% improvement in operational efficiency and process consistency." }
          ]}
        />
        <Link href="/results" className="mt-5 inline-block font-semibold text-blue-700">See Typical Results →</Link>
      </Section>

      <Section title="Grants Available for Qualifying Organizations">
        <p className="max-w-3xl text-slate-700">
          Through our grant program, qualifying churches and nonprofits can receive additional funding to offset the cost of technology modernization. Awards are reviewed on a rolling basis with priority for under-resourced communities.
        </p>
        <Link href="/grants" className="mt-4 inline-block font-semibold text-amber-600">Learn About Our Grant Program →</Link>
      </Section>

      <CTA title="Ready to Multiply Your Mission's Impact?" />
    </main>
  );
}
