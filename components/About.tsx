"use client";

import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "M.Tech in Software Engineering",
    school: "BITS Pilani",
    period: "2023 – 2025",
    location: "Hyderabad",
  },
  {
    degree: "B.Tech in Computer Science and Engineering",
    school: "Visvesvaraya Technological University",
    period: "2019 – 2023",
    location: "Bangalore",
    note: "CGPA: 8.8/10",
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <SectionHeading label="Who I am" title="About Me" />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <AnimatedSection delay={0.1}>
            <p className="text-slate-400 leading-relaxed text-base mb-5">
              I'm a proactive Software Engineer with hands-on experience in both
              mobile and backend development. I enjoy building scalable
              cross-platform applications that have real user impact.
            </p>
            <p className="text-slate-400 leading-relaxed text-base mb-5">
              At SAP Labs, I've had the opportunity to work across the full
              stack — from developing native Android extensions and iOS
              components for enterprise retail apps to building backend
              microservices with Java and Spring Boot.
            </p>
            <p className="text-slate-400 leading-relaxed text-base">
              I'm passionate about clean architecture, observability, and
              delivering reliable systems that perform well at scale.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <GraduationCap size={20} className="text-indigo-400" />
              Education
            </h3>
            <div className="space-y-5">
              {education.map((e) => (
                <div
                  key={e.school}
                  className="rounded-xl border border-white/6 bg-white/2 p-5 hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-3 flex-wrap">
                    <div>
                      <p className="text-white font-medium text-sm">{e.degree}</p>
                      <p className="text-indigo-400 text-sm mt-0.5">{e.school}</p>
                      {e.note && (
                        <p className="text-slate-500 text-xs mt-1">{e.note}</p>
                      )}
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-slate-500 text-xs">{e.period}</p>
                      <p className="text-slate-600 text-xs mt-0.5">{e.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
