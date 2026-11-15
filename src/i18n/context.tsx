import React, { createContext, useCallback, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import { en } from "./locales/en";
import { vi } from "./locales/vi";
import { ja } from "./locales/ja";
import { LANG_HTML, Lang } from "./types";

const STORAGE_KEY = "portfolio_lang";

const messages = { en, vi, ja };

function readLangFromUrl(): Lang | null {
  if (typeof window === "undefined") return null;
  const param = new URLSearchParams(window.location.search).get("lang");
  if (param === "en" || param === "ja" || param === "vi") return param;
  return null;
}

function getNestedValue(obj: Record<string, unknown>, path: string): unknown {
  return path.split(".").reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object" && key in (acc as object)) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
}

interface I18nContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string, vars?: Record<string, string | number>) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export const I18nProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    return readLangFromUrl() || (localStorage.getItem(STORAGE_KEY) as Lang) || "en";
  });

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
      const params = new URLSearchParams(window.location.search);
      if (next === "en") {
        params.delete("lang");
      } else {
        params.set("lang", next);
      }
      const query = params.toString();
      const hash = window.location.hash;
      window.history.replaceState(null, "", `${window.location.pathname}${query ? `?${query}` : ""}${hash}`);
      document.documentElement.lang = LANG_HTML[next];
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = LANG_HTML[lang];
  }, [lang]);

  const t = useCallback(
    (key: string, vars?: Record<string, string | number>) => {
      const currentMessages = messages[lang] as unknown as Record<string, unknown>;
      const fallbackMessages = messages.en as unknown as Record<string, unknown>;
      const value = getNestedValue(currentMessages, key) ?? getNestedValue(fallbackMessages, key);
      const raw = typeof value === "string" ? value : key;
      if (!vars) return raw;
      return Object.entries(vars).reduce(
        (text, [k, v]) => text.replace(new RegExp(`\\{${k}\\}`, "g"), String(v)),
        raw
      );
    },
    [lang]
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};
