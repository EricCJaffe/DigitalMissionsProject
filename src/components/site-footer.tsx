import Link from "next/link";
import { industries, services } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="px-4 pb-8 pt-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1440px] gap-8 rounded-[32px] border border-[var(--line)] bg-[linear-gradient(135deg,_#163474,_#21499f)] px-6 py-8 text-white shadow-[0_26px_70px_rgba(15,35,95,0.24)] lg:grid-cols-[1.4fr_1fr_1fr] lg:px-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/70">
            Digital Missions Project
          </p>
          <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.05em]">
            Websites, automation, and practical AI support for organizations
            working to serve their communities well.
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-8 text-white/80">
            We work specifically with nonprofits, churches, and faith-based
            businesses, keeping our approach efficient, mission-aligned, and
            stewardship-minded.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/70">
            Services
          </p>
          <div className="mt-4 grid gap-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="text-white/84 transition hover:text-white"
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/70">
            Who We Serve
          </p>
          <div className="mt-4 grid gap-3">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="text-white/84 transition hover:text-white"
              >
                {industry.name}
              </Link>
            ))}
            <Link href="/grant" className="text-white/84 transition hover:text-white">
              Grant Support
            </Link>
            <Link
              href="/submit-project"
              className="text-white/84 transition hover:text-white"
            >
              Submit Project
            </Link>
            <Link href="/donate" className="text-white/84 transition hover:text-white">
              Donate
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
