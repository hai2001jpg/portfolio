"use client";

import { useState } from "react";
import { motion } from "motion/react";
import ProjectCard from "@/components/ui/ProjectCard";
import SFC from "@/public/vysledok_analyzy.png";
import PM_projekt from "@/public/audiometric_game.png";

const projects = [
    {
        title: "SloFactCheck",
        description: "Full-stack disinformation detection platform integrating NLP transformer models, fine-tuned on corpus with +150k samples, and external APIs for real-time claim verification against news content in various languages. Designed and built the complete React.js frontend and Flask backend, with user authentication via Firebase Auth, deployed to production.",
        href: "https://kps-slofactcheck.onrender.com/",
        duration: "Feb 2025 - June 2026",
        stack: ["ReactJS", "TailwindCSS", "Flask", "Firebase", "PyTorch"],
        src: SFC,
    },
    {
        title: "Audiometric game for children under 3 years old | Živé IT projekty",
        description: "Collaborated in the development of an interactive web-based audiometric game designed to support hearing assessment in young children, under mentorship of professionals across various techonology companies. The application played random animal sounds, requiring users to identify the correct animal through a simple and engaging interface.",
        duration: "Sep 2024 - Feb 2025",
        stack: ["HTML", "CSS", "JavaScript", "Flask", "PostgreSQL"],
        src: PM_projekt,
    }
]

export default function Projects() {
    const [openProjects, setOpenProjects] = useState<string[]>([]);

    return (
        <motion.section id="projects" className="flex flex-col items-center justify-center w-full scroll-mt-24 
            mx-auto gap-4 p-4 px-4 md:px-24"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
                once: true,
                amount: 0.25,
            }}
            transition={{
                duration: 0.5,
                ease: "easeOut",
            }}
        >
            <h1 className="poppins uppercase text-6xl text-center">Featured projects</h1>

            <ul className="border-t border-black/20">
                {projects.map((project) => {
                    const isOpen = openProjects.includes(project.title);

                    return (
                        <li key={project.title} className="border-b border-black/20 py-6"
                        >
                            <button type="button"
                                className="flex w-full items-center justify-between text-left gap-4"
                                aria-expanded={isOpen}
                                aria-controls={`project-${project.title}`}
                                onClick={() => {
                                    setOpenProjects((current) =>
                                        current.includes(project.title)
                                            ? current.filter((title) => title !== project.title)
                                            : [...current, project.title]
                                    );
                                }}
                            >
                                <h3 className="poppins text-2xl font-semibold uppercase md:text-4xl">
                                    {project.title}
                                </h3>

                                <span className={`text-3xl transition-transform duration-300 
                                    ${isOpen ? "rotate-45" : ""
                                    }`}
                                    aria-hidden="true"
                                >
                                    +
                                </span>
                            </button>

                            <div id={`project-${project.title}`}
                                className={`grid transition-[grid-template-rows] duration-500 ease-out
                                        ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                                    }`}>
                                <div className="overflow-hidden">
                                    <ProjectCard {...project} />
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
            {openProjects.length > 0 &&
                <button type="button"
                    className="self-end rounded-full border border-black/10 px-4 py-2 text-sm transition-colors
                        hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-40
                        disabled:hover:bg-transparent disabled:hover:text-black cursor-pointer"
                    disabled={openProjects.length === 0}
                    onClick={() => setOpenProjects([])}
                >
                    Collapse all
                </button>
            }
        </motion.section>
    )
}
