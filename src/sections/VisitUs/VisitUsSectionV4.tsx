import Link from "next/link";
import Image from "next/image";
import type { HomeSectionContext } from "../types";

const VISIT_IMAGE =
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=900&q=80";

/**
 * Visit us variant 4: Minimal — full-width image above, content below. Use section ID "visit-us-v4" in homeSections.
 */
export function VisitUsSectionV4({ t, siteConfig, base }: HomeSectionContext) {
  const home = t.home as Record<string, string | undefined>;
  return (
    <section className="border-t border-[var(--border)] bg-[var(--surface)] py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-[var(--shadow-lg)]">
          <div className="relative aspect-[16/9]">
            <Image
              src={VISIT_IMAGE}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </div>
          <div className="p-8 text-center md:p-12">
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-gray-950 md:text-3xl">
              {home.visitUsTitle ?? "Visit us"}
            </h2>
            <p className="mt-2 text-gray-600">
              {home.visitUsSubtitle ?? "Stop by or book ahead. We're here for you."}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-x-12 gap-y-4 text-gray-700">
              <span>Mon – Fri: {siteConfig.hours.monday}</span>
              <span>Sat: {siteConfig.hours.saturday}</span>
              <span>Sun: {siteConfig.hours.sunday}</span>
            </div>
            <p className="mt-4 text-gray-700">
              {siteConfig.address.line1}, {siteConfig.address.city}, {siteConfig.address.state}{" "}
              {siteConfig.address.zip}
            </p>
            <a
              href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
              className="mt-2 inline-block font-medium text-gold hover:underline"
            >
              {siteConfig.phone}
            </a>
            <div className="mt-8">
              <Link
                href={`${base}/book`}
                className="inline-flex items-center justify-center rounded-xl bg-gold px-8 py-3.5 font-semibold text-gray-900 shadow-[var(--shadow)] transition hover:bg-gold-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              >
                {t.home.bookAppointment}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
