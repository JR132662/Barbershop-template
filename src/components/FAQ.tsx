"use client";

import { useState } from "react";

export type FAQItem = { question: string; answer: string };

export function FAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="rounded-2xl border border-[var(--border)] bg-white overflow-hidden shadow-[var(--shadow-sm)] transition hover:shadow-[var(--shadow)]"
        >
          <button
            type="button"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left font-semibold text-gray-950 hover:bg-[var(--surface)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-inset"
            aria-expanded={openIndex === i}
          >
            <span>{item.question}</span>
            <span
              className={`shrink-0 flex h-8 w-8 items-center justify-center rounded-lg bg-gold/15 text-gold text-lg font-bold transition-transform ${
                openIndex === i ? "rotate-45" : ""
              }`}
              aria-hidden
            >
              +
            </span>
          </button>
          <div
            className={`grid transition-[grid-template-rows] duration-200 ease-out ${
              openIndex === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <p className="border-t border-[var(--border)] px-6 py-4 text-gray-600 leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
