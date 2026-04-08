import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { grantContent } from "@/content/site";

export default function GrantPage() {
  return (
    <main className="px-4 pb-20 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8">
        <PageHero
          eyebrow="Grant support"
          title={grantContent.title}
          description={grantContent.description}
        />

        <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="rounded-[30px] border border-[var(--line)] bg-white/92 p-8 shadow-[0_18px_42px_rgba(15,42,102,0.08)]">
            <h2 className="text-3xl font-semibold tracking-[-0.05em] text-[var(--navy)]">
              How this works
            </h2>
            <p className="mt-5 text-lg leading-8 text-[var(--muted-foreground)]">
              We want this page to make one thing clear: if your church or
              nonprofit has an important digital need but limited financial
              capacity, we still want to understand the project. We cannot
              guarantee support for every request, but some projects may
              qualify for discounted or fully covered work depending on the
              need, the project, and what funding is available at the time.
            </p>
            <div className="mt-8 grid gap-4">
              {grantContent.bullets.map((bullet) => (
                <div
                  key={bullet}
                  className="rounded-[22px] border border-[var(--line)] bg-[var(--panel)] px-5 py-5 text-lg leading-8 text-[var(--muted-foreground)]"
                >
                  {bullet}
                </div>
              ))}
            </div>
            <p className="mt-8 text-lg leading-8 text-[var(--muted-foreground)]">
              The best next step is to submit your project request. That gives
              us enough context to understand what you are trying to accomplish,
              where things currently stand, and whether grant-assisted support
              may be possible.
            </p>
            <Link
              href="/submit-project"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-[var(--navy)] px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              Submit Project
            </Link>
          </div>

          <aside className="rounded-[30px] border border-[var(--line)] bg-[linear-gradient(160deg,_rgba(30,61,129,0.98),_rgba(45,88,181,0.95))] p-8 text-white shadow-[0_25px_60px_rgba(15,45,105,0.28)]">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/65">
              What we look for
            </p>
            <p className="mt-4 text-lg leading-8 text-white/82">
              We are usually trying to understand a few things before we decide
              whether and how we may be able to help.
            </p>
            <div className="mt-6 grid gap-3">
              {[
                "What the project is and why it matters right now",
                "What financial constraints are making progress difficult",
                "How the work could strengthen ministry, outreach, or community impact",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[20px] border border-white/12 bg-white/10 px-4 py-4 text-base leading-7 text-white/84"
                >
                  {item}
                </div>
              ))}
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
