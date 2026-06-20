"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./ui/SectionHeading";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

const CONTACT_INFO = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 74908 64522",
    href: "tel:+917490864522",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 74908 64522",
    href: "https://wa.me/917490864522",
  },
  {
    icon: Mail,
    label: "Email",
    value: "shreekashatbhanjantravels522@gmail.com",
    href: "mailto:shreekashatbhanjantravels522@gmail.com",
  },
  {
    icon: MapPin,
    label: "Office Address",
    value: "123 Kamrej Char Rasta, Surat 394180",
    href: "https://maps.google.com/?q=Kamrej+Char+Rasta,+Surat+394180",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-20 sm:py-28 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get in Touch"
          subtitle="Have questions? We're here to help. Reach out through any of these channels."
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {/* Contact Info Cards */}
          <div className="space-y-4">
            {CONTACT_INFO.map((info, i) => {
              const Icon = info.icon;
              const Wrapper = info.href ? "a" : "div";
              return (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Wrapper
                    {...(info.href
                      ? {
                          href: info.href,
                          target: info.href.startsWith("http")
                            ? "_blank"
                            : undefined,
                          rel: info.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined,
                        }
                      : {})}
                    className="glass rounded-2xl p-5 flex items-start gap-4 group hover:border-gold/40 transition-all duration-300 block"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                      <Icon size={22} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-muted text-xs uppercase tracking-wider mb-1">
                        {info.label}
                      </p>
                      <p className="text-foreground text-sm sm:text-base font-medium">
                        {info.value}
                      </p>
                    </div>
                  </Wrapper>
                </motion.div>
              );
            })}
          </div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="glass rounded-2xl overflow-hidden h-[320px] sm:h-[400px] lg:h-full lg:min-h-[400px]"
          >
            <iframe
              src="https://maps.google.com/maps?q=Kamrej%20Char%20Rasta,%20Surat,%20Gujarat%20394180&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shree Kashtbhanjan Travels Office Location"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
