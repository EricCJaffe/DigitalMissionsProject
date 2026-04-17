"use client";

import Link from "next/link";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
  useScroll,
  useInView,
  animate,
  type MotionValue,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import {
  industries,
  processSteps,
  services,
  homeStats,
  homeTestimonials,
  homeImpact,
  homeFaq,
} from "@/content/site";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

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

function Counter({
  to,
  suffix = "",
  duration = 1.8,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: EASE,
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, to, duration]);

  const formatted =
    to >= 1000 ? Math.round(display).toLocaleString() : Math.round(display).toString();

  return (
    <span ref={ref} className="tabular-nums">
      {formatted}
      {suffix}
    </span>
  );
}

function RotatingWord({ words, interval = 2200 }: { words: string[]; interval?: number }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <span className="relative inline-flex h-[1.2em] items-baseline overflow-hidden align-bottom">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="inline-block whitespace-nowrap bg-gradient-to-r from-[var(--teal)] via-[#4fc4b4] to-[var(--blue)] bg-clip-text font-serif italic text-transparent"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function FaqItem({ q, a, i }: { q: string; a: string; i: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: i * 0.06, duration: 0.5, ease: EASE }}
      className={
        "overflow-hidden rounded-[22px] border transition-colors " +
        (open
          ? "border-[var(--line-strong)] bg-white shadow-[0_12px_40px_rgba(15,42,102,0.08)]"
          : "border-[var(--line)] bg-[var(--panel)] hover:border-[var(--line-strong)]")
      }
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-[var(--navy)] sm:text-lg">{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3, ease: EASE }}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--blue)]/10 text-[var(--blue)]"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M7 1v12M1 7h12"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <p className="px-6 pb-6 text-base leading-7 text-slate-600">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
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
  const orb1X = useTransform(spotX, [0, 1], [-60, 60]);
  const orb1Y = useTransform(spotY, [0, 1], [-40, 40]);
  const orb2X = useTransform(spotX, [0, 1], [50, -50]);
  const orb2Y = useTransform(spotY, [0, 1], [30, -30]);
  const spotPctX = useTransform(spotX, (v) => v * 100);
  const spotPctY = useTransform(spotY, (v) => v * 100);
  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${spotPctX}% ${spotPctY}%, rgba(46,98,230,0.22), transparent 55%)`;

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

        {/* Drifting ambient orbs with idle float + mouse reactivity */}
        <motion.div
          style={{ x: orb1X, y: orb1Y }}
          className="pointer-events-none absolute left-1/4 top-1/3 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2"
        >
          <motion.div
            className="h-full w-full rounded-full bg-[var(--blue)]/20 blur-[130px]"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        <motion.div
          style={{ x: orb2X, y: orb2Y }}
          className="pointer-events-none absolute bottom-0 right-1/3 h-[380px] w-[380px]"
        >
          <motion.div
            className="h-full w-full rounded-full bg-[var(--teal)]/18 blur-[110px]"
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.6, 0.9, 0.6],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          />
        </motion.div>
        {/* Third roaming orb */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute right-[12%] top-[18%] h-[260px] w-[260px] rounded-full bg-[#6a8cff]/15 blur-[100px]"
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -30, 20, 0],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
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
              We partner with{" "}
              <RotatingWord
                words={["nonprofits", "churches", "faith-based businesses", "ministries"]}
              />{" "}
              to build with more clarity and less waste — without bloated agency
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

            {/* Mobile-only industry chips (desktop shows the right-column cards instead) */}
            <motion.div
              variants={fadeUp}
              custom={9}
              initial="hidden"
              animate="visible"
              className="mt-10 -mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 lg:hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {industries.map((industry) => (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="snap-start shrink-0 rounded-2xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur-md transition active:scale-95"
                  style={{ minWidth: "240px" }}
                >
                  <p className="text-sm font-semibold text-white">{industry.name}</p>
                  <p className="mt-1 line-clamp-2 text-xs leading-5 text-white/55">
                    {industry.description}
                  </p>
                </Link>
              ))}
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
                animate={{
                  opacity: 1,
                  x: 0,
                  y: [0, -4, 0],
                }}
                transition={{
                  opacity: { delay: 0.6 + i * 0.12, duration: 0.7, ease: EASE },
                  x: { delay: 0.6 + i * 0.12, duration: 0.7, ease: EASE },
                  y: {
                    delay: 1.2 + i * 0.3,
                    duration: 4.5 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                whileHover={{ x: -6, scale: 1.02 }}
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

      {/* ─── STATS (impact numbers) ────────────────────────────────── */}
      <section className="overflow-hidden rounded-[36px] border border-[var(--line)] bg-white py-10 sm:py-12">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 sm:divide-x sm:divide-[var(--line)]"
          >
            {homeStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                custom={i}
                className="px-0 text-center sm:px-6"
              >
                <p className="bg-gradient-to-br from-[var(--navy)] via-[var(--blue)] to-[var(--teal)] bg-clip-text text-4xl font-semibold tracking-[-0.035em] text-transparent sm:text-5xl">
                  <Counter to={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-xs font-medium leading-5 text-slate-500 sm:text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
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

      {/* ─── IMPACT / WHAT WE'VE BUILT (BENTO) ─────────────────────── */}
      <section className="overflow-hidden rounded-[36px] bg-[#f4f8ff] py-24">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
          >
            <div>
              <motion.p
                variants={fadeUp}
                className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--blue)]"
              >
                What we&apos;ve built
              </motion.p>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.02em] text-[var(--navy)] sm:text-5xl"
              >
                Concrete work, not{" "}
                <span className="bg-gradient-to-r from-[var(--blue)] to-[var(--teal)] bg-clip-text font-serif italic text-transparent" style={{ fontFamily: "var(--font-serif)" }}>
                  abstractions
                </span>
                .
              </motion.h2>
            </div>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="max-w-sm text-base leading-7 text-slate-500"
            >
              Representative examples from recent work with ministries and nonprofits. Outcomes
              based on self-reported improvements after launch.
            </motion.p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-4 md:grid-rows-2">
            {homeImpact.map((item, i) => {
              const color = accentColor(item.accent);
              const bg = accentBg(item.accent);
              const spanClass =
                item.span === "wide"
                  ? "md:col-span-2"
                  : item.span === "tall"
                  ? "md:col-span-2 md:row-span-2"
                  : "md:col-span-1";
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.08, duration: 0.6, ease: EASE }}
                  whileHover={{ y: -4 }}
                  className={
                    "group relative flex flex-col justify-between overflow-hidden rounded-[26px] border border-[var(--line)] bg-white p-7 shadow-[0_14px_36px_rgba(15,42,102,0.06)] transition-shadow hover:shadow-[0_22px_54px_rgba(15,42,102,0.12)] " +
                    spanClass
                  }
                >
                  {/* Accent glow on hover */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-16 -top-16 h-60 w-60 rounded-full opacity-0 blur-[80px] transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: color }}
                  />
                  {/* Dotted pattern */}
                  <svg
                    aria-hidden
                    className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.04]"
                  >
                    <defs>
                      <pattern
                        id={`impact-${i}`}
                        x="0"
                        y="0"
                        width="22"
                        height="22"
                        patternUnits="userSpaceOnUse"
                      >
                        <circle cx="1" cy="1" r="1" fill={color} />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#impact-${i})`} />
                  </svg>

                  <div className="relative">
                    <span
                      className="inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em]"
                      style={{ background: bg, color }}
                    >
                      {item.tag}
                    </span>
                    <h3 className="mt-5 text-xl font-semibold tracking-[-0.015em] text-[var(--navy)] sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">
                      {item.blurb}
                    </p>
                  </div>

                  {item.metric && (
                    <div className="relative mt-6 flex items-center gap-3 border-t border-[var(--line)] pt-4">
                      <span
                        aria-hidden
                        className="flex h-7 w-7 items-center justify-center rounded-full"
                        style={{ background: bg }}
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path
                            d="M2 9l3-3 2 2 3-5"
                            stroke={color}
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8 2h3v3"
                            stroke={color}
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span
                        className="text-sm font-semibold tracking-[-0.01em]"
                        style={{ color }}
                      >
                        {item.metric}
                      </span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
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
            {/* Mobile vertical connector (drawn-in on scroll) */}
            <svg
              aria-hidden
              className="pointer-events-none absolute left-[36px] top-6 bottom-6 w-[2px] lg:hidden"
              viewBox="0 0 1 100"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="process-line-v" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                  <stop offset="15%" stopColor="rgba(46,98,230,0.5)" />
                  <stop offset="85%" stopColor="rgba(25,153,138,0.5)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </linearGradient>
              </defs>
              <motion.line
                x1="0.5"
                x2="0.5"
                y1="0"
                y2="100"
                stroke="url(#process-line-v)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 1.6, ease: EASE }}
              />
            </svg>

            {/* Animated drawn-in connecting line (desktop) */}
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
              {/* Decorative image with duotone treatment */}
              <motion.div
                variants={fadeUp}
                className="relative mb-8 aspect-[5/4] overflow-hidden rounded-[24px] border border-[var(--line)]"
              >
                <Image
                  src="/images/service-collaboration.png"
                  alt="Team collaborating"
                  fill
                  className="object-cover"
                />
                {/* Duotone overlay using brand colors */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--navy)]/35 via-transparent to-[var(--teal)]/25 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/70 via-transparent to-transparent" />
                {/* Float chip */}
                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--teal)]" />
                  In practice
                </div>
              </motion.div>

              <motion.p
                variants={fadeUp}
                custom={1}
                className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--blue)]"
              >
                Services
              </motion.p>
              <motion.h2
                variants={fadeUp}
                custom={2}
                className="mt-4 font-semibold text-4xl tracking-[-0.02em] text-[var(--navy)] sm:text-5xl"
              >
                Practical digital work for
                <br className="hidden lg:block" /> mission-driven teams.
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={3}
                className="mt-5 text-lg leading-8 text-slate-500"
              >
                We focus on helping organizations achieve their vision without
                gimmicks, unnecessary cost, or overcomplicated tools.
              </motion.p>
              <motion.div variants={fadeUp} custom={4} className="mt-8">
                <Link
                  href="/services/workflow-automation"
                  className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-[var(--navy)] px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View All Services
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
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
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

      {/* ─── TESTIMONIALS ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-[#0c1d3f] via-[#0b1b3a] to-[#07122a] py-24">
        {/* Soft orbs */}
        <div className="pointer-events-none absolute -left-20 top-0 h-[360px] w-[360px] rounded-full bg-[var(--blue)]/15 blur-[120px]" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-[320px] w-[320px] rounded-full bg-[var(--teal)]/12 blur-[110px]" />

        <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mb-14 max-w-3xl text-center mx-auto"
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--teal)]"
            >
              Partner voices
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="mt-4 text-4xl font-semibold tracking-[-0.02em] text-white sm:text-5xl"
            >
              Teams we&apos;ve worked alongside.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-5 text-base leading-7 text-white/55 sm:text-lg sm:leading-8"
            >
              Anonymized quotes from ministry and nonprofit leaders. We&apos;re happy to connect
              you with active partners on request.
            </motion.p>
          </motion.div>
        </div>

        <div className="relative z-10 dark mx-auto">
          <InfiniteMovingCards
            items={homeTestimonials}
            direction="left"
            speed="slow"
            pauseOnHover
            className="mx-auto"
          />
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────────── */}
      <section className="overflow-hidden rounded-[36px] bg-white py-24">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mb-12 grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-end"
          >
            <div>
              <motion.p
                variants={fadeUp}
                className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--blue)]"
              >
                Common questions
              </motion.p>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="mt-4 text-4xl font-semibold tracking-[-0.02em] text-[var(--navy)] sm:text-5xl"
              >
                Practical answers,{" "}
                <span
                  className="bg-gradient-to-r from-[var(--blue)] to-[var(--teal)] bg-clip-text font-serif italic text-transparent"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  up front
                </span>
                .
              </motion.h2>
            </div>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-base leading-7 text-slate-500 sm:text-lg sm:leading-8"
            >
              The things every organization asks us in their first call. If yours isn&apos;t
              here, just submit a project and we&apos;ll get into it.
            </motion.p>
          </motion.div>

          <div className="flex flex-col gap-3">
            {homeFaq.map((item, i) => (
              <FaqItem key={item.q} q={item.q} a={item.a} i={i} />
            ))}
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
