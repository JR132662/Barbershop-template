import Link from "next/link";
import { serviceIds } from "@/config/site";
import type { HomeSectionContext } from "../types";
import type { ServiceId } from "@/config/site";

/**
 * Services preview variant 4: Minimal list — no images, text-only links. Use section ID "services-preview-v4" in homeSections.
 */
export function ServicesPreviewSectionV4({ t, base }: HomeSectionContext) {
  const home = t.home as Record<string, string | undefined>;
  const previewServiceIds = serviceIds.slice(0, 4) as ServiceId[];
  const servicesSection = t.services as Record<
    string,
    { name?: string; description?: string; duration?: string }
  >;

  return (
    <section className="border-t border-[var(--border)] bg-white py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <header className="mb-14 text-center md:mb-20">
          <p className="section-label">{home.servicesPreviewTitle ?? "What we offer"}</p>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-gray-950 md:text-4xl">
            Classic services, modern precision
          </h2>
          <p className="mt-3 text-gray-600">
            {home.servicesPreviewSubtitle ?? "Classic services, modern precision."}
          </p>
        </header>
        <ul className="space-y-0">
          {previewServiceIds.map((id, i) => {
            const s = servicesSection[id];
            const name = s?.name ?? id;
            const desc = s?.description ?? "";
            return (
              <li
                key={id}
                className="border-b border-[var(--border)] py-6 last:border-0 last:pb-0 first:pt-0"
              >
                <Link
                  href={`${base}/services`}
                  className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                >
                  <span className="font-heading text-xl font-semibold text-gray-950 group-hover:text-gold">
                    {name}
                  </span>
                  <p className="mt-1 text-gray-600">{desc}</p>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="mt-10 text-center">
          <Link
            href={`${base}/services`}
            className="inline-flex items-center gap-2 font-semibold text-gold hover:underline"
          >
            {home.servicesPreviewCta ?? "View all services"}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
