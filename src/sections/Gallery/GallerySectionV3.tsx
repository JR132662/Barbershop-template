import Image from "next/image";
import type { HomeSectionContext } from "../types";

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80",
  "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&q=80",
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=80",
];

/**
 * Gallery variant 3: Dark panel with bordered images. Use section ID "gallery-v3" in homeSections.
 */
export function GallerySectionV3({ t, siteConfig: _siteConfig }: HomeSectionContext) {
  const home = t.home as Record<string, string | undefined>;
  return (
    <section className="border-t border-[var(--border)] bg-gray-950 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="mb-14 text-center md:mb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
            {home.galleryTitle ?? "Our space"}
          </p>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Where craft meets comfort
          </h2>
          <p className="mt-3 text-gray-400 max-w-xl mx-auto">
            {home.gallerySubtitle ?? "Where craft meets comfort."}
          </p>
        </header>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 md:gap-6">
          {GALLERY_IMAGES.map((src, i) => (
            <div
              key={i}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/20 bg-gray-900"
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover opacity-90"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
