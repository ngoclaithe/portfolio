import React from "react";
import { profile } from "../data/profile";
import { useI18n } from "../i18n/context";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, ShieldAlert, Cpu, Database, Server } from "lucide-react";

export const Hero: React.FC = () => {
  const { t } = useI18n();

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden grid-bg">
      {/* Ambient gradient backdrops */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[250px] bg-sky-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-8">
            {/* Engineering status pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-xs font-mono text-neutral-300 mb-6 shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 font-semibold">{t("hero.statusBadge")}</span>
              <span className="text-neutral-500">•</span>
              <span className="text-neutral-400">{t("hero.expNote")}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
              {t("hero.headlinePart1")}{" "}
              <span className="gradient-accent">{t("hero.headlinePart2")}</span>{" "}
              {t("hero.headlinePart3")}{" "}
              <span className="gradient-text">{t("hero.headlinePart4")}</span>.
            </h1>

            {/* Supporting Bio */}
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-6 font-normal">
              {t("hero.bioIntro")} <strong className="text-white font-semibold">{profile.name}</strong>, {t("hero.bioBody")}
            </p>

            {/* NDA safety badge */}
            <div className="mb-8 p-3 rounded-lg bg-neutral-900/60 border border-neutral-800 flex items-start gap-3 max-w-2xl text-xs text-neutral-400 leading-relaxed">
              <ShieldAlert className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{t("hero.ndaNotice")}</span>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-neutral-950 font-semibold text-sm shadow-lg shadow-emerald-900/30 transition-all"
              >
                {t("hero.ctaProjects")}
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#live-systems"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-800 font-medium text-sm transition-all"
              >
                {t("hero.ctaLive")}
                <ExternalLink className="w-4 h-4 text-neutral-400" />
              </a>

              <div className="flex items-center gap-2 pl-2">
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-neutral-900/80 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-neutral-900/80 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${profile.socials.email}`}
                  className="p-2.5 rounded-lg bg-neutral-900/80 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
                  title="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Core architecture badges */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-400">
              <span className="text-neutral-500">{t("hero.focus")}</span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800">
                <Server className="w-3 h-3 text-emerald-400" /> {t("hero.distributedSystems")}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800">
                <Database className="w-3 h-3 text-emerald-400" /> {t("hero.olapPipelines")}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800">
                <Cpu className="w-3 h-3 text-emerald-400" /> {t("hero.iotHardware")}
              </span>
            </div>
          </div>

          {/* Right Avatar Column */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Decorative backlight glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-emerald-500/40 via-sky-500/20 to-emerald-400/30 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-all duration-500"></div>

              {/* Avatar frame */}
              <div className="relative rounded-2xl bg-neutral-900 p-2 border border-neutral-800 shadow-2xl overflow-hidden max-w-[280px] sm:max-w-[320px]">
                <img
                  src="/avatar.jpg"
                  alt={profile.name}
                  className="w-full h-auto aspect-square object-cover rounded-xl grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 scale-[1.01] group-hover:scale-105"
                />

                {/* Floating badge inside image */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-neutral-950/85 backdrop-blur-md border border-neutral-800/80 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white font-mono">{profile.name}</div>
                      <div className="text-[11px] text-emerald-400 font-mono">Senior Engineer</div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      HUST • 7+ Yrs
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Engineering Highlights / Quick Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 border-t border-neutral-800/80 pt-10 mt-12">
          {profile.stats.map((stat) => (
            <div key={stat.label} className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/60">
              <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400 mb-1">{stat.value}</div>
              <div className="text-xs text-neutral-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
