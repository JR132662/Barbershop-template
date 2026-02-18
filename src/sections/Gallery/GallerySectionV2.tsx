import Image from "next/image";
import type { HomeSectionContext } from "../types";

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80",
  "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&q=80",
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=80",
];

/**
 * Gallery variant 2: Split layout — header left, images right in 2 columns. Use section ID "gallery-v2" in homeSections.
 */
export function GallerySectionV2({ t, siteConfig: _siteConfig }: HomeSectionContext) {
  const home = t.home as Record<string, string | undefined>;
  return (
    <section className="border-t border-[var(--border)] bg-[var(--surface)] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16 lg:items-start">
          <div className="lg:col-span-2">
            <p className="section-label">{home.galleryTitle ?? "Our space"}</p>
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-gray-950 md:text-4xl">
              Where craft meets comfort
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              {home.gallerySubtitle ?? "Where craft meets comfort."}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:col-span-3">
            {GALLERY_IMAGES.map((src, i) => (
              <div
                key={i}
                className={`relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 shadow-[var(--shadow)] ${i === 0 ? "col-span-2" : ""}`}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
