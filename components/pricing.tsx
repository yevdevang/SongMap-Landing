import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for exploring and casual listening.",
    badge: null,
    features: [
      "Unlimited cached song analyses",
      "3 fresh analyses (lifetime)",
      "Visual waveform timeline",
      "Basic section labels",
      "AI feedback on analyses",
      "Song history saved",
    ],
    cta: "Download Free",
    ctaVariant: "outline" as const,
    highlight: false,
  },
  {
    name: "Weekly",
    price: "$2.99",
    period: "per week",
    description: "Best for intensive project sprints.",
    badge: null,
    features: [
      "10 fresh analyses per week",
      "Unlimited cached analyses",
      "Full Claude AI feedback",
      "Song history + export",
      "Priority processing queue",
      "All Free features",
    ],
    cta: "Start Weekly",
    ctaVariant: "primary" as const,
    highlight: false,
  },
  {
    name: "Monthly",
    price: "$7.99",
    period: "per month",
    description: "Most popular for active producers.",
    badge: "Most Popular",
    features: [
      "20 fresh analyses per month",
      "Unlimited cached analyses",
      "Full Claude AI feedback",
      "Song comparison feature",
      "PDF report export",
      "Priority processing queue",
      "All Free features",
    ],
    cta: "Start Monthly",
    ctaVariant: "default" as const,
    highlight: true,
  },
  {
    name: "Yearly",
    price: "$69.99",
    period: "per year",
    subPrice: "$5.83/mo",
    description: "Best value for dedicated musicians.",
    badge: "Best Value",
    features: [
      "25 fresh analyses per month",
      "Unlimited cached analyses",
      "Full Claude AI feedback",
      "All comparison features",
      "PDF report export",
      "Early access to new features",
      "Dedicated support",
    ],
    cta: "Start Yearly",
    ctaVariant: "secondary" as const,
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            Pricing
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Start free,{" "}
            <span className="gradient-text">go Pro when ready</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Free tier gives you unlimited access to popular cached songs — no
            credit card needed. Upgrade when you need to analyze your own tracks.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={cn(
                "relative rounded-2xl p-6 flex flex-col transition-all duration-300",
                plan.highlight
                  ? "ring-2 ring-accent shadow-2xl shadow-accent/10 scale-[1.02]"
                  : "glass-card hover:border-primary/40"
              )}
              style={
                plan.highlight
                  ? {
                      background:
                        "linear-gradient(135deg, rgba(13,21,38,0.95) 0%, rgba(47,89,130,0.15) 100%)",
                      border: "1px solid rgba(6,182,212,0.4)",
                    }
                  : {}
              }
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge
                    variant={plan.highlight ? "accent" : "secondary"}
                    className="px-3 py-1 text-xs font-bold shadow-lg"
                  >
                    <Zap className="w-3 h-3 mr-1" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              {/* Plan name & price */}
              <div className="mb-6">
                <h3 className="text-white font-semibold text-lg mb-1">
                  {plan.name}
                </h3>
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-4xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 text-sm mb-1">
                    /{plan.period}
                  </span>
                </div>
                {plan.subPrice && (
                  <p className="text-xs text-accent font-medium">
                    {plan.subPrice} billed annually
                  </p>
                )}
                <p className="text-gray-500 text-sm mt-2">{plan.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <Check
                      className="w-4 h-4 mt-0.5 flex-shrink-0"
                      style={{
                        color: plan.highlight ? "#06B6D4" : "#4B7BA8",
                      }}
                    />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.ctaVariant}
                className="w-full"
                size="default"
                asChild
              >
                <a href="#">{plan.cta}</a>
              </Button>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-sm text-gray-600 mt-8">
          All plans include a 7-day free trial. Cancel anytime from your iPhone.
          Prices in USD.
        </p>
      </div>
    </section>
  );
}
