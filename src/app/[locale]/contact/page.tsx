import { getMessages } from "@/lib/i18n";
import { siteConfig } from "@/config/site";
import type { Locale } from "@/lib/i18n";
import { ContactForm } from "@/components/ContactForm";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = getMessages(locale);

  return (
    <div className="flex flex-col">
      <section className="border-b border-[var(--border)] bg-[var(--surface)] px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label">Contact</p>
          <h1 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl md:text-5xl">
            {t.contact.title}
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-widest text-gold">
                  {t.contact.phone}
                </h2>
                <a
                  href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                  className="mt-2 block text-lg font-semibold text-gray-950 transition hover:text-gold"
                >
                  {siteConfig.phone}
                </a>
              </div>
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-widest text-gold">
                  {t.contact.email}
                </h2>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-2 block text-lg font-semibold text-gray-950 transition hover:text-gold"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-widest text-gold">
                  {t.contact.address}
                </h2>
                <p className="mt-2 text-gray-700 leading-relaxed">
                  {siteConfig.address.line1}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.state}{" "}
                  {siteConfig.address.zip}
                </p>
              </div>
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-widest text-gold">
                  {t.contact.hours}
                </h2>
                <ul className="mt-2 space-y-1 text-gray-700">
                  <li>Mon: {siteConfig.hours.monday}</li>
                  <li>Tue: {siteConfig.hours.tuesday}</li>
                  <li>Wed: {siteConfig.hours.wednesday}</li>
                  <li>Thu: {siteConfig.hours.thursday}</li>
                  <li>Fri: {siteConfig.hours.friday}</li>
                  <li>Sat: {siteConfig.hours.saturday}</li>
                  <li>Sun: {siteConfig.hours.sunday}</li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-white p-8 shadow-[var(--shadow-lg)]">
              <ContactForm locale={locale} messages={t} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
