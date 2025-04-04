"use client"

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Oswald } from "next/font/google";

const oswald = Oswald({
    subsets: ['latin']
})

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="relative w-full bg-white flex justify-center items-center py-4">
            <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[#DCD1D1]"></div>

            <div className="flex space-x-25">
                <Link 
                    href="/" 
                    className={`${oswald.className} relative text-2xl font-bold tracking-wide px-4`}
                >
                    <span className={`
                       "transition-all duration-300 ease-in-out
                        hover:text-[#4A90E2] hover:scale-105 inline-block
                        text-black" 
                    `}>
                        HOME
                    </span>
                    {pathname === '/' && (
                        <div className="absolute bottom-[-1rem] left-1/4 w-1/2 h-[4px] bg-[#4A90E2] z-10"></div>
                    )}
                </Link>
                <Link 
                    href="/posts" 
                    className={`${oswald.className} relative text-2xl font-bold tracking-wide px-4`}
                >
                    <span className={`
                        "transition-all duration-300 ease-in-out
                        hover:text-[#4A90E2] hover:scale-105 inline-block
                        text-black"
                    `}>
                        POSTS
                    </span>
                    {pathname === '/posts' && (
                        <div className="absolute bottom-[-1rem] left-1/4 w-1/2 h-[4px] bg-[#4A90E2] z-10"></div>
                    )}
                </Link>
                <Link 
                    href="/about" 
                    className={`${oswald.className} relative text-2xl font-bold tracking-wide px-4`}
                >
                    <span className={`
                        "transition-all duration-300 ease-in-out
                        hover:text-[#4A90E2] hover:scale-105 inline-block
                        text-black"
                    `}>
                        ABOUT
                    </span>
                    {pathname === '/about' && (
                        <div className="absolute bottom-[-1rem] left-1/4 w-1/2 h-[4px] bg-[#4A90E2] z-10"></div>
                    )}
                </Link>
            </div>
        </nav>
    );
}
