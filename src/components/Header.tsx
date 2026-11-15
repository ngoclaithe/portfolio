import React, { useState, useEffect } from "react";
import { profile } from "../data/profile";
import { useI18n } from "../i18n/context";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Menu, X, ArrowUpRight, ShieldCheck } from "lucide-react";

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.experience"), href: "#experience" },
    { label: t("nav.projects"), href: "#projects" },
    { label: t("nav.liveSystems"), href: "#deployed-projects" },
    { label: t("nav.skills"), href: "#skills" },
    { label: t("nav.articles"), href: "#articles" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-neutral-950/85 backdrop-blur-md border-b border-neutral-800/80 py-3 shadow-lg shadow-black/20"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Personal Brand with Avatar thumbnail */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src="/avatar.jpg"
                alt={profile.name}
                className="w-10 h-10 rounded-full object-cover border-2 border-neutral-700 group-hover:border-emerald-500 transition-colors shadow-sm"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-neutral-950"></span>
            </div>
            <div>
              <div className="font-semibold text-neutral-100 text-sm tracking-tight flex items-center gap-2">
                {profile.name}
                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  {t("nav.expBadge")}
                </span>
              </div>
              <div className="text-[11px] text-neutral-400 font-mono">Senior Engineer | Astec</div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
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

          {/* Language Switcher, NDA status & CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <LanguageSwitcher />

            <div className="hidden xl:flex items-center gap-1.5 text-[11px] text-neutral-400 font-mono px-2.5 py-1 rounded-full bg-neutral-900/80 border border-neutral-800">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t("nav.nda")}</span>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-neutral-950 font-semibold text-xs shadow-sm hover:shadow-emerald-500/20 transition-all font-sans"
            >
              {t("nav.contact")}
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile hamburger & mobile language switcher */}
          <div className="flex sm:hidden items-center gap-2">
            <LanguageSwitcher />
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
                  className="w-full text-center py-2.5 rounded-lg bg-emerald-600 text-neutral-950 font-semibold text-sm"
                >
                  {t("nav.contact")}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
