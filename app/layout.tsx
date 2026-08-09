import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bhanu Prakash | Frontend Developer",
  description:
    "Portfolio of Bhanu Prakash — Frontend Developer building responsive, SEO-friendly and production-ready web applications with React, Next.js, JavaScript and Tailwind CSS.",
  keywords: [
    "Bhanu Prakash",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "Tailwind CSS",
    "Node.js",
    "WordPress",
    "AWS EC2",
    "Vercel"
  ],
  authors: [{ name: "Bhanu Prakash" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Bhanu Prakash | Frontend Developer",
    description:
      "Modern portfolio showcasing frontend development, full-stack projects, SEO and deployment skills.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
