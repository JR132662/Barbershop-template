import Link from "next/link";
import Image from "next/image";
import type { HomeSectionContext } from "../types";

const VISIT_IMAGE =
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=900&q=80";

/**
 * Visit us variant 2: Image on right, content on left. Use section ID "visit-us-v2" in homeSections.
 */
export function VisitUsSectionV2({ t, siteConfig, base }: HomeSectionContext) {
  const home = t.home as Record<string, string | undefined>;
  return (
    <section className="border-t border-[var(--border)] bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-[var(--shadow-lg)] md:grid md:grid-cols-5">
          <div className="flex flex-col justify-center p-8 md:col-span-3 md:order-2 md:p-12">
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-gray-950 md:text-3xl">
              {home.visitUsTitle ?? "Visit us"}
            </h2>
            <p className="mt-2 text-gray-600">
              {home.visitUsSubtitle ?? "Stop by or book ahead. We're here for you."}
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                  {t.home.hoursTitle}
                </h3>
                <ul className="mt-2 space-y-1 text-gray-700">
                  <li>Mon – Fri: {siteConfig.hours.monday}</li>
                  <li>Sat: {siteConfig.hours.saturday}</li>
                  <li>Sun: {siteConfig.hours.sunday}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                  {t.home.locationTitle}
                </h3>
                <p className="mt-2 text-gray-700">
                  {siteConfig.address.line1}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.state}{" "}
                  {siteConfig.address.zip}
                </p>
                {siteConfig.parkingInfo ? (
                  <p className="mt-2 text-sm text-gray-600">
                    {t.home.parkingTitle}: {siteConfig.parkingInfo}
                  </p>
                ) : null}
                <h3 className="mt-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
                  {t.home.phoneLabel}
                </h3>
                <a
                  href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                  className="mt-1 block font-medium text-gold hover:underline"
                >
                  {siteConfig.phone}
                </a>
              </div>
            </div>
            <div className="mt-8">
              <Link
                href={`${base}/book`}
                className="inline-flex items-center justify-center rounded-xl bg-gold px-8 py-3.5 font-semibold text-gray-900 shadow-[var(--shadow)] transition hover:bg-gold-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              >
                {t.home.bookAppointment}
              </Link>
            </div>
          </div>
          <div className="relative aspect-[2/1] md:col-span-2 md:order-1 md:aspect-auto md:min-h-[280px]">
            <Image
              src={VISIT_IMAGE}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
