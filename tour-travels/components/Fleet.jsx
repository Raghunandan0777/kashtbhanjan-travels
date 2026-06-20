"use client";
import Image from "next/image";
import SectionHeading from "./ui/SectionHeading";
import GlassCard from "./ui/GlassCard";
import { Users, Wind, Briefcase, IndianRupee } from "lucide-react";

const WHATSAPP_NUMBER = "917490864522";

const FLEET = [
  {
    name: "Swift Dzire",
    image: "/images/swift_dzire.png",
    passengers: "4 Passengers",
    ac: "AC",
    luggage: "3 Bags",
    perKm: "₹13/km",
    desc: "Compact luxury sedan — perfect for city rides and short trips.",
  },
  {
    name: "Maruti Ertiga",
    image: "/images/maruti_ertiga.png",
    passengers: "6 Passengers",
    ac: "AC",
    luggage: "6 Bags",
    perKm: "₹15/km",
    desc: "Spacious MPV — ideal for family travel and group outings.",
  },
  {
    name: "Kia Carens",
    image: "/images/kia_carens.png",
    passengers: "6 Passengers",
    ac: "AC",
    luggage: "6 Bags",
    perKm: "₹18/km",
    desc: "Modern MPV — stylish comfort with cutting-edge features.",
  },
  {
    name: "Toyota Innova Crysta",
    image: "/images/innova_crysta.png",
    passengers: "7 Passengers",
    ac: "AC",
    luggage: "7 Bags",
    perKm: "₹22/km",
    desc: "Premium MPV — the gold standard for luxury road travel.",
  },
  {
    name: "Tempo Traveller",
    image: "/images/tempo_traveller.png",
    passengers: "12+ Passengers",
    ac: "AC / Non-AC",
    luggage: "10+ Bags",
    perKm: "₹30/km",
    desc: "Group travel specialist — perfect for tours and large parties.",
  },
  {
    name: "Force Urbania",
    image: "/images/force_urbania.png",
    passengers: "10-17 Passengers",
    ac: "AC",
    luggage: "10+ Bags",
    perKm: "₹30/km",
    desc: "Ultra-luxury premium van — ideal for executive group tours and premium family travel.",
  },
];

export default function Fleet() {
  return (
    <section id="fleet" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Premium Fleet"
          subtitle="Choose from our handpicked collection of meticulously maintained vehicles, each designed to deliver an exceptional travel experience."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {FLEET.map((car, i) => (
            <GlassCard key={car.name} delay={i * 0.1} className="flex flex-col">
              {/* Image */}
              <div className="relative h-52 sm:h-56 overflow-hidden group">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                <h3 className="font-heading text-xl font-bold text-foreground mb-1.5">
                  {car.name}
                </h3>
                <p className="text-muted text-sm mb-4 leading-relaxed">
                  {car.desc}
                </p>

                {/* Specs */}
                <div className="flex flex-wrap gap-3 mb-5 mt-auto">
                  <span className="flex items-center gap-1.5 text-xs text-gold bg-gold/10 px-3 py-1.5 rounded-full">
                    <Users size={13} />
                    {car.passengers}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-gold bg-gold/10 px-3 py-1.5 rounded-full">
                    <Wind size={13} />
                    {car.ac}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-gold bg-gold/10 px-3 py-1.5 rounded-full">
                    <Briefcase size={13} />
                    {car.luggage}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-gold bg-gold/10 px-3 py-1.5 rounded-full">
                    <IndianRupee size={13} />
                    {car.perKm}
                  </span>
                </div>

                {/* WhatsApp Button */}
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I'm interested in booking the ${car.name}. Please share details.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 border border-gold/30 text-gold py-2.5 rounded-xl text-sm font-medium hover:bg-gold hover:text-background transition-all duration-300"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 01-4.29-1.243l-.307-.185-2.87.852.852-2.87-.185-.307A8 8 0 1112 20z" />
                  </svg>
                  Book on WhatsApp
                </a>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
