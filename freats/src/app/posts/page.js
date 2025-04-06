import { MongoClient } from "mongodb";
import Navbar from "../../components/Navbar";
import { Quicksand, Noto_Serif } from "next/font/google";
import Link from "next/link";
require('dotenv').config()

const quicksand = Quicksand({
  subsets: ['latin']
})

const noto_serif = Noto_Serif({
  subsets: ['latin']
})

const URI = process.env.DB_LINK
const options = []

let client = new MongoClient(URI, options)
let clientPromise

if (process.env.NODE_ENV !== 'production'){
    if(!global._mongoClientPromise){
        global._mongoClientPromise = client.connect()
    }
    clientPromise = global._mongoClientPromise
}else{
    clientPromise = client.connect()
}

async function getPosts() {
  try {
    const client = await clientPromise;
    const db = client.db("test");
    const posts = await db.collection("posts")
      .find({})
      .sort({ date: -1 })
      .toArray();
    return posts;
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return [];
  }
}

export default async function Posts() {
  const posts = await getPosts();

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="container mx-auto px-1 sm:px-6 lg:px-8 py-2 sm:py-8 md:py-12 max-w-[98%] sm:max-w-full">
        <h1 className={`${noto_serif.className} text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-8 text-gray-800`}>
          All Posts
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {posts.map((post) => (
            <Link href={`/posts/${post._id}`} key={post._id} className="group">
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <img 
                  src={post.prevImage} 
                  alt={post.title}
                  className="w-full h-[200px] sm:h-[250px] object-cover rounded-t-lg"
                />
                <div className="p-4 space-y-2">
                  <div className={`${quicksand.className} text-xs sm:text-sm text-gray-600`}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })} • {post.time}-minute read
                  </div>
                  <h2 className={`${noto_serif.className} text-lg sm:text-2xl font-bold text-gray-800 group-hover:text-[#457FFE] transition-colors duration-300`}>
                    {post.title}
                  </h2>
                  <p className={`${quicksand.className} text-sm sm:text-base text-gray-700 line-clamp-3`}>
                    {post.firstPara}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
