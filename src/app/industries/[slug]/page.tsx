import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { industries } from "@/content/site";

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = industries.find((entry) => entry.slug === slug);

  if (!industry) notFound();

  return (
    <main className="px-4 pb-20 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8">
        <PageHero
          eyebrow="Industry focus"
          title={`Partnering with ${industry.name.toLowerCase()}.`}
          description={industry.description}
        />

        <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="rounded-[30px] border border-[var(--line)] bg-white/92 p-8 shadow-[0_18px_42px_rgba(15,42,102,0.08)]">
            <h2 className="text-3xl font-semibold tracking-[-0.05em] text-[var(--navy)]">
              What we pay attention to here
            </h2>
            <div className="mt-8 grid gap-4">
              {industry.bullets.map((bullet) => (
                <div
                  key={bullet}
                  className="rounded-[22px] border border-[var(--line)] bg-[var(--panel)] px-5 py-5 text-lg leading-8 text-[var(--muted-foreground)]"
                >
                  {bullet}
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-[30px] border border-[var(--line)] bg-[linear-gradient(180deg,_rgba(255,255,255,0.95),_rgba(245,249,255,0.92))] p-8 shadow-[0_20px_45px_rgba(15,42,102,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--blue)]">
              Why this matters
            </p>
            <p className="mt-4 text-lg leading-8 text-[var(--muted-foreground)]">
              Different organizations carry different language, trust concerns,
              and budget realities. We keep the tone, tools, and structure
              aligned with that reality.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex h-12 w-full items-center justify-center rounded-full bg-[var(--navy)] px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              Start a Conversation
            </Link>
          </aside>
        </section>
      </div>
    </main>
  );
}
