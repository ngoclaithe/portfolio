import React from "react";
import { liveProjects } from "../data/projects";
import { useI18n } from "../i18n/context";
import { ExternalLink, Server, ShieldCheck } from "lucide-react";

export const LiveShowcase: React.FC = () => {
  const { t } = useI18n();

  return (
    <section id="live-systems" className="py-20 border-t border-neutral-800/80 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
            {t("live.badge")}
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-2">
              {t("live.title")}
            </h2>
            <p className="text-sm text-neutral-400 max-w-2xl">
              {t("live.subtitle")}
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 shrink-0 self-start md:self-auto">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>{t("live.restrictedAuth")}</span>
          </div>
        </div>

        {/* Live systems grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {liveProjects.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-neutral-900/50 border border-neutral-800/80 flex flex-col justify-between glass-panel-hover"
            >
              <div>
                {/* Header row with status */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-neutral-800 text-neutral-300 border border-neutral-700/60">
                    {item.category}
                  </span>
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>{t("live.liveStatus")}</span>
                  </div>
                </div>

                {/* System Name */}
                <h3 className="text-base font-bold text-white mb-1 tracking-tight">
                  {item.name}
                </h3>

                {/* Domain */}
                <div className="text-xs font-mono text-emerald-400/90 mb-3 flex items-center gap-1.5">
                  <Server className="w-3 h-3 text-neutral-500" />
                  <span>{item.domain}</span>
                </div>

                {/* Description */}
                <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Footer with stack & link */}
              <div className="pt-3 border-t border-neutral-800/70 flex items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1">
                  {item.stack.slice(0, 3).map((s) => (
                    <span
                      key={s}
                      className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-neutral-800/80 text-neutral-400"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-neutral-300 hover:text-emerald-400 transition-colors shrink-0 p-1.5 rounded hover:bg-neutral-800"
                  title={`Open ${item.domain}`}
                >
                  <span className="hidden sm:inline">{t("live.visit")}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* NDA Disclaimer Footer */}
        <div className="mt-8 p-4 rounded-xl bg-neutral-900/40 border border-neutral-800 text-xs text-neutral-400 leading-relaxed flex items-start gap-3">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p>{t("live.disclaimer")}</p>
        </div>
      </div>
    </section>
  );
};
