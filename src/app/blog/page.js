import Image from "next/image";
import project1 from "../assets/image/project/project1.png"
import project3 from "../assets/image/project/project3.png"
import project11 from "../assets/image/project/project11.png"

const blogPosts = [
  {
    id: 1,
    title: "Mastering React Hooks in 2025",
    date: "June 20, 2025",
    excerpt:
      "Explore advanced patterns and performance tips for React hooks in modern web development.",
    image: project1,
    readTime : "5 min read",
  },
  {
    id: 2,
    title: "Design Trends in UI/UX",
    date: "June 18, 2025",
    excerpt:
      "Check out what’s hot in 2025’s UI/UX world—from glassmorphism to AI-powered personalization.",
    image: project3,
     readTime : "4 min read",
  },
  {
    id: 3,
    title: "Next.js 14: What’s New",
    date: "June 15, 2025",
    excerpt:
      "A full breakdown of the new features and performance boosts in Next.js 14.",
    image: project11,
     readTime : "10 min read",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white py-16 px-4 md:px-20">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-lime-400 mb-4">
          Our Blog
        </h1>
        <p className="text-gray-400 text-lg">
          Read the latest stories, insights, and updates.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 items-stretch">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-[#1a1a1a] rounded-2xl shadow-lg hover:shadow-lime-400/20 transition-shadow flex flex-col h-full"
          >
            <div className="relative   w-full h-56 rounded-t-2xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover  hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5 flex flex-col flex-grow">
               <p className="text-lime-400">{post.readTime}</p>
              <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
              <p className="text-gray-400 mb-4 flex-grow">{post.excerpt}</p>
             
              {/* <button className="text-sm text-lime-400 font-medium hover:underline">
                Read More →
              </button> */}
             
                  
              <div className="border-t pt-3 border-lime-300 flex justify-between mt-auto items-center">

              <button className="text-sm text-white bg-lime-500 p-2 font-medium
               hover:text-lime-400 hover:bg-transparent hover:border hover:border-lime-300 ">
                Read More 
              </button>
               <div className="text-sm  items-center text-lime-300 mb-2">{post.date}</div>
              </div>

             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
