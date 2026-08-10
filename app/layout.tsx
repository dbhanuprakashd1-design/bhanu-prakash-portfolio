import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bhanu Prakash Derangula | Frontend Developer",
  description:
    "Portfolio of Bhanu Prakash — Frontend Developer building responsive, SEO-friendly and production-ready web applications.",

  keywords: [
    "Bhanu Prakash Derangula",
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

  verification: {
    google: "5bIBxCLP0gqR3kT5uzWrhjRBao8XIvFAGSOAHBzFskU"
  },

  authors: [{ name: "Bhanu Prakash" }],

  robots: {
    index: true,
    follow: true
  },

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
