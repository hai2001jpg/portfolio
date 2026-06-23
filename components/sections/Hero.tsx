"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const links = [
    {
        href: "https://www.linkedin.com/in/hai-tran-ngoc/",
        title: "LinkedIn",
        src: (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
        )
    },
    {
        href: "https://github.com/hai2001jpg",
        title: "Github",
        src: (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>
        )
    },
]

const skills = ["ReactJS", "TailwindCSS", "HTML/CSS", "NodeJS", "Firebase", "Python", "Docker", "Git"];

export default function Hero() {
    const t = useTranslations("Hero");

    return (
        <motion.section className="relative min-h-[calc(100vh-6rem)] w-full overflow-hidden bg-canvas flex flex-col"
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
            <article className="relative mx-auto flex w-full max-w-7xl px-4 md:px-24">
                <div className="group flex w-full items-center justify-center gap-2 whitespace-nowrap 
                    poppins text-[clamp(3.5rem,11vw,16rem)] font-black uppercase">
                    <h1 className="hero-outline opacity-80 select-none transition-colors duration-300 ease-out">
                        HAI TRAN NGOC
                    </h1>
                </div>
            </article>

            <article className="relative z-30 flex flex-col md:flex-row gap-4 px-6 py-6 justify-center 
                md:justify-between md:px-24 md:py-8 ">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-start">
                        <h2 className="poppins text-[clamp(2rem,3vw,5rem)] textbox-trim">{t("role")}</h2>
                        <p className="font-sans text-muted max-w-3/4">{t("description")}</p>
                    </div>

                    <button type="button" className="group relative mt-auto overflow-hidden rounded-full bg-action px-5 py-4 text-action-ink
                            duration-300 cursor-pointer self-center md:self-start">
                        <span
                            className="absolute left-1/2 top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full 
                                bg-action-hover transition-transform duration-500 ease-out group-hover:scale-[32]"
                            aria-hidden="true"
                        />
                        <Link href="#contact" className="relative z-10 flex flex-row items-center justify-center gap-2 text-nowrap">
                            {t("collaborate")}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                className="size-6" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                            </svg>
                        </Link>
                    </button>
                </div>
                <ul className="flex flex-row md:flex-col items-center gap-2 font-sans self-center md:self-start mt-4 md:mt-0">
                    {links.map((link) => (
                        <a key={link.href} href={link.href} className="py-3 px-6 bg-surface border border-line rounded-full shadow-sm
                            flex flex-row gap-1 items-center justify-center hover:bg-surface-hover duration-300"
                            target="_blank" rel="noreferrer">
                            {link.src}
                            {link.title}
                        </a>
                    ))}
                </ul>
            </article>

            <article className="relative mx-auto w-full max-w-7xl px-4 md:px-24 py-6 md:py-12 flex flex-col">
                <h2 className="text-ink poppins uppercase text-4xl text-center">{t("skills")}</h2>
                <ul className="flex flex-wrap items-center justify-center gap-2 mt-6">
                    {skills && skills.map((skill, index) => (
                        <div key={index} className="inline-block bg-surface border border-line rounded-full
                            shadow-sm px-4 py-2 m-2 text-sm font-sans font-semibold hover:bg-surface-hover duration-300">
                            <span>
                                {skill}
                            </span>
                        </div>
                    ))}
                </ul>
            </article>

        </motion.section>
    )
}
