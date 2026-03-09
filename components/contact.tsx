import { ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-6 md:px-12 lg:px-24 border-t border-border"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">
          Contact
        </p>
        <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-8">
          Let&apos;s connect
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-12 max-w-xl">
          I&apos;m always interested in discussing new opportunities,
          collaborations, or just having a conversation about technology and
          building products.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <a
            href="mailto:mcaurr@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
          >
            Get in touch
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <div className="flex items-center gap-6">
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
          </div>
        </div>
      </div>
    </section>
  );
}
