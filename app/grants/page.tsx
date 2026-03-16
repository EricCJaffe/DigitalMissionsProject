import { CTA } from "@/components/layout";
import { CardGrid, Hero, Section } from "@/components/page";

export default function GrantsPage() {
  return (
    <main>
      <Hero
        title="Technology Grants for Churches & Nonprofits"
        subtitle="Because your mission should not be limited by your technology budget."
      />

      <Section title="How It Works">
        <CardGrid
          items={[
            { title: "1) Apply", body: "Complete the grant request form with details about your organization and technology needs." },
            { title: "2) Review", body: "Applications are reviewed on a rolling basis, typically within two weeks." },
            { title: "3) Award", body: "Approved grants offset service costs based on need, impact, and available funding." },
            { title: "4) Engage", body: "We start with discovery and move into implementation with clear milestones." }
          ]}
        />
      </Section>

      <section className="section">
        <form action="/api/grants" method="post" className="card grid gap-3 md:grid-cols-2">
          <input name="orgName" required placeholder="Organization Name" className="rounded border p-2" />
          <select name="orgType" className="rounded border p-2"><option>Church</option><option>Nonprofit</option><option>Ministry</option><option>Faith-Based Business</option></select>
          <select name="taxStatus" className="rounded border p-2"><option>Yes</option><option>No</option><option>Pending</option></select>
          <input name="contactName" required placeholder="Contact Name" className="rounded border p-2" />
          <input name="email" required type="email" placeholder="Email" className="rounded border p-2" />
          <input name="phone" placeholder="Phone" className="rounded border p-2" />
          <input name="websiteUrl" placeholder="Website (optional)" className="rounded border p-2" />
          <input name="staffCount" placeholder="Number of Staff + Regular Volunteers" className="rounded border p-2" />
          <textarea name="needs" required placeholder="Describe Your Technology Needs" className="col-span-full h-24 rounded border p-2" />
          <textarea name="impact" required placeholder="How would this grant impact your mission?" className="col-span-full h-24 rounded border p-2" />
          <input name="website" className="hidden" tabIndex={-1} autoComplete="off" />
          <button className="col-span-full rounded bg-amber-500 px-4 py-2 text-white">Submit Grant Application</button>
          <p className="col-span-full text-sm text-slate-600">Thank you for your application. Our team will review it and respond within two weeks.</p>
        </form>
      </section>

      <CTA title="Questions before you apply? Schedule a discovery call." />
    </main>
  );
}
