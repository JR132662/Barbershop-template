import { getMessages } from "@/lib/i18n";
import { siteConfig } from "@/config/site";
import { getHomeSectionIds } from "@/config/sections";
import { renderSection } from "@/sections";
import type { Locale } from "@/lib/i18n";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = getMessages(locale);
  const base = `/${locale}`;

  const sectionIds = getHomeSectionIds(siteConfig.homeSections);
  const ctx = { locale, t, siteConfig, base };

  return (
    <div className="flex flex-col">
      {sectionIds.map((id) => (
        <div key={id}>{renderSection(id, ctx)}</div>
      ))}
    </div>
  );
}
