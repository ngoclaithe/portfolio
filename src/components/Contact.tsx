import React, { useState } from "react";
import { profile } from "../data/profile";
import { useI18n } from "../i18n/context";
import { Mail, Github, Linkedin, Copy, Check, Send, ArrowUpRight } from "lucide-react";

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const { t } = useI18n();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 border-t border-neutral-800/80 bg-neutral-950/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            {t("contact.badge")}
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
            {t("contact.title")}
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-10">
            {t("contact.subtitle")}
          </p>

          {/* Email Box */}
          <div className="p-4 sm:p-6 rounded-2xl bg-neutral-900/90 border border-neutral-800 shadow-xl mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-left">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider">{t("contact.directEmail")}</div>
                <div className="text-base sm:text-lg font-bold text-white font-mono">{profile.socials.email}</div>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={handleCopyEmail}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-mono transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    {t("contact.copied")}
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    {t("contact.copyEmail")}
                  </>
                )}
              </button>

              <a
                href={`mailto:${profile.socials.email}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-neutral-950 font-semibold text-xs transition-colors"
              >
                <Send className="w-4 h-4" />
                {t("contact.sendMessage")}
              </a>
            </div>
          </div>

          {/* Professional Socials */}
          <div className="flex items-center justify-center gap-4">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 transition-colors text-xs font-mono"
            >
              <Github className="w-4 h-4 text-emerald-400" />
              GitHub
              <ArrowUpRight className="w-3 h-3 text-neutral-500" />
            </a>

            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 transition-colors text-xs font-mono"
            >
              <Linkedin className="w-4 h-4 text-emerald-400" />
              LinkedIn
              <ArrowUpRight className="w-3 h-3 text-neutral-500" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
