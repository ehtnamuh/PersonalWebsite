"use client";

import Link from "next/link"
import { useEffect, useState } from "react";


interface NavbarLinksProps {
    onClick?: () => void;
}

function NavbarLinks({ onClick }: NavbarLinksProps) {
    return (
        <>
            <Link className="text-gray-300 hover:text-white uppercase" href="#about" onClick={onClick}>
                ABOUT
            </Link>
            <Link className="text-gray-300 hover:text-white uppercase" href="#education" onClick={onClick}>
                EDUCATION
            </Link>
            <Link className="text-gray-300 hover:text-white uppercase" href="#experience" onClick={onClick}>
                EXPERIENCE
            </Link>
            <Link className="text-gray-300 hover:text-white uppercase" href="#projects" onClick={onClick}>
                PROJECTS
            </Link>
            <Link className="text-gray-300 hover:text-white uppercase" href="#awards" onClick={onClick}>
                AWARDS
            </Link>
            <Link className="text-gray-300 hover:text-white uppercase" href="#contact" onClick={onClick}>
                CONTACT
            </Link>
            <Link
                className="text-gray-300 hover:text-white flex items-center gap-1 font-bold uppercase"
                href="./pdfs/samincv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Resume PDF in new tab"
                onClick={onClick}
            >
                <img
                    src="./logos/pdf-icon.png"
                    alt="PDF"
                    className="w-4 h-4"
                    style={{ display: "inline-block" }}
                />
                RESUME
            </Link>
        </>
    );
}

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 400);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div>
            {/* Navbar */}
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 flex justify-between items-center  ${
                    scrolled
                        ? "py-2 bg-black dark:bg-gray-800"
                        : "py-3 bg-transparent"
                }`}
            >
                {/* Social Icons Left */}
                <div className="flex gap-4 items-center">
                    <a
                        href="https://www.linkedin.com/in/samin-bin-karim-/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="group"
                    >
                        <img
                            src="./logos/linkedin.png"
                            alt="LinkedIn"
                            className="w-8 h-8 transition-transform duration-200 group-hover:scale-110 group-hover:brightness-125"
                        />
                    </a>
                    <a
                        href="https://medium.com/@saminbinkarim"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Medium"
                        className="group"
                    >
                        <img
                            src="./logos/medium.jpeg"
                            alt="Medium"
                            className="w-8 h-8 transition-transform duration-200 group-hover:scale-110 group-hover:brightness-125"
                        />
                    </a>
                    <a
                        href="https://github.com/ehtnamuh"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="group"
                    >
                        <img
                            src="./logos/github-mark.png"
                            alt="GitHub"
                            className="w-8 h-8 invert dark:invert-0 transition-transform duration-200 group-hover:scale-110 group-hover:brightness-125"
                        />
                    </a>
                </div>
                
                
                {/* Section Links Right */}
                <div className="flex items-center">
                    {/* Hamburger Button (Mobile) */}
                    <button
                        className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
                        aria-label="Toggle Menu"
                        onClick={() => setMenuOpen((open) => !open)}
                    >
                        <span className={`block w-6 h-0.5 bg-gray-300 mb-1 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
                        <span className={`block w-6 h-0.5 bg-gray-300 mb-1 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
                        <span className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
                    </button>
                    {/* Desktop Links */}
                    <div className="hidden md:flex gap-6 items-center">
                        <NavbarLinks />
                    </div>
                </div>


                {/* Mobile Menu */}
                {/* Overlay to close menu when clicking outside */}
                {menuOpen && (
                    <div
                        className="fixed inset-0 z-40 md:hidden"
                        onClick={() => setMenuOpen(false)}
                        aria-label="Close menu overlay"
                        style={{ background: "rgba(0,0,0,0.3)" }}
                    />
                )}
                {/* Actual Mobile Menu */}
                <div
                    className={`fixed top-0 right-0 h-full w-2/3 max-w-xs bg-black dark:bg-gray-800 z-50 transform transition-transform duration-300 md:hidden ${
                        menuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                    style={{ boxShadow: menuOpen ? "-2px 0 8px rgba(0,0,0,0.2)" : "none" }}
                    onClick={e => e.stopPropagation()} // Prevent overlay click from closing when clicking inside menu
                >
                    {/* Close button */}
                    <button
                        className="absolute top-4 right-4 text-gray-300 hover:text-white text-2xl focus:outline-none"
                        aria-label="Close Menu"
                        onClick={() => setMenuOpen(false)}
                    >
                        &times;
                    </button>
                    <div className="flex flex-col gap-6 items-start p-6">
                        <span className="text-yellow-400 font-bold text-2xl mb-4">Samin Bin Karim</span>
                        <NavbarLinks />
                    </div>
                </div>
            
            </nav>
        </div>
    );
}
