"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";

export function LanguageSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const pathname = usePathname();
  const pathWithoutLocale = pathname?.replace(/^\/(en|es)/, "") || "/";
  const otherLocale: Locale = currentLocale === "en" ? "es" : "en";
  const href = `${otherLocale}${pathWithoutLocale}`;

  return (
    <Link
      href={href}
      className="rounded-lg px-3 py-2 text-sm font-medium text-[var(--gold)] hover:bg-[var(--gold)]/20 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
      aria-label={currentLocale === "en" ? "Cambiar a Español" : "Switch to English"}
    >
      {currentLocale === "en" ? "ES" : "EN"}
    </Link>
  );
}
