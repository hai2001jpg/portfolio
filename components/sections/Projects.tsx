"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import ProjectCard from "@/components/ui/ProjectCard";
import SFC from "@/public/vysledok_analyzy.png";
import PM_projekt from "@/public/audiometric_game.png";

const projectDefinitions = [
    {
        id: "sloFactCheck",
        href: "https://kps-slofactcheck.onrender.com/",
        stack: ["ReactJS", "TailwindCSS", "Flask", "Firebase", "PyTorch"],
        src: SFC,
    },
    {
        id: "audiometricGame",
        stack: ["HTML", "CSS", "JavaScript", "Flask", "PostgreSQL"],
        src: PM_projekt,
    }
] as const;

export default function Projects() {
    const t = useTranslations("Projects");
    const [openProjects, setOpenProjects] = useState<string[]>([]);
    const projects = projectDefinitions.map((project) => ({
        ...project,
        title: t(`items.${project.id}.title`),
        description: t(`items.${project.id}.description`),
        duration: t(`items.${project.id}.duration`),
    }));

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
            <h1 className="poppins uppercase text-6xl text-center">{t("heading")}</h1>

            <ul className="border-t border-line">
                {projects.map((project) => {
                    const isOpen = openProjects.includes(project.title);

                    return (
                        <li key={project.title} className="border-b border-line py-6"
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
                    className="self-end rounded-full border border-line px-4 py-2 text-sm transition-colors
                        hover:bg-action hover:text-action-ink disabled:cursor-not-allowed disabled:opacity-40
                        disabled:hover:bg-transparent disabled:hover:text-ink cursor-pointer"
                    disabled={openProjects.length === 0}
                    onClick={() => setOpenProjects([])}
                >
                    {t("collapseAll")}
                </button>
            }
        </motion.section>
    )
}
