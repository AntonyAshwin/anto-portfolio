"use client";

import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Associate Developer (Backend)",
    company: "SAP Labs",
    period: "Mar 2025 – Mar 2026",
    location: "Bangalore",
    bullets: [
      "Working in the SAP OPPS team building backend microservices using Java, Spring Boot, JPA, and SQL.",
      "Designed and integrated multiple REST and OData APIs with focus on scalability and efficient data handling.",
      "Implemented observability using Prometheus, Grafana, and Dynatrace for monitoring and debugging.",
      "Collaborated with cross-functional teams to deliver scalable backend solutions.",
      "Contributed to CI/CD pipelines using Jenkins.",
    ],
    tags: ["Java", "Spring Boot", "JPA", "REST", "OData", "Prometheus", "Grafana", "Jenkins"],
  },
  {
    title: "Associate Developer (Android)",
    company: "SAP Labs",
    period: "Aug 2023 – Mar 2025",
    location: "Bangalore",
    bullets: [
      "Developed and maintained the SAP REX cross-platform mobile application for retail workflows using SAP MDK.",
      "Built native Android extensions in Java/Kotlin, including calendar and map integrations to extend MDK capabilities.",
      "Worked on iOS components using Swift and Xcode to ensure cross-platform consistency.",
      "Designed and integrated OData V2 services with SAP HANA for offline-first data synchronization.",
      "Owned end-to-end feature delivery across the full SDLC, from design to deployment.",
      "Improved application performance by reducing unnecessary database calls and optimizing data handling.",
      "Wrote unit tests using JUnit and Mockito.",
    ],
    tags: ["Android", "Kotlin", "Java", "Swift", "SAP MDK", "OData V2", "SAP HANA", "JUnit", "Mockito"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 relative">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-indigo-950/5 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <AnimatedSection>
          <SectionHeading label="Career" title="Work Experience" />
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-linear-to-b from-indigo-500/50 via-indigo-500/20 to-transparent hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="md:pl-16 relative">
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-0 top-5 w-12 h-12 items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-indigo-500 ring-4 ring-indigo-500/20" />
                  </div>

                  <div className="rounded-2xl border border-white/6 bg-white/2 p-7 hover:border-indigo-500/25 hover:bg-indigo-500/4 transition-all duration-300 group">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Briefcase size={14} className="text-indigo-400 shrink-0" />
                          <h3 className="text-white font-semibold text-base">{exp.title}</h3>
                        </div>
                        <p className="text-indigo-400 text-sm font-medium">{exp.company}</p>
                        <p className="text-slate-600 text-xs mt-0.5">{exp.location}</p>
                      </div>
                      <span className="text-slate-500 text-xs shrink-0 bg-white/5 px-3 py-1.5 rounded-full border border-white/5 self-start sm:self-auto">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                          <span className="text-indigo-500 mt-1.5 shrink-0 text-xs">▸</span>
                          {b}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
