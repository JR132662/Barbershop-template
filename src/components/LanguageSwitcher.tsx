"use client";

import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";
import type { Locale } from "@/lib/i18n";

export function LanguageSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();

  const otherLocale: Locale = currentLocale === "en" ? "es" : "en";

  const href = useCallback((): string => {
    if (!pathname || pathname === "/") return `/${otherLocale}`;
    const match = pathname.match(/^\/(en|es)(\/.*)?$/);
    if (!match) return `/${otherLocale}`;
    const pathAfterLocale = match[2] ?? "";
    return `/${otherLocale}${pathAfterLocale}`;
  }, [pathname, otherLocale])();

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      router.push(href);
    },
    [router, href]
  );

  return (
    <button
      type="button"
      onClick={handleClick}
      className="rounded-lg px-3 py-2 text-sm font-medium text-[var(--gold)] hover:bg-[var(--gold)]/20 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
      aria-label={currentLocale === "en" ? "Cambiar a Español" : "Switch to English"}
    >
      {currentLocale === "en" ? "ES" : "EN"}
    </button>
  );
}
