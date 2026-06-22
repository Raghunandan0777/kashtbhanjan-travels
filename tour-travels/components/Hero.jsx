"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const HERO_SLIDES = [
  {
    image: "/images/fleet_hero.png",
    badge: "Premium Travel Services",
    quote: "Premium taxi, airport transfer, corporate travel, and tour services available 24/7. Experience luxury at every mile.",
    alt: "Luxury cars fleet of Shree Kashtbhanjan Travels"
  },
  {
    image: "/images/goa_hero.png",
    badge: "Goa Tour Packages",
    quote: "“Jobs fill your pocket, but adventures fill your soul.” Let's explore the sun-kissed beaches and scenic coasts of Goa.",
    alt: "Beautiful palm-fringed beach of Goa"
  },
  {
    image: "/images/kashmir_hero.png",
    badge: "Kashmir Tour Packages",
    quote: "“If there is heaven on earth, it is here, it is here, it is here.” Experience snow-capped valleys and beautiful lakes of Kashmir.",
    alt: "Dal Lake and shikaras in Kashmir"
  },
  {
    image: "/images/rajasthan_hero.png",
    badge: "Rajasthan Tour Packages",
    quote: "“Explore the land of kings, palaces, and golden deserts.” Discover majestic royal forts and heritage routes of Rajasthan.",
    alt: "Beautiful royal palaces in Rajasthan"
  },
  {
    image: "/images/himachal_hero.png",
    badge: "Himachal Tour Packages",
    quote: "“The mountains are calling and I must go.” Unwind in scenic green valleys and snowy peaks of Manali.",
    alt: "Snowy pine trees and mountain vistas of Himachal"
  },
  {
    image: "/images/gujarat_hero.png",
    badge: "Gujarat Tour Packages",
    quote: "“Colors, culture, and timeless heritage.” Tour the majestic temples, historic stepwells, and white sands of Gujarat.",
    alt: "Beautiful heritage temples of Gujarat"
  }
];

export default function Hero({ badge, title, subtitle, bgImage, enableSlideshow = false }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!enableSlideshow) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);

    return () => clearInterval(interval);
  }, [enableSlideshow]);

  const activeBadge = enableSlideshow ? HERO_SLIDES[currentSlide].badge : (badge || "Premium Travel Services");
  const activeSubtitle = enableSlideshow ? HERO_SLIDES[currentSlide].quote : (subtitle || "Premium taxi, airport transfer, corporate travel, and tour services available 24/7. Experience luxury at every mile.");
  const activeImage = enableSlideshow ? HERO_SLIDES[currentSlide].image : (bgImage || "/images/hero_background.webp");

  const displayTitle = title || (
    <>
      <span className="gold-gradient-text"> Shree Kashtbhanjan Travels</span>
    </>
  );

  return (
    <section
      id="home"
      className="relative min-h-screen pt-20 sm:pt-24 md:pt-20 flex items-center justify-center overflow-hidden"
    >
      {/* Background Image Slideshow */}
      <div className="absolute inset-0 top-0 overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={activeImage}
              alt={enableSlideshow ? HERO_SLIDES[currentSlide].alt : "Premium travel fleet"}
              fill
              className="object-cover object-center scale-105"
              priority
              quality={85}
            />
          </motion.div>
        </AnimatePresence>
        <div className="hero-overlay absolute inset-0 z-10" />
      </div>

      {/* Animated Gold Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gold/20"
            initial={{
              x: `${15 + i * 15}%`,
              y: "100%",
              opacity: 0,
            }}
            animate={{
              y: "-5%",
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 5 + i * 1.5,
              repeat: Infinity,
              delay: i * 1.2,
              ease: "linear",
            }}
            style={{ willChange: "transform" }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-8 h-10 overflow-hidden">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse flex-shrink-0" />
          <AnimatePresence mode="wait">
            <motion.span
              key={currentSlide}
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -15, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="text-gold text-xs sm:text-sm font-medium tracking-widest uppercase block"
            >
              {activeBadge}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          {displayTitle}
        </motion.h1>

        {/* Subheadline / Quotes */}
        <div className="min-h-[80px] sm:min-h-[60px] md:min-h-[56px] flex items-center justify-center mb-10">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentSlide}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-muted text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            >
              {activeSubtitle}
            </motion.p>
          </AnimatePresence>
        </div>
        <span className="text-gold text-xs sm:text-sm font-medium tracking-widest uppercase">Daily Pickup and Drop Service at Mumbai, Surat, Ahmedabad Airports</span>


        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#booking"
            className="gold-gradient-bg text-background px-8 py-4 rounded-full text-base font-semibold hover:scale-105 transition-all duration-300 pulse-glow flex items-center gap-2"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true" role="img">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 01-4.29-1.243l-.307-.185-2.87.852.852-2.87-.185-.307A8 8 0 1112 20z" />
            </svg>
            Book on WhatsApp
          </a>
          <a
            href="#fleet"
            className="border border-gold-border text-foreground px-8 py-4 rounded-full text-base font-medium hover:bg-gold/10 transition-all duration-300"
          >
            Explore Our Fleet
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#booking"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted hover:text-gold transition-colors"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ willChange: "transform" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
}
