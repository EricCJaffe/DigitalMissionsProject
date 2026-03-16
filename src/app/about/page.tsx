import { PageHero } from "@/components/page-hero";

export default function AboutPage() {
  return (
    <main className="px-4 pb-20 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8">
        <PageHero
          eyebrow="About"
          title="A digital partner for organizations trying to serve people well."
          description="Digital Missions Project is built around helping nonprofits, churches, and faith-based businesses use digital tools in ways that are practical, efficient, and aligned with the work they are called to do."
        />

        <section className="rounded-[30px] border border-[var(--line)] bg-white/92 p-8 shadow-[0_18px_42px_rgba(15,42,102,0.08)]">
          <p className="max-w-4xl text-lg leading-8 text-[var(--muted)]">
            We want the site to speak like a real partner, not a generic
            consultancy. That means stronger emphasis on service, stewardship,
            and helping organizations achieve their vision in the communities
            they care about.
          </p>
        </section>
      </div>
    </main>
  );
}
