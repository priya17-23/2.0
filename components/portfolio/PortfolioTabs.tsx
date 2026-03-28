"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Code2,
  FolderKanban,
  GraduationCap,
  Award,
  Mail,
  Download,
  Github,
  Linkedin,
  Phone,
} from "lucide-react";
import Link from "next/link";

const TABS = [
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Code2 },
  { id: "projects", label: "Projects", icon: FolderKanban },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "certifications", label: "Certifications", icon: Award },
  { id: "contact", label: "Contact", icon: Mail },
] as const;

const SKILLS = {
  Programming: ["Python", "Java", "JavaScript", "C/C++"],
  "Web Development": [
    "HTML, CSS, Tailwind",
    "React.js",
    "Node.js, Express",
    "MongoDB",
  ],
  "AI / ML": [
    "Machine Learning basics",
    "NumPy, Pandas, Scikit-learn",
    "TensorFlow",
  ],
  Tools: ["Git & GitHub", "VS Code", "Postman", "Figma"],
};

const PROJECTS = [
  {
  title: "Analytics Hub with CSV",
  description:
    "Full-stack CSV analysis dashboard with visualization, file upload, and insights.",
  tech: "Flask, Pandas, Plotly, HTML, CSS, JS",
  features: ["CSV Upload", "Data Visualization", "Dashboard", "Charts"],
  github: "https://github.com/priya17-23/c4",
  live: "https://c4-pb4z.onrender.com/",
},
{
  title: "Foldex – Smart File Organizer",
  description:
    "Python Windows app with auto-zip, file categorization, and offline chat assistant.",
  tech: "Python, Windows",
  features: ["Auto-zip", "File categorization", "Offline chat assistant"],
  github: "https://github.com",
  live: "#",
},

  {
    title: "Real-time Chat Application",
    description:
      "Full-stack group chat with rooms, file sharing, and real-time messaging.",
    tech: "React, Node.js, Socket.io, MongoDB",
    features: ["Group chat", "File sharing", "Rooms", "Real-time sync"],
    github: "https://github.com",
    live: "#",
  },
  {
    title: "Foldex – Smart File Organizer",
    description:
      "Python Windows app with auto-zip, file categorization, and offline chat assistant.",
    tech: "Python, Windows",
    features: ["Auto-zip", "File categorization", "Offline chat assistant"],
    github: "https://github.com",
    live: "#",
  },
  {
    title: "AI Move",
    description: "Cross-platform app guiding users through curser with AI assistance.",
    tech: "Cross-platform, AI",
    features: ["AI-guided poses",  "Cross-platform"],
    github: "https://ai-head-follow.lovable.app/",
    live: "#",
  },
  {
    title: "AI Yoga Guide App 2.0",
    description: "Cross-platform app guiding users through yoga with AI assistance.",
    tech: "Cross-platform, AI",
    features: ["AI-guided poses", "Health domain", "Cross-platform"],
    github: "https://zen-form-ai.lovable.app/",
    live: "#",
  },
  {
    title: "AI Yoga Guide App",
    description: "Cross-platform app guiding users through yoga with AI assistance.",
    tech: "Cross-platform, AI",
    features: ["AI-guided poses", "Health domain", "Cross-platform"],
    github: "https://zen-form-ai.lovable.app/",
    live: "#",
  },
  {
    title: "Pagade Game (Python GUI)",
    description: "Classic board game with a clean graphical interface.",
    tech: "Python, GUI",
    features: ["Game logic", "GUI", "Multiplayer support"],
    github: "https://github.com",
    live: "#",
  },
];

const CERTIFICATIONS = [
  "Machine Learning / AI course",
  "Web development certification",
  "Hackathons / internships",
];

