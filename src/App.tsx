import React from "react";
import { I18nProvider } from "./i18n/context";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { LiveShowcase } from "./components/LiveShowcase";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col selection:bg-emerald-500/20 selection:text-emerald-300">
        <Header />
        <main className="flex-grow">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <LiveShowcase />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}
