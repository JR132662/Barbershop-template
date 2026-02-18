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

export function ServicesPreviewSection({ t, base }: HomeSectionContext) {
  const home = t.home as Record<string, string | undefined>;
  const previewServiceIds = serviceIds.slice(0, 4) as ServiceId[];
  const servicesSection = t.services as Record<
    string,
    { name?: string; description?: string; duration?: string }
  >;

  return (
    <section className="border-t border-[var(--border)] bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="mb-14 text-center md:mb-20">
          <p className="section-label">{home.servicesPreviewTitle ?? "What we offer"}</p>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-gray-950 md:text-4xl">
            Classic services, modern precision
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
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
                className="group block overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-[var(--shadow)] transition hover:shadow-[var(--shadow-lg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              >
                <div className="relative aspect-[3/2] bg-gray-100 overflow-hidden">
                  <Image
                    src={SERVICES_IMAGES[i % SERVICES_IMAGES.length]}
                    alt=""
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg font-semibold text-gray-950">
                    {name}
                  </h3>
                  <p className="mt-1.5 line-clamp-2 text-sm text-gray-600">
                    {desc}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="mt-14 text-center">
          <Link
            href={`${base}/services`}
            className="inline-flex items-center gap-2 rounded-xl border-2 border-gold bg-transparent px-6 py-3 font-semibold text-gold transition hover:bg-gold hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
          >
            {home.servicesPreviewCta ?? "View all services"}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
