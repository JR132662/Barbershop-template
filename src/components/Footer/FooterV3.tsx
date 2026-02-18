import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Messages } from "@/lib/i18n";
import { siteConfig } from "@/config/site";

/**
 * Footer variant 3: Minimal — single column, compact, small text. Set footerVariant to "v3" in sections.ts.
 */
export function FooterV3({
  locale,
  messages,
}: {
  locale: Locale;
  messages: Messages;
}) {
  const base = `/${locale}`;
  const { footer } = messages;

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] py-8">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm text-gray-600">
          <Link
            href={`${base}/services`}
            className="transition hover:text-gray-950"
          >
            {messages.nav.services}
          </Link>
          <Link
            href={`${base}/book`}
            className="transition hover:text-gray-950"
          >
            {messages.nav.book}
          </Link>
          <Link
            href={`${base}/about`}
            className="transition hover:text-gray-950"
          >
            {messages.nav.about}
          </Link>
          <Link
            href={`${base}/contact`}
            className="transition hover:text-gray-950"
          >
            {messages.nav.contact}
          </Link>
          {"faq" in footer && footer.faq && (
            <Link
              href={`${base}#faq`}
              className="transition hover:text-gray-950"
            >
              {footer.faq}
            </Link>
          )}
        </nav>
        <p className="mt-4 text-xs text-gray-500">
          © {new Date().getFullYear()} {siteConfig.businessName}. {footer.rights}
        </p>
      </div>
    </footer>
  );
}
