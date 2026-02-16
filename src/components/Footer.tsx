import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Messages } from "@/lib/i18n";
import { siteConfig } from "@/config/site";
import { SocialIcons } from "@/components/SocialIcons";

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
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-heading text-xl font-semibold text-white">
              {siteConfig.businessName}
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-gray-400">
              {footer.tagline}
            </p>
            <SocialIcons className="mt-5" />
          </div>

          {/* Quick Links */}
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

          {/* Contact Info */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-vice-pink">
              {locale === "en" ? "Contact" : "Contacto"}
            </h3>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              <a
                href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                className="text-gray-400 transition hover:text-gold"
              >
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-gray-400 transition hover:text-gold"
              >
                {siteConfig.email}
              </a>
              <p className="text-gray-500">
                {siteConfig.address.line1}
                <br />
                {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
              </p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-vice-pink">
              {locale === "en" ? "Hours" : "Horario"}
            </h3>
            <div className="mt-4 flex flex-col gap-1.5 text-sm text-gray-400">
              <p>Mon – Fri: {siteConfig.hours.monday}</p>
              <p>Sat: {siteConfig.hours.saturday}</p>
              <p className="text-gray-500">Sun: {siteConfig.hours.sunday}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[var(--gold)]/20 pt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {siteConfig.businessName}. {footer.rights}
          </p>
          <p className="text-xs text-gray-600">
            {locale === "en" ? "Designed with care" : "Dise\u00f1ado con dedicaci\u00f3n"}
          </p>
        </div>
      </div>
    </footer>
  );
}
