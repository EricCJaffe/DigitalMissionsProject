import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { ServiceCard } from "@/components/service-card";
import { industries, processSteps, services } from "@/content/site";

export default function Home() {
  return (
    <main className="px-4 pb-20 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-12">
        <PageHero
          eyebrow="Digital support for community impact"
          title="Helping nonprofits, churches, and faith-based businesses build with more clarity and less waste."
          description="Digital Missions Project exists to partner with mission-driven organizations that need strong websites, practical automation, and highly efficient systems without bloated agency pricing or business-first language."
        />

        <section className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
          <div className="rounded-[30px] border border-[var(--line)] bg-white/92 p-8 shadow-[0_18px_42px_rgba(15,42,102,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--blue)]">
              Our posture
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[var(--navy)]">
              Ministry-minded, nonprofit-aware, and careful with budget.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
              We focus on helping organizations achieve their vision and serve
              their communities without gimmicks, unnecessary cost, or
              overcomplicated tools.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                "Discount-aware planning for organizations with real stewardship needs",
                "Highly efficient systems that support overextended staff teams",
                "A partner focused on people served, not just metrics reported",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[22px] border border-[var(--line)] bg-[var(--panel)] px-4 py-4 text-sm leading-6 text-[var(--muted)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-[var(--line)] bg-[linear-gradient(160deg,_rgba(30,61,129,0.98),_rgba(45,88,181,0.95))] p-8 text-white shadow-[0_25px_60px_rgba(15,45,105,0.28)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/65">
              Grants and project requests
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em]">
              Applying for a grant or submitting a project?
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/82">
              Tell us what you are building, what challenges you are facing,
              and whether you want to explore grant opportunities for the work.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/submit-project"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-[var(--navy)] transition hover:-translate-y-0.5"
              >
                Submit a Project
              </Link>
              <Link
                href="/grant"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              >
                Learn About Grants
              </Link>
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--blue)]">
              Services
            </p>
          </div>

          <div className="mt-10 grid gap-6 xl:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div className="rounded-[30px] border border-[var(--line)] bg-white/92 p-8 shadow-[0_18px_42px_rgba(15,42,102,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--blue)]">
              Who we serve
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[var(--navy)]">
              Built around organizations trying to make real impact in the
              community.
            </h2>
            <div className="mt-6 grid gap-4">
              {industries.map((industry) => (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="rounded-[24px] border border-[var(--line)] bg-[var(--panel)] px-5 py-5 transition hover:-translate-y-0.5 hover:bg-white"
                >
                  <p className="text-xl font-semibold text-[var(--navy)]">
                    {industry.name}
                  </p>
                  <p className="mt-2 text-base leading-7 text-[var(--muted)]">
                    {industry.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-[var(--line)] bg-[linear-gradient(180deg,_rgba(255,255,255,0.95),_rgba(245,249,255,0.92))] p-8 shadow-[0_20px_45px_rgba(15,42,102,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--blue)]">
              Our process
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[var(--navy)]">
              Clean structure in the nav, and a clearer path through the work.
            </h2>
            <div className="mt-8 grid gap-4">
              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="grid gap-3 rounded-[24px] border border-[var(--line)] bg-white px-5 py-5 sm:grid-cols-[auto_1fr]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--blue)] text-sm font-semibold text-white">
                    0{index + 1}
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-[var(--navy)]">
                      {step.title}
                    </p>
                    <p className="mt-2 text-base leading-7 text-[var(--muted)]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/our-process"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-[var(--navy)] px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              Explore Our Process
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
