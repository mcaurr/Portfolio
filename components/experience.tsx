const experiences = [
  {
    company: "University of British Columbia",
    role: "BSc Computer Science – Minor in Data Science",
    meta: "GPA: 3.7 / 4.0",
    period: "May 2025 – Present",
    highlights: [
      "🏆 UBC Outstanding International Student Scholar — awarded for academic excellence as an international student.",
      "Relevant coursework: Operating Systems, Algorithms, Database Systems, Data Analytics, Statistics, Software Engineering, Discrete Structures, Machine Architecture, Human-Computer Interaction.",
    ],
  },
  {
    company: "Langara College",
    role: "Associate of Science in Computer Science",
    meta: "GPA: 3.2 / 4.0",
    period: "May 2022 – December 2024",
    highlights: [
      "Relevant coursework: Algorithms and Data Structures, Object Oriented Programming, Software Practices, Web Development, Web Programming, Database Management Systems.",
    ],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="py-32 px-6 md:px-12 lg:px-24 border-t border-border"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-indigo-400 text-xs tracking-[0.3em] uppercase mb-4 font-medium">
          Experience
        </p>
        <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-16">
          Education &amp; Background
        </h2>

        <div className="relative max-w-4xl">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-indigo-500/60 via-violet-500/40 to-transparent hidden md:block" />

          <div className="space-y-14">
            {experiences.map((exp, index) => (
              <div key={index} className="md:pl-10 relative group">
                <div className="absolute -left-[4.5px] top-2 w-2.5 h-2.5 rounded-full bg-indigo-500/40 ring-2 ring-indigo-500/20 group-hover:bg-indigo-400 transition-colors hidden md:block" />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-base font-semibold text-foreground">
                      {exp.company}
                    </h3>
                    <p className="text-sm text-muted-foreground">{exp.role}</p>
                    <p className="text-xs text-indigo-400/70 mt-0.5">
                      {exp.meta}
                    </p>
                  </div>
                  <span className="text-xs text-indigo-400 border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 rounded-full whitespace-nowrap self-start">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2.5">
                  {exp.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted-foreground leading-relaxed pl-4 border-l border-indigo-500/20"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
