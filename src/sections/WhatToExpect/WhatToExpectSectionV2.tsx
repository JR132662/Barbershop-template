import type { HomeSectionContext } from "../types";

/**
 * What to expect variant 2: Horizontal timeline with connecting line. Use section ID "what-to-expect-v2" in homeSections.
 */
export function WhatToExpectSectionV2({ t }: HomeSectionContext) {
  const home = t.home as Record<string, string | undefined>;
  const steps = [
    { num: 1, title: home.whatToExpect1Title ?? "Check in", body: home.whatToExpect1Body ?? "" },
    { num: 2, title: home.whatToExpect2Title ?? "Consult", body: home.whatToExpect2Body ?? "" },
    { num: 3, title: home.whatToExpect3Title ?? "Relax & enjoy", body: home.whatToExpect3Body ?? "" },
  ];

  return (
    <section className="border-t border-[var(--border)] bg-[var(--surface)] py-20 md:py-28">
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
        <div className="relative">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gold/30 md:block" aria-hidden />
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`relative flex flex-col gap-6 md:flex-row md:items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="flex-1 md:px-12">
                  <h3 className="font-heading text-lg font-semibold text-gray-950">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{step.body}</p>
                </div>
                <div className="flex shrink-0 justify-center md:relative md:z-10">
                  <span
                    className="inline-flex h-14 w-14 items-center justify-center rounded-full border-4 border-gold bg-white text-xl font-bold text-gray-900 shadow-[var(--shadow)]"
                    aria-hidden
                  >
                    {step.num}
                  </span>
                </div>
                <div className="flex-1 md:px-12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
