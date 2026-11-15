import React from "react";
import { profile } from "../data/profile";
import { useI18n } from "../i18n/context";
import { GraduationCap, Globe2, Layers, CheckCircle2 } from "lucide-react";

export const About: React.FC = () => {
  const { t, lang: currentLang } = useI18n();

  const localizedLanguages = {
    vi: [
      { name: "Tiếng Việt", level: "Bản ngữ" },
      { name: "Tiếng Nhật", level: "Làm việc với khách hàng & IT Nhật Bản" },
      { name: "Tiếng Anh", level: "Đọc hiểu văn bản & tài liệu kỹ thuật" }
    ],
    en: [
      { name: "Vietnamese", level: "Native" },
      { name: "Japanese", level: "Professional Working (Japanese IT Clients)" },
      { name: "English", level: "Technical Reading & Documentation Comprehension" }
    ],
    ja: [
      { name: "ベトナム語", level: "母国語" },
      { name: "日本語", level: "実務対応（日系企業・IT業務対応）" },
      { name: "英語", level: "技術文書・仕様書の読解" }
    ]
  };

  const currentLanguages = localizedLanguages[currentLang] || localizedLanguages.en;

  return (
    <section id="about" className="py-20 border-t border-neutral-800/80 bg-neutral-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
            {t("about.badge")}
          </span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-10">
          {t("about.title")}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main narrative */}
          <div className="lg:col-span-7 space-y-5 text-neutral-300 leading-relaxed text-sm sm:text-base">
            {profile.bio.map((paragraph, idx) => (
              <p key={idx} className="text-neutral-300">
                {paragraph}
              </p>
            ))}

            <div className="pt-4 border-t border-neutral-800">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3 font-mono flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                {t("about.coreTenets")}
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-neutral-400">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span><strong>{t("about.tenet1Title")}</strong> {t("about.tenet1Desc")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span><strong>{t("about.tenet2Title")}</strong> {t("about.tenet2Desc")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span><strong>{t("about.tenet3Title")}</strong> {t("about.tenet3Desc")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span><strong>{t("about.tenet4Title")}</strong> {t("about.tenet4Desc")}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Side Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Education Card */}
            <div className="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">{t("about.eduTitle")}</h4>
                  <p className="text-xs text-neutral-400 font-mono">{t("about.eduPeriod")}</p>
                </div>
              </div>
              <p className="text-xs font-semibold text-emerald-400 mb-2">{t("about.eduDegree")}</p>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {t("about.eduDesc")}
              </p>
            </div>

            {/* Languages & International Collaboration */}
            <div className="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  <Globe2 className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-white text-sm">{t("about.langTitle")}</h4>
              </div>
              <div className="space-y-2">
                {currentLanguages.map((l) => (
                  <div key={l.name} className="flex items-center justify-between text-xs py-1 border-b border-neutral-800/60 last:border-0">
                    <span className="font-medium text-neutral-200">{l.name}</span>
                    <span className="font-mono text-neutral-400">{l.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Industry Verticals */}
            <div className="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <Layers className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-white text-sm">{t("about.domainsTitle")}</h4>
              </div>
              <div className="flex flex-wrap gap-1.5 text-xs">
                {["Manufacturing & Printing ERP", "Import/Export & Customs", "Enterprise HRM & Payroll", "EdTech LMS", "IoT Edge & Telemetry", "Analytical OLAP Platforms", "High-Volume E-Commerce"].map((domain) => (
                  <span key={domain} className="px-2 py-1 rounded bg-neutral-800/80 text-neutral-300 font-mono text-[11px]">
                    {domain}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
