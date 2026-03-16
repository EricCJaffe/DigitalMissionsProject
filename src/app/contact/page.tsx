import { PageHero } from "@/components/page-hero";

export default function ContactPage() {
  return (
    <main className="px-4 pb-20 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8">
        <PageHero
          eyebrow="Contact"
          title="Let’s talk through the mission, the constraints, and what would actually help."
          description="If you are serving a nonprofit, church, or faith-based organization and want clearer digital support, this page now points directly to your scheduler and primary contact details."
        />

        <section className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="grid gap-6">
            <a
              href="https://outlook.office365.com/book/EricsSchedule@NETORGFT11347269.onmicrosoft.com/?ismsaljsauthenabled=true"
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-[30px] border border-[var(--line)] bg-[linear-gradient(145deg,_#173879,_#2854ab)] p-8 text-white shadow-[0_25px_60px_rgba(15,45,105,0.28)] transition hover:-translate-y-1"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/65">
                    Schedule time
                  </p>
                  <h2 className="mt-4 max-w-md text-3xl font-semibold tracking-[-0.05em]">
                    Book directly on Eric&apos;s calendar.
                  </h2>
                  <p className="mt-4 max-w-lg text-lg leading-8 text-white/82">
                    Use the scheduler for a focused conversation about your
                    organization, current obstacles, and what kind of digital
                    support would be most helpful.
                  </p>
                  <span className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-[var(--navy)] transition group-hover:-translate-y-0.5">
                    Open Scheduler
                  </span>
                </div>

                <div className="hidden h-40 w-40 items-center justify-center rounded-[28px] border border-white/12 bg-white/10 lg:flex">
                  <svg
                    viewBox="0 0 120 120"
                    aria-hidden="true"
                    className="h-24 w-24 text-white"
                  >
                    <rect
                      x="18"
                      y="24"
                      width="84"
                      height="72"
                      rx="18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="6"
                    />
                    <path
                      d="M35 18v20M85 18v20M18 44h84"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="6"
                    />
                    <circle cx="44" cy="62" r="6" fill="currentColor" />
                    <circle cx="60" cy="62" r="6" fill="currentColor" opacity="0.55" />
                    <path
                      d="m71 80 9 9 18-20"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="6"
                    />
                  </svg>
                </div>
              </div>
            </a>

            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href="mailto:ejaffe@foundationstoneadvisors.com"
                className="rounded-[22px] border border-[var(--line)] bg-white/92 px-5 py-5 shadow-[0_18px_42px_rgba(15,42,102,0.08)] transition hover:-translate-y-0.5"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--blue)]">
                  Email
                </p>
                <p className="mt-3 text-lg text-[var(--navy)]">
                  ejaffe@foundationstoneadvisors.com
                </p>
              </a>
              <a
                href="tel:19044836881"
                className="rounded-[22px] border border-[var(--line)] bg-white/92 px-5 py-5 shadow-[0_18px_42px_rgba(15,42,102,0.08)] transition hover:-translate-y-0.5"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--blue)]">
                  Phone
                </p>
                <p className="mt-3 text-lg text-[var(--navy)]">
                  904-483-6881
                </p>
              </a>
            </div>
          </div>

          <section className="rounded-[30px] border border-[var(--line)] bg-white/96 p-6 shadow-[0_18px_42px_rgba(15,42,102,0.08)] sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--blue)]">
              Send a message
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[var(--navy)]">
              Share what your organization is trying to accomplish.
            </h2>

            <form className="mt-8 grid gap-6" action="#" method="post">
              <div className="grid gap-6 md:grid-cols-2">
                <label className="grid gap-3">
                  <span className="text-[2rem] font-semibold tracking-[-0.04em] text-[var(--navy)] md:text-[1.95rem]">
                    Your Name *
                  </span>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Smith"
                    className="contact-input"
                  />
                </label>

                <label className="grid gap-3">
                  <span className="text-[2rem] font-semibold tracking-[-0.04em] text-[var(--navy)] md:text-[1.95rem]">
                    Email Address *
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    className="contact-input"
                  />
                </label>
              </div>

              <label className="grid gap-3">
                <span className="text-[2rem] font-semibold tracking-[-0.04em] text-[var(--navy)] md:text-[1.95rem]">
                  Organization
                </span>
                <input
                  type="text"
                  name="organization"
                  placeholder="Your organization name"
                  className="contact-input"
                />
              </label>

              <label className="grid gap-3">
                <span className="text-[2rem] font-semibold tracking-[-0.04em] text-[var(--navy)] md:text-[1.95rem]">
                  Subject *
                </span>
                <input
                  type="text"
                  name="subject"
                  placeholder="How can we help?"
                  className="contact-input"
                />
              </label>

              <label className="grid gap-3">
                <span className="text-[2rem] font-semibold tracking-[-0.04em] text-[var(--navy)] md:text-[1.95rem]">
                  Message *
                </span>
                <textarea
                  name="message"
                  placeholder="Tell us about your organization and how we can serve you..."
                  className="contact-input min-h-[230px] resize-y py-7"
                />
              </label>

              <button
                type="submit"
                className="inline-flex h-24 items-center justify-center gap-4 rounded-[24px] bg-[var(--navy)] px-8 text-2xl font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#23447f]"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8">
                  <path
                    d="m3 11 17.5-7-5.8 16-3.6-5.1L3 11Zm8 3.9L20.5 4"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
                Send Message
              </button>
            </form>
          </section>
        </section>
      </div>
    </main>
  );
}
