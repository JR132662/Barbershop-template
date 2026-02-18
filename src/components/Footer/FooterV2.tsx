import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Messages } from "@/lib/i18n";
import { siteConfig } from "@/config/site";

/**
 * Footer variant 2: Light bar, centered layout with gold accent. Set footerVariant to "v2" in sections.ts.
 */
export function FooterV2({
  locale,
  messages,
}: {
  locale: Locale;
  messages: Messages;
}) {
  const base = `/${locale}`;
  const { footer } = messages;

  return (
    <footer className="border-t border-[var(--border)] bg-white text-gray-600">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-center gap-10 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-heading text-lg font-semibold text-gray-950">
              {siteConfig.businessName}
            </p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-gray-600">
              {footer.tagline}
            </p>
          </div>
          {"links" in footer && footer.links && (
            <nav className="flex flex-wrap justify-center gap-6 text-sm sm:gap-8">
              <Link
                href={`${base}/services`}
                className="font-medium text-gray-600 transition hover:text-gold"
              >
                {messages.nav.services}
              </Link>
              <Link
                href={`${base}/book`}
                className="font-medium text-gray-600 transition hover:text-gold"
              >
                {messages.nav.book}
              </Link>
              <Link
                href={`${base}/about`}
                className="font-medium text-gray-600 transition hover:text-gold"
              >
                {messages.nav.about}
              </Link>
              <Link
                href={`${base}/contact`}
                className="font-medium text-gray-600 transition hover:text-gold"
              >
                {messages.nav.contact}
              </Link>
              {"faq" in footer && footer.faq && (
                <Link
                  href={`${base}#faq`}
                  className="font-medium text-gray-600 transition hover:text-gold"
                >
                  {footer.faq}
                </Link>
              )}
              {"policies" in footer && footer.policies && (
                <Link
                  href={`${base}/about#policies`}
                  className="font-medium text-gray-600 transition hover:text-gold"
                >
                  {footer.policies}
                </Link>
              )}
            </nav>
          )}
        </div>
        <div className="mt-10 border-t border-[var(--border)] pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} {siteConfig.businessName}. {footer.rights}
        </div>
      </div>
    </footer>
  );
}
