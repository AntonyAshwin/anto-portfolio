"use client";

import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const skillGroups = [
  {
    category: "Languages",
    icon: "⟨/⟩",
    skills: ["Kotlin", "Java", "Swift", "SQL"],
  },
  {
    category: "Mobile",
    icon: "📱",
    skills: ["Android SDK", "iOS / Swift", "Xcode", "SAP MDK", "MVVM"],
  },
  {
    category: "Backend & APIs",
    icon: "⚙️",
    skills: ["Spring Boot", "JPA", "REST", "OData", "Microservices", "SAP HANA"],
  },
  {
    category: "Observability",
    icon: "📊",
    skills: ["Prometheus", "Grafana", "Dynatrace"],
  },
  {
    category: "Testing",
    icon: "✓",
    skills: ["JUnit", "Mockito"],
  },
  {
    category: "Tools",
    icon: "🔧",
    skills: ["Android Studio", "Xcode", "Git", "Jenkins"],
  },
  {
    category: "Core Concepts",
    icon: "🧠",
    skills: ["Data Structures", "Algorithms", "System Design"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-violet-950/5 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <AnimatedSection>
          <SectionHeading label="Toolkit" title="Technical Skills" />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <AnimatedSection key={group.category} delay={i * 0.08}>
              <div className="rounded-xl border border-white/6 bg-white/2 p-6 hover:border-indigo-500/25 hover:bg-indigo-500/3 transition-all duration-300 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-base">{group.icon}</span>
                  <h3 className="text-white text-sm font-semibold">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/15 hover:bg-indigo-500/20 transition-colors"
                    >
                      {skill}
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
