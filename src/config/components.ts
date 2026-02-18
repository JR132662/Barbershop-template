import {
  getHeaderVariant as getHeaderVariantFromSections,
  getFooterVariant as getFooterVariantFromSections,
} from "@/config/sections";

export type { HeaderVariantId, FooterVariantId } from "@/config/sections";
export { HEADER_VARIANT_IDS, FOOTER_VARIANT_IDS } from "@/config/sections";

/**
 * Component variant configuration. Navbar and footer variants are set in src/config/sections.ts.
 * These getters are used by HeaderPicker and FooterPicker.
 */
export function getHeaderVariant() {
  return getHeaderVariantFromSections();
}

export function getFooterVariant() {
  return getFooterVariantFromSections();
}
