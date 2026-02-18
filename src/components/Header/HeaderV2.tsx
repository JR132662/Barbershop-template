"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import type { Locale } from "@/lib/i18n";
import type { Messages } from "@/lib/i18n";

/**
 * Navbar variant 2: Light bar, centered logo with nav links on both sides.
 * Set siteConfig.headerVariant to "v2" (or use config/components.ts) for this pitch style.
 */
export function HeaderV2({
  locale,
  messages,
}: {
  locale: Locale;
  messages: Messages;
}) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const base = `/${locale}`;
  const nav = [
    { href: base, label: messages.nav.home },
    { href: `${base}/services`, label: messages.nav.services },
    { href: `${base}/book`, label: messages.nav.book },
    { href: `${base}/about`, label: messages.nav.about },
    { href: `${base}/contact`, label: messages.nav.contact },
  ];

  const isActive = (href: string) =>
    href === base ? pathname === base : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-white/95 backdrop-blur-md shadow-[var(--shadow-sm)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
        {/* Left nav — desktop only */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {nav.slice(0, 3).map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${
                isActive(href)
                  ? "text-gray-950 font-semibold"
                  : "text-gray-600 hover:text-gray-950"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Center: logo / brand */}
        <Link
          href={base}
          className="font-heading text-lg font-semibold tracking-tight text-gray-950 sm:text-xl transition hover:text-gold shrink-0"
          onClick={() => setMenuOpen(false)}
        >
          {siteConfig.businessName}
        </Link>

        {/* Right: nav + language — desktop */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {nav.slice(3).map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${
                isActive(href)
                  ? "text-gray-950 font-semibold"
                  : "text-gray-600 hover:text-gray-950"
              }`}
            >
              {label}
            </Link>
          ))}
          <LanguageSwitcher currentLocale={locale} />
        </nav>

        {/* Mobile: menu + language */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher currentLocale={locale} />
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-gray-700 transition hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-v2"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <span className="text-lg" aria-hidden>✕</span>
            ) : (
              <span className="flex flex-col gap-1.5" aria-hidden>
                <span className="h-0.5 w-5 rounded-full bg-current" />
                <span className="h-0.5 w-5 rounded-full bg-current" />
                <span className="h-0.5 w-5 rounded-full bg-current" />
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <div
        id="mobile-nav-v2"
        role="navigation"
        aria-label="Main"
        className={`grid transition-[grid-template-rows] duration-200 ease-out md:hidden ${
          menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden border-t border-[var(--border)] bg-[var(--surface)]">
          <ul className="py-2">
            {nav.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center px-4 py-3.5 text-sm font-medium transition-colors ${
                    isActive(href)
                      ? "border-l-2 border-gold bg-gold/10 pl-[calc(1rem-2px)] text-gray-950"
                      : "border-l-2 border-transparent text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
