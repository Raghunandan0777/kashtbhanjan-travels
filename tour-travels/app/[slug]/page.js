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

export const dynamicParams = false;

export async function generateStaticParams() {
  return [
    { slug: "taxi-service-surat" },
    { slug: "airport-taxi-surat" },
    { slug: "outstation-taxi-surat" },
    { slug: "tempo-traveller-rental-surat" },
    { slug: "surat-to-ahmedabad-taxi" },
    { slug: "surat-to-mumbai-taxi" },
    { slug: "surat-to-vadodara-taxi" },
  ];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const seo = SEO_DATA[slug];
  if (!seo) return {};
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical: seo.canonical,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.canonical,
      siteName: "Shree Kashtbhanjan Travels",
      images: [
        {
          url: "https://www.shree-kashtbhanjan-travels.in/images/hero_background.webp",
          width: 1200,
          height: 630,
          alt: "Shree Kashtbhanjan Travels Fleet"
        }
      ],
      locale: "en_IN",
      type: "product",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: ["https://www.shree-kashtbhanjan-travels.in/images/hero_background.webp"],
    },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const seo = SEO_DATA[slug];

  if (!seo) return null;

  return (
    <>
      <SEOStructuredData
        slug={seo.slug}
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        faqs={seo.faqs}
        reviews={seo.reviews}
      />
      <Navbar />
      <main className="relative z-20">
        <Hero
          badge={seo.heroBadge}
          title={seo.heroHeading}
          subtitle={seo.heroSubheading}
        />
        <div className="section-divider" />
        <BookingForm
          defaultPickup={seo.defaultPickup}
          defaultDestination={seo.defaultDestination}
          defaultVehicle={seo.defaultVehicle}
        />
        <div className="section-divider" />
        <Fleet />
        <div className="section-divider" />
        <TourPackages />
        <div className="section-divider" />
        <WhyChooseUs />
        <div className="section-divider" />
        <Reviews customReviews={seo.reviews} />
        <div className="section-divider" />
        <FAQSection faqs={seo.faqs} />
        <div className="section-divider" />
        <SEOContent seoText={seo.seoText} slug={slug} />
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
