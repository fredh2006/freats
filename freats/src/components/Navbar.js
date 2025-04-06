"use client"

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Oswald } from "next/font/google";

const oswald = Oswald({
    subsets: ['latin']
})

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };
        
        handleResize();
        
        window.addEventListener('resize', handleResize);
        
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (!isMenuOpen) return;
        
        const handleClickOutside = (e) => {
            if (!e.target.closest('nav')) {
                setIsMenuOpen(false);
            }
        };
        
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isMenuOpen]);

    const NavLinks = ({ mobile = false }) => (
        <>
            <Link 
                href="/" 
                className={`${oswald.className} relative text-2xl font-bold tracking-wide px-4 py-2 ${
                    mobile ? 'w-full text-center' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
            >
                <span className={`transition-all duration-300 ease-in-out hover:text-[#4A90E2] inline-block text-black ${
                    pathname === '/' ? 'text-[#4A90E2]' : ''
                }`}>
                    HOME
                </span>
                {pathname === '/' && !mobile && (
                    <div className="absolute bottom-[-1rem] left-1/4 w-1/2 h-[4px] bg-[#4A90E2] z-10"></div>
                )}
                {pathname === '/' && mobile && (
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#4A90E2]"></div>
                )}
            </Link>
            <Link 
                href="/posts" 
                className={`${oswald.className} relative text-2xl font-bold tracking-wide px-4 py-2 ${
                    mobile ? 'w-full text-center' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
            >
                <span className={`transition-all duration-300 ease-in-out hover:text-[#4A90E2] inline-block text-black ${
                    pathname === '/posts' ? 'text-[#4A90E2]' : ''
                }`}>
                    POSTS
                </span>
                {pathname === '/posts' && !mobile && (
                    <div className="absolute bottom-[-1rem] left-1/4 w-1/2 h-[4px] bg-[#4A90E2] z-10"></div>
                )}
                {pathname === '/posts' && mobile && (
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#4A90E2]"></div>
                )}
            </Link>
            <Link 
                href="/about" 
                className={`${oswald.className} relative text-2xl font-bold tracking-wide px-4 py-2 ${
                    mobile ? 'w-full text-center' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
            >
                <span className={`transition-all duration-300 ease-in-out hover:text-[#4A90E2] inline-block text-black ${
                    pathname === '/about' ? 'text-[#4A90E2]' : ''
                }`}>
                    ABOUT
                </span>
                {pathname === '/about' && !mobile && (
                    <div className="absolute bottom-[-1rem] left-1/4 w-1/2 h-[4px] bg-[#4A90E2] z-10"></div>
                )}
                {pathname === '/about' && mobile && (
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#4A90E2]"></div>
                )}
            </Link>
        </>
    );

    return (
        <nav className={`relative w-full bg-white flex justify-center items-center py-4 transition-all duration-300 ease-in-out ${
            isMobile ? 'h-[60px]' : 'h-[80px]'
        }`}>
            <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[#DCD1D1]"></div>
            
            <div className="hidden md:flex items-center space-x-8">
                <NavLinks />
            </div>
            
            <div className="md:hidden absolute right-4 top-4">
                <button 
                    onClick={toggleMenu}
                    className="pl-2 pt-1 focus:outline-none transition duration-200"
                    aria-label="Toggle menu"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    {!isMenuOpen ? (
                        <div className="space-y-1.5">
                            <span className={`block w-6 h-0.5 rounded-full transition-colors duration-300 ${isHovering ? 'bg-[#4A90E2]' : 'bg-gray-800'}`}></span>
                            <span className={`block w-6 h-0.5 rounded-full transition-colors duration-300 ${isHovering ? 'bg-[#4A90E2]' : 'bg-gray-800'}`}></span>
                            <span className={`block w-6 h-0.5 rounded-full transition-colors duration-300 ${isHovering ? 'bg-[#4A90E2]' : 'bg-gray-800'}`}></span>
                        </div>
                    ) : (
                        <div className="relative w-6 h-6">
                            <span className={`absolute top-3 w-6 h-0.5 rounded-full transform rotate-45 transition-colors duration-300 ${isHovering ? 'bg-[#4A90E2]' : 'bg-gray-800'}`}></span>
                            <span className={`absolute top-3 w-6 h-0.5 rounded-full transform -rotate-45 transition-colors duration-300 ${isHovering ? 'bg-[#4A90E2]' : 'bg-gray-800'}`}></span>
                        </div>
                    )}
                </button>
            </div>
            
            <div 
                className={`md:hidden absolute top-[60px] left-0 w-full bg-white shadow-lg z-20 transform origin-top transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
                }`}
            >
                <div className="flex flex-col divide-y divide-gray-100">
                    <NavLinks mobile={true} />
                </div>
            </div>
        </nav>
    );
}