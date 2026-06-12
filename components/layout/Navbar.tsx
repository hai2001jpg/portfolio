"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
    { href: "/#projects", title: "Projects" },
    { href: "/#education", title: "Education" },
    { href: "/#contact", title: "Contact" },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const navbarScroll = () => {
            setIsScrolled(window.scrollY > 0);
        }
        navbarScroll();
        window.addEventListener("scroll", navbarScroll, { passive: true });
        return () => window.removeEventListener("scroll", navbarScroll);
    }, [])

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <>
            <nav className={`fixed inset-x-0 top-0 z-50 min-h-24 w-full bg-white/30 px-4 py-6 backdrop-blur-lg 
            md:px-24 md:py-8 
            ${isScrolled ? "shadow-lg" : "shadow-none"}
            `}>
                <div className="flex w-full items-center justify-between gap-8">
                    <div className="flex flex-row gap-2 items-center justify-center py-2 px-4 bg-white/95 border 
                    border-black/10 rounded-full shadow-lg text-nowrap">
                        <div className="size-2 bg-green-500 rounded-full motion-safe:animate-ping"></div>
                        Open to work
                    </div>

                    <ul className="hidden flex-row gap-8 text-lg text-black dm-sans md:flex">
                        {navLinks.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className="hover:text-black/50 duration-300"
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <Link href="/#contact"
                        className="hidden group relative overflow-hidden rounded-full bg-black px-4 py-2 text-white 
                        duration-300 hover:-translate-y-1 cursor-pointer md:block min-w-40"
                        onClick={closeMenu}
                    >
                        <span
                            className="absolute left-1/2 top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full 
                        bg-gray-700 transition-transform duration-500 ease-out group-hover:scale-[18]"
                            aria-hidden="true"
                        />
                        <span className="relative z-10 flex flex-row items-center justify-center gap-2 text-nowrap">
                            Get in touch
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="size-4"
                                viewBox="0 0 16 16">
                                <path fillRule="evenodd"
                                    d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                                />
                            </svg>
                        </span>
                    </Link>

                    <button
                        type="button"
                        className="flex size-11 flex-col items-center justify-center gap-1.5 rounded-full border 
                    border-black/10 bg-white/95 hover:bg-gray-100 duration-300 shadow-lg md:hidden cursor-pointer"
                        aria-label="Open mobile menu"
                        aria-controls="mobile-menu"
                        aria-expanded={isMenuOpen}
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <span className="h-0.5 w-5 rounded-full bg-black"></span>
                        <span className="h-0.5 w-5 rounded-full bg-black"></span>
                        <span className="h-0.5 w-5 rounded-full bg-black"></span>
                    </button>
                </div>
            </nav>

            {/* mobile layout */}
            <div
                id="mobile-menu"
                className={`fixed inset-0 z-100 flex min-h-dvh flex-col overflow-y-auto overscroll-contain bg-black/95 px-6 py-6 transition-all duration-300 ease-out 
                    motion-reduce:transition-none md:hidden 
                    ${isMenuOpen
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-6 opacity-0"
                    }`
                }
                aria-hidden={!isMenuOpen}
                inert={!isMenuOpen}
            >
                <div className="relative flex items-center justify-end">
                    <div className="absolute left-1/2 flex -translate-x-1/2 flex-row gap-2 items-center justify-center py-2 px-4 bg-white border 
                            border-black/10 rounded-full shadow-lg text-nowrap select-none">
                        <div className="size-2 bg-green-500 rounded-full motion-safe:animate-ping"></div>
                        Open to work
                    </div>

                    <button
                        type="button"
                        className="flex size-11 items-center justify-center rounded-full border border-black/10 
                            bg-black text-white hover:bg-gray-800 duration-300 shadow-lg cursor-pointer"
                        aria-label="Close mobile menu"
                        onClick={closeMenu}
                    >
                        <span className="relative size-5">
                            <span className="absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 rotate-45 
                                rounded-full bg-white"></span>
                            <span className="absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 -rotate-45 
                                rounded-full bg-white"></span>
                        </span>
                    </button>
                </div>

                <ul className="mt-16 flex flex-col gap-6 text-5xl uppercase text-white dm-sans">
                    {navLinks.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className="duration-300 hover:text-white/50"
                                onClick={closeMenu}
                            >
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>

                <Link href="/#contact"
                    className="group relative mt-auto overflow-hidden rounded-full bg-white px-5 py-4 text-black 
                    duration-300 cursor-pointer w-40 self-center md:self-start"
                    onClick={closeMenu}
                >
                    <span className="absolute left-1/2 top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full 
                            bg-gray-700 transition-transform duration-500 ease-out group-hover:scale-[32]"
                        aria-hidden="true"
                    />
                    <span className="relative z-10 flex flex-row items-center justify-center gap-2 text-nowrap">
                        Get in touch
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="size-4"
                            viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                                d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                            />
                        </svg>
                    </span>
                </Link>
            </div>
        </>
    );
}
