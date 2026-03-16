import { PageHero } from "@/components/page-hero";
import { resultHighlights } from "@/content/site";

export default function ResultsPage() {
  return (
    <main className="px-4 pb-20 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8">
        <PageHero
          eyebrow="Results"
          title="Better systems, clearer communication, and stronger follow-through."
          description="This page is positioned for case studies, impact stories, and examples that show how digital stewardship can support community work more effectively."
        />

        <section className="grid gap-6 md:grid-cols-3">
          {resultHighlights.map((item) => (
            <div
              key={item}
              className="rounded-[28px] border border-[var(--line)] bg-white/92 p-8 shadow-[0_18px_42px_rgba(15,42,102,0.08)]"
            >
              <p className="text-xl leading-8 text-[var(--navy)]">{item}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
