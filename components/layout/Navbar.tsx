"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import ContactLink from "@/components/ui/ContactLink";
import ThemeToggle from "@/components/ui/ThemeToggle";

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

    useEffect(() => {
        const colorScheme = window.matchMedia("(prefers-color-scheme: dark)");
        const hasStoredTheme = () => {
            try {
                return localStorage.getItem("theme") !== null;
            } catch {
                return false;
            }
        };
        const syncSystemTheme = (event: MediaQueryListEvent) => {
            if (!hasStoredTheme()) {
                document.documentElement.dataset.theme = event.matches ? "dark" : "light";
            }
        };
        const syncStoredTheme = (event: StorageEvent) => {
            if (event.key === "theme") {
                document.documentElement.dataset.theme =
                    event.newValue === "dark" ? "dark" : event.newValue === "light" ? "light" : colorScheme.matches ? "dark" : "light";
            }
        };

        colorScheme.addEventListener("change", syncSystemTheme);
        window.addEventListener("storage", syncStoredTheme);

        return () => {
            colorScheme.removeEventListener("change", syncSystemTheme);
            window.removeEventListener("storage", syncStoredTheme);
        };
    }, []);

    const closeMenu = () => setIsMenuOpen(false);
    const toggleTheme = () => {
        const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
        document.documentElement.dataset.theme = nextTheme;
        try {
            localStorage.setItem("theme", nextTheme);
        } catch {
            // the selected theme still applies for this page when storage is unavailable
        }
    };

    return (
        <>
            <nav className={`fixed inset-x-0 top-0 z-50 min-h-24 w-full bg-canvas/75 px-4 py-6 backdrop-blur-lg
            md:px-24 md:py-8 
            ${isScrolled ? "border-b border-line shadow-lg" : "shadow-none"}
            `}>
                <div className="flex w-full items-center justify-between gap-8">
                    <div className="flex flex-row gap-2 items-center justify-center py-2 px-4 bg-surface border
                    border-line rounded-full shadow-lg text-nowrap">
                        <div className="size-2 bg-green-500 rounded-full motion-safe:animate-ping"></div>
                        Open to work
                    </div>

                    <ul className="hidden flex-row gap-8 text-lg text-ink dm-sans md:flex">
                        {navLinks.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className="hover:text-muted duration-300"
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="hidden items-center gap-3 md:flex">
                        <ThemeToggle onToggle={toggleTheme} />
                        <ContactLink onClick={closeMenu} />
                    </div>

                    <button
                        type="button"
                        className="flex size-11 flex-col items-center justify-center gap-1.5 rounded-full border
                        border-line bg-surface hover:bg-surface-hover duration-300 shadow-lg cursor-pointer md:hidden"
                        aria-label="Open mobile menu"
                        aria-controls="mobile-menu"
                        aria-expanded={isMenuOpen}
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <span className="h-0.5 w-5 rounded-full bg-ink"></span>
                        <span className="h-0.5 w-5 rounded-full bg-ink"></span>
                        <span className="h-0.5 w-5 rounded-full bg-ink"></span>
                    </button>
                </div>
            </nav>

            {/* mobile layout */}
            <div
                id="mobile-menu"
                className={`fixed inset-0 z-100 flex min-h-dvh flex-col overflow-y-auto overscroll-contain bg-canvas/98 px-6 py-6 transition-all duration-300 ease-out
                    motion-reduce:transition-none md:hidden 
                    ${isMenuOpen
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-6 opacity-0"
                    }`
                }
                aria-hidden={!isMenuOpen}
                inert={!isMenuOpen}
            >
                <div className="relative flex items-center justify-between">
                    <ThemeToggle onToggle={toggleTheme} />

                    <div className="absolute left-1/2 flex -translate-x-1/2 flex-row gap-2 items-center justify-center py-2 px-4 bg-surface border
                            border-line rounded-full shadow-lg text-nowrap select-none">
                        <div className="size-2 bg-green-500 rounded-full motion-safe:animate-ping"></div>
                        Open to work
                    </div>

                    <button
                        type="button"
                        className="flex size-11 items-center justify-center rounded-full border border-line
                            bg-action text-action-ink hover:bg-action-hover duration-300 shadow-lg cursor-pointer"
                        aria-label="Close mobile menu"
                        onClick={closeMenu}
                    >
                        <span className="relative size-5">
                            <span className="absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 rotate-45 
                                rounded-full bg-action-ink"></span>
                            <span className="absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 -rotate-45 
                                rounded-full bg-action-ink"></span>
                        </span>
                    </button>
                </div>

                <ul className="mt-16 flex flex-col gap-6 text-5xl uppercase text-ink dm-sans">
                    {navLinks.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className="duration-300 hover:text-muted"
                                onClick={closeMenu}
                            >
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="mt-auto flex justify-center">
                    <ContactLink onClick={closeMenu} />
                </div>
            </div>
        </>
    );
}
