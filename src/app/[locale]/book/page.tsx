import Link from "next/link";
import { getMessages } from "@/lib/i18n";
import { siteConfig, serviceIds, servicePrices } from "@/config/site";
import type { Locale } from "@/lib/i18n";
import { BookingSection } from "@/components/BookingSection";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export default async function BookPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = getMessages(locale);
  const base = `/${locale}`;
  const servicesSection = t.services as Record<
    string,
    { name?: string; description?: string; duration?: string }
  >;

  return (
    <div className="flex flex-col">
      <section className="border-b border-[var(--border)] bg-[var(--surface)] px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label">{locale === "en" ? "Book" : "Reservar"}</p>
          <h1 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl md:text-5xl">
            {t.book.title}
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            {t.book.subtitle}
          </p>
          <p className="mt-3 font-semibold text-gold">
            {t.book.walkInWelcome}
          </p>
        </div>
      </section>

      {/* Service selection */}
      <section className="border-b border-[var(--border)] bg-white px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-4xl">
          <AnimateOnScroll animation="fade-up">
            <h2 className="mb-8 text-center font-heading text-2xl font-semibold text-gray-950">
              {locale === "en" ? "Choose your service" : "Elige tu servicio"}
            </h2>
          </AnimateOnScroll>
          <div className="grid gap-3 sm:grid-cols-2">
            {serviceIds.map((id, i) => {
              const s = servicesSection[id];
              const name = s?.name ?? id;
              const duration = s?.duration ?? "";
              const price = servicePrices[id];
              return (
                <AnimateOnScroll key={id} animation="fade-up" delay={i * 50}>
                  <div className="group flex items-center justify-between rounded-xl border border-[var(--border)] bg-white p-4 shadow-[var(--shadow-sm)] transition hover:shadow-[var(--shadow)] hover:border-[var(--gold)]/50">
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-gray-950 truncate">{name}</h3>
                      <p className="mt-0.5 flex items-center gap-2 text-sm text-gray-500">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        {duration}
                      </p>
                    </div>
                    <span className="ml-4 rounded-lg bg-gold/10 px-3 py-1.5 text-sm font-bold text-gold">
                      ${price}
                    </span>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-2xl">
          <AnimateOnScroll animation="fade-up">
            <BookingSection
              locale={locale}
              bookingUrl={siteConfig.bookingUrl}
              calendarEmbedUrl={siteConfig.calendarEmbedUrl}
              messages={t}
            />
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={100}>
            <div className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 text-center shadow-[var(--shadow)]">
              <p className="text-gray-600">{t.book.orCall}</p>
              <a
                href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                className="mt-3 inline-flex items-center justify-center rounded-xl bg-gold px-8 py-3.5 font-semibold text-gray-900 shadow-[var(--shadow)] transition hover:bg-gold-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              >
                {siteConfig.phone}
              </a>
            </div>
          </AnimateOnScroll>

          {/* Contact CTA */}
          <AnimateOnScroll animation="fade-up" delay={150}>
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                {locale === "en" ? "Have questions?" : "\u00bfTienes preguntas?"}
              </p>
              <Link
                href={`${base}/contact`}
                className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-vice-pink hover:underline"
              >
                {locale === "en" ? "Contact us" : "Cont\u00e1ctanos"}
                <span aria-hidden>&#8594;</span>
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
