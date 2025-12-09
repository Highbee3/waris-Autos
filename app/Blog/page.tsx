"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "Top 5 Cars to Buy in 2025",
    excerpt:
      "A breakdown of the best performance, luxury, and budget-friendly cars hitting the market in 2025.",
    img: "https://res.cloudinary.com/dlzjjxtsd/image/upload/2025-lexus-rx350-premium-101-66f2dbe526c80.jpg_r3nsqv.jpg",
    date: "Jan 8, 2025",
  },
  {
    id: 2,
    title: "Why Lexus Remains the King of Comfort",
    excerpt:
      "Lexus continues to dominate with unmatched interior quality, smooth drive, and reliability.",
    img: "https://res.cloudinary.com/dlzjjxtsd/image/upload/2025-lexus-nx-nx-350-f-sport-handling-awd-angular-front-exterior-view_100929664_m_gi5v6x.webp",
    date: "Jan 5, 2025",
  },
  {
    id: 3,
    title: "Maintenance Tips to Make Your Car Last Longer",
    excerpt:
      "Simple, practical, and effective ways to extend your car's lifespan — even with heavy use.",
    img: "https://res.cloudinary.com/dlzjjxtsd/image/upload/Lexus-RC-hero-overview-mobile-960x1109-LEX-RCG-MY21-0035_M95_ci86ph.jpg",
    date: "Jan 1, 2025",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-950  text-white px-6 md:px-16 pt-14 pb-20">
      <h1 className="text-4xl mt-9 font-bold mb-10">Blog</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {posts.map((post) => (
          <motion.div
            key={post.id}
            whileHover={{ scale: 1.03 }}
            className="bg-gray-900 border border-gray-700 rounded-xl overflow-hidden shadow-xl"
          >
            <Image
              src={post.img}
              alt={post.title}
                width={400}
                height={250}
              className="w-full h-48 object-cover"
            />

            <div className="p-5">
              <p className="text-sm text-gray-400">{post.date}</p>
              <h2 className="text-xl font-bold mt-1">{post.title}</h2>
              <p className="text-gray-300 mt-2 text-sm">{post.excerpt}</p>

              <button className="mt-4 text-blue-400 hover:text-blue-500 text-sm">
                Read more →
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
