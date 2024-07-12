import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Omega Developer - Full Stack Web Developer",
  description:
    "Omega Developer is none other than Mahesh Muttinti, He will share the youtube videos related to the Anime, React, React Native, Node Js, MongoDB, Postgresql, and more interesting contents.",
  metadataBase: new URL("https://omage-developer.maheshmuttintidev.in"),
  icons: {
    icon: [
      { url: "/favicon.ico" },
      new URL("/favicon.ico", "https://omega-developer.maheshmuttintidev.in"),
    ],
    apple: [{ url: "/apple-icon.png" }],
  },
  alternates: {
    canonical: "https://omage-developer.maheshmuttintidev.in",
  },
  openGraph: {
    title: "Omega Developer - Full Stack Web Developer",
    description:
      "Omega Developer is none other than Mahesh Muttinti, He will share the youtube videos related to the Anime, React, React Native, Node Js, MongoDB, Postgresql, and more interesting contents.",
    url: "https://omega-developer.maheshmuttintidev.in",
    siteName: "Mahesh Muttinti - Full Stack Web & Mobile App Developer",
    locale: "en",
    type: "website",
    images: [
      {
        url: "https://omega-developer.maheshmuttintidev.in/open-graph-image.png",
        width: 1920,
        height: 1080,
        alt: "Banner Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Omega Developer - Full Stack Web Developer",
    description:
      "Omega Developer is none other than Mahesh Muttinti, He will share the youtube videos related to the Anime, React, React Native, Node Js, MongoDB, Postgresql, and more interesting contents.",
    creator: "@MaheshMuttinti",
    images: [
      {
        url: "https://omega-developer.maheshmuttintidev.in/banner.png",
        width: 1920,
        height: 1080,
        alt: "Banner Image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="text">
      <head>
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
