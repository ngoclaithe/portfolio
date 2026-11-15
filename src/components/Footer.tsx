import React from "react";
import { profile } from "../data/profile";
import { useI18n } from "../i18n/context";
import { ShieldCheck, ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const { t } = useI18n();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-neutral-800 bg-neutral-950 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand info with avatar */}
          <div className="flex items-center gap-3">
            <img
              src="/avatar.jpg"
              alt={profile.name}
              className="w-9 h-9 rounded-full object-cover border border-neutral-700 shadow-sm"
            />
            <div>
              <div className="font-semibold text-neutral-200">
                {profile.name} — {t("footer.roleTitle")}
              </div>
              <div className="text-[11px] text-neutral-500 font-mono">
                {t("footer.subtitle")}
              </div>
            </div>
          </div>

          {/* Quick links & Scroll to top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-neutral-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t("footer.ndaNote")}</span>
            </div>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="mt-8 pt-6 border-t border-neutral-850 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-neutral-500 font-mono">
          <div>
            © {new Date().getFullYear()} {profile.name}. {t("footer.copyright")}
          </div>
          <div>
            {t("footer.tagline")}
          </div>
        </div>
      </div>
    </footer>
  );
};
