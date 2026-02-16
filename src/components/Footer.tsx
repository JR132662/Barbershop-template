import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Messages } from "@/lib/i18n";
import { siteConfig } from "@/config/site";

export function Footer({
  locale,
  messages,
}: {
  locale: Locale;
  messages: Messages;
}) {
  const base = `/${locale}`;
  const { footer } = messages;

  return (
    <footer className="border-t border-[var(--gold)]/30 bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        {/* App download placeholder */}
        {"downloadApp" in footer && footer.downloadApp && (
          <div className="mb-10 text-center">
            <p className="text-sm font-medium text-gray-400">
              {footer.downloadApp}
            </p>
            <div className="mt-3 flex justify-center gap-4">
              <span className="inline-flex h-10 items-center rounded-xl border border-[var(--gold)]/30 px-4 text-sm text-gray-500">
                App Store
              </span>
              <span className="inline-flex h-10 items-center rounded-xl border border-[var(--gold)]/30 px-4 text-sm text-gray-500">
                Google Play
              </span>
            </div>
          </div>
        )}

        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-heading text-lg font-semibold text-white">
              {siteConfig.businessName}
            </p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-gray-400">
              {footer.tagline}
            </p>
          </div>
          {"links" in footer && footer.links && (
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-vice-pink">
                {footer.links}
              </h3>
              <nav className="mt-4 flex flex-col gap-3 text-sm">
                <Link
                  href={`${base}/services`}
                  className="text-gray-400 transition hover:text-vice-pink"
                >
                  {messages.nav.services}
                </Link>
                <Link
                  href={`${base}/book`}
                  className="text-gray-400 transition hover:text-vice-pink"
                >
                  {messages.nav.book}
                </Link>
                <Link
                  href={`${base}/about`}
                  className="text-gray-400 transition hover:text-vice-pink"
                >
                  {messages.nav.about}
                </Link>
                <Link
                  href={`${base}/contact`}
                  className="text-gray-400 transition hover:text-vice-pink"
                >
                  {messages.nav.contact}
                </Link>
                {"faq" in footer && footer.faq && (
                  <Link
                    href={`${base}#faq`}
                    className="text-gray-400 transition hover:text-vice-pink"
                  >
                    {footer.faq}
                  </Link>
                )}
                {"policies" in footer && footer.policies && (
                  <Link
                    href={`${base}/about#policies`}
                    className="text-gray-400 transition hover:text-vice-pink"
                  >
                    {footer.policies}
                  </Link>
                )}
              </nav>
            </div>
          )}
        </div>

        <div className="mt-10 border-t border-[var(--gold)]/30 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} {siteConfig.businessName}. {footer.rights}
        </div>
      </div>
    </footer>
  );
}
