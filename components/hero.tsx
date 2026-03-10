"use client";

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Coloured glow blobs */}
      <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-balance leading-[1.1]">
            Manpreet{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400">
              Kaur
            </span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
            Third-year Computer Science student at{" "}
            <a
              className="text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-4 decoration-indigo-400/40"
              href="https://ubc.ca"
              target="_blank"
            >
              UBC
            </a>
            , minoring in Data Science. I build full-stack apps and turn ideas
            into working software.
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-10">
            <a
              href="mailto:mcaurr@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-lg transition-colors shadow-lg shadow-indigo-500/20"
            >
              <Mail className="w-4 h-4" />
              Get in touch
            </a>
            <a
              href="https://github.com/mcaurr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-sm text-muted-foreground hover:text-foreground hover:border-indigo-500/50 rounded-lg transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mcaurr/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-sm text-muted-foreground hover:text-foreground hover:border-indigo-500/50 rounded-lg transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-0 right-0 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-muted-foreground hover:text-indigo-400 transition-colors flex items-center gap-2 text-xs tracking-widest uppercase"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-4 h-4 animate-bounce" />
            Scroll
          </button>
        </div>
      </div>
    </section>
  );
}
