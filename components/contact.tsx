import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-6 md:px-12 lg:px-24 border-t border-border relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <p className="text-indigo-400 text-xs tracking-[0.3em] uppercase mb-4 font-medium">
          Contact
        </p>
        <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
          Let&apos;s connect
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-12 max-w-lg text-sm">
          I&apos;m actively looking for internship and co-op opportunities.
          Whether you have a role, a project idea, or just want to chat about
          tech — my inbox is always open.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:mcaurr@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-lg transition-colors shadow-lg shadow-indigo-500/20"
          >
            <Mail className="w-4 h-4" />
            Get in touch
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/mcaurr/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-sm text-muted-foreground hover:text-indigo-400 hover:border-indigo-500/50 rounded-lg transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href="https://github.com/mcaurr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-sm text-muted-foreground hover:text-indigo-400 hover:border-indigo-500/50 rounded-lg transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
