import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Herman Basson — Senior Software Engineer",
  description:
    "Herman Basson is a Senior Software Engineer with 8+ years of full-stack development experience across commercial, telecommunications, gaming, and enterprise sectors. View experience, skills, and get in touch.",
  keywords: [
    "Herman Basson",
    "Senior Software Engineer",
    "Full-Stack Developer",
    "Cape Town",
    ".NET Developer",
    "React Developer",
    "CV",
    "Resume",
  ],
  authors: [{ name: "Herman Basson" }],
  openGraph: {
    title: "Herman Basson — Senior Software Engineer",
    description:
      "Senior Software Engineer with 8+ years of full-stack development experience. View experience, skills, and get in touch.",
    type: "profile",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
