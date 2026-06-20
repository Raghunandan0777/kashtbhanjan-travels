"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./ui/SectionHeading";
import { ZoomIn, X } from "lucide-react";

const GALLERY_IMAGES = [
  {
    src: "/images/gallery_family_goa.webp",
    alt: "Patel Family enjoying beach sunset in Goa",
    label: "Goa Beach Holiday",
    family: "The Patel Family, Surat",
    experience: "Our trip to Goa was absolutely flawless. The Innova Crysta was spotless, and the driver knew all the scenic spots. The kids had a blast!",
  },
  {
    src: "/images/gallery_family_rajasthan.webp",
    alt: "Shah Family visiting palaces in Rajasthan",
    label: "Jaipur Heritage Tour",
    family: "The Shah Family, Surat",
    experience: "Exploring the majestic palaces of Jaipur with Kashtbhanjan Travels was a delight. Having a reliable cab and an expert highway driver made the long journey stress-free and very comfortable.",
  },
  {
    src: "/images/gallery_family_himachal.webp",
    alt: "Mehta Family in snow-capped Manali",
    label: "Manali Snow Adventure",
    family: "The Mehta Family, Surat",
    experience: "A wonderful family vacation in the snow-capped hills of Manali. Shree Kashtbhanjan travels arranged everything perfectly. The Tempo Traveller was very spacious and warm.",
  },
  {
    src: "/images/gallery_family_gujarat.webp",
    alt: "Prajapati Family visiting temples in Gujarat",
    label: "Gujarat Temple Tour",
    family: "The Prajapati Family, Surat",
    experience: "We booked a tour covering Somnath and Dwarka for three generations of our family. Punctual service, safe highway driving, and great hospitality throughout the trip.",
  },
  {
    src: "/images/gallery_interior.webp",
    alt: "Luxury cab premium interiors",
    label: "Premium Comfort",
    family: "Aditya Sen, Corporate Client",
    experience: "Extremely clean, modern interiors with premium upholstery. It feels like travelling in a private lounge. Perfect for business trips.",
  },
  {
    src: "/images/gallery_airport.webp",
    alt: "Airport pickup service",
    label: "Mumbai Airport Transfer",
    family: "Dr. Rhea Desai, Surat",
    experience: "My late-night transfer to Mumbai Airport was perfectly timed. The driver was waiting 15 minutes early and handled all my heavy luggage with care.",
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="gallery" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Family Travel Stories"
          subtitle="A glimpse into real experiences from our happy travelers exploring different destinations in comfort."
        />

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative rounded-2xl overflow-hidden group cursor-pointer h-72 sm:h-80 border border-gold-border/10 hover:border-gold-border/30 transition-all duration-300 shadow-lg shadow-black/30"
              onClick={() => setLightbox(img)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              
              {/* Overlay (always visible slightly at bottom, fully animates on hover) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/95 transition-all duration-500 flex flex-col justify-end p-5 sm:p-6">
                <span className="text-gold text-xs font-bold tracking-widest uppercase mb-1 block">
                  {img.label}
                </span>
                
                <h4 className="text-white font-heading text-lg font-bold mb-1.5 transition-transform duration-300">
                  {img.family.split(",")[0]}
                </h4>
                
                {/* Expand experience on hover (desktop) or show always (mobile) */}
                <div className="h-auto opacity-100 md:h-0 md:opacity-0 md:group-hover:h-auto md:group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden">
                  <p className="text-muted text-xs sm:text-sm italic mb-3 line-clamp-3 leading-relaxed">
                    &ldquo;{img.experience}&rdquo;
                  </p>
                </div>
                
                <div className="flex items-center gap-1.5 text-gold text-xs font-semibold mt-1">
                  <span>Read Full Story</span>
                  <ZoomIn size={13} className="group-hover:scale-125 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-foreground hover:text-gold transition-colors z-50 bg-black/50 p-2 rounded-full border border-white/10 hover:border-gold/30"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>
            
            <div 
              className="relative w-full max-w-3xl flex flex-col rounded-2xl overflow-hidden glass-strong border border-gold-border/20 shadow-2xl shadow-black/80"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Container */}
              <div className="relative w-full h-[45vh] sm:h-[55vh]">
                <Image
                  src={lightbox.src}
                  alt={lightbox.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                  priority
                />
              </div>
              
              {/* Detailed Experience Panel */}
              <div className="p-6 sm:p-8 bg-card/95 border-t border-gold-border/20 flex flex-col">
                <span className="text-gold text-xs font-bold tracking-widest uppercase mb-1.5 block">
                  {lightbox.label}
                </span>
                <p className="text-foreground text-sm sm:text-base italic mb-3 leading-relaxed font-medium">
                  &ldquo;{lightbox.experience}&rdquo;
                </p>
                <p className="text-muted text-xs sm:text-sm font-semibold flex items-center gap-2">
                  <span className="w-6 h-[1px] bg-gold/50" />
                  {lightbox.family}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
