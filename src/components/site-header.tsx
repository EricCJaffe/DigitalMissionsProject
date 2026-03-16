"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation } from "@/content/site";

type MobileOpenState = Record<string, boolean>;

function MenuToggleIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
      {open ? (
        <path
          d="M6 6l12 12M18 6 6 18"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
        />
      ) : (
        <path
          d="M4 7h16M4 12h16M4 17h16"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
        />
      )}
    </svg>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSections, setOpenSections] = useState<MobileOpenState>({});

  function toggleSection(label: string) {
    setOpenSections((current) => ({
      ...current,
      [label]: !current[label],
    }));
  }

  function closeMenu() {
    setMenuOpen(false);
    setOpenSections({});
  }

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1440px] rounded-[28px] border border-[var(--line)] bg-white/92 px-4 py-4 shadow-[0_20px_60px_rgba(15,35,95,0.08)] backdrop-blur md:px-7">
        <div className="hidden items-center justify-between gap-6 lg:flex">
          <Link href="/" className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--blue)] text-xl font-bold text-white shadow-[0_12px_30px_rgba(46,98,230,0.35)]">
              D
            </div>
            <div>
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
                      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
                        pathname === item.href
                          ? "bg-white text-[var(--navy)]"
                          : "text-[var(--muted)] hover:bg-white hover:text-[var(--navy)]"
                      }`}
                    >
                      {item.label}
                      {"items" in item ? <span className="text-xs">▾</span> : null}
                    </Link>
                    {"items" in item ? (
                      <div className="pointer-events-none invisible absolute left-1/2 top-full z-30 w-[340px] -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                        <div className="rounded-[24px] border border-[var(--line)] bg-white/98 p-3 shadow-[0_28px_80px_rgba(17,43,103,0.18)]">
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
                      </div>
                    ) : null}
                  </li>
                ))}
              </ul>
            </nav>

            <a
              href="https://for-the-least-of-these-474406.churchcenter.com/giving/to/digital-missions-project"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--blue)] px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--blue-strong)]"
            >
              Donate
            </a>
          </div>
        </div>

        <div className="lg:hidden">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="flex min-w-0 items-center gap-3" onClick={closeMenu}>
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--blue)] text-lg font-bold text-white">
                D
              </div>
              <p className="truncate text-lg font-semibold tracking-[-0.04em] text-[var(--navy)] sm:text-xl">
                Digital Missions Project
              </p>
            </Link>

            <div className="flex items-center gap-2">
              <a
                href="https://for-the-least-of-these-474406.churchcenter.com/giving/to/digital-missions-project"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-full bg-[var(--blue)] px-4 text-sm font-semibold text-white"
              >
                Donate
              </a>
              <button
                type="button"
                aria-expanded={menuOpen}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                onClick={() => setMenuOpen((current) => !current)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--line)] bg-[var(--panel)] text-[var(--navy)]"
              >
                <MenuToggleIcon open={menuOpen} />
              </button>
            </div>
          </div>

          {menuOpen ? (
            <div className="mt-4 grid gap-2 border-t border-[var(--line)] pt-4">
              {navigation.map((item) =>
                "items" in item ? (
                  <div
                    key={item.label}
                    className="overflow-hidden rounded-[22px] border border-[var(--line)] bg-[var(--panel)]"
                  >
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className="min-w-0 flex-1 px-4 py-4 font-semibold text-[var(--navy)]"
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        aria-expanded={Boolean(openSections[item.label])}
                        aria-label={`Toggle ${item.label} submenu`}
                        onClick={() => toggleSection(item.label)}
                        className="inline-flex h-full items-center justify-center px-4 py-4 text-[var(--navy)]"
                      >
                        <span
                          className={`text-xs transition ${openSections[item.label] ? "rotate-180" : ""}`}
                        >
                          ▾
                        </span>
                      </button>
                    </div>
                    {openSections[item.label] ? (
                      <div className="grid gap-2 border-t border-[var(--line)] px-3 py-3">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            onClick={closeMenu}
                            className="rounded-[18px] bg-white px-4 py-3"
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
                    ) : null}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={closeMenu}
                    className={`rounded-[22px] border border-[var(--line)] px-4 py-4 font-semibold transition ${
                      pathname === item.href
                        ? "bg-white text-[var(--navy)]"
                        : "bg-[var(--panel)] text-[var(--navy)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