export default function PortfolioTabs() {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]["id"]>("about");

  return (
    <div className="min-h-screen text-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/20 bg-white/5 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold tracking-tight text-white"
          >
            PRIYA N SINGH
          </motion.div>
          <div className="flex flex-wrap items-center gap-2">
            <nav className="flex flex-wrap gap-1">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition ${
                    activeTab === tab.id
                      ? "bg-blue-500/90 text-white shadow-lg"
                      : "text-slate-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  {tab.label}
                </button>
              ))}
            </nav>
            <a
              href="/resume.pdf"
              download
              className="ml-2 flex items-center gap-2 rounded-lg bg-blue-500/90 px-4 py-2 text-sm font-medium text-white shadow-lg hover:bg-blue-500 backdrop-blur-sm"
            >
              <Download className="h-4 w-4" />
              Resume (PDF)
            </a>
          </div>
        </div>
      </header>

      {/* Tab content */}
      <main className="mx-auto max-w-5xl px-4 py-8">
        <AnimatePresence mode="wait">
          {activeTab === "about" && (
            <motion.section
              key="about"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-white">About</h2>
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="h-40 w-40 shrink-0 overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-xl"
                >
                  <img
                    src="/profile.png"
                    alt="Priya N Singh"
                    className="h-full w-full object-cover"
                  />
                </motion.div>
                <div className="space-y-2">
                  <p className="text-lg font-semibold">
                    <span className="relative inline-flex items-center">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 -z-10 rounded-md bg-white/10 backdrop-blur-sm"
                      />
                      <span className="text-white px-2">
                        Priya Singh – AI/ML & Full-Stack Developer
                      </span>
                    </span>
                  </p>
                  <p className="max-w-xl relative rounded-md">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 -z-10 rounded-md bg-white/10 backdrop-blur-sm"
                    />
                    <span className="relative block px-3 py-2 text-slate-300">
                      CSE (AI & ML) student with a strong interest in building AI
                      applications, real-time chat systems, and automation. I build
                      apps and projects that solve real problems and am looking
                      for internships and full-time opportunities.
                    </span>
                  </p>
                </div>
              </div>
            </motion.section>
          )}

          {activeTab === "skills" && (
            <motion.section
              key="skills"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-white">Skills</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {Object.entries(SKILLS).map(([category, items], i) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="rounded-xl border border-white/20 bg-white/5 backdrop-blur-xl p-4 shadow-lg"
                  >
                    <h3 className="mb-3 font-semibold text-blue-400">
                      {category}
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <li
                          key={skill}
                          className="rounded-md bg-white/10 backdrop-blur-sm border border-white/10 px-3 py-1.5 text-sm text-slate-200"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {activeTab === "projects" && (
            <motion.section
              key="projects"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-white">Projects</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {PROJECTS.map((project, i) => (
                  <motion.article
                    key={project.title}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="rounded-xl border border-white/20 bg-white/5 backdrop-blur-xl p-5 shadow-lg"
                  >
                    <h3 className="mb-2 font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="mb-3 text-sm text-slate-300">
                      {project.description}
                    </p>
                    <p className="mb-2 text-xs text-blue-400">{project.tech}</p>
                    <ul className="mb-4 flex flex-wrap gap-1.5 text-xs text-slate-400">
                      {project.features.map((f) => (
                        <li key={f} className="rounded bg-white/10 border border-white/10 px-2 py-0.5">
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-slate-400 hover:text-white"
                      >
                        <Github className="h-4 w-4" /> GitHub
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300"
                      >
                        Live demo
                      </a>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.section>
          )}

          {activeTab === "education" && (
            <motion.section
              key="education"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-white">Education</h2>
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                className="rounded-xl border border-white/20 bg-white/5 backdrop-blur-xl p-6 shadow-lg"
              >
                <h3 className="text-lg font-semibold text-white">
                 

                  Bachelor of Engineering in Computer Science and Engineering with specialization in Artificial Intelligence and Machine Learning.
                </h3>
                <p className="text-blue-400">GSSSIETW</p>
                <p className="mt-2 text-slate-400">
                   year of study :2023-27 and CGPA 8.4+
                </p>
              </motion.div>
            </motion.section>
          )}

          {activeTab === "certifications" && (
            <motion.section
              key="certifications"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-white">
                Certifications
              </h2>
              <ul className="space-y-3">
                {CERTIFICATIONS.map((cert, i) => (
                  <motion.li
                    key={cert}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-3 rounded-lg border border-white/20 bg-white/5 backdrop-blur-xl px-4 py-3 shadow-lg"
                  >
                    <Award className="h-5 w-5 text-blue-400" />
                    <span className="text-slate-300">{cert}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.section>
          )}

          {activeTab === "contact" && (
            <motion.section
              key="contact"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-white">Contact</h2>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:your.email@example.com"
                  className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 backdrop-blur-xl px-4 py-3 text-slate-200 hover:border-white/40 hover:bg-white/10 shadow-lg"
                >
                  <Mail className="h-5 w-5" />
                  collab.priyasingh@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/priyansingh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 backdrop-blur-xl px-4 py-3 text-slate-200 hover:border-white/40 hover:bg-white/10 shadow-lg"
                >
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/priya17-23/2.0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 backdrop-blur-xl px-4 py-3 text-slate-200 hover:border-white/40 hover:bg-white/10 shadow-lg"
                >
                  <Github className="h-5 w-5" />
                  GitHub
                </a>
                <span className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 backdrop-blur-xl px-4 py-3 text-slate-300 shadow-lg">
                  <Phone className="h-5 w-5" />
                  Phone (+91 XXXXXXXXXX)
                </span>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      {/* Footer link to liquid demo */}
      <footer className="border-t border-white/20 py-4 text-center text-sm text-slate-300 bg-white/5 backdrop-blur-xl">
        <Link href="/demo" className="hover:text-blue-400">
          View Liquid Effect demo →
        </Link>
      </footer>
    </div>
  );
}
