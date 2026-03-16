import Link from "next/link";
import type { Service } from "@/content/site";
import { BoltIcon, BrainIcon, CheckIcon, CompassIcon, GridIcon } from "@/components/icons";

function ServiceIcon({ slug }: { slug: string }) {
  if (slug === "workflow-automation") return <BoltIcon />;
  if (slug === "custom-apps-websites") return <GridIcon />;
  if (slug === "ai-training-workshops") return <BrainIcon />;
  return <CompassIcon />;
}

export function ServiceCard({ service }: { service: Service }) {
  const isDark = service.accent === "dark";
  const cardClass = isDark
    ? "border-transparent bg-[linear-gradient(180deg,_#1e3d81,_#2b4d9a)] text-white shadow-[0_28px_65px_rgba(20,49,116,0.35)]"
    : "border-[var(--line)] bg-[linear-gradient(180deg,_rgba(255,255,255,0.95),_rgba(245,249,255,0.92))] text-[var(--foreground)] shadow-[0_20px_45px_rgba(15,42,102,0.08)]";
  const iconClass =
    service.accent === "teal"
      ? "bg-[var(--teal)] text-white"
      : isDark
        ? "bg-white/18 text-white"
        : "bg-[var(--blue)] text-white";
  const buttonClass =
    service.accent === "teal"
      ? "bg-[var(--teal)] text-white hover:bg-[#138678]"
      : isDark
        ? "bg-[var(--teal)] text-white hover:bg-[#138678]"
        : "bg-[var(--blue)] text-white hover:bg-[var(--blue-strong)]";
  const bulletClass = isDark ? "text-[#4fe0cc]" : "text-[var(--blue)]";
  const copyClass = isDark ? "text-white/82" : "text-[var(--muted)]";

  return (
    <article className={`rounded-[30px] border p-8 ${cardClass}`}>
      <div className={`flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-[22px] ${iconClass}`}>
        <ServiceIcon slug={service.slug} />
      </div>
      <p className={`mt-6 text-sm font-semibold uppercase tracking-[0.24em] ${copyClass}`}>
        {service.eyebrow}
      </p>
      <h3 className="mt-4 text-[2rem] font-semibold leading-tight tracking-[-0.05em]">
        {service.name}
      </h3>
      <p className={`mt-4 text-lg leading-8 ${copyClass}`}>{service.description}</p>
      <ul className="mt-8 space-y-4">
        {service.bullets.map((point) => (
          <li key={point} className="flex items-start gap-3">
            <span className={`mt-1 ${bulletClass}`}>
              <CheckIcon />
            </span>
            <span className={`text-lg leading-8 ${copyClass}`}>{point}</span>
          </li>
        ))}
      </ul>
      <Link
        href={`/services/${service.slug}`}
        className={`mt-10 inline-flex h-14 w-full items-center justify-center rounded-2xl text-lg font-semibold transition hover:-translate-y-0.5 ${buttonClass}`}
      >
        Explore {service.shortName}
      </Link>
    </article>
  );
}
