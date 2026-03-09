"use client";

import { ArrowUpRight, Github } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Music Recommendation Engine",
    description:
      "Developed an end‑to‑end music recommendation system using Python, Pandas, and scikit‑learn on a dataset of 160K+ Spotify tracks. I built a robust data pipeline to extract and clean audio features (energy, valence, danceability), integrated the Spotify Web API to fetch live track metadata and user listening history, and implemented similarity‑based recommendation logic enhanced with clustering and dimensionality‑reduction for better discovery. Interactive visualizations and dashboards were added to analyze feature relationships and evaluate the system.",
    tech: ["Python, Pandas, Scikit-learn, Spotify Web API"],
    link: "#",
    github: "#",
    gradient: "from-orange-500/20 via-red-500/10 to-yellow-500/20",
  },
  {
    title: "Farmer’s Market Vendor App",
    description:
      "This Android application provides separate, optimized experiences for customers and vendors at a farmer’s market. On the customer side, users can browse stalls and products, add items to a cart, place orders, and submit ratings/reviews. The vendor side includes a dashboard for stall management, inventory updates, order handling, and sales monitoring. The backend uses Firebase (Auth, Firestore/Realtime Database, and Cloud Functions as needed) for secure authentication, synchronized data, and push notifications for real-time order updates. The app was designed with HCI principles—clear visibility of system state, consistent controls, immediate feedback, and error prevention—to improve task efficiency and reduce user errors. Emphasis was placed on responsive UI behavior and informative feedback during network or transactional interactions, resulting in a smooth user experience in both online and intermittent connectivity conditions.",
    tech: ["Java/Kotlin, Android Studio, Firebase"],
    link: "#",
    github: "#",
    gradient: "from-purple-500/20 via-fuchsia-500/10 to-pink-500/20",
  },
  {
    title: "Movie Rating & Review Platform",
    description:
      "Developed an IMDb-style multi-user web application where users can browse movies, submit ratings, and post comments. The backend is implemented in FastAPI with RESTful endpoints and role-based access control for admins and users; data persistence is handled via JSON/CSV files instead of a traditional database. The system uses Docker to containerize services, includes CI/CD pipelines for automated builds and deployments, and features automated tests to validate API behavior.",
    tech: ["Python, FastAPI, JSON/CSV , Git, CI/CD, Docker"],
    link: "#",
    github: "#",
    gradient: "from-purple-500/20 via-fuchsia-500/10 to-pink-500/20",
  },
  {
    title: "AI-Powered Web IDE",
    description:
      "Built a full-stack browser-based IDE with OAuth authentication and JWT sessions, featuring a Monaco code editor and file explorer powered by WebContainers so users can write and run code entirely in the browser. Integrated an AI assistant module (Ollama) for intelligent code suggestions, and designed responsive landing and dashboard UIs across a connected Next.js frontend, Prisma/MongoDB backend stack.",
    tech: ["Next.js", "React", "Prisma", "MongoDB", "WebContainers", "OAuth"],
    link: "#",
    github: "#",
    gradient: "from-cyan-500/20 via-violet-500/10 to-blue-500/20",
  },
  {
    title: "Workload Intelligence Dashboard",
    description:
      "Built a full-stack Next.js dashboard that helps engineering managers identify team overload, dependency bottlenecks, and sprint risks in under 30 seconds. Features a real-time workload heatmap, interactive dependency graph visualising blocking relationships between team members, and auto-computed insight cards showing burnout risk scores, blocker severity, and review load concentration — all powered by a typed mock data layer and Next.js Route Handlers.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "#",
    github: "https://github.com/mcaurr/Workflow-Dashboard",
    gradient: "from-violet-500/20 via-indigo-500/10 to-cyan-500/20",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="py-32 px-6 md:px-12 lg:px-24 border-t border-border"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">
            Projects
          </p>
          <h2 className="text-2xl md:text-3xl font-light tracking-tight">
            Selected work
          </h2>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {projects.map((project, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2"
              >
                <Card
                  className={`h-full bg-gradient-to-br ${project.gradient} border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group`}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <div className="flex gap-1">
                        {project.github && (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-muted-foreground hover:text-foreground"
                            asChild
                          >
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`View ${project.title} on GitHub`}
                            >
                              <Github className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-muted-foreground hover:text-foreground"
                          asChild
                        >
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} project`}
                          >
                            <ArrowUpRight className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs font-normal bg-background/50 hover:bg-background/80 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}
