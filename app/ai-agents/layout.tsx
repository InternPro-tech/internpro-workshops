import type React from "react";
import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "../globals.css";
import Script from "next/script";
import { env } from "@/app/env";

const inter = Inter({ subsets: ["latin"] });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

export const metadata: Metadata = {
  title: "Learn to Build AI Agents using Python | Live Webinar",
  description:
    "Master the art of building intelligent AI agents with Python in this exclusive webinar. Learn practical skills from industry experts and advance your career in AI development.",
  keywords:
    "AI agents, Python programming, machine learning, artificial intelligence webinar, coding workshop, AI development, Python AI, chatbot development, AI for beginners, Python automation",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://workshop.internpro.tech/ai-agents",
    siteName: "AI Python Webinar",
    title: "Master AI Agent Development with Python | Live Webinar",
    description:
      "Learn how to build powerful AI agents from scratch using Python in this intensive workshop. Limited seats available!",
    images: [
      {
        url: "https://webinar.internpro.tech/internpro-white.png",
        width: 32,
        height: 32,
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
        {/* Facebook Pixel Code */}
        <Script id="facebook-pixel">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        {/* End Facebook Pixel Code */}

        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
          `}
        </Script>
        {/* End Google Analytics */}

        {/* Clarity */}
        <Script
          src={`https://www.clarity.ms/tag/${env.NEXT_PUBLIC_CLARITY_ID}`}
          strategy="afterInteractive"
        />
        <Script id="clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "${env.NEXT_PUBLIC_CLARITY_ID}");`}
        </Script>
        {/* End Clarity */}

        {/* Schema.org structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              name: "How to build AI Agents using Python",
              description:
                "Learn to build powerful AI agents using Python in this intensive webinar.",
              provider: {
                "@type": "Organization",
                name: "Your Company Name",
                sameAs: "https://example.com",
              },
              offers: {
                "@type": "Offer",
                price: "199",
                priceCurrency: "INR",
                availability: "https://schema.org/LimitedAvailability",
                url: "https://example.com/webinar",
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
