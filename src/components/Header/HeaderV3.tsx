"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import type { Locale } from "@/lib/i18n";
import type { Messages } from "@/lib/i18n";

/**
 * Navbar variant 3: Minimal — thin bar, compact links, underline active state.
 * Set siteConfig.headerVariant to "v3" (or use config/components.ts) for this pitch style.
 */
export function HeaderV3({
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
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-white/98 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6">
        <Link
          href={base}
          className="font-heading text-base font-semibold tracking-tight text-gray-950 transition hover:text-gold shrink-0"
          onClick={() => setMenuOpen(false)}
        >
          {siteConfig.businessName}
        </Link>

        {/* Desktop: inline nav with underline active */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {nav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`relative py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${
                isActive(href)
                  ? "text-gray-950"
                  : "text-gray-500 hover:text-gray-950"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
              {isActive(href) && (
                <span
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                  aria-hidden
                />
              )}
            </Link>
          ))}
          <span className="text-[var(--border)]">|</span>
          <LanguageSwitcher currentLocale={locale} />
        </nav>

        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher currentLocale={locale} />
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-md text-gray-600 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-v3"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <span className="text-sm" aria-hidden>✕</span>
            ) : (
              <span className="flex flex-col gap-1" aria-hidden>
                <span className="h-0.5 w-4 rounded-full bg-current" />
                <span className="h-0.5 w-4 rounded-full bg-current" />
                <span className="h-0.5 w-4 rounded-full bg-current" />
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <div
        id="mobile-nav-v3"
        role="navigation"
        aria-label="Main"
        className={`grid transition-[grid-template-rows] duration-200 ease-out md:hidden ${
          menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden border-t border-[var(--border)] bg-white">
          <ul className="py-1">
            {nav.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center px-4 py-2.5 text-sm font-medium ${
                    isActive(href) ? "text-gray-950 font-semibold" : "text-gray-600"
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
