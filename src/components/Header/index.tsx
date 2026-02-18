import { getHeaderVariant } from "@/config/components";
import type { Locale } from "@/lib/i18n";
import type { Messages } from "@/lib/i18n";
import { Header } from "./Header";
import { HeaderV2 } from "./HeaderV2";
import { HeaderV3 } from "./HeaderV3";

/**
 * Renders the active header variant based on src/config/sections.ts (headerVariant).
 * Import as HeaderPicker from "@/components/Header" for the layout.
 */
export function HeaderPicker({
  locale,
  messages,
}: {
  locale: Locale;
  messages: Messages;
}) {
  const variant = getHeaderVariant();
  if (variant === "v2") {
    return <HeaderV2 locale={locale} messages={messages} />;
  }
  if (variant === "v3") {
    return <HeaderV3 locale={locale} messages={messages} />;
  }
  return <Header locale={locale} messages={messages} />;
}

export { Header } from "./Header";
export { HeaderV2 } from "./HeaderV2";
export { HeaderV3 } from "./HeaderV3";
