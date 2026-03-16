import { PageHero } from "@/components/page-hero";

export default function ContactPage() {
  return (
    <main className="px-4 pb-20 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8">
        <PageHero
          eyebrow="Contact"
          title="Let’s talk through the mission, the constraints, and what would actually help."
          description="This contact page can later be connected to your real scheduler or form, but it now has a dedicated route in the navigation instead of living as a single homepage section."
        />

        <section className="rounded-[30px] border border-[var(--line)] bg-white/92 p-8 shadow-[0_18px_42px_rgba(15,42,102,0.08)]">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[22px] border border-[var(--line)] bg-[var(--panel)] px-5 py-5">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--blue)]">
                Email
              </p>
              <p className="mt-3 text-lg text-[var(--navy)]">
                hello@digitalmissionsproject.com
              </p>
            </div>
            <div className="rounded-[22px] border border-[var(--line)] bg-[var(--panel)] px-5 py-5">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--blue)]">
                Next Integration
              </p>
              <p className="mt-3 text-lg text-[var(--navy)]">
                Scheduler or contact form can plug in here next.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
