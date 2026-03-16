function getStatusMessage(
  status: string | string[] | undefined,
): { tone: "success" | "error"; text: string } | null {
  if (status === "success") {
    return {
      tone: "success",
      text: "Your message was sent successfully. We will follow up by email.",
    };
  }

  if (status === "missing") {
    return {
      tone: "error",
      text: "Please complete the required form fields before submitting.",
    };
  }

  if (status === "config-error") {
    return {
      tone: "error",
      text: "The form email service is not configured yet. Please contact us directly for now.",
    };
  }

  if (status === "error") {
    return {
      tone: "error",
      text: "Something went wrong while sending your message. Please try again or contact us directly.",
    };
  }

  return null;
}

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string | string[] }>;
}) {
  const { status } = await searchParams;
  const statusMessage = getStatusMessage(status);

  return (
    <main className="px-4 pb-20 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8">
        <section className="relative overflow-hidden rounded-[36px] border border-[var(--line)] bg-[radial-gradient(circle_at_top_right,_rgba(110,203,255,0.18),_transparent_24%),radial-gradient(circle_at_bottom_left,_rgba(80,129,255,0.12),_transparent_28%),linear-gradient(135deg,_#f7fbff_0%,_#eef4ff_54%,_#f8fbff_100%)] px-6 py-14 shadow-[0_26px_70px_rgba(16,48,110,0.12)] sm:px-8 lg:px-12">
          <div className="max-w-[1120px]">
            <p className="inline-flex rounded-full border border-[var(--line)] bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--blue)]">
              Contact
            </p>
            <h1 className="mt-6 max-w-[1080px] text-[clamp(3.2rem,6vw,5.6rem)] font-semibold leading-[0.96] tracking-[-0.07em] text-[var(--navy)]">
              Let&apos;s talk through the mission, the constraints, and what
              would actually help.
            </h1>
            <p className="mt-7 max-w-[980px] text-[clamp(1.2rem,2.1vw,1.9rem)] leading-[1.65] text-[var(--muted)]">
              If you are a nonprofit, church, or faith-based organization and
              want clearer digital support, please reach out to us to discuss
              how we might help.
            </p>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="grid gap-6">
            <a
              href="https://outlook.office365.com/book/EricsSchedule@NETORGFT11347269.onmicrosoft.com/?ismsaljsauthenabled=true"
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-[30px] border border-[var(--line)] bg-[linear-gradient(145deg,_#173879,_#2854ab)] p-8 text-white shadow-[0_25px_60px_rgba(15,45,105,0.28)] transition hover:-translate-y-1"
            >
              <div className="grid gap-8">
                <div className="flex items-start justify-between gap-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/65">
                    Schedule time
                  </p>
                  <div className="hidden h-32 w-32 shrink-0 items-center justify-center rounded-[28px] border border-white/12 bg-white/10 lg:flex">
                    <svg
                      viewBox="0 0 120 120"
                      aria-hidden="true"
                      className="h-20 w-20 text-white"
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
                      <circle
                        cx="60"
                        cy="62"
                        r="6"
                        fill="currentColor"
                        opacity="0.55"
                      />
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

                <div className="max-w-[680px]">
                  <h2 className="text-3xl font-semibold tracking-[-0.05em] sm:text-[2.5rem]">
                    Book directly on the calendar.
                  </h2>
                  <p className="mt-4 text-lg leading-8 text-white/82 sm:text-[1.15rem]">
                    Use the scheduler for a focused conversation about your
                    organization, current obstacles, and what kind of digital
                    support would be most helpful.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <span className="inline-flex h-12 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-[var(--navy)] transition group-hover:-translate-y-0.5">
                    Open Scheduler
                  </span>
                </div>

                <div className="grid gap-4 pt-2">
                  <div className="rounded-[22px] border border-white/12 bg-white/10 px-5 py-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/65">
                      Email
                    </p>
                    <p className="mt-3 break-words text-[1.05rem] leading-7 text-white">
                      ejaffe@foundationstoneadvisors.com
                    </p>
                  </div>
                  <div className="rounded-[22px] border border-white/12 bg-white/10 px-5 py-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/65">
                      Phone
                    </p>
                    <p className="mt-3 text-[1.05rem] leading-7 text-white">
                      904-483-6881
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <section className="rounded-[30px] border border-[var(--line)] bg-white/96 p-6 shadow-[0_18px_42px_rgba(15,42,102,0.08)] sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--blue)]">
              Send a message
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[var(--navy)]">
              Share what your organization is trying to accomplish.
            </h2>

            {statusMessage ? (
              <div
                className={`mt-6 rounded-[22px] border px-5 py-4 text-base leading-7 ${
                  statusMessage.tone === "success"
                    ? "border-[#b8eadf] bg-[#eefaf7] text-[#166a5a]"
                    : "border-[#f2c6c6] bg-[#fff5f5] text-[#933737]"
                }`}
              >
                {statusMessage.text}
              </div>
            ) : null}

            <form className="mt-8 grid gap-6" action="/api/contact" method="post">
              <div className="grid gap-6 md:grid-cols-2">
                <label className="grid gap-3">
                  <span className="text-[1.8rem] font-semibold tracking-[-0.04em] text-[var(--navy)] md:text-[1.7rem]">
                    Your Name *
                  </span>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Smith"
                    className="contact-input"
                  />
                </label>

                <label className="grid gap-3">
                  <span className="text-[1.8rem] font-semibold tracking-[-0.04em] text-[var(--navy)] md:text-[1.7rem]">
                    Email Address *
                  </span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="contact-input"
                  />
                </label>
              </div>

              <label className="grid gap-3">
                <span className="text-[1.8rem] font-semibold tracking-[-0.04em] text-[var(--navy)] md:text-[1.7rem]">
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
                <span className="text-[1.8rem] font-semibold tracking-[-0.04em] text-[var(--navy)] md:text-[1.7rem]">
                  Subject *
                </span>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="How can we help?"
                  className="contact-input"
                />
              </label>

              <label className="grid gap-3">
                <span className="text-[1.8rem] font-semibold tracking-[-0.04em] text-[var(--navy)] md:text-[1.7rem]">
                  Message *
                </span>
                <textarea
                  name="message"
                  required
                  placeholder="Tell us about your organization and how we can serve you..."
                  className="contact-input min-h-[230px] resize-y py-7"
                />
              </label>

              <button
                type="submit"
                className="inline-flex h-20 items-center justify-center gap-4 rounded-[24px] bg-[var(--navy)] px-8 text-xl font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#23447f]"
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
