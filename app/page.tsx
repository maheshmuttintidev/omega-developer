'use client';
import Banner from "./banner.webp";
import { Videos } from "@/components/videos";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="container mx-auto p-3 flex flex-col items-center justify-center">
      <section className="relative w-full overflow-hidden">
        {/* Parallax Banner */}
        <div
          className="relative bg-cover bg-center h-96 flex items-center justify-center"
          style={{ backgroundImage: `url(${Banner.src})`, transform: `translateY(${scrollY * 0.5}px)` }}
        >
        </div>

        {/* Category List */}
        <ul className="flex gap-x-6 gap-y-4 flex-wrap justify-center text-lg font-semibold text-gray-200 mb-8">
          {categories.map((category, index) => (
            <li
              key={index}
              className="flex items-center gap-2 p-2 bg-gray-800 rounded-md shadow hover:bg-gray-700 transition"
            >
              <span className="text-2xl">{category.icon}</span>
              <span>{category.name}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Parallax Videos Section */}
      <section
        className="relative w-full bg-gray-900 min-h-screen p-4 text-white"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        <Videos />
      </section>
    </main>
  );
}


// Categories Data with Icons
const categories = [
  { name: "Anime", icon: "🎥" },
  { name: "Technology", icon: "💻" },
  { name: "Web Development", icon: "🌐" },
  { name: "Mobile Apps", icon: "📱" },
  { name: "AI", icon: "🤖" },
  { name: "Cartoons", icon: "🧩" },
  { name: "Science", icon: "🔬" },
  { name: "Movies", icon: "🎬" },
  { name: "Horror & Scary", icon: "👻" },
  { name: "Comedy", icon: "😂" },
  { name: "Heartbreak Scenes", icon: "💔" },
  { name: "Coding & Programming", icon: "💻" },
  { name: "Algorithms & Data Structures", icon: "🧠" },
  { name: "Music & Audio", icon: "🎶" }
];
