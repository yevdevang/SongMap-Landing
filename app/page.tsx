import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is SongMap?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SongMap is an iOS app that analyzes any song and maps its structure instantly — detecting sections like Intro, Verse, Chorus, Bridge, Solo, Drop, and Outro — and displays them on a color-coded waveform timeline.",
      },
    },
    {
      "@type": "Question",
      name: "What song sections can SongMap detect?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SongMap detects all major song sections including Intro, Verse, Pre-Chorus, Chorus, Bridge, Solo, Drop, Breakdown, and Outro. Sections are color-coded and laid out on a visual waveform for easy navigation.",
      },
    },
    {
      "@type": "Question",
      name: "Is SongMap free to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. SongMap has a free tier that lets you analyze songs already in the shared cache and includes a limited number of fresh analyses. Pro plans (Weekly, Monthly, Yearly) unlock unlimited fresh analyses and additional features like PDF export and genre comparison.",
      },
    },
    {
      "@type": "Question",
      name: "What AI powers SongMap's feedback?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SongMap uses Claude by Anthropic to generate AI-powered arrangement feedback. After analyzing your song's structure, Claude provides insights on pacing, section balance, and arrangement suggestions.",
      },
    },
    {
      "@type": "Question",
      name: "What devices does SongMap support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SongMap is available on iPhone and iPad running iOS. Your analysis history syncs across all your devices.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <main>
        <Navbar />
        <Hero />
        <Features />
        <HowItWorks />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
