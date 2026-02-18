import type { HomeSectionContext } from "../types";

export function WhatToExpectSection({ t }: HomeSectionContext) {
  const home = t.home as Record<string, string | undefined>;
  const steps = [
    { num: 1, title: home.whatToExpect1Title ?? "Check in", body: home.whatToExpect1Body ?? "" },
    { num: 2, title: home.whatToExpect2Title ?? "Consult", body: home.whatToExpect2Body ?? "" },
    { num: 3, title: home.whatToExpect3Title ?? "Relax & enjoy", body: home.whatToExpect3Body ?? "" },
  ];

  return (
    <section className="border-t border-[var(--border)] bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="mb-14 text-center md:mb-20">
          <p className="section-label">{home.whatToExpectTitle ?? "What to expect"}</p>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-gray-950 md:text-4xl">
            Your visit, step by step
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            {home.whatToExpectSubtitle ?? "Your visit, step by step."}
          </p>
        </header>
        <div className="grid gap-10 sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.num} className="text-center">
              <span
                className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gold text-xl font-bold text-gray-900 shadow-[var(--shadow)]"
                aria-hidden
              >
                {step.num}
              </span>
              <h3 className="mt-5 font-heading text-lg font-semibold text-gray-950">
                {step.title}
              </h3>
              <p className="mt-2 text-gray-600 max-w-xs mx-auto">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
