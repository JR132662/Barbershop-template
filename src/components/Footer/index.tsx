import { getFooterVariant } from "@/config/components";
import type { Locale } from "@/lib/i18n";
import type { Messages } from "@/lib/i18n";
import { Footer } from "./Footer";
import { FooterV2 } from "./FooterV2";
import { FooterV3 } from "./FooterV3";
import { FooterV4 } from "./FooterV4";

/**
 * Renders the active footer variant based on src/config/sections.ts (footerVariant).
 */
export function FooterPicker({
  locale,
  messages,
}: {
  locale: Locale;
  messages: Messages;
}) {
  const variant = getFooterVariant();
  if (variant === "v2") {
    return <FooterV2 locale={locale} messages={messages} />;
  }
  if (variant === "v3") {
    return <FooterV3 locale={locale} messages={messages} />;
  }
  if (variant === "v4") {
    return <FooterV4 locale={locale} messages={messages} />;
  }
  return <Footer locale={locale} messages={messages} />;
}

export { Footer } from "./Footer";
export { FooterV2 } from "./FooterV2";
export { FooterV3 } from "./FooterV3";
export { FooterV4 } from "./FooterV4";
