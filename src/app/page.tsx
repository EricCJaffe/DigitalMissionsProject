const services = [
  {
    name: "Workflow Automation",
    description:
      "Mission-ready systems that handle repetitive admin and operations work without dropping the ball.",
    accent: "blue",
    points: [
      "Lead routing and form follow-up",
      "Volunteer, donor, and member workflows",
      "Scheduling, reminders, and reporting",
    ],
    cta: "Explore Automation",
  },
  {
    name: "Custom Apps & Websites",
    description:
      "Digital platforms built around your organization, not boxed into generic templates and disconnected tools.",
    accent: "teal",
    points: [
      "Public-facing sites with clear conversion paths",
      "Private portals for teams and partners",
      "Dashboards, forms, and internal tools",
    ],
    cta: "Explore Custom Builds",
  },
  {
    name: "AI Training & Workshops",
    description:
      "Practical AI enablement that helps your staff move faster, write better, and build confident habits.",
    accent: "blue",
    points: [
      "Team AI workflows and policy guidance",
      "Prompting, research, and content systems",
      "Hands-on sessions for operations and leadership",
    ],
    cta: "Explore AI Training",
  },
  {
    name: "Fractional Digital Strategy",
    description:
      "Senior-level strategic direction for organizations that need momentum, clarity, and better technology decisions.",
    accent: "dark",
    points: [
      "Roadmaps for web, automation, and AI",
      "Vendor and platform decision support",
      "Governance, rollout planning, and prioritization",
    ],
    cta: "Explore Strategy",
  },
] as const;

const navItems = [
  "Services",
  "Industries",
  "Our Process",
  "Results",
  "About",
  "Contact",
];

