import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Messages } from "@/lib/i18n";
import { siteConfig } from "@/config/site";

/**
 * Footer variant 4: Minimal V4 theme — light bg, large typography, decorative gold bar. Set footerVariant to "v4" in sections.ts.
 */
export function FooterV4({
  locale,
  messages,
}: {
  locale: Locale;
  messages: Messages;
}) {
  const base = `/${locale}`;
  const { footer } = messages;

  return (
    <footer className="border-t border-[var(--border)] bg-white py-12 md:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-12">
          <div>
            <p className="font-heading text-2xl font-semibold tracking-tight text-gray-950 md:text-3xl">
              {siteConfig.businessName}
            </p>
            <p className="mt-2 text-gray-600">
              {footer.tagline}
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-2 text-sm font-medium text-gray-600">
            <Link
              href={`${base}/services`}
              className="transition hover:text-gold"
            >
              {messages.nav.services}
            </Link>
            <Link
              href={`${base}/book`}
              className="transition hover:text-gold"
            >
              {messages.nav.book}
            </Link>
            <Link
              href={`${base}/about`}
              className="transition hover:text-gold"
            >
              {messages.nav.about}
            </Link>
            <Link
              href={`${base}/contact`}
              className="transition hover:text-gold"
            >
              {messages.nav.contact}
            </Link>
            {"faq" in footer && footer.faq && (
              <Link
                href={`${base}#faq`}
                className="transition hover:text-gold"
              >
                {footer.faq}
              </Link>
            )}
            {"policies" in footer && footer.policies && (
              <Link
                href={`${base}/about#policies`}
                className="transition hover:text-gold"
              >
                {footer.policies}
              </Link>
            )}
          </nav>
        </div>
        <div
          className="mt-10 h-px w-16 bg-gold"
          aria-hidden
        />
        <p className="mt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} {siteConfig.businessName}. {footer.rights}
        </p>
      </div>
    </footer>
  );
}
