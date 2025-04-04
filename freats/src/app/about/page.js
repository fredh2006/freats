import Navbar from "../../components/Navbar"
import { Quicksand, Noto_Serif } from "next/font/google"

const quicksand = Quicksand({
    subsets: ['latin']
})

const noto_serif = Noto_Serif({
    subsets: ['latin']
})

export default function About() {
    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12">
                <h1 className={`${noto_serif.className} text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800`}>
                    About Me
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    <div className={`${quicksand.className} space-y-6`}>
                        <div className="text-lg space-y-4 text-gray-700 leading-relaxed">
                            Hi, I'm Fred He, a first year university student attending the University of Toronto. When I'm not studying (which is very often), you can find me in the kitchen, rummaging through the fridge and stuffing my face with anything I can get my hands on.
                        </div>
                        <div className="text-lg space-y-4 text-gray-700 leading-relaxed">
                            Food has always been of utmost importance to me, whether in terms of nutrition or taste. I love eating, and hope that I'll be able to document lots of my journey to show on FREATS. 😋
                        </div>
                        <div className="mt-8 space-y-4">
                            <h2 className={` ${noto_serif.className} text-2xl font-semibold text-gray-800`}>Fun Facts</h2>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>I hate tomatoes, but love everything made from them.</li>
                                <li>I was born in Shanghai, China, and am in love with the cuisine.</li>
                                <li>I've been to over 15 countries, my most recent visit was Korea and Japan.</li>
                                <li>I'm an amateur chef, but am trying to learn so my cooking skills can match up to my eating skills.</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="space-y-8">
                        <div className="flex justify-center">
                            <img src="/about.png" alt="Fred's photo" className="w-full max-w-md h-auto shadow-lg hover:shadow-xl transition-shadow duration-300" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}