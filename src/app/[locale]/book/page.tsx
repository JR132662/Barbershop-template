import { getMessages } from "@/lib/i18n";
import { siteConfig } from "@/config/site";
import type { Locale } from "@/lib/i18n";
import { BookingSection } from "@/components/BookingSection";

export default async function BookPage({
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
          <p className="section-label">Book</p>
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

      <section className="px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-2xl">
          <BookingSection
            locale={locale}
            bookingUrl={siteConfig.bookingUrl}
            calendarEmbedUrl={siteConfig.calendarEmbedUrl}
            messages={t}
          />
          <div className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 text-center shadow-[var(--shadow)]">
            <p className="text-gray-600">{t.book.orCall}</p>
            <a
              href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
              className="mt-3 inline-flex items-center justify-center rounded-xl bg-gold px-8 py-3.5 font-semibold text-gray-900 shadow-[var(--shadow)] transition hover:bg-gold-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            >
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
