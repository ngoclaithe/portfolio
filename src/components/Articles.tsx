import React from "react";
import { articles } from "../data/articles";
import { useI18n } from "../i18n/context";
import { Calendar, Clock } from "lucide-react";

export const Articles: React.FC = () => {
  const { t } = useI18n();

  return (
    <section id="articles" className="py-20 border-t border-neutral-800/80 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
            {t("articles.badge")}
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-2">
              {t("articles.title")}
            </h2>
            <p className="text-sm text-neutral-400 max-w-2xl">
              {t("articles.subtitle")}
            </p>
          </div>
          <div className="text-xs font-mono text-neutral-400">
            {t("articles.postMortemBadge")}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((art) => (
            <div
              key={art.slug}
              className="p-6 rounded-xl bg-neutral-900/40 border border-neutral-800/80 flex flex-col justify-between glass-panel-hover"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3 text-xs font-mono text-neutral-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                      {art.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {art.readTime}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-800 text-emerald-400 border border-neutral-700/60">
                    {art.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 tracking-tight hover:text-emerald-300 transition-colors">
                  {art.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-5">
                  {art.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800/60 flex items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {art.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-neutral-800/80 text-neutral-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
