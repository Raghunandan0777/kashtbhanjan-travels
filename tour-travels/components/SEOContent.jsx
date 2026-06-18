"use client";
import React from "react";
import SectionHeading from "./ui/SectionHeading";
import { Link } from "lucide-react";

const SERVICES_LINKS = [
  { label: "Taxi Service Surat", href: "/taxi-service-surat" },
  { label: "Airport Taxi Surat", href: "/airport-taxi-surat" },
  { label: "Outstation Taxi Surat", href: "/outstation-taxi-surat" },
  { label: "Tempo Traveller Surat", href: "/tempo-traveller-rental-surat" },
  { label: "Surat to Ahmedabad Taxi", href: "/surat-to-ahmedabad-taxi" },
  { label: "Surat to Mumbai Taxi", href: "/surat-to-mumbai-taxi" },
  { label: "Surat to Vadodara Taxi", href: "/surat-to-vadodara-taxi" },
];

export default function SEOContent({ seoText, slug }) {
  if (!seoText) return null;

  // Render different headings based on whether it is homepage or service page
  const sectionTitle = slug === "" ? "Premium Travel Solutions" : "Detailed Service Overview";
  const sectionSubtitle = slug === ""
    ? "Learn more about our standard-setting cab services, fleet structure, and regional coverage in Gujarat."
    : "Everything you need to know about our specialized taxi packages and routing options.";

  return (
    <section className="py-20 sm:py-28 bg-card/20 border-y border-gold-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={sectionTitle} subtitle={sectionSubtitle} />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Main Content Area */}
          <div className="lg:col-span-3 glass rounded-3xl p-6 sm:p-10 md:p-12 gold-border-glow">
            <article 
              className="seo-content"
              dangerouslySetInnerHTML={{ __html: seoText }}
            />
          </div>

          {/* Sidebar Area - Internal Linking and Quick CTA */}
          <div className="space-y-6 lg:col-span-1">
            <div className="glass rounded-3xl p-6 border-gold-border/25">
              <h4 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <Link size={16} className="text-gold" />
                Our Travel Services
              </h4>
              <nav className="flex flex-col gap-2.5">
                {SERVICES_LINKS.filter(link => link.href !== `/${slug}`).map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-muted hover:text-gold text-sm font-medium transition-colors duration-300 py-1.5 border-b border-white/5 hover:border-gold/30 flex items-center gap-1"
                  >
                    <span>♦</span> {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="glass rounded-3xl p-6 bg-gradient-to-br from-gold/5 to-transparent border-gold/30">
              <h4 className="font-heading text-lg font-bold text-foreground mb-2">
                Need a Custom Ride?
              </h4>
              <p className="text-muted text-xs leading-relaxed mb-4">
                We design custom itineraries for corporate transfers, group travel, and custom tours across Gujarat and India.
              </p>
              <a
                href="#booking"
                className="w-full justify-center inline-flex items-center gap-2 gold-gradient-bg text-background text-xs font-semibold py-3 px-4 rounded-full hover:scale-[1.02] transition-transform duration-300"
              >
                Get Custom Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
