import Link from "next/link";
import { PageHero } from "@/components/page-hero";

const team = [
  {
    initials: "EJ",
    name: "Eric Jaffe",
    role: "Managing Partner",
    bio: "Pastor, technology leader, and founder of Digital Missions Project. Eric stepped away from pastoral leadership and his managed IT services business to dedicate his life to serving others through ministry, practical technology, and mission-driven support.",
  },
  {
    initials: "TM",
    name: "Tyler Miller",
    role: "Partner",
    bio: "Administrative, process, and systems builder who helps organizations get things done. Tyler helps shape discovery, structure projects, and create practical solutions that save real time for teams doing meaningful work.",
  },
  {
    initials: "JB",
    name: "Joey Bushe",
    role: "Senior Business Analyst",
    bio: "Process-minded strategist with deep experience organizing teams, clarifying workflows, and helping turn vision into practical execution. Joey helps build the systems that support steady, sustainable impact.",
  },
];

export default function AboutPage() {
  return (
    <main className="px-4 pb-20 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8">
        <PageHero
          eyebrow="About"
          title="Technology in service of people, mission, and meaningful impact."
          description="Digital Missions Project exists because we saw a real need to help nonprofits, churches, and faith-based businesses thrive, strengthen their work, and continue impacting more people."
        />

        <section className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
          <article className="rounded-[30px] border border-[var(--line)] bg-white/92 p-8 shadow-[0_18px_42px_rgba(15,42,102,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--blue)]">
              Our Story
            </p>
            <div className="mt-6 grid gap-5 text-lg leading-8 text-[var(--muted)]">
              <p>
                Digital Missions Project grew out of a conviction that
                nonprofits, churches, and faith-based businesses should have
                access to strong digital support without being pushed into
                gimmicks, unnecessary complexity, or cost structures that work
                against the mission.
              </p>
              <p>
                Eric Jaffe, our founder, spent years serving both as a pastor
                and as the owner of a managed IT services provider. Over time,
                those experiences made one thing clear: many mission-driven
                organizations were trying to do deeply important work but did
                not have the systems, tools, or support they needed to move
                forward well.
              </p>
              <p>
                Eric eventually retired from both roles to dedicate his life
                more fully to serving others through ministry work for the least
                of these through{" "}
                <a
                  href="https://www.4lot.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[var(--blue)]"
                >
                  4LOT
                </a>{" "}
                and through this digital expression of that same heart:
                leveraging technology to make a real difference in the lives of
                others.
              </p>
              <p>
                That is the spirit behind Digital Missions Project. We focus on
                helping organizations clarify what they need, build what will
                actually help, and use technology in ways that strengthen their
                ability to serve people.
              </p>
              <p>
                Our goal is not to create dependency. It is to equip teams,
                support leaders, and build systems that allow organizations to
                keep moving forward with greater clarity, efficiency, and
                confidence.
              </p>
            </div>
          </article>

          <aside className="rounded-[30px] border border-[var(--line)] bg-[linear-gradient(160deg,_rgba(30,61,129,0.98),_rgba(45,88,181,0.95))] p-8 text-white shadow-[0_25px_60px_rgba(15,45,105,0.28)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/65">
              What drives us
            </p>
            <div className="mt-6 grid gap-4">
              {[
                "Help mission-driven organizations reach and serve more people",
                "Use technology as a tool for stewardship and impact",
                "Build systems that support ministry, not distract from it",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[22px] border border-white/12 bg-white/10 px-4 py-4 text-base leading-7 text-white/84"
                >
                  {item}
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[var(--navy)] transition hover:-translate-y-0.5"
            >
              Start a Conversation
            </Link>
          </aside>
        </section>

        <section className="pt-4">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--blue)]">
              Our Team
            </p>
            <h2 className="mt-4 text-5xl font-semibold tracking-[-0.06em] text-[var(--navy)]">
              Meet the Team
            </h2>
          </div>

          <div className="mt-10 grid gap-6 xl:grid-cols-3">
            {team.map((member) => (
              <article
                key={member.name}
                className="rounded-[30px] bg-[linear-gradient(180deg,_#274471,_#2f4b78)] px-8 py-10 text-center text-white shadow-[0_24px_55px_rgba(21,44,94,0.22)]"
              >
                <div className="mx-auto flex h-[8.5rem] w-[8.5rem] items-center justify-center rounded-full bg-[var(--blue)] text-4xl font-semibold">
                  {member.initials}
                </div>
                <h3 className="mt-8 text-3xl font-semibold tracking-[-0.04em]">
                  {member.name}
                </h3>
                <p className="mt-3 text-2xl font-semibold text-[#35d7c1]">
                  {member.role}
                </p>
                <p className="mx-auto mt-8 max-w-md text-[1.45rem] leading-10 text-white/82">
                  {member.bio}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
