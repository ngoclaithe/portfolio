export type Lang = "en" | "vi" | "ja";

export const LANG_LABELS: Record<Lang, { label: string; short: string; flag: string }> = {
  en: { label: "English", short: "EN", flag: "🇺🇸" },
  vi: { label: "Tiếng Việt", short: "VI", flag: "🇻🇳" },
  ja: { label: "日本語", short: "JA", flag: "🇯🇵" },
};

export const LANG_HTML: Record<Lang, string> = {
  en: "en",
  vi: "vi",
  ja: "ja",
};
