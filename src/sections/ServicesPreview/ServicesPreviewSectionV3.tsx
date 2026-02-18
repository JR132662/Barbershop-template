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
 * Services preview variant 3: Dark panel with gold-accent cards. Use section ID "services-preview-v3" in homeSections.
 */
export function ServicesPreviewSectionV3({ t, base }: HomeSectionContext) {
  const home = t.home as Record<string, string | undefined>;
  const previewServiceIds = serviceIds.slice(0, 4) as ServiceId[];
  const servicesSection = t.services as Record<
    string,
    { name?: string; description?: string; duration?: string }
  >;

  return (
    <section className="border-t border-[var(--border)] bg-gray-950 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="mb-14 text-center md:mb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
            {home.servicesPreviewTitle ?? "What we offer"}
          </p>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Classic services, modern precision
          </h2>
          <p className="mt-3 text-gray-400 max-w-xl mx-auto">
            {home.servicesPreviewSubtitle ?? "Classic services, modern precision."}
          </p>
        </header>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {previewServiceIds.map((id, i) => {
            const s = servicesSection[id];
            const name = s?.name ?? id;
            const desc = s?.description ?? "";
            return (
              <Link
                key={id}
                href={`${base}/services`}
                className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition hover:border-[var(--gold)]/30 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={SERVICES_IMAGES[i % SERVICES_IMAGES.length]}
                    alt=""
                    fill
                    className="object-cover opacity-80 transition duration-300 group-hover:scale-105 group-hover:opacity-100"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 right-4 font-heading text-lg font-semibold text-white">
                    {name}
                  </h3>
                </div>
                <p className="line-clamp-2 p-4 text-sm text-gray-400">{desc}</p>
              </Link>
            );
          })}
        </div>
        <div className="mt-14 text-center">
          <Link
            href={`${base}/services`}
            className="inline-flex items-center gap-2 rounded-xl bg-[var(--gold)] px-6 py-3 font-semibold text-gray-900 transition hover:opacity-90"
          >
            {home.servicesPreviewCta ?? "View all services"}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
