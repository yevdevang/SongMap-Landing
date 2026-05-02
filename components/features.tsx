import {
  AudioWaveform,
  Sparkles,
  BarChart3,
  GitCompare,
  History,
  FileText,
  Zap,
  Music,
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: AudioWaveform,
    title: "Visual Waveform Timeline",
    description:
      "Every section of your song is color-coded on a zoomable waveform timeline. See your Intro, Verses, Choruses, Bridge, and Outro at a glance.",
    color: "#06B6D4",
    bg: "rgba(6,182,212,0.08)",
    border: "rgba(6,182,212,0.2)",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Feedback",
    description:
      "Claude analyzes your song's arrangement and gives specific, actionable feedback on each section — timing, dynamics, and structure.",
    color: "#8B5CF6",
    bg: "rgba(139,92,246,0.08)",
    border: "rgba(139,92,246,0.2)",
    pro: true,
  },
  {
    icon: Music,
    title: "Automatic Section Detection",
    description:
      "Advanced AI detects Intro, Verse, Chorus, Pre-Chorus, Bridge, Solo, Drop, Break, and Outro with precise timestamps — no manual tagging needed.",
    color: "#2F5982",
    bg: "rgba(47,89,130,0.08)",
    border: "rgba(47,89,130,0.2)",
  },
  {
    icon: GitCompare,
    title: "Genre Comparison",
    description:
      "Compare your song's structure against genre templates or reference tracks. See how your arrangement matches a typical Pop, Hip-Hop, or EDM structure.",
    color: "#8B5CF6",
    bg: "rgba(139,92,246,0.08)",
    border: "rgba(139,92,246,0.2)",
    pro: true,
  },
  {
    icon: History,
    title: "Analysis History",
    description:
      "Every song you analyze is saved to your personal history. Revisit past analyses anytime, synced across all your devices via iCloud.",
    color: "#06B6D4",
    bg: "rgba(6,182,212,0.08)",
    border: "rgba(6,182,212,0.2)",
  },
  {
    icon: FileText,
    title: "PDF Export",
    description:
      "Generate a professional PDF report of any analysis — perfect for sharing with bandmates, producers, or keeping in your project notes.",
    color: "#F59E0B",
    bg: "rgba(245,158,11,0.08)",
    border: "rgba(245,158,11,0.2)",
    pro: true,
  },
  {
    icon: Zap,
    title: "Instant Cached Results",
    description:
      "Popular songs are cached in our database. Analyze Blinding Lights or Bohemian Rhapsody instantly — no waiting, no API calls, completely free.",
    color: "#06B6D4",
    bg: "rgba(6,182,212,0.08)",
    border: "rgba(6,182,212,0.2)",
  },
  {
    icon: BarChart3,
    title: "Section-Level Stats",
    description:
      "Tap any section for detailed stats: duration, energy level, spectral characteristics, and how it compares to the rest of the track.",
    color: "#2F5982",
    bg: "rgba(47,89,130,0.08)",
    border: "rgba(47,89,130,0.2)",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            Features
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Everything you need to{" "}
            <span className="gradient-text">understand music</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From automatic section detection to AI-powered arrangement advice,
            SongMap gives you a complete picture of any song.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className={cn(
                  "relative rounded-2xl p-6 transition-all duration-300 group",
                  "hover:-translate-y-1 hover:shadow-xl",
                  i === 0 || i === 3 ? "lg:col-span-2" : ""
                )}
                style={{
                  background: feature.bg,
                  border: `1px solid ${feature.border}`,
                }}
              >
                {feature.pro && (
                  <span
                    className="absolute top-4 right-4 text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full"
                    style={{
                      background: "rgba(139,92,246,0.2)",
                      color: "#C4B5FD",
                      border: "1px solid rgba(139,92,246,0.3)",
                    }}
                  >
                    PRO
                  </span>
                )}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: feature.bg, border: `1px solid ${feature.border}` }}
                >
                  <Icon className="w-5 h-5" style={{ color: feature.color }} />
                </div>
                <h3 className="text-white font-semibold text-base mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
