"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SectionHeading({ title, subtitle, align = "center" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`mb-12 sm:mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 px-4 sm:px-0">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
          {subtitle}
        </p>
      )}
      <div className="mt-6 flex items-center justify-center gap-2">
        <span className="block h-[1px] w-8 sm:w-12 bg-gold/30" />
        <span className="block h-1.5 w-1.5 rounded-full bg-gold" />
        <span className="block h-[1px] w-12 sm:w-20 bg-gold" />
        <span className="block h-1.5 w-1.5 rounded-full bg-gold" />
        <span className="block h-[1px] w-8 sm:w-12 bg-gold/30" />
      </div>
    </motion.div>
  );
}
