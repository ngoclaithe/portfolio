import React from "react";
import { experiences } from "../data/experience";
import { Briefcase, Calendar, MapPin, ChevronRight, CheckCircle2 } from "lucide-react";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-t border-neutral-800/80 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">Career Timeline</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-2">
              7+ Years of Engineering Progression
            </h2>
            <p className="text-sm text-neutral-400">
              From low-level embedded IoT to mission-critical enterprise systems and large-scale data platforms.
            </p>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-xs text-neutral-400 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 inline-flex items-center gap-2">
            <span className="text-emerald-400 font-bold">2019 — 2026</span>
            <span>• Continuous Track Record</span>
          </div>
        </div>

        {/* Timeline container */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 md:before:left-4 before:w-0.5 before:bg-neutral-800">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 md:pl-12 group">
              {/* Timeline marker */}
              <div className="absolute left-1.5 md:left-2.5 top-1.5 -translate-x-1/2 w-4 h-4 rounded-full bg-neutral-950 border-2 border-neutral-700 group-hover:border-emerald-500 group-hover:bg-emerald-500/20 transition-all flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-neutral-500 group-hover:bg-emerald-400"></div>
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-7 rounded-xl bg-neutral-900/50 border border-neutral-800/80 glass-panel-hover">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2 flex-wrap">
                      <span>{exp.role}</span>
                      <span className="text-neutral-500 font-normal">@</span>
                      <span className="text-emerald-400 font-semibold">{exp.company}</span>
                    </h3>
                    {exp.companyType && (
                      <p className="text-xs text-neutral-400 font-mono mt-0.5">{exp.companyType}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-xs font-mono text-neutral-400 shrink-0">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-neutral-800/80 text-neutral-300">
                      <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                      {exp.period}
                    </span>
                    <span className="hidden sm:inline-flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm text-neutral-300 leading-relaxed mb-4">
                  {exp.summary}
                </p>

                {/* Selected Responsibilities */}
                <div className="mb-4">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">Key Engineering Contributions:</h4>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-300">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact Highlights */}
                {exp.impactHighlights && exp.impactHighlights.length > 0 && (
                  <div className="mb-5 p-3 rounded-lg bg-neutral-950/60 border border-neutral-800/60">
                    <h5 className="text-[11px] font-mono uppercase text-emerald-400 font-semibold mb-1.5 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Verified Engineering Impact:
                    </h5>
                    <ul className="space-y-1 text-xs text-neutral-300">
                      {exp.impactHighlights.map((impact, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-2">
                          <span className="text-emerald-500">•</span>
                          <span>{impact}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech badges */}
                <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-neutral-800/60">
                  <span className="text-[11px] font-mono text-neutral-500 mr-1">Stack:</span>
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-neutral-800/90 text-neutral-300 border border-neutral-700/50"
                    >
                      {t}
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
