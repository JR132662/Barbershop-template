"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export function GalleryLightbox({ images }: { images: string[] }) {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);

  const prev = useCallback(() => {
    if (open === null) return;
    setOpen((open - 1 + images.length) % images.length);
  }, [open, images.length]);

  const next = useCallback(() => {
    if (open === null) return;
    setOpen((open + 1) % images.length);
  }, [open, images.length]);

  useEffect(() => {
    if (open === null) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [open, close, prev, next]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
        {images.map((src, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setOpen(i)}
            className="group relative aspect-square overflow-hidden rounded-2xl bg-gray-100 shadow-[var(--shadow)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-cover transition duration-500 group-hover:scale-110"
              sizes="(max-width: 640px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/20" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-gray-900 shadow-lg">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <circle cx="9" cy="9" r="6" />
                  <path d="M13.5 13.5L17 17" />
                  <path d="M9 6v6M6 9h6" />
                </svg>
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox overlay */}
      {open !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal
          aria-label="Image gallery"
        >
          <button
            type="button"
            onClick={close}
            className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Close lightbox"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 4l12 12M16 4L4 16" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Previous image"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 16l-6-6 6-6" />
            </svg>
          </button>

          <div
            className="relative h-[80vh] w-[90vw] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[open]}
              alt=""
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Next image"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 4l6 6-6 6" />
            </svg>
          </button>

          <div className="absolute bottom-6 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={(e) => { e.stopPropagation(); setOpen(i); }}
                className={`h-2 rounded-full transition-all ${
                  i === open ? "w-6 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`View image ${i + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
