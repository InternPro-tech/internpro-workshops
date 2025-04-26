import type React from "react";
import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

export const metadata: Metadata = {
  title: "Workshops by InternPro",
  description:
    "Learn practical skills from industry experts and advance your career in software engineering.",
  keywords:
    "AI agents, Python programming, machine learning, artificial intelligence webinar, coding workshop, AI development, Python AI, chatbot development, AI for beginners, Python automation, internships",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://workshop.internpro.tech",
    siteName: "InternPro workshops",
    title: "Workshop by Industry-led instructors at InternPro",
    description: "Learn, Intern and get industry ready with our workshops",
    images: [
      {
        url: "https://webinar.internpro.tech/internpro-short.png",
        width: 1200,
        height: 630,
        alt: "Workshops by InternPro",
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
    <html lang="en">
      <head>
        {/* Schema.org structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              name: "InternPro workshops",
              description: "Learn in-demand skills by attending our workshop.",
              provider: {
                "@type": "Organization",
                name: "InternPro",
                sameAs: "https://internpro.tech",
              },
              offers: {
                "@type": "Offer",
                price: "199",
                priceCurrency: "INR",
                availability: "https://schema.org/LimitedAvailability",
                url: "https://webinar.internpro.tech/",
                validFrom: "2023-05-01T00:00:00+00:00",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} ${dmSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
