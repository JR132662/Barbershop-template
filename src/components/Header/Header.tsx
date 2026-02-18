"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import type { Messages } from "@/lib/i18n";
import { siteConfig } from "@/config/site";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function Header({
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
    <header className="sticky top-0 z-50 border-b border-[var(--gold)]/30 bg-gray-900/98 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
        <Link
          href={base}
          className="font-heading text-lg font-semibold tracking-tight text-white sm:text-xl transition hover:text-vice-pink"
          onClick={() => setMenuOpen(false)}
        >
          {siteConfig.businessName}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0.5 md:flex md:gap-1" aria-label="Main">
          {nav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 ${
                isActive(href)
                  ? "bg-vice-pink text-white focus-visible:ring-[var(--vice-pink)]"
                  : "text-gray-300 hover:bg-[var(--gold)]/20 hover:text-[var(--gold)] focus-visible:ring-[var(--gold)]"
              }`}
            >
              {label}
            </Link>
          ))}
          <LanguageSwitcher currentLocale={locale} />
        </nav>

        {/* Mobile: menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher currentLocale={locale} />
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--gold)]/40 bg-white/5 text-gray-300 transition hover:bg-[var(--gold)]/20 hover:text-[var(--gold)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
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
        id="mobile-nav"
        role="navigation"
        aria-label="Main"
        className={`grid transition-[grid-template-rows] duration-200 ease-out md:hidden ${
          menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden border-t border-[var(--gold)]/30 bg-gray-800/95">
          <ul className="py-2">
            {nav.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center px-4 py-3.5 text-sm font-medium transition-colors ${
                    isActive(href)
                      ? "border-l-2 border-vice-pink bg-white/5 pl-[calc(1rem-2px)] text-vice-pink"
                      : "border-l-2 border-transparent text-gray-300 hover:bg-[var(--gold)]/10 hover:text-[var(--gold)]"
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
