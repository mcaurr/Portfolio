export function About() {
  const skills = [
    "Python",
    "Java",
    "C",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "HTML/CSS",
    "SQL",
    "Git",
    "Linux",
  ];

  return (
    <section
      id="about"
      className="py-32 px-6 md:px-12 lg:px-24 border-t border-border"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-indigo-400 text-xs tracking-[0.3em] uppercase mb-4 font-medium">
          About
        </p>
        <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-12">
          Always curious, always building
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
          <div className="space-y-5 text-muted-foreground leading-relaxed text-sm">
            <p>
              I&apos;m a third-year Computer Science student at the{" "}
              <span className="text-indigo-400 font-medium">
                University of British Columbia
              </span>
              , minoring in Data Science. I transferred from Langara College
              where I completed an Associate of Science.
            </p>
            <p>
              I&apos;m passionate about building useful software — from
              full-stack web apps to data pipelines — and I&apos;m actively
              looking for{" "}
              <span className="text-foreground font-medium">
                internship and co-op opportunities
              </span>
              .
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-400 text-xs font-medium">
              🏆 UBC Outstanding International Student Scholar
            </div>
          </div>

          <div>
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-5">
              Technologies
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-xs text-muted-foreground border border-border rounded-lg hover:text-indigo-400 hover:border-indigo-500/50 hover:bg-indigo-500/5 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
