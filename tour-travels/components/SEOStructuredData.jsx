import React from "react";

export default function SEOStructuredData({ slug, title, description, canonical, faqs = [], reviews = [] }) {
  // 1. BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://shreekashtbhanjantravels.com"
      }
    ]
  };

  if (slug) {
    breadcrumbSchema.itemListElement.push({
      "@type": "ListItem",
      "position": 2,
      "name": title.split("|")[0].trim(),
      "item": canonical
    });
  }

  // 2. TravelAgency (LocalBusiness) Schema
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": "https://shreekashtbhanjantravels.com/#organization",
    "name": "Shree Kashtbhanjan Travels",
    "description": description || "Premium taxi, airport transfer, corporate travel, and tour services in Surat, Gujarat.",
    "url": "https://shreekashtbhanjantravels.com",
    "logo": "https://shreekashtbhanjantravels.com/Tlogo.png",
    "image": "https://shreekashtbhanjantravels.com/images/hero_background.png",
    "telephone": "+917990762538",
    "priceRange": "INR",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Kamrej Char Rasta",
      "addressLocality": "Surat",
      "addressRegion": "Gujarat",
      "postalCode": "394180",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.2686,
      "longitude": 72.9304
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.instagram.com/shree_kashtbhanjan_tour_travel?igsh=c2w5OHprbXd0dHZi"
    ]
  };

  // 3. FAQPage Schema
  let faqSchema = null;
  if (faqs && faqs.length > 0) {
    faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
  }

  // 4. Product/Service Schema (for aggregate ratings in Google search results)
  let serviceSchema = null;
  if (slug && reviews && reviews.length > 0) {
    const ratings = reviews.map(r => r.rating);
    const avgRating = ratings.reduce((a, b) => a + b, 0) / ratings.length || 5;
    serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": title.split("|")[0].trim(),
      "description": description,
      "image": "https://shreekashtbhanjantravels.com/images/hero_background.png",
      "brand": {
        "@type": "Brand",
        "name": "Shree Kashtbhanjan Travels"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": avgRating.toFixed(1),
        "reviewCount": reviews.length,
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": reviews.map(r => ({
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": r.name
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": r.rating
        },
        "reviewBody": r.text
      }))
    };
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {serviceSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      )}
    </>
  );
}
