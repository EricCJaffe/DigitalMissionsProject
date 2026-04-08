function getStatusMessage(
  status: string | string[] | undefined,
): { tone: "success" | "error"; text: string } | null {
  if (status === "success") {
    return {
      tone: "success",
      text: "Your project request was sent successfully. We will review it and follow up by email.",
    };
  }

  if (status === "missing") {
    return {
      tone: "error",
      text: "Please complete the required fields before submitting your project request.",
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
      text: "Something went wrong while sending your project request. Please try again.",
    };
  }

  return null;
}

export default async function SubmitProjectPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string | string[] }>;
}) {
  const projectTypes = [
    "Custom Website",
    "Process Automation",
    "Ministry Dashboard",
    "Intranet Solution",
    "Other / Not Sure",
  ];
  const { status } = await searchParams;
  const statusMessage = getStatusMessage(status);

  return (
    <main className="px-4 pb-20 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8">
        <section className="relative overflow-hidden rounded-[36px] border border-[var(--line)] bg-[radial-gradient(circle_at_top_right,_rgba(110,203,255,0.16),_transparent_24%),radial-gradient(circle_at_bottom_left,_rgba(80,129,255,0.12),_transparent_28%),linear-gradient(135deg,_#f7fbff_0%,_#eef4ff_54%,_#f8fbff_100%)] px-6 py-14 text-center shadow-[0_26px_70px_rgba(16,48,110,0.12)] sm:px-8 lg:px-12">
          <div className="mx-auto max-w-5xl">
            <p className="inline-flex rounded-full border border-[var(--line)] bg-[#f8f1de] px-5 py-3 text-sm font-semibold tracking-[-0.02em] text-[var(--navy)]">
              Start Your Project
            </p>
            <h1 className="mt-8 text-[clamp(3.4rem,8vw,6.4rem)] font-semibold leading-[0.95] tracking-[-0.08em] text-[var(--navy)]">
              Submit Your Project
            </h1>
            <p className="mx-auto mt-6 max-w-5xl text-[clamp(1.2rem,2.1vw,1.9rem)] leading-[1.65] text-[var(--muted-foreground)]">
              Tell us about your organization and the challenges you&apos;re
              facing. We&apos;ll work with you to find the best solution.
            </p>
          </div>
        </section>

        <section className="rounded-[32px] border border-[rgba(215,198,152,0.5)] bg-[linear-gradient(90deg,_rgba(249,244,231,0.86),_rgba(225,248,245,0.86))] p-6 shadow-[0_18px_42px_rgba(15,42,102,0.08)] lg:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[22px] bg-[#f4e8c6] text-[var(--blue)]">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-10 w-10">
                <path
                  d="M12 3v18M7 7h8a3 3 0 1 1 0 6H9a3 3 0 1 0 0 6h8"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.05em] text-[var(--navy)]">
                Grants May Be Available
              </h2>
              <p className="mt-2 text-lg leading-8 text-[var(--muted-foreground)]">
                Qualifying faith-based nonprofits and churches may be eligible
                for grants to fund their digital projects.
              </p>
            </div>
          </div>
        </section>

        <form className="grid gap-8" action="/api/submit-project" method="post">
          {statusMessage ? (
            <div
              className={`rounded-[22px] border px-5 py-4 text-base leading-7 ${
                statusMessage.tone === "success"
                  ? "border-[#b8eadf] bg-[#eefaf7] text-[#166a5a]"
                  : "border-[#f2c6c6] bg-[#fff5f5] text-[#933737]"
              }`}
            >
              {statusMessage.text}
            </div>
          ) : null}

          <section className="rounded-[32px] border border-[var(--line)] bg-white/96 p-6 shadow-[0_18px_42px_rgba(15,42,102,0.08)] sm:p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-[18px] bg-[var(--navy)] text-3xl font-semibold text-white">
                1
              </div>
              <h2 className="text-4xl font-semibold tracking-[-0.05em] text-[var(--navy)]">
                Organization Information
              </h2>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <label className="grid gap-3">
                <span className="text-[1.8rem] font-semibold tracking-[-0.04em] text-[var(--navy)]">
                  Organization Name *
                </span>
                <input
                  type="text"
                  name="organization_name"
                  required
                  placeholder="Grace Community Church"
                  className="contact-input"
                />
              </label>

              <label className="grid gap-3">
                <span className="text-[1.8rem] font-semibold tracking-[-0.04em] text-[var(--navy)]">
                  Organization Type *
                </span>
                <select
                  name="organization_type"
                  required
                  className="contact-input"
                >
                  <option value="">Select type</option>
                  <option>Church</option>
                  <option>Nonprofit</option>
                  <option>Faith-Based Business</option>
                  <option>Other</option>
                </select>
              </label>

              <label className="grid gap-3">
                <span className="text-[1.8rem] font-semibold tracking-[-0.04em] text-[var(--navy)]">
                  Contact Name *
                </span>
                <input
                  type="text"
                  name="contact_name"
                  required
                  placeholder="John Smith"
                  className="contact-input"
                />
              </label>

              <label className="grid gap-3">
                <span className="text-[1.8rem] font-semibold tracking-[-0.04em] text-[var(--navy)]">
                  Email Address *
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@gracechurch.org"
                  className="contact-input"
                />
              </label>

              <label className="grid gap-3">
                <span className="text-[1.8rem] font-semibold tracking-[-0.04em] text-[var(--navy)]">
                  Phone Number
                </span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="(555) 123-4567"
                  className="contact-input"
                />
              </label>

              <label className="grid gap-3">
                <span className="text-[1.8rem] font-semibold tracking-[-0.04em] text-[var(--navy)]">
                  Current Website (if any)
                </span>
                <input
                  type="url"
                  name="website"
                  placeholder="https://gracechurch.org"
                  className="contact-input"
                />
              </label>
            </div>
          </section>

          <section className="rounded-[32px] border border-[var(--line)] bg-white/96 p-6 shadow-[0_18px_42px_rgba(15,42,102,0.08)] sm:p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-[18px] bg-[var(--navy)] text-3xl font-semibold text-white">
                2
              </div>
              <h2 className="text-4xl font-semibold tracking-[-0.05em] text-[var(--navy)]">
                Project Details
              </h2>
            </div>

            <div className="mt-8">
              <p className="text-[1.8rem] font-semibold tracking-[-0.04em] text-[var(--navy)]">
                What type of project are you interested in? *
              </p>
              <div className="mt-5 grid gap-4 lg:grid-cols-3">
                {projectTypes.map((type) => (
                  <label
                    key={type}
                    className="cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="project_type"
                      value={type}
                      required
                      className="peer sr-only"
                    />
                    <div className="rounded-[24px] border border-[var(--line)] bg-[#f9fbff] p-8 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.65)] transition hover:-translate-y-0.5 hover:border-[rgba(46,98,230,0.28)] hover:bg-white peer-checked:border-[var(--blue)] peer-checked:bg-[linear-gradient(180deg,_rgba(46,98,230,0.12),_rgba(255,255,255,0.98))] peer-checked:shadow-[0_16px_34px_rgba(46,98,230,0.16)]">
                      <div className="flex items-start justify-between gap-4">
                        <div className="text-2xl font-semibold text-[var(--muted-foreground)] transition peer-checked:text-[var(--navy)]">
                          {type}
                        </div>
                        <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[rgba(46,98,230,0.24)] bg-white transition peer-checked:border-[var(--blue)] peer-checked:bg-[var(--blue)]">
                          <svg
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                            className="h-4 w-4 text-white opacity-0 transition peer-checked:opacity-100"
                          >
                            <path
                              d="m5 10 3 3 7-7"
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2.2"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-8 grid gap-6">
              <label className="grid gap-3">
                <span className="text-[1.8rem] font-semibold tracking-[-0.04em] text-[var(--navy)]">
                  Describe Your Project *
                </span>
                <textarea
                  name="project_description"
                  required
                  placeholder="Tell us about the website, automation, dashboard, or other solution you're envisioning..."
                  className="contact-input min-h-[180px] resize-y py-7"
                />
              </label>

              <label className="grid gap-3">
                <span className="text-[1.8rem] font-semibold tracking-[-0.04em] text-[var(--navy)]">
                  What challenges are you currently facing?
                </span>
                <textarea
                  name="challenges"
                  placeholder="What problems would this project solve for your ministry?"
                  className="contact-input min-h-[160px] resize-y py-7"
                />
              </label>

              <div className="grid gap-6 md:grid-cols-2">
                <label className="grid gap-3">
                  <span className="text-[1.8rem] font-semibold tracking-[-0.04em] text-[var(--navy)]">
                    Ideal Timeline
                  </span>
                  <select name="timeline" className="contact-input">
                    <option>When do you need this?</option>
                    <option>As soon as possible</option>
                    <option>Within 1 month</option>
                    <option>1-3 months</option>
                    <option>3-6 months</option>
                    <option>Just exploring</option>
                  </select>
                </label>

                <label className="grid gap-3">
                  <span className="text-[1.8rem] font-semibold tracking-[-0.04em] text-[var(--navy)]">
                    Budget Range
                  </span>
                  <select name="budget" className="contact-input">
                    <option>Select budget range</option>
                    <option>Under $2,500</option>
                    <option>$2,500 - $5,000</option>
                    <option>$5,000 - $10,000</option>
                    <option>$10,000+</option>
                    <option>Need grant help / not sure</option>
                  </select>
                </label>
              </div>
            </div>
          </section>

          <section className="rounded-[32px] border border-[var(--line)] bg-white/96 p-6 shadow-[0_18px_42px_rgba(15,42,102,0.08)] sm:p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-[18px] bg-[var(--navy)] text-3xl font-semibold text-white">
                3
              </div>
              <h2 className="text-4xl font-semibold tracking-[-0.05em] text-[var(--navy)]">
                Additional Information
              </h2>
            </div>

            <div className="mt-8 grid gap-8">
              <label className="flex items-start gap-4">
                <input
                  type="checkbox"
                  name="grant_interest"
                  className="mt-2 h-8 w-8 rounded-[10px] border border-[var(--line-strong)]"
                />
                <span>
                  <span className="block text-[1.8rem] font-semibold tracking-[-0.04em] text-[var(--navy)]">
                    I&apos;m interested in learning about grant opportunities
                  </span>
                  <span className="mt-2 block text-lg leading-8 text-[var(--muted-foreground)]">
                    We may have grants available for qualifying faith-based
                    organizations.
                  </span>
                </span>
              </label>

              <label className="grid gap-3">
                <span className="text-[1.8rem] font-semibold tracking-[-0.04em] text-[var(--navy)]">
                  How did you hear about us?
                </span>
                <select name="referral_source" className="contact-input">
                  <option>Select an option</option>
                  <option>Referral</option>
                  <option>Social media</option>
                  <option>Search engine</option>
                  <option>Conference or event</option>
                  <option>Other</option>
                </select>
              </label>
            </div>
          </section>

          <button
            type="submit"
            className="inline-flex h-20 items-center justify-center gap-4 rounded-[24px] bg-[var(--navy)] px-8 text-xl font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#23447f]"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
              <path
                d="m12 3 .9 2.9 2.9.9-2.9.9-.9 2.9-.9-2.9-2.9-.9 2.9-.9L12 3Zm6 8 .6 1.9 1.9.6-1.9.6-.6 1.9-.6-1.9-1.9-.6 1.9-.6.6-1.9Z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
            Submit Project Request
          </button>
        </form>
      </div>
    </main>
  );
}
