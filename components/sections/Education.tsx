"use client";

import { motion } from "motion/react";

const educationData = [
    {
        name: "Technical University of Košice",
        degree: "Ing. - Computer Networks",
        duration: "September 2024 - May 2026",
        description: "advanced networking and routing algorithms, cybersecurity, data analytics and agile project management.",
    },
    {
        name: "Technical University of Košice",
        degree: "Bc. - Computer Networks",
        duration: "September 2021 - June 2024",
        description: "software development, algorithms, OOP, data structures, programming in C and Java, Docker, Kubernetes and Microsoft Azure basics.",
    },
    {
        name: "Súkromná stredná odborná škola, Ul. 29. augusta, Poprad",
        degree: "Information and Digital Technologies",
        duration: "September 2017 - June 2021",
        description: "networking, web development in HTML/CSS and graphic design in Adobe Creative Cloud.",
    }
]

export default function Education() {
    return (
        <motion.section
            id="education"
            className="flex flex-col items-center w-full scroll-mt-24 mx-auto max-w-7xl gap-4"
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
            <div className="mx-auto w-full p-4 flex flex-col gap-4">
                <h2 className="poppins text-6xl font-semibold uppercase text-center">
                    Education
                </h2>
                <div className="relative">
                    <span className="absolute bottom-0 left-3 top-0 w-px bg-line md:left-1/2 md:-translate-x-1/2"
                        aria-hidden="true"
                    />

                    <ol>
                        {educationData.map((item, index) => (
                            <li key={`${item.degree}-${item.duration}`}
                                className="relative grid grid-cols-[1.5rem_1fr] gap-5 pb-14 last:pb-0 
                                md:grid-cols-[1fr_3rem_1fr] md:gap-8 md:pb-20"
                            >
                                <span className="relative z-10 col-start-1 row-start-1 mt-1 flex size-6 items-center 
                                    justify-center rounded-full border border-line-strong bg-action md:col-start-2
                                    md:justify-self-center"
                                    aria-hidden="true">
                                </span>

                                <article className={`col-start-2 row-start-1 border-t border-line pt-5 md:row-start-1
                                    ${index % 2 === 0
                                        ? "md:col-start-1 md:text-right"
                                        : "md:col-start-3"
                                    }
                                    flex flex-col gap-4
                                `}>
                                    <p className="dm-mono text-sm uppercase text-muted">
                                        {item.duration}
                                    </p>

                                    <div className="flex flex-col gap-px">
                                        <h3 className="poppins text-2xl font-semibold md:text-3xl text-ink">
                                            {item.degree}
                                        </h3>
                                        <p className="font-medium text-muted">
                                            {item.name}
                                        </p>
                                    </div>

                                    <p className="max-w-xl leading-7 text-muted md:inline-block">
                                        <strong>Related courses: </strong>
                                        {item.description}
                                    </p>
                                </article>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </motion.section>
    )
}
