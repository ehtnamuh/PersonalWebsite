
"use client";

import Link from "next/link"
import { useEffect, useState } from "react";



export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 500);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div>
            {/* Navbar */}
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 px-6 py-4 flex justify-between items-center shadow-md ${
                    scrolled
                        ? "bg-black dark:bg-gray-800"
                        : "bg-transparent"
                }`}
            >
                <h1 className="text-2xl font-bold text-gray-100">
                    <Link href="/">
                        Samin Bin Karim
                    </Link>
                </h1>
                <div className="flex gap-4">
                    <Link className="text-gray-300 hover:text-white" href="/">
                        Home
                    </Link>
                    <a
                        className="text-gray-300 hover:text-white"
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                    <a
                        className="text-gray-300 hover:text-white"
                        href="https://medium.com/@yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Medium
                    </a>
                    <a
                        className="text-gray-300 hover:text-white"
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                </div>
            </nav>
        </div>
    );
}