import { CTA } from "@/components/layout";
import { BadgeRow, Hero, Section } from "@/components/page";
import { siteConfig } from "@/lib/site";

export default function ContactPage() {
  return (
    <main>
      <Hero
        title="Let's Talk About What's Possible"
        subtitle="Schedule a free discovery call. We'll assess your needs, identify quick wins, and map a right-sized roadmap with transparent discounted pricing."
      />
      <BadgeRow items={["30-Minute Call", "No Obligation", "Actionable Recommendations", "Mission-Aligned Guidance"]} />
      <section className="section grid gap-8 md:grid-cols-2">
        <form action="/api/contact" method="post" className="card space-y-3">
          <input name="name" required placeholder="Name" className="w-full rounded border p-2" />
          <input name="email" type="email" required placeholder="Email" className="w-full rounded border p-2" />
          <input name="phone" placeholder="Phone" className="w-full rounded border p-2" />
          <input name="organization" placeholder="Organization Name" className="w-full rounded border p-2" />
          <select name="organizationType" className="w-full rounded border p-2">
            <option>Church</option><option>Nonprofit</option><option>Faith-Based Business</option><option>Ministry</option><option>Other</option>
          </select>
          <select name="preferredMethod" className="w-full rounded border p-2"><option>Phone</option><option>Email</option></select>
          <textarea name="message" required placeholder="Message" className="h-32 w-full rounded border p-2" />
          <input name="website" className="hidden" tabIndex={-1} autoComplete="off" />
          <button className="rounded bg-blue-600 px-4 py-2 text-white">Submit</button>
        </form>

        <div className="card">
          <p className="text-lg font-semibold">Quick Contact</p>
          <p className="mt-3 text-slate-700">{siteConfig.phone}<br />{siteConfig.email}<br />{siteConfig.address}</p>
          <a className="mt-4 inline-block font-semibold text-blue-700" href={siteConfig.outlook}>Book Online</a>
          <Section title="What to Expect">
            <ol className="list-decimal space-y-2 pl-6 text-slate-700">
              <li>We'll listen to understand your goals and constraints.</li>
              <li>We'll identify 2–3 quick wins you can act on immediately.</li>
              <li>We'll outline a roadmap with transparent, discounted pricing.</li>
              <li>No pressure. No hard sell. Just honest guidance.</li>
            </ol>
          </Section>
        </div>
      </section>
      <CTA title="Ready to start your discovery call?" />
    </main>
  );
}
