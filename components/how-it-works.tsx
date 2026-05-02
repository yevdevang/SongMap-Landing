import { Upload, Cpu, MessageSquareText } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Upload,
    title: "Import Any Track",
    description:
      "Pick any audio file from your library, Files app, or paste a title/artist. SongMap handles MP3, AAC, WAV, FLAC, and more.",
    color: "#06B6D4",
    bg: "rgba(6,182,212,0.1)",
  },
  {
    step: "02",
    icon: Cpu,
    title: "AI Detects Structure",
    description:
      "Our on-device audio engine and cloud AI analyze the track in seconds — identifying every section with start/end timestamps and a confidence score.",
    color: "#2F5982",
    bg: "rgba(47,89,130,0.1)",
  },
  {
    step: "03",
    icon: MessageSquareText,
    title: "Get AI Feedback",
    description:
      "Claude reads the structural map and writes a personalized arrangement review — what works, what doesn't, and how to improve it.",
    color: "#8B5CF6",
    bg: "rgba(139,92,246,0.1)",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            How It Works
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            From track to insights{" "}
            <span className="gradient-text">in seconds</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            No music theory knowledge required. Import your song, wait a few
            seconds, and get a complete structural breakdown.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[calc(16.67%+32px)] right-[calc(16.67%+32px)] h-px bg-gradient-to-r from-accent/30 via-primary/40 to-secondary/30" style={{ zIndex: -1 }} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="flex flex-col items-center text-center">
                  {/* Icon circle */}
                  <div
                    className="relative w-[104px] h-[104px] rounded-full flex items-center justify-center mb-6"
                    style={{
                      border: `2px solid ${step.color}30`,
                      boxShadow: `0 0 30px ${step.color}15`,
                    }}
                  >
                    {/* Opaque background to block the connector line */}
                    <div className="absolute inset-0 rounded-full bg-background" />
                    {/* Tint overlay */}
                    <div className="absolute inset-0 rounded-full" style={{ background: step.bg }} />
                    <Icon className="relative w-8 h-8 z-10" style={{ color: step.color }} />
                    {/* Step number badge */}
                    <div
                      className="absolute -top-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white z-10"
                      style={{ background: step.color }}
                    >
                      {i + 1}
                    </div>
                  </div>

                  <h3 className="text-gray-900 dark:text-white font-semibold text-xl mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
