import Link from "next/link";
import { navigation } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1440px] rounded-[30px] border border-[var(--line)] bg-white/92 px-5 py-4 shadow-[0_20px_60px_rgba(15,35,95,0.08)] backdrop-blur md:px-7">
        <div className="hidden items-center justify-between gap-6 lg:flex">
          <Link href="/" className="flex items-center gap-4">
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
          </Link>

          <div className="flex items-center gap-4">
            <nav className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-3 py-2">
              <ul className="flex items-center gap-1">
                {navigation.map((item) => (
                  <li key={item.label} className="group relative">
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-[var(--muted)] transition hover:bg-white hover:text-[var(--navy)]"
                    >
                      {item.label}
                      {"items" in item ? <span className="text-xs">▾</span> : null}
                    </Link>
                    {"items" in item ? (
                      <div className="pointer-events-none absolute left-1/2 top-full z-30 mt-3 hidden w-[340px] -translate-x-1/2 rounded-[24px] border border-[var(--line)] bg-white/98 p-3 opacity-0 shadow-[0_28px_80px_rgba(17,43,103,0.18)] transition duration-200 group-hover:pointer-events-auto group-hover:block group-hover:opacity-100">
                        <div className="grid gap-2">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="rounded-[18px] px-4 py-3 transition hover:bg-[var(--panel)]"
                            >
                              <p className="font-semibold text-[var(--navy)]">
                                {subItem.label}
                              </p>
                              <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                                {subItem.description}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </li>
                ))}
              </ul>
            </nav>

            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--blue)] px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--blue-strong)]"
            >
              Book Consultation
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:hidden">
          <Link href="/" className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--blue)] text-lg font-bold text-white">
              D
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">
                Digital Missions
              </p>
              <p className="text-xl font-semibold tracking-[-0.04em] text-[var(--navy)]">
                Digital Missions Project
              </p>
            </div>
          </Link>

          <nav className="grid gap-2">
            {navigation.map((item) =>
              "items" in item ? (
                <details
                  key={item.label}
                  className="rounded-[22px] border border-[var(--line)] bg-[var(--panel)] px-4 py-3"
                >
                  <summary className="cursor-pointer list-none font-semibold text-[var(--navy)]">
                    {item.label}
                  </summary>
                  <div className="mt-3 grid gap-2">
                    <Link
                      href={item.href}
                      className="rounded-2xl bg-white px-4 py-3 text-sm font-medium text-[var(--navy)]"
                    >
                      Overview
                    </Link>
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="rounded-2xl bg-white px-4 py-3"
                      >
                        <p className="font-medium text-[var(--navy)]">
                          {subItem.label}
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                          {subItem.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-[22px] border border-[var(--line)] bg-[var(--panel)] px-4 py-3 font-semibold text-[var(--navy)]"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--blue)] px-6 text-sm font-semibold text-white"
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
