"use client";

import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "SAP REX",
    subtitle: "Retail Execution Application",
    description:
      "Worked on a cross-platform enterprise mobile app, building native Android extensions (calendar, maps) and integrating OData V2 services with SAP HANA for data synchronization.",
    tags: ["SAP MDK", "OData V2", "SAP HANA", "Android", "Java"],
    gradient: "from-indigo-500/20 to-blue-500/10",
    border: "border-indigo-500/20",
  },
  {
    title: "Gamified To-Do App",
    subtitle: "Productivity Application",
    description:
      "Developed a cross-platform productivity app with gamification features and Spring Boot backend using JPA for SQL-based data persistence.",
    tags: ["Android", "Kotlin", "iOS", "Swift", "Spring Boot", "JPA"],
    gradient: "from-violet-500/20 to-purple-500/10",
    border: "border-violet-500/20",
  },
  {
    title: "Health Application",
    subtitle: "iOS Health Tracker",
    description:
      "Built an iOS application with backend microservices to track health activities and visualize user progress with intuitive charts and insights.",
    tags: ["iOS", "Swift", "Spring Boot", "Microservices"],
    gradient: "from-emerald-500/20 to-teal-500/10",
    border: "border-emerald-500/20",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <SectionHeading label="What I've built" title="Projects" />
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.1}>
              <div
                className={`rounded-2xl border ${p.border} bg-linear-to-br ${p.gradient} p-6 h-full flex flex-col hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 transition-all duration-300 group cursor-default`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-white font-semibold text-base group-hover:text-indigo-300 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-slate-500 text-xs mt-0.5">{p.subtitle}</p>
                  </div>
                  <ExternalLink size={14} className="text-slate-600 shrink-0 mt-0.5" />
                </div>

                <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
