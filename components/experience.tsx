const experiences = [
  {
    company: "University of British Columbia",
    role: "BSc Computer Science – Minor in Data Science  |  GPA: 3.7 / 4.0",
    period: "May 2025 – Present",
    highlights: [
      "🏆 UBC Outstanding International Student Scholar — awarded for academic excellence as an international student.",
      "Relevant coursework: Operating Systems, Algorithms, Database Systems, Data Analytics, Statistics, Software Engineering, Discrete Structures in Computing, Machine Architecture, Human-Computer Interaction.",
    ],
  },
  {
    company: "Langara College",
    role: "Associate of Science in Computer Science  |  GPA: 3.2 / 4.0",
    period: "May 2022 – December 2024",
    highlights: [
      "Relevant coursework: Algorithms and Data Structures, Object Oriented Programming, Software Practices, Web Development, Web Programming, Database Management System.",
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
        <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">
          Experience
        </p>
        <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-16">
          Education &amp; Experience
        </h2>
        <div className="space-y-16 max-w-4xl">
          {experiences.map((exp, index) => (
            <div key={index} className="group">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg font-medium">{exp.company}</h3>
                  <p className="text-muted-foreground">{exp.role}</p>
                </div>
                <div className="text-sm text-muted-foreground md:text-right">
                  <p>{exp.period}</p>
                </div>
              </div>
              <ul className="space-y-3">
                {exp.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="text-muted-foreground text-sm leading-relaxed pl-4 border-l border-border"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
