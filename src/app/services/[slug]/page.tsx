import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { services } from "@/content/site";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((entry) => entry.slug === slug);

  if (!service) notFound();

  return (
    <main className="px-4 pb-20 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8">
        <PageHero
          eyebrow={service.eyebrow}
          title={service.name}
          description={`${service.description} ${service.emphasis}`}
        />

        <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px]">
          <div className="rounded-[30px] border border-[var(--line)] bg-white/92 p-8 shadow-[0_18px_42px_rgba(15,42,102,0.08)]">
            <h2 className="text-3xl font-semibold tracking-[-0.05em] text-[var(--navy)]">
              What this looks like in practice
            </h2>
            <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
              {service.emphasis}
            </p>
            <div className="mt-8 grid gap-4">
              {service.bullets.map((bullet) => (
                <div
                  key={bullet}
                  className="rounded-[22px] border border-[var(--line)] bg-[var(--panel)] px-5 py-5 text-lg leading-8 text-[var(--muted)]"
                >
                  {bullet}
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-[30px] border border-[var(--line)] bg-[linear-gradient(160deg,_rgba(30,61,129,0.98),_rgba(45,88,181,0.95))] p-8 text-white shadow-[0_25px_60px_rgba(15,45,105,0.28)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/65">
              Outcomes
            </p>
            <div className="mt-5 grid gap-4">
              {service.outcomes.map((outcome) => (
                <div
                  key={outcome}
                  className="rounded-[22px] border border-white/12 bg-white/10 px-4 py-4 text-base leading-7 text-white/84"
                >
                  {outcome}
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="mt-8 inline-flex h-12 w-full items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-[var(--navy)] transition hover:-translate-y-0.5"
            >
              Talk Through This Service
            </Link>
          </aside>
        </section>
      </div>
    </main>
  );
}
