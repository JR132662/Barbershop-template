import { getMessages } from "@/lib/i18n";
import { siteConfig } from "@/config/site";
import type { Locale } from "@/lib/i18n";
import { ContactForm } from "@/components/ContactForm";
import { MapEmbed } from "@/components/MapEmbed";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { SocialIcons } from "@/components/SocialIcons";

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
          <p className="section-label">{locale === "en" ? "Contact" : "Contacto"}</p>
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
            <AnimateOnScroll animation="fade-right">
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
                    <li className="flex justify-between"><span>Mon:</span><span>{siteConfig.hours.monday}</span></li>
                    <li className="flex justify-between"><span>Tue:</span><span>{siteConfig.hours.tuesday}</span></li>
                    <li className="flex justify-between"><span>Wed:</span><span>{siteConfig.hours.wednesday}</span></li>
                    <li className="flex justify-between"><span>Thu:</span><span>{siteConfig.hours.thursday}</span></li>
                    <li className="flex justify-between"><span>Fri:</span><span>{siteConfig.hours.friday}</span></li>
                    <li className="flex justify-between"><span>Sat:</span><span>{siteConfig.hours.saturday}</span></li>
                    <li className="flex justify-between text-gray-400"><span>Sun:</span><span>{siteConfig.hours.sunday}</span></li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">
                    {locale === "en" ? "Follow us" : "S\u00edguenos"}
                  </h2>
                  <SocialIcons />
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-left">
              <div className="rounded-2xl border border-[var(--border)] bg-white p-8 shadow-[var(--shadow-lg)]">
                <ContactForm locale={locale} messages={t} />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="border-t border-[var(--border)] bg-[var(--surface)] px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-5xl">
          <AnimateOnScroll animation="fade-up">
            <header className="mb-10 text-center">
              <h2 className="font-heading text-2xl font-semibold tracking-tight text-gray-950 md:text-3xl">
                {locale === "en" ? "Find us" : "Encu\u00e9ntranos"}
              </h2>
              <p className="mt-2 text-gray-600">
                {siteConfig.address.line1}, {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
              </p>
            </header>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={100}>
            <MapEmbed />
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
