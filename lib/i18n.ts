export const LOCALES = [
  'ar', 'bn', 'cs', 'de', 'el', 'en', 'es', 'fr',
  'id', 'it', 'ja', 'ko', 'nl', 'pl', 'pt', 'ro',
  'ru', 'sr', 'th', 'tr', 'zh-CN',
] as const;

export type Locale = typeof LOCALES[number];

export const DEFAULT_LOCALE: Locale = 'en';

export const RTL_LOCALES: Locale[] = ['ar'];

// Native names — what shows up inside the language picker
export const LOCALE_LABELS: Record<Locale, string> = {
  ar: 'العربية',
  bn: 'বাংলা',
  cs: 'Čeština',
  de: 'Deutsch',
  el: 'Ελληνικά',
  en: 'English',
  es: 'Español',
  fr: 'Français',
  id: 'Bahasa',
  it: 'Italiano',
  ja: '日本語',
  ko: '한국어',
  nl: 'Nederlands',
  pl: 'Polski',
  pt: 'Português',
  ro: 'Română',
  ru: 'Русский',
  sr: 'Srpski',
  th: 'ไทย',
  tr: 'Türkçe',
  'zh-CN': '简体中文',
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

// og:locale mapping for OpenGraph metadata
export const OG_LOCALE: Record<Locale, string> = {
  ar: 'ar_AR', bn: 'bn_BD', cs: 'cs_CZ', de: 'de_DE', el: 'el_GR',
  en: 'en_US', es: 'es_ES', fr: 'fr_FR', id: 'id_ID', it: 'it_IT',
  ja: 'ja_JP', ko: 'ko_KR', nl: 'nl_NL', pl: 'pl_PL', pt: 'pt_BR',
  ro: 'ro_RO', ru: 'ru_RU', sr: 'sr_RS', th: 'th_TH', tr: 'tr_TR',
  'zh-CN': 'zh_CN',
};
