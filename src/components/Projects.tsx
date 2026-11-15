import React, { useState } from "react";
import { projectsByLang } from "../data/projects";
import { Project } from "../types";
import { ProjectModal } from "./ProjectModal";
import { useI18n } from "../i18n/context";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const { t, lang } = useI18n();
  const currentProjects = projectsByLang[lang] || projectsByLang.en;

  const categories = ["All", "ERP", "HRM", "Data Platform", "LMS", "E-Commerce", "IoT / Embedded"];

  const filteredProjects =
    selectedCategory === "All"
      ? currentProjects
      : currentProjects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 border-t border-neutral-800/80 bg-neutral-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
            {t("projects.badge")}
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-2">
              {t("projects.title")}
            </h2>
            <p className="text-sm text-neutral-400 max-w-2xl">
              {t("projects.subtitle")}
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 shrink-0 self-start md:self-auto">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>{t("projects.sanitizedBadge")}</span>
          </div>
        </div>

        {/* Category filter tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? "bg-emerald-600 text-neutral-950 font-semibold shadow-sm"
                  : "bg-neutral-900/80 text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-700"
              }`}
            >
              {cat === "All" ? t("projects.all") : cat}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              className="group cursor-pointer rounded-2xl bg-neutral-900/60 border border-neutral-800/80 p-6 flex flex-col justify-between glass-panel-hover"
            >
              <div>
                {/* Category & Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-neutral-500 group-hover:text-emerald-400 transition-colors">
                    <span>{t("projects.inspect")}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors mb-2.5 line-clamp-2">
                  {project.title}
                </h3>

                {/* Short description */}
                <p className="text-xs text-neutral-300 leading-relaxed mb-4 line-clamp-3">
                  {project.shortDescription}
                </p>

                {/* Metrics pill if available */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="grid grid-cols-3 gap-1.5 p-2.5 rounded-lg bg-neutral-950/60 border border-neutral-850 mb-4">
                    {project.metrics.map((m, i) => (
                      <div key={i} className="text-center">
                        <div className="text-xs font-bold font-mono text-emerald-400">{m.value}</div>
                        <div className="text-[10px] text-neutral-400 truncate">{m.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Tech stack */}
              <div className="pt-4 border-t border-neutral-800/60">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-neutral-800/70 text-neutral-400 border border-neutral-750"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-neutral-500">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Deep-Dive Modal */}
      <ProjectModal
        project={
          activeModalProject
            ? currentProjects.find((p) => p.id === activeModalProject.id) || activeModalProject
            : null
        }
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
