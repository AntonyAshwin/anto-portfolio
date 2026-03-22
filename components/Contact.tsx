"use client";

import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { Mail, Phone, Linkedin, Github, ArrowUpRight } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "antonyashwin555@gmail.com",
    href: "mailto:antonyashwin555@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 96862 84032",
    href: "tel:+919686284032",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/anto-ashwin",
    href: "https://linkedin.com/in/anto-ashwin",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/AntonyAshwin",
    href: "https://github.com/AntonyAshwin",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <SectionHeading label="Let's connect" title="Get In Touch" />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-slate-400 text-center mb-12 leading-relaxed">
            I'm always open to interesting conversations and new opportunities.
            Feel free to reach out through any of the channels below.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-4">
          {contacts.map((c, i) => {
            const Icon = c.icon;
            return (
              <AnimatedSection key={c.label} delay={0.15 + i * 0.08}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-xl border border-white/6 bg-white/2 hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all duration-300 group hover:-translate-y-0.5"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/15 flex items-center justify-center shrink-0 group-hover:bg-indigo-500/25 transition-colors">
                    <Icon size={18} className="text-indigo-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-slate-500 text-xs mb-0.5">{c.label}</p>
                    <p className="text-slate-200 text-sm truncate group-hover:text-white transition-colors">
                      {c.value}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="text-slate-600 shrink-0 group-hover:text-indigo-400 transition-colors"
                  />
                </a>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
