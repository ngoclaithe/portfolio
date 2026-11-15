import React from "react";
import { profile } from "../data/profile";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, ShieldAlert, Cpu, Database, Server } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden grid-bg">
      {/* Ambient gradient backdrops */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[250px] bg-sky-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Engineering status pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-xs font-mono text-neutral-300 mb-6 shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-400 font-semibold">Available for Senior / Lead Roles</span>
            <span className="text-neutral-500">•</span>
            <span className="text-neutral-400">7+ Years of Engineering Track Record</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
            Building Resilient <span className="gradient-accent">Software</span> & Mission-Critical <span className="gradient-text">Data Platforms</span>.
          </h1>

          {/* Supporting Bio */}
          <p className="text-base sm:text-lg lg:text-xl text-neutral-300 leading-relaxed mb-8 max-w-3xl font-normal">
            I'm <strong className="text-white font-semibold">Lai The Ngoc</strong>, a Senior Software Engineer and Data Engineer based in Vietnam with 7+ years of hands-on experience designing distributed backends, manufacturing ERPs, enterprise HR systems, and high-performance OLAP data warehouses for Japanese FDI and global enterprises.
          </p>

          {/* NDA safety badge */}
          <div className="mb-8 p-3 rounded-lg bg-neutral-900/60 border border-neutral-800 flex items-start gap-3 max-w-2xl text-xs text-neutral-400 leading-relaxed">
            <ShieldAlert className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>
              <strong className="text-neutral-200">Confidentiality Note:</strong> Case studies and system architectures featured below are sanitized and anonymized to strictly protect enterprise trade secrets, internal database schemas, and contractual NDAs.
            </span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-14">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-neutral-950 font-semibold text-sm shadow-lg shadow-emerald-900/30 transition-all"
            >
              Explore Case Studies
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="#live-systems"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-800 font-medium text-sm transition-all"
            >
              Active Live Systems
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

          {/* Engineering Highlights / Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 border-t border-neutral-800/80 pt-8">
            {profile.stats.map((stat) => (
              <div key={stat.label} className="p-3.5 rounded-xl bg-neutral-900/40 border border-neutral-800/60">
                <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400 mb-1">{stat.value}</div>
                <div className="text-xs text-neutral-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Core architecture badges */}
          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-400">
            <span className="text-neutral-500">Core Focus:</span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800">
              <Server className="w-3 h-3 text-emerald-400" /> Distributed Systems
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800">
              <Database className="w-3 h-3 text-emerald-400" /> ClickHouse / OLAP Pipelines
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800">
              <Cpu className="w-3 h-3 text-emerald-400" /> IoT & Hardware Integration
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
