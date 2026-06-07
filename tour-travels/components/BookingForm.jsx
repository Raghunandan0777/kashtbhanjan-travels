"use client";
import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { User, Phone, MapPin, Calendar, Car, Navigation } from "lucide-react";

const VEHICLE_OPTIONS = [
  "Sedan",
  "SUV",
  "Innova Crysta",
  "Ertiga",
  "Tempo Traveller",
  "Luxury Car",
];

const WHATSAPP_NUMBER = "917990762538";

export default function BookingForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    pickup: "",
    destination: "",
    date: "",
    vehicle: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.mobile.trim()) errs.mobile = "Mobile number is required";
    else if (!/^\d{10}$/.test(form.mobile.trim()))
      errs.mobile = "Enter a valid 10-digit number";
    if (!form.pickup.trim()) errs.pickup = "Pickup location is required";
    if (!form.destination.trim()) errs.destination = "Destination is required";
    if (!form.date) errs.date = "Travel date is required";
    if (!form.vehicle) errs.vehicle = "Select a vehicle type";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    const message = `Hello,

I would like to book a vehicle.

Name: ${form.name}
Mobile: ${form.mobile}
Pickup Location: ${form.pickup}
Destination: ${form.destination}
Travel Date: ${form.date}
Vehicle Type: ${form.vehicle}

Please contact me.`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const inputClass = (field) =>
    `w-full bg-background/60 border ${
      errors[field] ? "border-red-500/60" : "border-gold-border"
    } rounded-xl px-4 py-3.5 pl-12 text-foreground placeholder:text-muted/50 text-sm focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/30 transition-all duration-300`;

  return (
    <section id="booking" className="relative py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          {/* Heading */}
          <div className="text-center mb-8 sm:mb-10 px-4 sm:px-0">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-3">
              Book Your <span className="gold-gradient-text">Ride</span>
            </h2>
            <p className="text-muted text-xs sm:text-sm md:text-base leading-relaxed">
              Fill in your details and we&apos;ll connect with you instantly on
              WhatsApp
            </p>
          </div>

          {/* Form Card */}
          <form
            onSubmit={handleSubmit}
            className="glass-strong rounded-3xl p-5 sm:p-8 lg:p-10 space-y-4 sm:space-y-5 gold-border-glow mx-4 sm:mx-0"
          >
            {/* Name */}
            <div className="relative">
              <User
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/60"
              />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className={inputClass("name")}
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1 ml-1">{errors.name}</p>
              )}
            </div>

            {/* Mobile */}
            <div className="relative">
              <Phone
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/60"
              />
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={form.mobile}
                onChange={handleChange}
                className={inputClass("mobile")}
              />
              {errors.mobile && (
                <p className="text-red-400 text-xs mt-1 ml-1">
                  {errors.mobile}
                </p>
              )}
            </div>

            {/* Pickup & Destination */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="relative">
                <MapPin
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/60"
                />
                <input
                  type="text"
                  name="pickup"
                  placeholder="Pickup Location"
                  value={form.pickup}
                  onChange={handleChange}
                  className={inputClass("pickup")}
                />
                {errors.pickup && (
                  <p className="text-red-400 text-xs mt-1 ml-1">
                    {errors.pickup}
                  </p>
                )}
              </div>
              <div className="relative">
                <Navigation
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/60"
                />
                <input
                  type="text"
                  name="destination"
                  placeholder="Destination"
                  value={form.destination}
                  onChange={handleChange}
                  className={inputClass("destination")}
                />
                {errors.destination && (
                  <p className="text-red-400 text-xs mt-1 ml-1">
                    {errors.destination}
                  </p>
                )}
              </div>
            </div>

            {/* Date & Vehicle */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="relative">
                <Calendar
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/60"
                />
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className={`${inputClass("date")} ${!form.date ? "text-muted/50" : ""}`}
                />
                {errors.date && (
                  <p className="text-red-400 text-xs mt-1 ml-1">
                    {errors.date}
                  </p>
                )}
              </div>
              <div className="relative">
                <Car
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/60"
                />
                <select
                  name="vehicle"
                  value={form.vehicle}
                  onChange={handleChange}
                  className={`${inputClass("vehicle")} appearance-none cursor-pointer ${!form.vehicle ? "text-muted/50" : ""}`}
                >
                  <option value="" disabled>
                    Select Vehicle
                  </option>
                  {VEHICLE_OPTIONS.map((v) => (
                    <option
                      key={v}
                      value={v}
                      className="bg-card text-foreground"
                    >
                      {v}
                    </option>
                  ))}
                </select>
                {errors.vehicle && (
                  <p className="text-red-400 text-xs mt-1 ml-1">
                    {errors.vehicle}
                  </p>
                )}
              </div>
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full gold-gradient-bg text-background py-3 sm:py-4 rounded-xl text-base font-bold tracking-wide flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 mt-2"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 01-4.29-1.243l-.307-.185-2.87.852.852-2.87-.185-.307A8 8 0 1112 20z" />
              </svg>
              Book on WhatsApp
            </motion.button>

            <p className="text-center text-muted/50 text-xs">
              By booking, you agree to be redirected to WhatsApp with your
              details
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
