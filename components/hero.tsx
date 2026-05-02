import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Star } from "lucide-react";

const sections = [
  { label: "Intro", color: "#06B6D4", width: "8%" },
  { label: "Verse", color: "#2F5982", width: "16%" },
  { label: "Chorus", color: "#8B5CF6", width: "14%" },
  { label: "Verse", color: "#2F5982", width: "15%" },
  { label: "Chorus", color: "#8B5CF6", width: "14%" },
  { label: "Bridge", color: "#F59E0B", width: "10%" },
  { label: "Chorus", color: "#8B5CF6", width: "14%" },
  { label: "Outro", color: "#06B6D4", width: "9%" },
];

const waveHeights = [
  30, 55, 70, 45, 80, 60, 35, 75, 50, 65, 40, 85, 55, 70, 45, 60,
  35, 80, 55, 70, 40, 65, 50, 75, 45, 60, 80, 35, 65, 50, 70, 45,
  55, 80, 40, 65, 75, 50, 60, 35, 70, 45, 85, 55, 40, 65, 80, 50,
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background glow */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[80px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] rounded-full bg-secondary/5 blur-[80px] pointer-events-none" />

      <div className="section-container relative z-10 py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <Badge variant="accent" className="px-4 py-1.5 text-sm gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              AI-Powered Music Analysis
            </Badge>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            See Your Song&apos;s{" "}
            <span className="gradient-text">Structure</span>{" "}
            Like Never Before
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            SongMap analyzes any track and maps every Intro, Verse, Chorus, and Bridge
            in seconds. Get a visual waveform timeline and AI-powered arrangement feedback
            — all in one beautiful iOS app.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <Button size="xl" className="w-full sm:w-auto group" asChild>
              <a href="#" aria-label="Download SongMap on the App Store">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download on App Store
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" size="xl" className="w-full sm:w-auto" asChild>
              <Link href="#features">
                See How It Works
              </Link>
            </Button>
          </div>

          {/* Social proof */}
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-16">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span>Free to start · No credit card required</span>
          </div>

          {/* Waveform visualization */}
          <div className="relative rounded-2xl overflow-hidden glass-card glow-border p-6">
            {/* Section blocks */}
            <div className="flex rounded-lg overflow-hidden mb-3" style={{ height: "28px" }}>
              {sections.map((section, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center text-[10px] font-semibold text-white/90"
                  style={{
                    width: section.width,
                    backgroundColor: section.color,
                    opacity: 0.9,
                  }}
                >
                  <span className="truncate px-1">{section.label}</span>
                </div>
              ))}
            </div>

            {/* Waveform bars */}
            <div className="flex items-center gap-px" style={{ height: "80px" }}>
              {waveHeights.map((h, i) => {
                // Find which section this bar belongs to
                const sectionIdx = Math.floor((i / waveHeights.length) * sections.length);
                const color = sections[Math.min(sectionIdx, sections.length - 1)].color;
                return (
                  <div
                    key={i}
                    className="flex-1 rounded-full waveform-bar origin-center"
                    style={{
                      height: `${h}%`,
                      backgroundColor: color,
                      opacity: 0.8,
                      animationDelay: `${(i * 0.04) % 1.5}s`,
                    }}
                  />
                );
              })}
            </div>

            {/* Playhead */}
            <div
              className="absolute top-6 bottom-6 w-0.5 bg-white/80 rounded-full"
              style={{ left: "38%" }}
            >
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white shadow-lg shadow-white/30" />
            </div>

            {/* Time labels */}
            <div className="flex justify-between mt-3 text-xs text-gray-500 font-mono">
              <span>0:00</span>
              <span>1:00</span>
              <span>2:00</span>
              <span>3:00</span>
              <span>3:42</span>
            </div>

            {/* AI feedback badge */}
            <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-secondary/20 border border-secondary/30 rounded-full px-3 py-1">
              <Sparkles className="w-3 h-3 text-secondary-300" style={{ color: "#8B5CF6" }} />
              <span className="text-xs font-medium" style={{ color: "#C4B5FD" }}>
                AI Feedback Ready
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
