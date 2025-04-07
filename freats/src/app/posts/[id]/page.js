import { MongoClient, ObjectId } from "mongodb";
import Navbar from "../../../components/Navbar";
import { Quicksand, Noto_Serif } from "next/font/google";
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

async function getPost(id) {
  try {
    const client = await clientPromise;
    const db = client.db("test");
    const post = await db.collection("posts").findOne({ _id: new ObjectId(id) });
    return post;
  } catch (error) {
    console.error("Failed to fetch post:", error);
    return null;
  }
}

function replaceApostrophes(text) {
  return text ? text.replace(/ ' /g, "&apos;") : text;
}

export default async function Post({ params }) {
  const { id } = await params
  const post = await getPost({id});
  
  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <h1 className={`${noto_serif.className} text-2xl font-bold`}>Post not found</h1>
        </div>
      </div>
    );
  }
  
  const paragraphs = post.content.split('\n').filter(p => p.trim());
  const imageArray = post.images ? post.images.split(',').map(img => img.trim()) : [];
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <article className="container mx-auto px-2 sm:px-6 lg:px-8 py-4 sm:py-8 md:py-12 max-w-[98%] sm:max-w-4xl">
        <header className="mb-8">
          <div className={`${quicksand.className} text-sm text-gray-600 mb-2`}>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })} • {post.time}-minute read
          </div>
          <h1 className={`${noto_serif.className} text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4`}>
            {replaceApostrophes(post.title)}
          </h1>
        </header>
        
        <div className="mb-8">
          <img
            src={post.prevImage}
            alt={replaceApostrophes(post.title)}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        
        <div className={`${quicksand.className} space-y-8`}>
          {paragraphs.map((paragraph, index) => (
            <div key={index}>
              {imageArray[index] && imageArray[index] !== 'none' && (
                <div className="mb-4">
                  <img
                    src={imageArray[index]}
                    alt={`${replaceApostrophes(post.title)} - Image ${index + 1}`}
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              )}
              <p className="text-gray-800 text-md md:text-lg leading-relaxed">
                {replaceApostrophes(paragraph)}
              </p>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}