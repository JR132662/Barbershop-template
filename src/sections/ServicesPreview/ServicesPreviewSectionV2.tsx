import Link from "next/link";
import Image from "next/image";
import { serviceIds } from "@/config/site";
import type { HomeSectionContext } from "../types";
import type { ServiceId } from "@/config/site";

const SERVICES_IMAGES = [
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80",
  "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&q=80",
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&q=80",
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80",
];

/**
 * Services preview variant 2: Split layout — header left, cards right in 2 columns. Use section ID "services-preview-v2" in homeSections.
 */
export function ServicesPreviewSectionV2({ t, base }: HomeSectionContext) {
  const home = t.home as Record<string, string | undefined>;
  const previewServiceIds = serviceIds.slice(0, 4) as ServiceId[];
  const servicesSection = t.services as Record<
    string,
    { name?: string; description?: string; duration?: string }
  >;

  return (
    <section className="border-t border-[var(--border)] bg-[var(--surface)] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16 lg:items-start">
          <div className="lg:col-span-2">
            <p className="section-label">{home.servicesPreviewTitle ?? "What we offer"}</p>
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-gray-950 md:text-4xl">
              Classic services, modern precision
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              {home.servicesPreviewSubtitle ?? "Classic services, modern precision."}
            </p>
            <Link
              href={`${base}/services`}
              className="mt-8 inline-flex items-center gap-2 rounded-xl border-2 border-gold bg-transparent px-6 py-3 font-semibold text-gold transition hover:bg-gold hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            >
              {home.servicesPreviewCta ?? "View all services"}
              <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-3">
            {previewServiceIds.map((id, i) => {
              const s = servicesSection[id];
              const name = s?.name ?? id;
              const desc = s?.description ?? "";
              return (
                <Link
                  key={id}
                  href={`${base}/services`}
                  className="group flex gap-4 overflow-hidden rounded-2xl border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)] transition hover:shadow-[var(--shadow)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                >
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-gray-100">
                    <Image
                      src={SERVICES_IMAGES[i % SERVICES_IMAGES.length]}
                      alt=""
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                      sizes="96px"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-heading text-lg font-semibold text-gray-950">
                      {name}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-sm text-gray-600">{desc}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
