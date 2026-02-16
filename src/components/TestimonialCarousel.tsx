"use client";

import { useState, useEffect, useCallback } from "react";

type Testimonial = {
  quote: string;
  author: string;
  rating: number;
};

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 20 20"
          fill={i < count ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.5"
          className={i < count ? "text-vice-pink" : "text-gray-300"}
        >
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.49L10 14.26 5.06 16.7l.94-5.49-4-3.9 5.53-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialCarousel({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent(index);
        setIsTransitioning(false);
      }, 200);
    },
    [isTransitioning]
  );

  const next = useCallback(() => {
    goTo((current + 1) % testimonials.length);
  }, [current, testimonials.length, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <div className="relative">
      <div
        className={`rounded-2xl border border-[var(--border)] bg-white p-8 md:p-12 text-center shadow-[var(--shadow-lg)] transition-opacity duration-200 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="flex justify-center mb-5">
          <Stars count={t.rating} />
        </div>
        <blockquote>
          <p className="font-heading text-xl font-medium leading-relaxed text-gray-700 sm:text-2xl md:text-3xl">
            &ldquo;{t.quote}&rdquo;
          </p>
          <cite className="mt-6 block text-sm font-semibold text-vice-pink not-italic">
            {t.author}
          </cite>
        </blockquote>
      </div>

      {/* Navigation */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() =>
            goTo((current - 1 + testimonials.length) % testimonials.length)
          }
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-white text-gray-500 shadow-sm transition hover:bg-[var(--surface)] hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          aria-label="Previous testimonial"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 12L6 8l4-4" />
          </svg>
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 bg-vice-pink"
                  : "w-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={next}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-white text-gray-500 shadow-sm transition hover:bg-[var(--surface)] hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          aria-label="Next testimonial"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 4l4 4-4 4" />
          </svg>
        </button>
      </div>
    </div>
  );
}
