"use client"

import Image from "next/image";
import Navbar from "../components/Navbar"
import Button from "../components/Button"
import { Quicksand, Noto_Serif } from "next/font/google"
import Link from "next/link";

const quicksand = Quicksand({
  subsets: ['latin']
})

const noto_serif = Noto_Serif({
  subsets: ['latin']
})


export default function Home() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center px-2 sm:px-0">
      <Navbar />
      <div className="container mx-auto px-1 sm:px-6 lg:px-8 py-2 sm:py-8 md:py-12 max-w-[98%] sm:max-w-full">
        <div className="grid md:grid-cols-3 gap-2 sm:gap-6 md:gap-8 lg:gap-12 w-full">
          <div className="bg-[#FBF7F3] p-2 sm:p-6 md:p-8 lg:p-10 shadow-sm min-h-[180px] sm:min-h-[300px] flex flex-col justify-between">
            <div className="space-y-1.5 sm:space-y-4 md:space-y-6">
              <div className={`${noto_serif.className} text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-wide text-gray-800`}>
                Welcome to FREATS! 👋
              </div>
              <div className={`${quicksand.className} text-md sm:text-base lg:text-lg leading-relaxed text-gray-700`}>
                Hi, I&apos;m Fred, a first year university student who loves all things food. FREATS is a space where I post reviews, articles, and really, anything I want. 🤤
              </div>
              <div className={`${quicksand.className} text-md sm:text-base lg:text-lg leading-relaxed text-gray-700`}>
                Join me in this culinary adventure as I explore different cuisines, share cooking experiences, and discover the best food spots around Toronto!
              </div>
            </div>
            <div className="mt-2 sm:mt-4">
              <Button />
            </div>
          </div>
          <Link href="posts/6701ba7dc021bc454142a088" className="shadow-sm min-h-[180px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[500px] bg-[url(/uoft.png)] bg-cover relative overflow-hidden bg-center">
            <div href="/posts" className={`${noto_serif.className} text-sm sm:text-lg md:text-xl lg:text-2xl w-full sm:w-3/4 font-bold p-1.5 sm:p-3 absolute bottom-0 left-0 bg-white`}>Dishes that Remind me of Home</div>
          </Link>
          <Link href="/posts/66ad7fe0de845afb0cef7f9a" className="shadow-sm min-h-[180px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[500px] bg-[url(/japan.png)] bg-cover relative overflow-hidden bg-center">
            <div className={`${noto_serif.className} text-sm sm:text-lg md:text-xl lg:text-2xl w-full sm:w-3/4 font-bold p-1.5 sm:p-3 absolute bottom-0 left-0 bg-white`}>Review: Japan</div>
          </Link>
        </div>
      </div>
      <div className="container mx-auto px-1 sm:px-6 lg:px-8 mb-2 sm:mb-5 max-w-[98%] sm:max-w-full">
        <h1 className={`${noto_serif.className} text-lg sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 text-gray-800`}>
          Featured
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-6 md:gap-8 lg:gap-12">
          <div>
            <div className={`${quicksand.className} text-[10px] sm:text-sm text-gray-600 mb-1`}>
              March 22, 2024 • 3-minute read
            </div>
            <img 
              src="/uoft.png" 
              alt="Featured article image" 
              className="w-full h-[150px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover rounded-lg shadow-lg hover:shadow-xl transition-all duration-300" 
            />
          </div>
          
          <div className={`${quicksand.className} mt-0 md:mt-5 `}>
            <h2 className={`${noto_serif.className} text-xl sm:text-2xl md:text-3xl font-bold mb-1.5 sm:mb-4 md:mb-6 text-gray-800`}>
              Dishes that Remind me of Home
            </h2>
            <div className="mb-2 sm:mb-6 md:mb-8 text-sm sm:text-lg md:text-md lg:text-md leading-relaxed">
              Wow. It feels like I haven't written an article in the longest time, which is partially true. Ever since I got back from my East-Asian country crawl (only 2 countries lol!), I went to explore the stunning scenery of Banff and pack my bags for university. As a freshman in university, the transition from high school to university isn't simple at all. There's such a drastic difference whether it'd be socially or academically, but I've begun to ease into a routine I enjoy. Although I go to university close to home and have the blessing of going back every week, I still feel homesick and crave the warmth of the dinner table at home. For any university student reading and experiencing this, I've found that one of the best things you can do is eat food that reminds you of home. I'm here today to share some of my favourite dishes.
            </div>
            <Button></Button>
          </div>
        </div>
      </div>
    </div>
  );
}