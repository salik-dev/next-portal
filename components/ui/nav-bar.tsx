'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-white/80 backdrop-blur-sm shadow-sm'
                    : 'bg-transparent'
                } m-2 rounded-xl overflow-hidden`}
        >
            {/* Floating Bubbles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute h-4 w-4 rounded-full bg-blue-300/20 animate-float top-4 left-[10%]" />
                <div className="absolute h-3 w-3 rounded-full bg-blue-300/20 animate-float top-8 left-[20%] [animation-delay:0.5s]" />
                <div className="absolute h-5 w-5 rounded-full bg-blue-300/20 animate-float top-6 left-[80%] [animation-delay:1s]" />
                <div className="absolute h-6 w-6 rounded-full bg-blue-300/20 animate-float top-2 left-[60%] [animation-delay:1.5s]" />
            </div>

            <div className="relative px-4 sm:px-8 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center space-x-3 group">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-lg blur group-hover:blur-md transition-all duration-300"></div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#1F2937"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-airplay-icon lucide-airplay"
                            >
                                <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" />
                                <path d="m12 15 5 6H7Z" />
                            </svg>
                        </div>
                        <span className="text-xl sm:text-2xl font-bold text-gray-800">Next-Dash</span>
                    </div>

                    <div className="flex items-center space-x-6 border border-dashed border-gray-300 rounded-full px-8 py-3">
                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center space-x-6">
                            {['Home', 'Features', 'About', 'Posts'].map((item) => (
                                <Link key={item} href={`${item === 'Posts' ? '/' : '#'}`} className="relative group">
                                    <span className="text-gray-700 group-hover:text-black transition-colors duration-300">{item}</span>
                                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-300 group-hover:w-full transition-all duration-300" />
                                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-300 group-hover:w-full transition-all duration-500 delay-100" />
                                </Link>
                            ))}
                        </div>

                        {/* Right Buttons */}
                        <div className="flex items-center">
                            {/* CTA Button */}
                            <button className="hidden sm:flex relative group">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-200"></div>
                                <div className="relative px-5 py-2 bg-white border border-blue-100 rounded-full leading-none flex items-center">
                                    <Link href="/admin" className="text-gray-700 group-hover:text-black transition duration-200 hover:cursor-pointer">Dashboard</Link>
                                    <svg className="w-5 h-5 text-gray-700 group-hover:text-black transform group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </div>
                            </button>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="md:hidden relative group"
                                aria-label="Toggle mobile menu"
                            >
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-cyan-300 rounded blur opacity-60 group-hover:opacity-100 transition duration-200"></div>
                                <div className="relative p-2 bg-white border border-blue-100 rounded leading-none">
                                    {!isOpen ? (
                                        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                    ) : (
                                        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    )}
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Nav */}
                {isOpen && (
                    <div className="mt-4 md:hidden animate-slide-down">
                        {['Home', 'Features', 'About', 'Contact'].map((item) => (
                            <a key={item} href="#" className="block px-4 py-2 text-gray-700 hover:text-black">
                                {item}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