function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
      <path
        d="M13 2 5.5 13h4.9L9.8 22 18.5 9h-5.1L13 2Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function GridIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
      <path
        d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
      <path
        d="M9 5a3 3 0 0 1 6 0 3 3 0 1 1 2.8 4A3.5 3.5 0 0 1 17 16a3.5 3.5 0 0 1-5 3.2A3.5 3.5 0 0 1 7 16a3.5 3.5 0 0 1-.8-7A3 3 0 0 1 9 5Zm3-3v18"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function CompassIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
      <circle
        cx="12"
        cy="12"
        r="8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="m15.5 8.5-2.5 7-7 2.5 2.5-7 7-2.5Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <circle
        cx="12"
        cy="12"
        r="9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="m8.5 12.5 2.3 2.3 4.7-5.1"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto flex min-h-screen max-w-[1440px] flex-col px-4 pb-20 pt-5 sm:px-6 lg:px-8">
        <header className="animate-fade-in rounded-[30px] border border-[var(--line)] bg-white/92 px-5 py-4 shadow-[0_20px_60px_rgba(15,35,95,0.08)] backdrop-blur md:px-7">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--blue)] text-xl font-bold text-white shadow-[0_12px_30px_rgba(46,98,230,0.35)]">
                D
              </div>
              <div>
                <p className="text-[0.78rem] font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">
                  Digital Missions
                </p>
                <p className="text-2xl font-semibold tracking-[-0.04em] text-[var(--navy)]">
                  Digital Missions Project
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
              <nav className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-3 py-2">
                <ul className="flex flex-wrap items-center justify-center gap-1">
                  {navItems.map((item, index) => (
                    <li key={item}>
                      <a
                        href={`#section-${index + 1}`}
                        className="inline-flex rounded-full px-4 py-2 text-sm font-medium text-[var(--muted)] transition hover:bg-white hover:text-[var(--navy)]"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--blue)] px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--blue-strong)]"
              >
                Book Consultation
              </a>
            </div>
          </div>
        </header>

        <section
          id="section-1"
          className="relative mt-6 overflow-hidden rounded-[36px] border border-[var(--line)] bg-[radial-gradient(circle_at_top_left,_rgba(103,160,255,0.28),_transparent_32%),linear-gradient(135deg,_#f7fbff_0%,_#eef4ff_42%,_#f8fbff_100%)] px-6 py-16 shadow-[0_26px_70px_rgba(16,48,110,0.12)] sm:px-8 lg:px-12"
        >
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,_rgba(24,153,138,0.16),_transparent_58%)]" />
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:items-end">
            <div className="animate-slide-up">
              <p className="mb-4 inline-flex rounded-full border border-[var(--line)] bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--blue)]">
                Strategy, automation, and AI systems
              </p>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-[var(--navy)] sm:text-6xl">
                Build the digital infrastructure your mission actually needs.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
                We design websites, workflows, and AI-enabled systems that help
                teams operate with more clarity, less friction, and stronger
                follow-through.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#services"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--navy)] px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                >
                  Explore Services
                </a>
                <a
                  href="#contact"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[var(--line-strong)] bg-white/85 px-6 text-sm font-semibold text-[var(--navy)] transition hover:-translate-y-0.5"
                >
                  Talk Through Your Project
                </a>
              </div>
            </div>

            <div className="animate-fade-in rounded-[30px] border border-white/70 bg-[linear-gradient(160deg,_rgba(30,61,129,0.98),_rgba(45,88,181,0.95))] p-7 text-white shadow-[0_25px_60px_rgba(15,45,105,0.28)]">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/65">
                Why teams hire us
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {[
                  "Translate vision into systems",
                  "Replace manual busywork with automation",
                  "Equip staff with practical AI workflows",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/10 px-4 py-4 text-sm leading-6 text-white/88"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="mt-12"
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--blue)]">
              Core service lines
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[var(--navy)] sm:text-5xl">
              Stronger structure at the top, sharper presentation everywhere
              else.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
              The layout below follows the grouped-card feel from your
              reference while giving the homepage a more premium and intentional
              first impression.
            </p>
          </div>

          <div className="mt-10 grid gap-6 xl:grid-cols-4">
            {services.map((service, index) => {
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
                <article
                  key={service.name}
                  id={`section-${index + 2}`}
                  className={`animate-slide-up rounded-[30px] border p-8 ${cardClass}`}
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <div
                    className={`flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-[22px] ${iconClass}`}
                  >
                    {index === 0 && <BoltIcon />}
                    {index === 1 && <GridIcon />}
                    {index === 2 && <BrainIcon />}
                    {index === 3 && <CompassIcon />}
                  </div>
                  <h3 className="mt-8 text-[2rem] font-semibold leading-tight tracking-[-0.05em]">
                    {service.name}
                  </h3>
                  <p className={`mt-4 text-lg leading-8 ${copyClass}`}>
                    {service.description}
                  </p>
                  <ul className="mt-8 space-y-4">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className={`mt-1 ${bulletClass}`}>
                          <CheckIcon />
                        </span>
                        <span className={`text-lg leading-8 ${copyClass}`}>
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className={`mt-10 inline-flex h-14 w-full items-center justify-center rounded-2xl text-lg font-semibold transition hover:-translate-y-0.5 ${buttonClass}`}
                  >
                    {service.cta}
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        <section
          id="contact"
          className="mt-12 grid gap-6 rounded-[32px] border border-[var(--line)] bg-[linear-gradient(135deg,_#163474,_#21499f)] px-6 py-10 text-white shadow-[0_26px_70px_rgba(15,35,95,0.24)] lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:px-10"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/70">
              Next step
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
              If this direction feels right, I can turn it into your actual
              content and navigation next.
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-white/78">
              The structure is in place. From here we can swap in your real
              messaging, pages, services, and calls to action instead of the
              generic starter copy.
            </p>
          </div>
          <a
            href="mailto:hello@digitalmissionsproject.com"
            className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[var(--navy)] transition hover:-translate-y-0.5"
          >
            Start the Content Pass
          </a>
        </section>
      </div>
    </main>
  );
}
