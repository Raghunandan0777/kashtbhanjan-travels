import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BookingForm from "@/components/BookingForm";
import Fleet from "@/components/Fleet";
import TourPackages from "@/components/TourPackages";
import WhyChooseUs from "@/components/WhyChooseUs";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <> 
      <Navbar />
      <main className="relative z-20">
        <Hero />
        <div className="section-divider" />
        <BookingForm />
        <div className="section-divider" />
        <Fleet />
        <div className="section-divider" />
        <TourPackages />
        <div className="section-divider" />
        <WhyChooseUs />
        <div className="section-divider" />
        <Reviews />
        <div className="section-divider" />
        <Gallery />
        <div className="section-divider" />
        <Stats />
        <div className="section-divider" />
        <CTA />
        <div className="section-divider" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
