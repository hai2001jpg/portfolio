"use client";

import Image from "next/image";
import Photo from "@/public/globe.svg";
import { motion } from "motion/react";

const socialLinks = [
    {
        href: "https://www.linkedin.com/in/hai-tran-ngoc/",
        title: "LinkedIn",
    },
    {
        href: "https://github.com/hai2001jpg",
        title: "GitHub",
    },
    {
        href: "https://www.instagram.com/hai.tran.ngoc/",
        title: "Instagram",
    },
];

function ArrowIcon() {
    return (
        <svg
            aria-hidden="true"
            className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            fill="currentColor"
            viewBox="0 0 16 16"
        >
            <path
                fillRule="evenodd"
                d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
            />
        </svg>
    );
}

export default function Contact() {
    return (
        <motion.section
            id="contact"
            className="mono-bg scroll-mt-24 px-4 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20"
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
            <div className="mx-auto flex min-h-[44rem] w-full max-w-[90rem] flex-col bg-[#0b0d0c] px-6 py-8 text-white shadow-2xl 
            sm:px-10 sm:py-10 lg:min-h-[48rem] lg:px-14 lg:py-12 xl:px-16">
                <h1 className="poppins max-w-full text-[clamp(3.2rem,10vw,9rem)] leading-[0.9] font-light tracking-[-0.07em] uppercase">
                    Get in touch
                </h1>

                <div className="mt-12 grid flex-1 gap-10 sm:mt-16 md:grid-cols-2 lg:mt-20 lg:grid-cols-[1.15fr_0.85fr_0.65fr] lg:gap-14">
                    <div className="flex flex-col items-start gap-8">
                        <div className="space-y-4">
                            <a
                                className="group inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-lime-200"
                                href="mailto:haitranngoc98@gmail.com"
                            >
                                haitranngoc98@gmail.com
                                <ArrowIcon />
                            </a>
                            <p className="dm-mono max-w-sm text-[0.7rem] leading-relaxed tracking-wide text-white/55 uppercase">
                                I build thoughtful digital experiences with a focus on clean interfaces,
                                useful interactions, and reliable implementation.
                            </p>
                        </div>

                        <p className="dm-mono mt-auto text-xs tracking-wider text-lime-200 uppercase">
                            Contact /
                        </p>
                    </div>

                    <div className="space-y-10 lg:space-y-14">
                        <div className="space-y-2">
                            <p className="dm-mono text-[0.65rem] tracking-widest text-white/45 uppercase">
                                Phone
                            </p>
                            <a
                                className="group inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-lime-200"
                                href="tel:+421951137215"
                            >
                                +421 951 137 215
                                <ArrowIcon />
                            </a>
                        </div>

                        <div className="space-y-2">
                            <p className="dm-mono text-[0.65rem] tracking-widest text-white/45 uppercase">
                                Based in
                            </p>
                            <a
                                className="group inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-lime-200"
                                href="https://www.google.com/maps/search/?api=1&query=Kosice%2C%20Slovakia"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Košice, Slovakia
                                <ArrowIcon />
                            </a>
                            <p className="dm-mono max-w-xs text-[0.7rem] leading-relaxed tracking-wide text-white/55 uppercase">
                                Available for hire.
                            </p>
                        </div>
                    </div>

                    <div className="hidden items-start justify-end md:flex">
                        <div className="flex aspect-square w-full max-w-52 items-center justify-center border border-white/10 bg-white/5 p-7">
                            <Image
                                src={Photo}
                                alt=""
                                className="size-full opacity-70 invert"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-14 flex flex-col gap-8 border-t border-white/10 pt-6 sm:mt-16 sm:flex-row sm:items-end sm:justify-between">
                    <ul className="flex flex-wrap gap-x-6 gap-y-3">
                        {socialLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group dm-mono inline-flex items-center gap-1.5 text-[0.7rem] 
                                    tracking-wide uppercase transition-colors hover:text-lime-200"
                                >
                                    {link.title}
                                    <ArrowIcon />
                                </a>
                            </li>
                        ))}
                    </ul>

                    <p
                        aria-label="Copyright 2026"
                        className="poppins text-[clamp(4rem,8vw,7rem)] leading-[0.75] font-light tracking-[-0.08em]"
                    >
                        © 26
                    </p>
                </div>
            </div>
        </motion.section>
    );
}
