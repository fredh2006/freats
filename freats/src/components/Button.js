"use client"

import { Oswald } from "next/font/google"
import Link from "next/link"

const oswald = Oswald({
    subsets: ['latin']
})

export default function Button() {
    return (
        <Link 
            href = "/posts"
             className={`${oswald.className} 
            text-gray-800 
            border-2 border-gray-800 hover:border-[#457FFE]
            font-medium text-sm sm:text-base md:text-lg
            px-3 sm:px-4 md:px-6 
            py-1.5 sm:py-2 md:py-3
            rounded-lg
            inline-flex items-center gap-1 sm:gap-2
            transition-all duration-300 ease-in-out
            hover:shadow-md hover:scale-[1.02]
            hover:text-[#457FFE]
            focus:outline-none focus:ring-2 focus:ring-[#457FFE]
            cursor-pointer
        `}>
            DISCOVER MORE
            <svg className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
        </Link>
    )
}