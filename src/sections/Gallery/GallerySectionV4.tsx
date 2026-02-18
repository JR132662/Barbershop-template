import Image from "next/image";
import type { HomeSectionContext } from "../types";

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80",
  "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&q=80",
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=80",
];

/**
 * Gallery variant 4: Masonry-style — one large, two smaller. Use section ID "gallery-v4" in homeSections.
 */
export function GallerySectionV4({ t, siteConfig: _siteConfig }: HomeSectionContext) {
  const home = t.home as Record<string, string | undefined>;
  return (
    <section className="border-t border-[var(--border)] bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="mb-14 text-center md:mb-20">
          <p className="section-label">{home.galleryTitle ?? "Our space"}</p>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-gray-950 md:text-4xl">
            Where craft meets comfort
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            {home.gallerySubtitle ?? "Where craft meets comfort."}
          </p>
        </header>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 shadow-[var(--shadow)] sm:row-span-2 sm:aspect-auto sm:min-h-[320px]">
            <Image
              src={GALLERY_IMAGES[0]}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 shadow-[var(--shadow)]">
            <Image
              src={GALLERY_IMAGES[1]}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 shadow-[var(--shadow)]">
            <Image
              src={GALLERY_IMAGES[2]}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
