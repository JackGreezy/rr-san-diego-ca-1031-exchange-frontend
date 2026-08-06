import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import site from "@/content/site.json";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { StickyCTA } from "@/components/sticky-cta";
import { SITE_URL } from "@/lib/constants";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Free, turnkey 1031 exchange help for San Diego property owners, including planned sales, replacement property searches, net-lease options, and passive DST information.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "1031 Exchange San Diego | Free Consultation & Help",
    template: "%s | 1031 Exchange of San Diego",
  },
  description,
  keywords: [
    "1031 exchange San Diego",
    "San Diego 1031 exchange help",
    "1031 exchange consultation",
    "1031 replacement properties",
    "DST properties San Diego",
    "passive real estate investment",
    "net lease replacement property",
  ],
  openGraph: {
    title: "1031 Exchange San Diego | Free Consultation & Help",
    description,
    url: SITE_URL,
    siteName: site.company,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/locations/san-diego-ca/hero.jpg`,
        width: 1200,
        height: 630,
        alt: "1031 Exchange of San Diego",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "1031 Exchange San Diego | Free Consultation & Help",
    description,
    images: [`${SITE_URL}/locations/san-diego-ca/hero.jpg`],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.company,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: site.phone,
        contactType: "customer support",
        email: site.email,
        areaServed: "US",
        availableLanguage: "English",
      },
    ],
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-paper text-ink antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
        <StickyCTA />
        <Analytics />
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          strategy="afterInteractive"
          async
          defer
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(webSiteSchema)}
        </Script>
              <script src="/turnstile-contact.js" defer></script>
      </body>
    </html>
  );
}
