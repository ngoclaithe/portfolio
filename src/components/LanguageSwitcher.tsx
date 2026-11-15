import React from "react";
import { useI18n } from "../i18n/context";
import { LANG_LABELS, Lang } from "../i18n/types";
import { Globe } from "lucide-react";

export const LanguageSwitcher: React.FC<{ compact?: boolean }> = ({ compact }) => {
  const { lang, setLang } = useI18n();

  const languages: Lang[] = ["en", "vi", "ja"];

  return (
    <div className="inline-flex items-center gap-1 p-1 rounded-lg bg-neutral-900 border border-neutral-800 text-xs font-mono">
      <Globe className="w-3.5 h-3.5 text-neutral-400 ml-1.5 hidden sm:inline" />
      {languages.map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-2 py-1 rounded transition-colors flex items-center gap-1 ${
            lang === l
              ? "bg-emerald-600 text-neutral-950 font-bold shadow-sm"
              : "text-neutral-400 hover:text-white hover:bg-neutral-800/80"
          }`}
          title={LANG_LABELS[l].label}
        >
          <span>{LANG_LABELS[l].flag}</span>
          <span className="text-[11px] font-semibold">{LANG_LABELS[l].short}</span>
        </button>
      ))}
    </div>
  );
};
