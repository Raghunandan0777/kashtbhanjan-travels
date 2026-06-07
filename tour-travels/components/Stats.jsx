"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedCounter from "./ui/AnimatedCounter";
import { Users, Map, Car, Star } from "lucide-react";

const STATS = [
  {
    icon: Users,
    value: 10000,
    suffix: "+",
    label: "Happy Customers",
  },
  {
    icon: Map,
    value: 500,
    suffix: "+",
    label: "Tours Completed",
  },
  {
    icon: Car,
    value: 50,
    suffix: "+",
    label: "Premium Vehicles",
  },
  {
    icon: Star,
    value: 4.9,
    suffix: "",
    label: "Average Rating",
  },
];

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.03] via-transparent to-gold/[0.03]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="glass-strong rounded-2xl p-6 sm:p-8 text-center gold-border-glow"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <Icon size={24} className="text-gold" />
                </div>
                <div className="font-heading text-3xl sm:text-4xl font-bold gold-gradient-text mb-2">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    duration={2.5}
                  />
                </div>
                <p className="text-muted text-sm">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
