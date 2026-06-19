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
import FAQSection from "@/components/FAQSection";
import SEOStructuredData from "@/components/SEOStructuredData";
import SEOContent from "@/components/SEOContent";
import { SEO_DATA } from "@/lib/seo-data";
import { SITE_URL } from "@/lib/site-config";

export const metadata = {
  title: SEO_DATA.home.title,
  description: SEO_DATA.home.description,
  keywords: SEO_DATA.home.keywords,
  alternates: {
    canonical: SEO_DATA.home.canonical,
  },
  verification: {
    google: "eAuaLFt1lkKBnkE0hhEAcWtMcA4Dkj7On1cVMKn7-qA",
  },
  openGraph: {
    title: SEO_DATA.home.title,
    description: SEO_DATA.home.description,
    url: SEO_DATA.home.canonical,
    siteName: "Shree Kashtbhanjan Travels",
    images: [
      {
        url: `${SITE_URL}/images/hero_background.png`,
        width: 1200,
        height: 630,
        alt: "Shree Kashtbhanjan Travels Fleet"
      }
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_DATA.home.title,
    description: SEO_DATA.home.description,
    images: [`${SITE_URL}/images/hero_background.png`],
  },
};

export default function Home() {
  const homeData = SEO_DATA.home;

  return (
    <> 
      <SEOStructuredData
        slug={homeData.slug}
        title={homeData.title}
        description={homeData.description}
        canonical={homeData.canonical}
        faqs={homeData.faqs}
        reviews={homeData.reviews}
      />
      <Navbar />
      <main className="relative z-20">
        <Hero 
          title={homeData.title}
          subtitle={homeData.heroSubheading}
        />
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
        <FAQSection faqs={homeData.faqs} />
        <div className="section-divider" />
        <SEOContent seoText={homeData.seoText} slug={homeData.slug} />
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
