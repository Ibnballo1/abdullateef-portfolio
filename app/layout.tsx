import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Abdullateef Bello - Full-Stack Developer | Next.js, React, TypeScript",
  description:
    "Full-stack developer specializing in Next.js, React, TypeScript, and Supabase. Building scalable, modern web applications with 3+ years of experience. Available for freelance and contract work.",
  metadataBase: new URL("https://abdullateefbello.dev"),
  keywords: [
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Web Development",
    "Supabase",
    "JavaScript",
    "Web Applications",
    "Software Developer",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Abdullateef Bello", url: "https://abdullateefbello.dev" }],
  creator: "Abdullateef Bello",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abdullateefbello.dev",
    title: "Abdullateef Bello - Full-Stack Developer",
    description:
      "Building modern, scalable web applications with Next.js and React",
    images: [
      {
        url: "https://abdullateefbello.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abdullateef Bello - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullateef Bello - Full-Stack Developer",
    description: "Full-Stack Developer | Next.js | React | TypeScript",
    creator: "@webprotekh",
    images: ["https://abdullateefbello.dev/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#0F172A",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0F172A" />
        <meta name="color-scheme" content="dark" />
        <link rel="canonical" href="https://abdullateefbello.dev" />
      </head>
      <body
        className={`${geist.className} bg-slate-950 text-slate-100 antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
