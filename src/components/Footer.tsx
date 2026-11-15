import React from "react";
import { profile } from "../data/profile";
import { Terminal, ShieldCheck, ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-neutral-800 bg-neutral-950 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-emerald-400 font-mono font-bold">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <div className="font-semibold text-neutral-200">
                {profile.name} — Senior Software & Data Engineer
              </div>
              <div className="text-[11px] text-neutral-500 font-mono">
                7+ Years Experience • Hanoi, Vietnam • {profile.education.institution}
              </div>
            </div>
          </div>

          {/* Quick links & Scroll to top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-neutral-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Sanitized under Enterprise NDA</span>
            </div>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="mt-8 pt-6 border-t border-neutral-850 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-neutral-500 font-mono">
          <div>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </div>
          <div>
            Designed for Engineering Rigor & Scalability.
          </div>
        </div>
      </div>
    </footer>
  );
};
