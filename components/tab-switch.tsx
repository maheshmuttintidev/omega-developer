"use client";
import React, { useState } from "react";
import Image from "next/image";

// Sample video data
const videos = [
  {
    title: "My Day with Meta AI | Day Alpha 1",
    url: "https://www.youtube.com/watch?v=-2AXDSlxYlU&t=4s",
    views: "No views info",
    thumbnail:
      "https://i.ytimg.com/vi/-2AXDSlxYlU/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBvgSAAoAKigIMCAAQARg7IFgocjAP&rs=AOn4CLD4oXLP43GjU1pzy-wKGnSOOOwTJw",
  },
  {
    title: "Unlock Mobile Coding Secrets | Tips & Tricks Revealed",
    url: "https://www.youtube.com/watch?v=3MXxcM0_2-k&t=21s",
    views: "No views info",
    thumbnail:
      "https://i.ytimg.com/vi/3MXxcM0_2-k/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gSAAoAKigIMCAAQARg-IEsocjAP&rs=AOn4CLBCrRkmpH3_62KhH2L7VRxhOHbZuw",
  },
  {
    title: "Shinchan's Funniest Moments - AI Short Video",
    url: "https://www.youtube.com/watch?v=qxgjE961lU4",
    views: "No views info",
    thumbnail:
      "https://i.ytimg.com/vi/qxgjE961lU4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAussUffrCGh38ZZAn2u2LX9oIwIA",
  },
  {
    title: "AI-Enhanced Nature Scene: Tranquil Forest Walk | #AI #Nature #Art",
    url: "https://www.youtube.com/watch?v=Bjvb55R6dro",
    views: "No views info",
    thumbnail:
      "https://i.ytimg.com/vi/Bjvb55R6dro/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA40ptZ76dSrrUtVnYBBRQSOyvKgQ",
  },
  {
    title:
      "AI-Enhanced Music Video: Creative Fusion of Music & Art | #AI #Meta #Aiva #Music",
    url: "https://www.youtube.com/watch?v=9pZzWEFCoeg",
    views: "No views info",
    thumbnail:
      "https://i.ytimg.com/vi/9pZzWEFCoeg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBANFVS--Zqa_mkXPGASRQzXjDKUw",
  },
  {
    title:
      "Omega Developer Channel Intro | Welcome to Our World! #Intro #Video #OmegaDeveloper",
    url: "https://www.youtube.com/watch?v=yuQrYJzgiyI",
    views: "No views info",
    thumbnail:
      "https://i.ytimg.com/vi/yuQrYJzgiyI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBeC5ENyYh3iT8eLsw37WDvNVn-6A",
  },
  {
    title:
      "Luffy's Funniest & Dumbest Moments | One Piece | Anime Comedy | #Luffy #Nami #Sanji #Zoro",
    url: "https://www.youtube.com/watch?v=sZ3b6bpKjdU",
    views: "No views info",
    thumbnail:
      "https://i.ytimg.com/vi/sZ3b6bpKjdU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDdJo3IhQCPllqyll6xjjZy4gsAxA",
  },
  {
    title: "The Tragic Hero of Scissor Seven",
    url: "https://www.youtube.com/watch?v=vZ7AOogAV0o",
    views: "No views info",
    thumbnail:
      "https://i.ytimg.com/vi/vZ7AOogAV0o/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC_8WH0UN_mnG78K5r3_ktPSUvs1w",
  },
];

const shorts = [
  
  {
    title: "One Punch Man vs 100k Kung fu Pandas | #anime #onepunchman #kungfupanda",
    url: "https://youtube.com/shorts/2LNYitE6nDk",
    views: "No views info",
    thumbnail:
      "https://img.youtube.com/vi/2LNYitE6nDk/sddefault.jpg",
  },
];

// Video Card Component
const VideoCard: React.FC<{
  title: string;
  url: string;
  views: string;
  thumbnail: string;
}> = ({ title, url, views, thumbnail }) => (
  <div className="bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl">
    <Image
      src={thumbnail}
      alt={title}
      width={320}
      height={180}
      className="object-cover w-full h-48"
    />
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2 text-teal-400">{title}</h3>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-gradient-to-r from-teal-400 to-tomato-500 text-white font-semibold py-2 px-6 rounded-full shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gradient-to-l hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-teal-200"
      >
        Watch Now
      </a>
    </div>
  </div>
);

export const Videos: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"videos" | "shorts">("videos");

  const handleTabClick = (tab: "videos" | "shorts") => {
    setActiveTab(tab);
  };

  return (
    <section className="container relative w-full min-h-screen p-4 text-white">
      {/* Tabs for switching between Videos and Shorts */}
      <div className="flex justify-center mb-6">
        <button
          className={`px-6 py-2 text-lg font-semibold ${
            activeTab === "videos"
              ? "text-teal-400 border-b-4 border-teal-400"
              : "text-gray-500"
          } transition-all duration-300`}
          onClick={() => handleTabClick("videos")}
        >
          Videos
        </button>
        <button
          className={`ml-4 px-6 py-2 text-lg font-semibold ${
            activeTab === "shorts"
              ? "text-teal-400 border-b-4 border-teal-400"
              : "text-gray-500"
          } transition-all duration-300`}
          onClick={() => handleTabClick("shorts")}
        >
          Shorts
        </button>
      </div>

      {/* Video/Shorts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {(activeTab === "videos" ? videos : shorts).map((video, index) => (
          <VideoCard
            key={index}
            title={video.title}
            url={video.url}
            views={video.views}
            thumbnail={video.thumbnail}
          />
        ))}
      </div>
    </section>
  );
};