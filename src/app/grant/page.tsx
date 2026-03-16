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
              Why keep this page
            </h2>
            <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
              You also asked to preserve the grant page. It now has a dedicated
              route and menu presence, which gives it room to carry funding,
              planning, and impact language specific to your audience.
            </p>
            <div className="mt-8 grid gap-4">
              {grantContent.bullets.map((bullet) => (
                <div
                  key={bullet}
                  className="rounded-[22px] border border-[var(--line)] bg-[var(--panel)] px-5 py-5 text-lg leading-8 text-[var(--muted)]"
                >
                  {bullet}
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-[30px] border border-[var(--line)] bg-[linear-gradient(180deg,_rgba(255,255,255,0.95),_rgba(245,249,255,0.92))] p-8 shadow-[0_20px_45px_rgba(15,42,102,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--blue)]">
              Intended use
            </p>
            <p className="mt-4 text-lg leading-8 text-[var(--muted)]">
              This page is positioned for deeper copy about grants, funding
              pathways, and digitally supported community impact projects.
            </p>
          </aside>
        </section>
      </div>
    </main>
  );
}
