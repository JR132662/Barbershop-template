"use client";

import type { Locale } from "@/lib/i18n";
import type { Messages } from "@/lib/i18n";

export function BookingSection({
  locale,
  bookingUrl,
  calendarEmbedUrl,
  messages,
}: {
  locale: Locale;
  bookingUrl: string;
  calendarEmbedUrl: string;
  messages: Messages;
}) {
  if (bookingUrl) {
    return (
      <div className="rounded-2xl border border-[var(--border)] bg-white p-8 shadow-[var(--shadow-lg)]">
        <p className="mb-5 text-gray-600">{messages.book.useCalendar}</p>
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-xl bg-gold px-8 py-3.5 font-semibold text-gray-900 shadow-[var(--shadow)] transition hover:bg-gold-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
        >
          {locale === "en" ? "Open booking calendar" : "Abrir calendario de reservas"}
        </a>
      </div>
    );
  }

  if (calendarEmbedUrl) {
    return (
      <div className="rounded-2xl border border-[var(--border)] bg-white p-8 shadow-[var(--shadow-lg)]">
        <p className="mb-5 text-gray-600">{messages.book.useCalendar}</p>
        <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-100">
          <iframe
            src={calendarEmbedUrl}
            title="Booking calendar"
            className="h-full w-full"
            allowFullScreen
          />
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-[var(--border)] bg-white p-8 shadow-[var(--shadow)]">
      <p className="text-gray-600 font-medium">{messages.book.calendarPlaceholder}</p>
      <p className="mt-3 text-sm text-gray-500 leading-relaxed">
        {locale === "en"
          ? "Set bookingUrl or calendarEmbedUrl in src/config/site.ts to enable online booking or a calendar embed."
          : "Configura bookingUrl o calendarEmbedUrl en src/config/site.ts para habilitar reservas en línea o un calendario."}
      </p>
    </div>
  );
}
