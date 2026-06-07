"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function GlassCard({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={`glass rounded-2xl overflow-hidden transition-all duration-500 gold-glow-hover ${className}`}
    >
      {children}
    </motion.div>
  );
}
