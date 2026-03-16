import { PageHero } from "@/components/page-hero";
import { processSteps } from "@/content/site";

export default function OurProcessPage() {
  return (
    <main className="px-4 pb-20 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8">
        <PageHero
          eyebrow="Our process"
          title="A simpler process that keeps the mission in view."
          description="We work with organizations that need digital clarity, not extra noise. The process is built to keep momentum high and waste low."
        />

        <section className="grid gap-4">
          {processSteps.map((step, index) => (
            <article
              key={step.title}
              className="grid gap-4 rounded-[28px] border border-[var(--line)] bg-white/92 p-8 shadow-[0_18px_42px_rgba(15,42,102,0.08)] md:grid-cols-[auto_1fr]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--blue)] text-base font-semibold text-white">
                0{index + 1}
              </div>
              <div>
                <h2 className="text-3xl font-semibold tracking-[-0.05em] text-[var(--navy)]">
                  {step.title}
                </h2>
                <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--muted)]">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
