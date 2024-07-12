import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Omega Developer - Full Stack Web Developer",
  description:
    "Omega Developer is none other than Mahesh Muttinti, He will share the youtube videos related to the Anime, React, React Native, Node Js, MongoDB, Postgresql, and more interesting contents.",
  metadataBase: new URL("https://omage-developer.maheshmuttintidev.in"),
  openGraph: {
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="text">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
