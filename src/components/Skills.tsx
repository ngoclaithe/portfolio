import React from "react";
import { skillCategories } from "../data/skills";
import { Cpu, Server, Database, Radio, Wrench, ShieldCheck, Check } from "lucide-react";

export const Skills: React.FC = () => {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Server className="w-4 h-4 text-emerald-400" />;
      case 1:
        return <Database className="w-4 h-4 text-emerald-400" />;
      case 2:
        return <Cpu className="w-4 h-4 text-emerald-400" />;
      case 3:
        return <Radio className="w-4 h-4 text-emerald-400" />;
      default:
        return <Wrench className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 border-t border-neutral-800/80 bg-neutral-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">Technical Depth</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-2">
              Engineering Domains & Capabilities
            </h2>
            <p className="text-sm text-neutral-400 max-w-2xl">
              Organized by architectural domain rather than arbitrary percentage bars. Built on 7+ years of real-world production verification.
            </p>
          </div>
          <div className="text-xs font-mono text-neutral-400">
            Verified Production Experience
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className="p-6 rounded-xl bg-neutral-900/40 border border-neutral-800/80 flex flex-col justify-between glass-panel-hover"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                    {getCategoryIcon(idx)}
                  </div>
                  <h3 className="font-bold text-white text-base tracking-tight">
                    {category.title}
                  </h3>
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed mb-5">
                  {category.description}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                        skill.highlight
                          ? "bg-neutral-800 text-emerald-300 border border-emerald-500/30 font-medium"
                          : "bg-neutral-900/90 text-neutral-300 border border-neutral-800"
                      }`}
                    >
                      {skill.highlight && <Check className="w-3 h-3 text-emerald-400" />}
                      {skill.name}
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
