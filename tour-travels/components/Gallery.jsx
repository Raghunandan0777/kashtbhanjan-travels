"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./ui/SectionHeading";
import { ZoomIn, X } from "lucide-react";

const GALLERY_IMAGES = [
  {
    src: "/images/gallery_interior.png",
    alt: "Luxury car interior",
    label: "Premium Interiors",
  },
  {
    src: "/images/gallery_airport.png",
    alt: "Airport pickup service",
    label: "Airport Transfers",
  },
  {
    src: "/images/gallery_family.png",
    alt: "Family road trip",
    label: "Family Adventures",
  },
  {
    src: "/images/gallery_corporate.png",
    alt: "Corporate travel",
    label: "Corporate Travel",
  },
  {
    src: "/images/innova_crysta.png",
    alt: "Premium fleet vehicle",
    label: "Our Fleet",
  },
  {
    src: "/images/kashmir_tour.png",
    alt: "Tour destination Kashmir",
    label: "Dream Destinations",
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
          title="Gallery"
          subtitle="A glimpse into the Shree Kashat Bhanjan Travels experience — luxury, comfort, and unforgettable journeys."
        />

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6"
        >
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative rounded-2xl overflow-hidden group cursor-pointer h-64 sm:h-72 lg:h-80"
              onClick={() => setLightbox(img)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100 flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full border-2 border-gold flex items-center justify-center">
                    <ZoomIn size={20} className="text-gold" />
                  </div>
                  <span className="text-gold text-sm font-medium">
                    {img.label}
                  </span>
                </div>
              </div>
              {/* Gold border on hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gold/40 transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-foreground hover:text-gold transition-colors"
            aria-label="Close lightbox"
          >
            <X size={28} />
          </button>
          <div className="relative w-full max-w-4xl h-[60vh] sm:h-[70vh] rounded-2xl overflow-hidden">
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              fill
              className="object-cover"
              sizes="90vw"
            />
          </div>
        </motion.div>
      )}
    </section>
  );
}
