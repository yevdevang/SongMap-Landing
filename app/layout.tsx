import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://songmapapp.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "SongMap — AI Song Structure Analyzer for iOS",
    template: "%s | SongMap",
  },
  description:
    "SongMap analyzes any song and maps its structure instantly — Intro, Verse, Chorus, Bridge, and more. Get a visual waveform timeline and AI-powered arrangement feedback powered by Claude.",
  keywords: [
    "song structure analyzer",
    "music analysis app",
    "AI music feedback",
    "audio analyzer",
    "song sections",
    "arrangement analyzer",
    "music production tool",
    "waveform visualization",
    "chorus verse detector",
    "music structure",
    "iOS music app",
    "AI song feedback",
  ],
  authors: [{ name: "SongMap" }],
  creator: "SongMap",
  publisher: "SongMap",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "SongMap",
    title: "SongMap — AI Song Structure Analyzer for iOS",
    description:
      "See every Intro, Verse, Chorus, and Bridge of any song on a visual waveform timeline. Get AI-powered arrangement feedback powered by Claude.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SongMap — AI Song Structure Analyzer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SongMap — AI Song Structure Analyzer for iOS",
    description:
      "See every Intro, Verse, Chorus, and Bridge of any song on a visual waveform timeline. Get AI-powered arrangement feedback powered by Claude.",
    images: ["/og-image.png"],
    creator: "@songmapapp",
    site: "@songmapapp",
  },
  icons: {
    icon: [
      { url: "/1024.png", sizes: "any", type: "image/png" },
    ],
    apple: [{ url: "/1024.png", sizes: "1024x1024" }],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: BASE_URL,
  },
};

export const viewport: Viewport = {
  themeColor: "#050B14",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "SongMap",
              applicationCategory: "MusicApplication",
              operatingSystem: "iOS",
              description:
                "AI-powered song structure analyzer. Import any track, see its sections visualized on a color-coded waveform, and get AI-powered arrangement feedback.",
              offers: [
                {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "USD",
                  name: "Free",
                },
                {
                  "@type": "Offer",
                  price: "7.99",
                  priceCurrency: "USD",
                  name: "Monthly",
                  description: "Monthly subscription",
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                ratingCount: "1",
              },
            }),
          }}
        />
      </head>
      <body className="bg-background text-foreground antialiased">
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
            {children}
          </ThemeProvider>
        </body>
    </html>
  );
}
