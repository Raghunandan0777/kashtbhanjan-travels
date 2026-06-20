"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/site-config";
import { useState } from "react";

export default function FloatingActions() {
  const [hoveredButton, setHoveredButton] = useState(null); // "call" | "whatsapp" | null

  const whatsappUrl = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent("Hi Shree Kashtbhanjan Travels, I would like to book a cab / tour package. Please share details.")}`;
  const phoneUrl = `tel:${BUSINESS.phone}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3.5 sm:gap-4 select-none">
      {/* Call Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="relative flex items-center justify-end"
      >
        {/* Tooltip */}
        <AnimatePresence>
          {hoveredButton === "call" && (
            <motion.span
              key="call-tooltip"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="absolute right-16 bg-[#0c0d12]/90 text-gold border border-gold/30 px-3 py-1.5 rounded-xl text-xs font-semibold tracking-wide whitespace-nowrap shadow-2xl backdrop-blur-md mr-1 pointer-events-none"
            >
              Call Us: {BUSINESS.phone}
            </motion.span>
          )}
        </AnimatePresence>

        <motion.a
          href={phoneUrl}
          onMouseEnter={() => setHoveredButton("call")}
          onMouseLeave={() => setHoveredButton(null)}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-background shadow-2xl transition-shadow duration-300 relative group overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #D4AF37 0%, #b8972e 100%)",
            boxShadow: "0 10px 25px -5px rgba(212, 175, 55, 0.4), 0 0 15px rgba(212, 175, 55, 0.2)",
          }}
          aria-label="Call Shree Kashtbhanjan Travels"
        >
          {/* Shimmer Effect */}
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
          <Phone className="w-5.5 h-5.5 sm:w-6 sm:h-6 text-background" />
        </motion.a>
      </motion.div>

      {/* WhatsApp Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative flex items-center justify-end"
      >
        {/* Tooltip */}
        <AnimatePresence>
          {hoveredButton === "whatsapp" && (
            <motion.span
              key="whatsapp-tooltip"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="absolute right-16 bg-[#0c0d12]/90 text-emerald-400 border border-emerald-500/20 px-3 py-1.5 rounded-xl text-xs font-semibold tracking-wide whitespace-nowrap shadow-2xl backdrop-blur-md mr-1 pointer-events-none"
            >
              Chat on WhatsApp
            </motion.span>
          )}
        </AnimatePresence>

        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredButton("whatsapp")}
          onMouseLeave={() => setHoveredButton(null)}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-shadow duration-300 relative group overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
            boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.4), 0 0 15px rgba(16, 185, 129, 0.2)",
          }}
          aria-label="Chat with Shree Kashtbhanjan Travels on WhatsApp"
        >
          {/* Shimmer Effect */}
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
          <svg viewBox="0 0 24 24" className="w-6.5 h-6.5 sm:w-7 sm:h-7 fill-current text-white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 01-4.29-1.243l-.307-.185-2.87.852.852-2.87-.185-.307A8 8 0 1112 20z" />
          </svg>
        </motion.a>
      </motion.div>
    </div>
  );
}
