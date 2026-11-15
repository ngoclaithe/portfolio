import React from "react";
import { Project } from "../types";
import { useI18n } from "../i18n/context";
import { X, ExternalLink, ShieldAlert, Cpu, CheckCircle2, AlertTriangle, Layers, Activity } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { t } = useI18n();

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl p-6 sm:p-8 text-neutral-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-neutral-800/80 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Badge */}
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            {project.category}
          </span>
          {project.featured && (
            <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-neutral-800 text-neutral-300">
              {t("projects.featuredBadge")}
            </span>
          )}
        </div>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3 pr-8">
          {project.title}
        </h2>

        {/* NDA Safeguard Alert */}
        {project.ndaNotice && (
          <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 flex items-start gap-2.5 mb-6">
            <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span>
              <strong>{t("projects.modalNda")}</strong> {project.ndaNotice}
            </span>
          </div>
        )}

        {/* Metrics banner if available */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-neutral-950/70 border border-neutral-800 mb-6">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="text-center">
                <div className="text-base sm:text-xl font-bold font-mono text-emerald-400">{m.value}</div>
                <div className="text-[11px] text-neutral-400 mt-0.5">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Problem & Solution */}
        <div className="space-y-4 mb-6">
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5 flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
              {t("projects.modalProblem")}
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed bg-neutral-950/40 p-3.5 rounded-lg border border-neutral-850">
              {project.problem}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              {t("projects.modalSolution")}
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed bg-neutral-950/40 p-3.5 rounded-lg border border-neutral-850">
              {project.solution}
            </p>
          </div>
        </div>

        {/* My Role */}
        <div className="mb-6">
          <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2 flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-sky-400" />
            {t("projects.modalRole")}
          </h3>
          <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-300 bg-neutral-950/40 p-3.5 rounded-lg border border-neutral-850">
            {project.myRole.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-emerald-400">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Architecture Highlights & Key Challenges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-purple-400" />
              {t("projects.modalArch")}
            </h3>
            <ul className="space-y-1.5 text-xs text-neutral-300 bg-neutral-950/40 p-3 rounded-lg border border-neutral-850">
              {project.architectureHighlights.map((arch, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  <span>{arch}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2 flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-amber-400" />
              {t("projects.modalChallenges")}
            </h3>
            <ul className="space-y-1.5 text-xs text-neutral-300 bg-neutral-950/40 p-3 rounded-lg border border-neutral-850">
              {project.keyChallenges.map((chal, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-amber-400">•</span>
                  <span>{chal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Results & Impact */}
        <div className="mb-6">
          <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            {t("projects.modalResults")}
          </h3>
          <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-300 bg-neutral-950/40 p-3.5 rounded-lg border border-neutral-850">
            {project.resultsAndImpact.map((res, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>{res}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <h4 className="text-xs font-mono text-neutral-400 mb-2">{t("projects.modalTech")}</h4>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded text-xs font-mono bg-neutral-800 text-neutral-300 border border-neutral-700/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-neutral-800">
          <div className="text-[11px] font-mono text-neutral-500">
            {t("projects.modalSanitizedNote")}
          </div>
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-neutral-950 font-semibold text-xs transition-colors"
              >
                {t("projects.modalVisit")}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-medium transition-colors"
            >
              {t("projects.modalClose")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
