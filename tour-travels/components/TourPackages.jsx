"use client";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./ui/SectionHeading";
import GlassCard from "./ui/GlassCard";
import { CalendarDays, IndianRupee, ArrowRight } from "lucide-react";
import { TOURS } from "@/lib/tours";
import { BUSINESS } from "@/lib/site-config";

export default function TourPackages() {
  return (
    <section id="tours" className="py-20 sm:py-28 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Popular Tour Packages"
          subtitle="Handcrafted luxury tour packages to India's most enchanting destinations. Every journey, a story worth telling."
        />

        {/* Responsive grid stacking vertically on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {TOURS.map((tour, i) => (
            <GlassCard
              key={tour.name}
              delay={i * 0.1}
              className="flex flex-col"
            >
              {/* Image */}
              <Link href={`/tours/${tour.slug}`} className="relative h-56 sm:h-60 overflow-hidden group block">
                <Image
                  src={tour.image}
                  alt={tour.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 1024px) 340px, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                {/* Price Badge */}
                <div className="absolute top-4 right-4 glass rounded-full px-4 py-1.5">
                  <span className="text-gold font-bold text-sm">
                    {tour.price}
                  </span>
                </div>
              </Link>

              {/* Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                <Link href={`/tours/${tour.slug}`} className="group/title">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-1.5 group-hover/title:text-gold transition-colors duration-300">
                    {tour.name}
                  </h3>
                </Link>
                <p className="text-muted text-sm mb-4 leading-relaxed">
                  {tour.desc}
                </p>

                <div className="flex items-center gap-4 mb-5 mt-auto">
                  <span className="flex items-center gap-1.5 text-xs text-gold bg-gold/10 px-3 py-1.5 rounded-full">
                    <CalendarDays size={13} />
                    {tour.duration}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-gold bg-gold/10 px-3 py-1.5 rounded-full">
                    <IndianRupee size={13} />
                    Starting Price
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-2.5">
                  <Link
                    href={`/tours/${tour.slug}`}
                    className="w-full flex items-center justify-center gap-2 border border-gold-border text-foreground py-2.5 rounded-xl text-sm font-semibold hover:bg-gold/10 hover:border-gold/40 transition-all duration-300"
                  >
                    View Details
                    <ArrowRight size={14} />
                  </Link>

                  {/* WhatsApp Enquiry */}
                  <a
                    href={`https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(`Hi, I'm interested in the ${tour.name} package (${tour.duration}, ${tour.price}). Please share more details.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 gold-gradient-bg text-background py-2.5 rounded-xl text-sm font-semibold hover:scale-[1.02] transition-all duration-300"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true" role="img">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 01-4.29-1.243l-.307-.185-2.87.852.852-2.87-.185-.307A8 8 0 1112 20z" />
                    </svg>
                    Enquire on WhatsApp
                  </a>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
