"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { industries, processSteps, services } from "@/content/site";
import { BackgroundBeams } from "@/components/ui/background-beams";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const accentColor = (accent: string) =>
  accent === "teal" ? "var(--teal)" : "var(--blue)";

const accentBg = (accent: string) =>
  accent === "teal" ? "rgba(25,153,138,0.12)" : "rgba(46,98,230,0.12)";

export default function Home() {
  return (
    <main className="flex flex-col gap-6 px-4 pb-20 pt-6 sm:px-6 lg:px-8">
      {/* ─── HERO ──────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden rounded-[36px] bg-[#07122a]">
        {/* Community photo */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-impact.png"
            alt=""
            fill
            className="object-cover opacity-[0.18] mix-blend-luminosity"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07122a] via-[#07122a]/85 to-[#07122a]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07122a] via-transparent to-transparent" />
        </div>

        {/* Ambient glows */}
        <div className="pointer-events-none absolute left-1/4 top-1/3 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--blue)]/10 blur-[130px]" />
        <div className="pointer-events-none absolute bottom-0 right-1/3 h-[380px] w-[380px] rounded-full bg-[var(--teal)]/8 blur-[110px]" />

        <div className="relative z-10 mx-auto grid w-full max-w-[1440px] items-center gap-12 px-4 py-28 sm:px-6 lg:grid-cols-[1fr_400px] lg:px-8">
          {/* Left: headline */}
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p
              variants={fadeUp}
              className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--teal)]"
            >
              Digital support for community impact
            </motion.p>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="mt-5 text-5xl font-semibold leading-[1.1] tracking-[-0.06em] text-white sm:text-6xl lg:text-[70px]"
            >
              Digital tools for ministries and mission-driven organizations.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-6 max-w-xl text-lg leading-8 text-white/55"
            >
              We partner with nonprofits, churches, and faith-based businesses to
              build with more clarity and less waste — without bloated agency
              pricing or business-first language.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={3}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/submit-project"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--blue)] px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--blue-strong)]"
              >
                Submit a Project
              </Link>
              <Link
                href="/our-process"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-semibold text-white/75 transition hover:-translate-y-0.5 hover:border-white/40 hover:text-white"
              >
                How We Work
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: floating industry cards */}
          <div className="hidden lg:flex lg:flex-col lg:gap-3">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-1 text-xs font-semibold uppercase tracking-[0.28em] text-white/35"
            >
              Who we serve
            </motion.p>
            {industries.map((industry, i) => (
              <motion.div
                key={industry.slug}
                initial={{ opacity: 0, x: 28 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.5 + i * 0.12,
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href={`/industries/${industry.slug}`}
                  className="group block rounded-[20px] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-md transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
                >
                  <p className="font-semibold text-white">{industry.name}</p>
                  <p className="mt-1.5 text-sm leading-6 text-white/50 transition group-hover:text-white/65">
                    {industry.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── POSTURE ───────────────────────────────────────────────── */}
      <section className="overflow-hidden rounded-[36px] bg-[#0c1d3f] py-24">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mb-14 text-center"
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--teal)]"
            >
              Our posture
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="mt-4 font-semibold text-4xl tracking-[-0.02em] text-white sm:text-5xl"
            >
              Ministry-minded, nonprofit-aware,{" "}
              <br className="hidden lg:block" />
              and careful with budget.
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid gap-5 lg:grid-cols-3"
          >
            {[
              {
                color: "var(--blue)",
                gradientFrom: "rgba(46,98,230,0.18)",
                gradientTo: "rgba(46,98,230,0.04)",
                border: "rgba(46,98,230,0.22)",
                heading: "Discount-aware planning",
                body: "We understand what it means to work within a budget that has people — not just projects — riding on it.",
              },
              {
                color: "var(--teal)",
                gradientFrom: "rgba(25,153,138,0.18)",
                gradientTo: "rgba(25,153,138,0.04)",
                border: "rgba(25,153,138,0.22)",
                heading: "Systems for overstretched teams",
                body: "Your team is already stretched. We design systems that reduce admin load, not add to it.",
              },
              {
                color: "var(--blue)",
                gradientFrom: "rgba(46,98,230,0.12)",
                gradientTo: "rgba(25,153,138,0.06)",
                border: "rgba(255,255,255,0.10)",
                heading: "People served, not metrics reported",
                body: "We measure success by the real-world impact on the communities you serve, not vanity numbers.",
              },
            ].map((card, i) => (
              <motion.div
                key={card.heading}
                variants={fadeUp}
                custom={i}
                className="rounded-[28px] border p-8"
                style={{
                  borderColor: card.border,
                  background: `linear-gradient(140deg, ${card.gradientFrom}, ${card.gradientTo})`,
                }}
              >
                <div
                  className="mb-5 flex h-10 w-10 items-center justify-center rounded-full"
                  style={{ background: `${card.color}22` }}
                >
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                    <path
                      d="M3 9L6.5 12.5L14 5"
                      stroke={card.color}
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-lg font-semibold leading-7 text-white">
                  {card.heading}
                </p>
                <p className="mt-3 text-sm leading-6 text-white/52">
                  {card.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── WHO WE SERVE ──────────────────────────────────────────── */}
      <section className="overflow-hidden rounded-[36px] bg-[#f4f8ff] py-24">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mb-14 text-center"
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--blue)]"
            >
              Who we serve
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="mt-4 font-semibold text-4xl tracking-[-0.02em] text-[var(--navy)] sm:text-5xl"
            >
              Built around organizations making{" "}
              <br className="hidden lg:block" />
              real impact in the community.
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid gap-6 lg:grid-cols-3"
          >
            {industries.map((industry, i) => (
              <motion.div key={industry.slug} variants={fadeUp} custom={i}>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="group flex flex-col overflow-hidden rounded-[28px] border border-[var(--line)] bg-white shadow-[0_18px_42px_rgba(15,42,102,0.07)] transition hover:-translate-y-1 hover:shadow-[0_24px_56px_rgba(15,42,102,0.13)]"
                >
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src="/images/community-support.png"
                      alt={industry.name}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f42]/75 via-[#0d1f42]/20 to-transparent" />
                    <p className="absolute bottom-4 left-5 text-xl font-semibold text-white">
                      {industry.name}
                    </p>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-base leading-7 text-slate-600">
                      {industry.description}
                    </p>
                    <ul className="mt-5 flex-1 space-y-2.5">
                      {industry.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-2.5 text-sm leading-6 text-slate-500"
                        >
                          <svg
                            className="mt-0.5 shrink-0"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <circle
                              cx="8"
                              cy="8"
                              r="7.5"
                              stroke="var(--teal)"
                              strokeOpacity="0.35"
                            />
                            <path
                              d="M5 8.5L7 10.5L11 6"
                              stroke="var(--teal)"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-5 text-sm font-semibold text-[var(--blue)] transition group-hover:text-[var(--blue-strong)]">
                      Learn more →
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── PROCESS (DOT-GRID NETWORK) ────────────────────────────── */}
      <section className="relative overflow-hidden rounded-[36px] bg-[#0c1d3f] py-24">
        {/* Dot grid */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.055]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="dotgrid"
              x="0"
              y="0"
              width="28"
              height="28"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1.5" cy="1.5" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotgrid)" />
        </svg>

        <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mb-16 text-center"
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--teal)]"
            >
              Our process
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="mt-4 font-semibold text-4xl tracking-[-0.02em] text-white sm:text-5xl"
            >
              One clear path. No wasted effort.
            </motion.h2>
          </motion.div>

          <div className="relative grid gap-6 lg:grid-cols-4">
            {/* Connecting line behind cards */}
            <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[44px] hidden h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block" />

            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.14,
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative rounded-[24px] border border-white/[0.09] bg-white/[0.05] p-6 backdrop-blur-sm"
              >
                {/* Node dot on connecting line */}
                <div className="absolute -top-[5px] left-1/2 hidden h-[10px] w-[10px] -translate-x-1/2 rounded-full border border-white/20 bg-[var(--blue)]/60 lg:block" />

                <div className="flex h-12 w-12 items-center justify-center rounded-[14px] border border-[var(--blue)]/25 bg-[var(--blue)]/15">
                  <span className="text-sm font-bold tabular-nums text-[var(--blue)]">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-base font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/50">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12 text-center"
          >
            <Link
              href="/our-process"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-semibold text-white/75 transition hover:-translate-y-0.5 hover:border-white/40 hover:text-white"
            >
              Explore Our Full Process
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── SERVICES ──────────────────────────────────────────────── */}
      <section className="overflow-hidden rounded-[36px] bg-white py-24">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.25fr]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
            >
              <motion.p
                variants={fadeUp}
                className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--blue)]"
              >
                Services
              </motion.p>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="mt-4 font-semibold text-4xl tracking-[-0.02em] text-[var(--navy)] sm:text-5xl"
              >
                Practical digital work for
                <br className="hidden lg:block" /> mission-driven teams.
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={2}
                className="mt-5 text-lg leading-8 text-slate-500"
              >
                We focus on helping organizations achieve their vision without
                gimmicks, unnecessary cost, or overcomplicated tools.
              </motion.p>
              <motion.div variants={fadeUp} custom={3} className="mt-8">
                <Link
                  href="/services/workflow-automation"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--navy)] px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                >
                  View All Services
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="space-y-3"
            >
              {services.map((service, i) => (
                <motion.div
                  key={service.slug}
                  variants={fadeUp}
                  custom={i}
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex items-start gap-4 rounded-[22px] border border-[var(--line)] bg-[var(--panel)] p-5 transition hover:-translate-y-0.5 hover:border-[var(--line-strong)] hover:bg-white hover:shadow-[0_12px_32px_rgba(15,42,102,0.08)]"
                  >
                    <div
                      className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-[12px]"
                      style={{ background: accentBg(service.accent) }}
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                      >
                        <path
                          d="M2.5 8L5.5 11L12.5 4.5"
                          stroke={accentColor(service.accent)}
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-[var(--navy)]">
                        {service.name}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {service.eyebrow}
                      </p>
                    </div>
                    <svg
                      className="mt-1 shrink-0 text-[var(--blue)] opacity-0 transition group-hover:opacity-100"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                    >
                      <path
                        d="M2.5 7.5H12.5M9 4L12.5 7.5L9 11"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── GRANTS CTA ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-[36px] bg-[#07122a] py-28">
        <BackgroundBeams className="opacity-35" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--blue)]/12 blur-[110px]" />

        <div className="relative z-10 mx-auto max-w-2xl px-4 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--teal)]"
          >
            Grants &amp; project support
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-semibold text-4xl tracking-[-0.02em] text-white sm:text-5xl"
          >
            Applying for a grant or submitting a project?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-lg leading-8 text-white/55"
          >
            Tell us what you are building, what challenges you are facing, and
            whether you want to explore grant opportunities for the work.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/submit-project"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--blue)] px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--blue-strong)]"
            >
              Submit a Project
            </Link>
            <Link
              href="/grant"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-semibold text-white/75 transition hover:-translate-y-0.5 hover:border-white/40 hover:text-white"
            >
              Learn About Grants
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
