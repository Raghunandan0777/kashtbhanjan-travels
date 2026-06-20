import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TOURS, getTourBySlug } from "@/lib/tours";
import { SITE_URL, BUSINESS } from "@/lib/site-config";
import TourDetailContent from "./TourDetailContent";

/* ── Static generation ── */

export const dynamicParams = false;

export function generateStaticParams() {
  return TOURS.map((t) => ({ slug: t.slug }));
}

/* ── SEO metadata ── */

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) return {};

  const canonicalUrl = `${SITE_URL}/tours/${tour.slug}`;

  return {
    title: tour.seoTitle,
    description: tour.longDesc,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: tour.seoTitle,
      description: tour.longDesc,
      url: canonicalUrl,
      siteName: BUSINESS.name,
      images: [
        {
          url: `${SITE_URL}${tour.image}`,
          width: 1200,
          height: 630,
          alt: tour.seoTitle,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: tour.seoTitle,
      description: tour.longDesc,
      images: [`${SITE_URL}${tour.image}`],
    },
  };
}

/* ── Page component ── */

export default async function TourDetailPage({ params }) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) return null;

  const canonicalUrl = `${SITE_URL}/tours/${tour.slug}`;

  /* TouristTrip JSON-LD */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour.seoTitle,
    description: tour.longDesc,
    image: `${SITE_URL}${tour.image}`,
    touristType: "Leisure",
    provider: {
      "@type": "TravelAgency",
      name: BUSINESS.name,
      url: SITE_URL,
      telephone: BUSINESS.phone,
      email: BUSINESS.email,
      address: {
        "@type": "PostalAddress",
        ...BUSINESS.address,
      },
    },
    offers: {
      "@type": "Offer",
      url: canonicalUrl,
      price: tour.priceValue,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main className="relative z-20">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[360px] sm:h-[60vh] flex items-end overflow-hidden">
          <Image
            src={tour.image}
            alt={tour.seoTitle}
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
          <div className="hero-overlay absolute inset-0" />

          {/* Breadcrumb */}
          <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 pb-8 sm:pb-12">
            <nav className="flex items-center gap-2 text-xs text-muted mb-4">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span className="text-gold/40">/</span>
              <Link href="/#tours" className="hover:text-gold transition-colors">Tours</Link>
              <span className="text-gold/40">/</span>
              <span className="text-gold">{tour.name}</span>
            </nav>
          </div>
        </section>

        {/* Tour Detail Content (client component for animations) */}
        <TourDetailContent tour={tour} />
      </main>

      <Footer />
    </>
  );
}
