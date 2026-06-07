"use client";
import SectionHeading from "./ui/SectionHeading";
import GlassCard from "./ui/GlassCard";
import {
  Clock,
  ShieldCheck,
  Sparkles,
  BadgeIndianRupee,
  MapPin,
  UserCheck,
} from "lucide-react";

const FEATURES = [
  {
    icon: Clock,
    title: "24/7 Service",
    desc: "Round-the-clock availability for all your travel needs, day or night.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Drivers",
    desc: "Background-verified, professionally trained, and courteous chauffeurs.",
  },
  {
    icon: Sparkles,
    title: "Clean Vehicles",
    desc: "Spotlessly maintained and sanitized fleet for your comfort and safety.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Transparent Pricing",
    desc: "No hidden charges. Clear, upfront pricing with detailed fare breakdowns.",
  },
  {
    icon: MapPin,
    title: "GPS Tracking",
    desc: "Real-time vehicle tracking for complete peace of mind on every journey.",
  },
  {
    icon: UserCheck,
    title: "Professional Chauffeurs",
    desc: "Experienced, well-groomed drivers who know every route like the back of their hand.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Why Choose Kashat Bhanjan Travels"
          subtitle="Every detail is designed to deliver an experience beyond expectation. Here's what sets us apart."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {FEATURES.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <GlassCard key={feat.title} delay={i * 0.08} className="p-6 sm:p-8 group">
                <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors duration-300">
                  <Icon size={28} className="text-gold" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                  {feat.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {feat.desc}
                </p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
