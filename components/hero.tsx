"use client";

import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 relative">
      <div className="max-w-6xl mx-auto w-full">
        <div className="max-w-3xl">
          <p className="text-muted-foreground text-sm tracking-widest  mb-4">
            hi i am
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-balance">
            manpreet kaur
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            - third year computer science student at{" "}
            <a
              className="text-foreground"
              href="https://ubc.ca"
              target="_blank"
            >
              UBC
            </a>
            <br />- interested in software development and building things
          </p>
          <div className="flex items-center gap-6 mt-10">
            <a
              href="https://github.com/mcaurr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mcaurr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href="mailto:manpreet@example.com"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Email
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
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
