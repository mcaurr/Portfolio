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
  ]

  return (
    <section id="about" className="py-32 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">
          About
        </p>
        <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-8">
          always curious, always building
        </h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed max-w-4xl">
          <ul className="list-disc pl-6 space-y-2">
            <li>BSc Computer Science (Minor in Data Science) student at the University of British Columbia — transferred from Langara College</li>
            <li>passionate about software development and building useful things</li>
            <li>looking for internship and co-op opportunities</li>
          </ul>
        </div>
        <div className="mt-12">
          <p className="text-sm text-muted-foreground mb-4">Technologies I work with</p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-xs text-muted-foreground border border-border rounded-full hover:text-foreground hover:border-muted-foreground transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
