import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { donateContent } from "@/content/site";

export default function DonatePage() {
  return (
    <main className="px-4 pb-20 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8">
        <PageHero
          eyebrow="Donate"
          title={donateContent.title}
          description={donateContent.description}
        />

        <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="rounded-[30px] border border-[var(--line)] bg-white/92 p-8 shadow-[0_18px_42px_rgba(15,42,102,0.08)]">
            <h2 className="text-3xl font-semibold tracking-[-0.05em] text-[var(--navy)]">
              Why give
            </h2>
            <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
              Every donation helps further the mission of this project. Your
              support helps us continue building practical digital tools,
              systems, and support for churches, nonprofits, and faith-based
              organizations that are trying to make a real difference in the
              lives of others.
            </p>
            <div className="mt-8 grid gap-4">
              {donateContent.bullets.map((bullet) => (
                <div
                  key={bullet}
                  className="rounded-[22px] border border-[var(--line)] bg-[var(--panel)] px-5 py-5 text-lg leading-8 text-[var(--muted)]"
                >
                  {bullet}
                </div>
              ))}
            </div>
            <a
              href="https://for-the-least-of-these-474406.churchcenter.com/giving/to/digital-missions-project"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-[var(--navy)] px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              Give Now
            </a>
          </div>

          <aside className="rounded-[30px] border border-[var(--line)] bg-[linear-gradient(160deg,_rgba(30,61,129,0.98),_rgba(45,88,181,0.95))] p-8 text-white shadow-[0_25px_60px_rgba(15,45,105,0.28)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/65">
              Mission impact
            </p>
            <p className="mt-4 text-lg leading-8 text-white/82">
              Donations help strengthen the long-term work of Digital Missions
              Project and expand our ability to serve organizations that are
              trying to care for their communities well.
            </p>
            <Link
              href="/grant"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[var(--navy)] transition hover:-translate-y-0.5"
            >
              Learn About Grant Support
            </Link>
          </aside>
        </section>
      </div>
    </main>
  );
}
