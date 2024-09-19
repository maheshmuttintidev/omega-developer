import { Videos } from "@/components/tab-switch";
import Banner from "./banner.webp";

export default function Home() {
  return (
    <main className="mx-auto p-3 flex flex-col items-center justify-center">
      <section className="relative w-full">
        <div
          className="relative bg-cover bg-center h-96 flex items-center justify-center"
          style={{ backgroundImage: `url(${Banner.src})` }}
        ></div>

        <ul className="flex gap-x-6 gap-y-4 md:flex-wrap overflow-x-auto overflow-y-hidden whitespace-nowrap px-4 sm:px-10 justify-start text-lg font-semibold text-gray-200 py-2">
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

      <section className="container relative w-full min-h-screen p-4 text-white">
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
  { name: "Music & Audio", icon: "🎶" },
];
