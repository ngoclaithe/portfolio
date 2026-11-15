import React, { useState, useEffect } from "react";
import { profile } from "../data/profile";
import { Menu, X, ArrowUpRight, ShieldCheck, Terminal } from "lucide-react";

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Case Studies", href: "#projects" },
    { label: "Live Systems", href: "#live-systems" },
    { label: "Expertise", href: "#skills" },
    { label: "Writing", href: "#articles" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-neutral-950/85 backdrop-blur-md border-b border-neutral-800/80 py-3.5 shadow-lg shadow-black/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Personal Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-emerald-400 font-mono font-bold text-base group-hover:border-emerald-500/50 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold text-neutral-100 text-sm tracking-tight flex items-center gap-2">
                {profile.name}
                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  7+ Yrs Exp
                </span>
              </div>
              <div className="text-[11px] text-neutral-400 font-mono">Senior Engineer | Astec</div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 text-xs font-medium text-neutral-300 hover:text-white rounded-md hover:bg-neutral-800/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA & NDA status */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-[11px] text-neutral-400 font-mono px-2.5 py-1 rounded-full bg-neutral-900/80 border border-neutral-800">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>NDA Compliant</span>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-neutral-950 font-medium text-xs shadow-sm hover:shadow-emerald-500/20 transition-all font-sans"
            >
              Get in Touch
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="flex sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden mt-3 pt-3 pb-4 border-t border-neutral-800/80 bg-neutral-950/95 backdrop-blur-xl rounded-xl p-4 shadow-2xl">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-neutral-300 hover:text-white rounded-lg hover:bg-neutral-800/60 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-neutral-800/80 mt-1 flex flex-col gap-2">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 rounded-lg bg-emerald-600 text-neutral-950 font-medium text-sm"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
