import Link from "next/link";
import type { HomeSectionContext } from "../types";

/**
 * Visit us variant 3: Dark panel, no image — info blocks only. Use section ID "visit-us-v3" in homeSections.
 */
export function VisitUsSectionV3({ t, siteConfig, base }: HomeSectionContext) {
  const home = t.home as Record<string, string | undefined>;
  return (
    <section className="border-t border-[var(--border)] bg-gray-950 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
            {home.visitUsTitle ?? "Visit us"}
          </p>
          <h2 className="mt-2 font-heading text-2xl font-semibold tracking-tight text-white md:text-3xl">
            {home.visitUsSubtitle ?? "Stop by or book ahead. We're here for you."}
          </h2>
        </header>
        <div className="grid gap-8 sm:grid-cols-3 md:gap-12">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--gold)]">
              {t.home.hoursTitle}
            </h3>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li>Mon – Fri: {siteConfig.hours.monday}</li>
              <li>Sat: {siteConfig.hours.saturday}</li>
              <li>Sun: {siteConfig.hours.sunday}</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--gold)]">
              {t.home.locationTitle}
            </h3>
            <p className="mt-4 text-gray-300">
              {siteConfig.address.line1}
              <br />
              {siteConfig.address.city}, {siteConfig.address.state}{" "}
              {siteConfig.address.zip}
            </p>
            {siteConfig.parkingInfo ? (
              <p className="mt-2 text-sm text-gray-400">
                {t.home.parkingTitle}: {siteConfig.parkingInfo}
              </p>
            ) : null}
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--gold)]">
              {t.home.phoneLabel}
            </h3>
            <a
              href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
              className="mt-4 block text-xl font-semibold text-white hover:text-[var(--gold)]"
            >
              {siteConfig.phone}
            </a>
            <Link
              href={`${base}/book`}
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-[var(--gold)] px-6 py-3 font-semibold text-gray-900 transition hover:opacity-90"
            >
              {t.home.bookAppointment}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
