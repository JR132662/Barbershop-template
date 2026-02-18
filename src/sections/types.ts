import type { Messages } from "@/messages/types";
import type { Locale } from "@/lib/i18n";
import type { SiteConfig } from "@/config/site";

/** Shared context passed to every home section. Use this to build section components. */
export interface HomeSectionContext {
  locale: Locale;
  t: Messages;
  siteConfig: SiteConfig;
  /** Base path for locale (e.g. "/en", "/es") */
  base: string;
}
