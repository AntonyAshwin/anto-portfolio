"use client";

import { motion, Easing } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const EASE: Easing = "easeOut";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: EASE },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-indigo-600/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-violet-600/8 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-indigo-900/5 blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div {...fadeUp(0.1)}>
          <span className="inline-block text-indigo-400 text-sm font-medium tracking-widest uppercase mb-4 border border-indigo-500/30 px-4 py-1.5 rounded-full bg-indigo-500/5">
            Software Engineer
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.2)}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          <span className="text-white">Ashwin</span>{" "}
          <span className="bg-linear-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            Antony
          </span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.35)}
          className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Proactive Software Engineer experienced in mobile and backend
          development — building scalable, cross-platform systems with a focus
          on performance and user impact.
        </motion.p>

        <motion.div
          {...fadeUp(0.5)}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <a
            href="#experience"
            className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5"
          >
            View Experience
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-white/10 hover:border-indigo-500/50 text-slate-300 hover:text-white text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
          >
            Get in touch
          </a>
        </motion.div>

        <motion.div
          {...fadeUp(0.65)}
          className="flex items-center justify-center gap-6 mt-10"
        >
          {[
            {
              icon: Github,
              href: "https://github.com/AntonyAshwin",
              label: "GitHub",
            },
            {
              icon: Linkedin,
              href: "https://linkedin.com/in/anto-ashwin",
              label: "LinkedIn",
            },
            {
              icon: Mail,
              href: "mailto:antonyashwin555@gmail.com",
              label: "Email",
            },
            { icon: Phone, href: "tel:+919686284032", label: "Phone" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="text-slate-500 hover:text-indigo-400 transition-colors duration-200 hover:scale-110 transform"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-slate-600 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-linear-to-b from-indigo-500/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
