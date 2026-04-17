"use client";

import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  type MotionValue,
} from "motion/react";
import { useRef } from "react";
import { industries, processSteps, services } from "@/content/site";
import { BackgroundBeams } from "@/components/ui/background-beams";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.65, ease: EASE },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const wordReveal = {
  hidden: { opacity: 0, y: "60%" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.045, duration: 0.8, ease: EASE },
  }),
};

function AnimatedHeadline({ text, accent }: { text: string; accent?: string }) {
  const words = text.split(" ");
  return (
    <span className="inline-block">
      {words.map((word, i) => {
        const isAccent = accent && word.toLowerCase().includes(accent.toLowerCase());
        return (
          <span
            key={`${word}-${i}`}
            className="inline-block overflow-hidden align-bottom"
            style={{ marginRight: "0.28em" }}
          >
            <motion.span
              custom={i}
              variants={wordReveal}
              className={
                isAccent
                  ? "inline-block bg-gradient-to-r from-[var(--teal)] via-[#4fc4b4] to-[var(--blue)] bg-clip-text font-serif italic text-transparent"
                  : "inline-block"
              }
              style={{ fontFamily: isAccent ? "var(--font-serif)" : undefined }}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
}

function TiltCard({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 180, damping: 18 });
  const rY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 180, damping: 18 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        x.set((e.clientX - r.left) / r.width - 0.5);
        y.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX: rX, rotateY: rY, transformStyle: "preserve-3d", ...style }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [0, distance]);
}

const accentColor = (accent: string) =>
  accent === "teal" ? "var(--teal)" : "var(--blue)";

const accentBg = (accent: string) =>
  accent === "teal" ? "rgba(25,153,138,0.12)" : "rgba(46,98,230,0.12)";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const spotX = useSpring(mouseX, { stiffness: 120, damping: 22 });
  const spotY = useSpring(mouseY, { stiffness: 120, damping: 22 });
  const orb1X = useTransform(spotX, [0, 1], [-40, 40]);
  const orb1Y = useTransform(spotY, [0, 1], [-30, 30]);
  const orb2X = useTransform(spotX, [0, 1], [30, -30]);
  const orb2Y = useTransform(spotY, [0, 1], [20, -20]);
  const spotlight = useTransform(
    [spotX, spotY] as unknown as MotionValue<number>[],
    ([mx, my]: number[]) =>
      `radial-gradient(600px circle at ${mx * 100}% ${my * 100}%, rgba(46,98,230,0.18), transparent 55%)`,
  );

  const { scrollYProgress } = useScroll();
  const heroShift = useParallax(scrollYProgress, -120);

  return (
    <main className="flex flex-col gap-6 px-4 pb-20 pt-6 sm:px-6 lg:px-8">
      {/* ─── HERO ──────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        onMouseMove={(e) => {
          const r = heroRef.current?.getBoundingClientRect();
          if (!r) return;
          mouseX.set((e.clientX - r.left) / r.width);
          mouseY.set((e.clientY - r.top) / r.height);
        }}
        className="relative flex min-h-[92vh] items-center overflow-hidden rounded-[36px] bg-[#07122a]"
      >
        {/* Community photo with parallax drift */}
        <motion.div style={{ y: heroShift }} className="absolute inset-0">
          <Image
            src="/images/hero-impact.png"
            alt=""
            fill
            className="object-cover opacity-[0.18] mix-blend-luminosity"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07122a] via-[#07122a]/85 to-[#07122a]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07122a] via-transparent to-transparent" />
        </motion.div>

        {/* Mouse-tracked spotlight */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: spotlight }}
        />

        {/* Drifting ambient orbs */}
        <motion.div
          style={{ x: orb1X, y: orb1Y }}
          className="pointer-events-none absolute left-1/4 top-1/3 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--blue)]/12 blur-[130px]"
        />
        <motion.div
          style={{ x: orb2X, y: orb2Y }}
          className="pointer-events-none absolute bottom-0 right-1/3 h-[380px] w-[380px] rounded-full bg-[var(--teal)]/10 blur-[110px]"
        />

        {/* Subtle grid overlay */}
        <svg
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.035]"
        >
          <defs>
            <pattern id="hero-grid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>

        <div className="relative z-10 mx-auto grid w-full max-w-[1440px] items-center gap-12 px-4 py-28 sm:px-6 lg:grid-cols-[1fr_400px] lg:px-8">
          {/* Left: headline */}
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--teal)] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--teal)]" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--teal)]">
                Digital support for community impact
              </span>
            </motion.div>

            <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-[-0.055em] text-white sm:text-6xl lg:text-[72px]">
              <motion.span
                initial="hidden"
                animate="visible"
                variants={stagger}
                className="block"
              >
                <AnimatedHeadline text="Digital tools for ministries and" />
              </motion.span>
              <motion.span
                initial="hidden"
                animate="visible"
                variants={stagger}
                className="mt-1 block"
              >
                <AnimatedHeadline
                  text="mission-driven organizations."
                  accent="mission-driven"
                />
              </motion.span>
            </h1>

            <motion.p
              variants={fadeUp}
              custom={6}
              initial="hidden"
              animate="visible"
              className="mt-6 max-w-xl text-lg leading-8 text-white/60"
            >
              We partner with nonprofits, churches, and faith-based businesses to
              build with more clarity and less waste — without bloated agency
              pricing or business-first language.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={7}
              initial="hidden"
              animate="visible"
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/submit-project"
                className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-[var(--blue)] px-6 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(46,98,230,0.35)] transition hover:-translate-y-0.5 hover:bg-[var(--blue-strong)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Submit a Project
                  <svg
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M2.5 7h9M7.5 3l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </Link>
              <Link
                href="/our-process"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-semibold text-white/75 transition hover:-translate-y-0.5 hover:border-white/40 hover:text-white"
              >
                How We Work
              </Link>
            </motion.div>

            {/* Trust row */}
            <motion.div
              variants={fadeUp}
              custom={8}
              initial="hidden"
              animate="visible"
              className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-white/45"
            >
              {["Nonprofit-aware pricing", "Grant-friendly", "Lean & maintainable"].map(
                (tag) => (
                  <span key={tag} className="flex items-center gap-2">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2.5 6.5L5 9l4.5-5.5"
                        stroke="var(--teal)"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {tag}
                  </span>
                ),
              )}
            </motion.div>
          </motion.div>

          {/* Right: floating industry cards */}
          <div className="hidden lg:flex lg:flex-col lg:gap-3">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mb-1 text-xs font-semibold uppercase tracking-[0.28em] text-white/35"
            >
              Who we serve
            </motion.p>
            {industries.map((industry, i) => (
              <motion.div
                key={industry.slug}
                initial={{ opacity: 0, x: 28 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.12, duration: 0.7, ease: EASE }}
                whileHover={{ x: -4 }}
              >
                <Link
                  href={`/industries/${industry.slug}`}
                  className="group relative block overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-md transition hover:border-white/25 hover:bg-white/[0.09]"
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <p className="font-semibold text-white">{industry.name}</p>
                      <p className="mt-1.5 text-sm leading-6 text-white/50 transition group-hover:text-white/70">
                        {industry.description}
                      </p>
                    </div>
                    <svg
                      className="mt-1 shrink-0 text-white/30 transition group-hover:translate-x-1 group-hover:text-[var(--teal)]"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/35">
            Scroll
          </span>
          <div className="relative h-10 w-[1px] overflow-hidden bg-white/10">
            <motion.div
              className="absolute inset-x-0 top-0 h-3 bg-gradient-to-b from-[var(--teal)] to-transparent"
              animate={{ y: ["-100%", "400%"] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
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
                style={{ perspective: 1000 }}
              >
                <TiltCard
                  className="group relative h-full overflow-hidden rounded-[28px] border p-8"
                  style={{
                    borderColor: card.border,
                    background: `linear-gradient(140deg, ${card.gradientFrom}, ${card.gradientTo})`,
                  }}
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -top-1/2 left-1/2 h-[200%] w-[200%] -translate-x-1/2 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(circle at center, ${card.color}18, transparent 55%)`,
                    }}
                  />
                  <div className="relative">
                    <motion.div
                      className="mb-5 flex h-11 w-11 items-center justify-center rounded-full"
                      style={{ background: `${card.color}22` }}
                      whileHover={{ scale: 1.08, rotate: 6 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                      <svg width="18" height="18" viewBox="0 0 17 17" fill="none">
                        <path
                          d="M3 9L6.5 12.5L14 5"
                          stroke={card.color}
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.div>
                    <p className="text-lg font-semibold leading-7 text-white">
                      {card.heading}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-white/55">{card.body}</p>
                  </div>
                </TiltCard>
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
            {/* Animated drawn-in connecting line */}
            <svg
              aria-hidden
              className="pointer-events-none absolute left-0 right-0 top-[44px] hidden h-[2px] w-full lg:block"
              viewBox="0 0 100 1"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="process-line" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                  <stop offset="20%" stopColor="rgba(46,98,230,0.5)" />
                  <stop offset="50%" stopColor="rgba(25,153,138,0.6)" />
                  <stop offset="80%" stopColor="rgba(46,98,230,0.5)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </linearGradient>
              </defs>
              <motion.line
                x1="12.5"
                x2="87.5"
                y1="0.5"
                y2="0.5"
                stroke="url(#process-line)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1.8, ease: EASE }}
              />
            </svg>

            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.14, duration: 0.65, ease: EASE }}
                className="group relative rounded-[24px] border border-white/[0.09] bg-white/[0.05] p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08]"
              >
                {/* Node dot on connecting line with pulse */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.18, duration: 0.5, ease: EASE }}
                  className="absolute -top-[6px] left-1/2 hidden h-3 w-3 -translate-x-1/2 rounded-full border border-white/25 bg-[var(--blue)] shadow-[0_0_16px_rgba(46,98,230,0.6)] lg:block"
                >
                  <span className="absolute inset-0 animate-ping rounded-full bg-[var(--blue)] opacity-50" />
                </motion.div>

                <div className="flex h-12 w-12 items-center justify-center rounded-[14px] border border-[var(--blue)]/25 bg-[var(--blue)]/15 transition group-hover:border-[var(--blue)]/50 group-hover:bg-[var(--blue)]/25">
                  <span className="text-sm font-bold tabular-nums text-[var(--blue)]">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-base font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/55">
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
                <motion.div key={service.slug} variants={fadeUp} custom={i}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group relative flex items-start gap-4 overflow-hidden rounded-[22px] border border-[var(--line)] bg-[var(--panel)] p-5 transition hover:-translate-y-0.5 hover:border-[var(--line-strong)] hover:bg-white hover:shadow-[0_16px_40px_rgba(15,42,102,0.1)]"
                  >
                    {/* Shimmer sweep on hover */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100"
                    />
                    {/* Left accent bar */}
                    <span
                      aria-hidden
                      className="absolute inset-y-3 left-0 w-[3px] origin-top scale-y-0 rounded-r-full transition-transform duration-500 group-hover:scale-y-100"
                      style={{ background: accentColor(service.accent) }}
                    />
                    <div
                      className="relative mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] transition group-hover:scale-105"
                      style={{ background: accentBg(service.accent) }}
                    >
                      <svg width="16" height="16" viewBox="0 0 15 15" fill="none">
                        <path
                          d="M2.5 8L5.5 11L12.5 4.5"
                          stroke={accentColor(service.accent)}
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="relative min-w-0 flex-1">
                      <p className="font-semibold text-[var(--navy)]">
                        {service.name}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {service.eyebrow}
                      </p>
                    </div>
                    <span className="relative mt-1 flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-full bg-transparent transition group-hover:bg-[var(--blue)]/10">
                      <svg
                        className="-translate-x-3 text-[var(--blue)] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                      >
                        <path
                          d="M2.5 7.5H12.5M9 4L12.5 7.5L9 11"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
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
              className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-[var(--blue)] px-6 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(46,98,230,0.4)] transition hover:-translate-y-0.5 hover:bg-[var(--blue-strong)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Submit a Project
                <svg
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M2.5 7h9M7.5 3l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
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
