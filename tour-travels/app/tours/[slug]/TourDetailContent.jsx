"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { CalendarDays, IndianRupee, CheckCircle, ArrowLeft, MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/site-config";

export default function TourDetailContent({ tour }) {
  const whatsappMessage = encodeURIComponent(
    `Hi, I'm interested in the ${tour.name} package (${tour.duration}, ${tour.price}). Please share more details.`
  );

  return (
    <section className="py-14 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6"
        >
          {tour.seoTitle}
        </motion.h1>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-wrap items-center gap-3 mb-8"
        >
          <span className="flex items-center gap-2 text-sm text-gold bg-gold/10 px-4 py-2 rounded-full border border-gold-border">
            <CalendarDays size={15} />
            {tour.duration}
          </span>
          <span className="flex items-center gap-2 text-sm text-gold bg-gold/10 px-4 py-2 rounded-full border border-gold-border">
            <IndianRupee size={15} />
            Starting at {tour.price}
          </span>
        </motion.div>

        {/* Long Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-muted text-base sm:text-lg leading-relaxed mb-10"
        >
          {tour.longDesc}
        </motion.p>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="glass rounded-2xl p-6 sm:p-8 mb-10"
        >
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-5">
            What&apos;s Included
          </h2>
          <ul className="space-y-3">
            {tour.highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle size={18} className="text-gold mt-0.5 shrink-0" />
                <span className="text-muted text-sm sm:text-base leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
        >
          <a
            href={`https://wa.me/${BUSINESS.whatsapp}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 gold-gradient-bg text-background px-8 py-4 rounded-full text-base font-semibold hover:scale-[1.03] transition-all duration-300 pulse-glow"
          >
            <MessageCircle size={18} />
            Enquire on WhatsApp
          </a>

          <Link
            href="/#tours"
            className="flex items-center justify-center gap-2 border border-gold-border text-foreground px-8 py-4 rounded-full text-base font-medium hover:bg-gold/10 transition-all duration-300"
          >
            <ArrowLeft size={16} />
            Back to All Tours
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
