import React, { useState, useRef, useEffect } from "react";
import { useI18n } from "../i18n/context";
import { LANG_LABELS, Lang } from "../i18n/types";
import { Globe, ChevronDown, Check } from "lucide-react";

export const LanguageSwitcher: React.FC = () => {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: Lang[] = ["en", "vi", "ja"];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Trigger Button: 1 compact box */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-xs font-mono text-neutral-200 transition-colors shadow-sm"
        aria-expanded={open}
      >
        <Globe className="w-3.5 h-3.5 text-emerald-400" />
        <span className="font-bold">{LANG_LABELS[lang].code}</span>
        <ChevronDown className={`w-3 h-3 text-neutral-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute right-0 mt-2 w-32 rounded-xl bg-neutral-900 border border-neutral-800 shadow-xl py-1 z-50 animate-in fade-in zoom-in-95 duration-150">
          {languages.map((l) => (
            <button
              key={l}
              onClick={() => {
                setLang(l);
                setOpen(false);
              }}
              className={`w-full text-left px-3 py-2 text-xs font-mono flex items-center justify-between transition-colors ${
                lang === l
                  ? "bg-emerald-500/10 text-emerald-400 font-bold"
                  : "text-neutral-300 hover:bg-neutral-800/80 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="font-bold w-6">{LANG_LABELS[l].code}</span>
                <span className="text-neutral-400 text-[11px] font-sans">{LANG_LABELS[l].name}</span>
              </div>
              {lang === l && <Check className="w-3 h-3 text-emerald-400" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
