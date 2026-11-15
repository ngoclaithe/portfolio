export type Lang = "en" | "vi" | "ja";

export const LANG_LABELS: Record<Lang, { code: string; name: string }> = {
  en: { code: "EN", name: "English" },
  vi: { code: "VN", name: "Tiếng Việt" },
  ja: { code: "JP", name: "日本語" },
};

export const LANG_HTML: Record<Lang, string> = {
  en: "en",
  vi: "vi",
  ja: "ja",
};
