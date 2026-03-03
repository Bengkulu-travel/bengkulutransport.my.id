import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bengkulutransport.my.id'),
  title: {
    default: "Travel Bengkulu - Solusi Perjalanan Nyaman & Terpercaya",
    template: "%s | Travel Bengkulu"
  },
  description: "Travel Bengkulu menyediakan layanan travel antar kota, rental mobil, antar jemput bandara, dan paket wisata di Bengkulu, Curup, Palembang, Jambi. Layanan 24 jam dengan armada nyaman dan driver profesional.",
  keywords: [
    "travel bengkulu",
    "rental mobil bengkulu",
    "travel palembang bengkulu",
    "travel bengkulu jambi",
    "antar jemput bandara bengkulu",
    "sewa mobil curup",
    "travel door to door",
    "paket wisata bengkulu",
    "transportasi bengkulu",
    "travel murah bengkulu"
  ],
  authors: [{ name: "Travel Bengkulu" }],
  creator: "Travel Bengkulu",
  publisher: "Travel Bengkulu",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://bengkulutransport.my.id",
    siteName: "Travel Bengkulu",
    title: "Travel Bengkulu - Solusi Perjalanan Nyaman & Terpercaya",
    description: "Travel Bengkulu menyediakan layanan travel antar kota, rental mobil, antar jemput bandara, dan paket wisata. Layanan 24 jam.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Travel Bengkulu - Solusi Perjalanan Nyaman & Terpercaya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel Bengkulu - Solusi Perjalanan Nyaman & Terpercaya",
    description: "Travel Bengkulu menyediakan layanan travel antar kota, rental mobil, antar jemput bandara, dan paket wisata.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

// JSON-LD Schema for Local Business
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "Travel Bengkulu",
  "description": "Travel Bengkulu menyediakan layanan travel antar kota, rental mobil, antar jemput bandara, dan paket wisata di Bengkulu dan sekitarnya.",
  "url": "https://bengkulutransport.my.id",
  "telephone": "+6285268645461",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bengkulu",
    "addressRegion": "Bengkulu",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-3.8004",
    "longitude": "102.2655"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Bengkulu"
    },
    {
      "@type": "City",
      "name": "Curup"
    },
    {
      "@type": "City",
      "name": "Palembang"
    },
    {
      "@type": "City",
      "name": "Jambi"
    }
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "priceRange": "$$",
  "sameAs": [
    "https://facebook.com/travelbengkulu",
    "https://instagram.com/travelbengkulu"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <WhatsAppButton />
        <Toaster />
      </body>
    </html>
  );
}
