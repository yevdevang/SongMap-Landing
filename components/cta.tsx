import { Button } from "@/components/ui/button";
import { ArrowRight, Music2 } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/10 pointer-events-none" />
      <div className="absolute inset-0 bg-accent-glow pointer-events-none" />

      {/* Decorative circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-[80px]" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-secondary/10 blur-[80px]" />

      <div className="section-container relative z-10">
        <div className="rounded-3xl p-12 text-center bg-surface/80 backdrop-blur-xl border border-accent/20">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-xl shadow-accent/20">
              <Music2 className="w-8 h-8 text-white" />
            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to map your music?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-xl mx-auto mb-8">
            Join thousands of musicians, producers, and music enthusiasts who
            use SongMap to understand and improve their arrangements.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" className="group" asChild>
              <a href="#" aria-label="Download SongMap on the App Store" className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download on App Store
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          <p className="mt-6 text-sm text-gray-500 dark:text-gray-600">
            Free · iOS 17+ · No credit card required
          </p>
        </div>
      </div>
    </section>
  );
}
