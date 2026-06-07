"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const REVIEWS = [
  {
    name: "Rajesh Kumar",
    location: "Delhi",
    rating: 5,
    text: "Excellent service, clean vehicle, professional driver. Highly recommended! The Innova Crysta was in immaculate condition and the driver was extremely courteous.",
    initials: "RK",
  },
  {
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "Booked a tour to Rajasthan and it was an unforgettable experience. The vehicle was comfortable and the driver knew all the best routes. Will definitely use Kashat Bhanjan Travels again!",
    initials: "PS",
  },
  {
    name: "Amit Patel",
    location: "Ahmedabad",
    rating: 5,
    text: "Used Kashat Bhanjan Travels for my airport transfer and was impressed with the punctuality and professionalism. The car was spotlessly clean and the ride was smooth. Five stars!",
    initials: "AP",
  },
  {
    name: "Sneha Reddy",
    location: "Hyderabad",
    rating: 5,
    text: "Our family trip to Manali was made special by Kashat Bhanjan Travels. The Ertiga was perfect for our family of 5, and the driver was patient and helpful throughout the journey.",
    initials: "SR",
  },
  {
    name: "Vikram Singh",
    location: "Jaipur",
    rating: 5,
    text: "Corporate travel needs handled perfectly. Reliable, professional, and always on time. Kashat Bhanjan Travels has become our go-to service for all business travel requirements.",
    initials: "VS",
  },
];

export default function Reviews() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % REVIEWS.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const review = REVIEWS[current];

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Trusted by thousands of happy travellers across India. Real reviews from real customers."
        />

        <div className="max-w-3xl mx-auto relative">
          {/* Review Card */}
          <div className="glass-strong rounded-3xl p-6 sm:p-8 md:p-12 gold-border-glow min-h-[300px] sm:min-h-[320px] md:min-h-[360px] flex flex-col items-center justify-center text-center relative overflow-hidden">
            {/* Quote icon */}
            <Quote
              size={40}
              className="absolute top-4 sm:top-6 left-4 sm:left-6 text-gold/10"
            />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction * 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 80 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex flex-col items-center"
              >
                {/* Avatar */}
                <div className="w-16 h-16 rounded-full gold-gradient-bg flex items-center justify-center text-background font-heading font-bold text-xl mb-4">
                  {review.initials}
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star
                      key={j}
                      size={18}
                      className="fill-gold text-gold"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-foreground/90 text-base sm:text-lg leading-relaxed mb-6 max-w-xl italic">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Name */}
                <h4 className="font-heading text-lg font-bold text-foreground">
                  {review.name}
                </h4>
                <p className="text-muted text-sm">{review.location}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 flex-wrap">
            <button
              onClick={prev}
              className="w-9 sm:w-10 h-9 sm:h-10 rounded-full border border-gold-border flex items-center justify-center text-gold hover:bg-gold/10 transition-colors duration-300"
              aria-label="Previous review"
            >
              <ChevronLeft size={16} className="sm:w-[18px]" />
            </button>

            {/* Dots */}
            <div className="flex gap-1.5 sm:gap-2">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-gold w-5 sm:w-6"
                      : "w-2 bg-gold/30 hover:bg-gold/50"
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-9 sm:w-10 h-9 sm:h-10 rounded-full border border-gold-border flex items-center justify-center text-gold hover:bg-gold/10 transition-colors duration-300"
              aria-label="Next review"
            >
              <ChevronRight size={16} className="sm:w-[18px]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
