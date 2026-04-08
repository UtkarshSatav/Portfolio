import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import Nav from "./Components/Nav";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Utkarsh Satav | Full Stack Developer & Web Portfolio",
  description:
    "Explore Utkarsh Satav’s portfolio, featuring cutting-edge full-stack web development projects built with modern technologies",
  keywords: [
    "Utkarsh Satav",
    "Algoture",
    "Full Stack Developer",
    "Web Developer Portfolio",
    "Next.js Developer",
    "React.js Developer",
    "MERN Stack Developer",
    "Node.js Developer",
    "Frontend Engineer",
    "Software Engineer Portfolio",
  ],
  creator: "Utkarsh Satav",
  openGraph: {
    title: "Utkarsh Satav | Full Stack Developer",
    description:
      "Showcasing cutting-edge full-stack web development projects using modern web technologies.",
    url: "https://utkarshsatav.netlify.app",
    type: "website",
    image: "https://utkarshsatav.netlify.app/",
  },
  twitter: {
    card: "summary_large_image",
    site: "https://x.com/utkarshsatav",
    title: "Utkarsh Satav | Full Stack Developer",
    description:
      "Showcasing cutting-edge full-stack web development projects using Next.js, React, and Node.js.",
    image: "https://x.com/utkarshsatav/photo",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
