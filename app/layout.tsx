import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bhanu-prakash-portfolio-opal.vercel.app"),

  title: "Bhanu Prakash Derangula | Frontend Developer",

  description:
    "Portfolio of Bhanu Prakash — Frontend Developer building responsive, SEO-friendly and production-ready web applications.",

  icons: {
    icon: "/profile.jpg",
  },

  alternates: {
    canonical: "/",
  },

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
    "Vercel",
  ],

  verification: {
    google: "5bIBxCLP0gqR3kT5uzWrhjRBao8XIvFAGSOAHBzFskU",
  },

  authors: [{ name: "Bhanu Prakash" }],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Bhanu Prakash | Frontend Developer",
    description:
      "Modern portfolio showcasing frontend development, full-stack projects, SEO and deployment skills.",
    url: "https://bhanu-prakash-portfolio-opal.vercel.app",
    siteName: "Bhanu Prakash Portfolio",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Bhanu Prakash Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Bhanu Prakash | Frontend Developer",
    description:
      "Frontend Developer building modern React & Next.js applications.",
    images: ["/opengraph-image.png"],
  },
};
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Bhanu Prakash Derangula",
  jobTitle: "Frontend Developer",
  url: "https://bhanu-prakash-portfolio-opal.vercel.app",
  sameAs: [
    "https://www.linkedin.com/in/bhanu-prakash-derangula-94011532a/",
  ],
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
