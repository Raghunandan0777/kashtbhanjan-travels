/**
 * Tour packages data — single source of truth.
 * Imported by TourPackages.jsx (cards) and app/tours/[slug]/page.js (detail pages).
 */

export const TOURS = [
  {
    name: "Goa Tour",
    slug: "goa-tour-package-from-surat",
    seoTitle: "Goa Tour Package from Surat — Beach Holiday by Shree Kashtbhanjan Travels",
    image: "/images/goa_tour.webp",
    duration: "3 Days / 2 Nights",
    price: "₹8,999",
    priceValue: 8999,
    desc: "Sun, sand, and serenity — explore Goa's stunning beaches and vibrant nightlife.",
    longDesc:
      "Escape from Surat to the sun-kissed shores of Goa with our all-inclusive 3-day tour package. Enjoy comfortable AC transport from Surat, handpicked beachside stays, and guided sightseeing covering North and South Goa's top attractions. Perfect for couples, families, and friend groups looking for a hassle-free beach holiday.",
    highlights: [
      "AC cab pickup & drop from Surat to Goa",
      "2 nights stay at a beachside resort with breakfast",
      "Guided sightseeing — Baga Beach, Fort Aguada, Basilica of Bom Jesus",
      "Water sports & sunset cruise options available",
    ],
  },
  {
    name: "Rajasthan Tour",
    slug: "rajasthan-tour-package-from-surat",
    seoTitle: "Rajasthan Tour Package from Surat — Royal Heritage Trip by Shree Kashtbhanjan Travels",
    image: "/images/rajasthan_tour.webp",
    duration: "5 Days / 4 Nights",
    price: "₹14,999",
    priceValue: 14999,
    desc: "Royal palaces, golden deserts, and rich heritage — the land of kings awaits.",
    longDesc:
      "Discover the grandeur of Rajasthan departing from Surat on this curated 5-day heritage tour. Visit majestic forts in Jaipur, the serene lakes of Udaipur, and experience a magical desert night in Jaisalmer. Our experienced drivers navigate the routes expertly, so you can focus on making memories.",
    highlights: [
      "AC cab from Surat with experienced highway driver",
      "4 nights in heritage hotels — Jaipur, Udaipur & Jaisalmer",
      "Desert safari with cultural folk evening in Jaisalmer",
      "Guided tours of Amber Fort, City Palace & Mehrangarh Fort",
    ],
  },
  {
    name: "Kashmir Tour",
    slug: "kashmir-tour-package-from-surat",
    seoTitle: "Kashmir Tour Package from Surat — Paradise Valley Trip by Shree Kashtbhanjan Travels",
    image: "/images/kashmir_tour.webp",
    duration: "5 Days / 4 Nights",
    price: "₹16,999",
    priceValue: 16999,
    desc: "Paradise on Earth — Dal Lake, snow peaks, and breathtaking valleys.",
    longDesc:
      "Fly from Surat and step into the paradise of Kashmir with our premium 5-day tour package. Cruise the iconic Dal Lake on a shikara, explore the flower gardens of Srinagar, and take in the snow-capped panoramas of Gulmarg and Pahalgam. All local transport, stays, and sightseeing are arranged for a worry-free experience.",
    highlights: [
      "Airport transfers in Srinagar & local sightseeing by AC cab",
      "4 nights in deluxe houseboats & valley-view hotels",
      "Shikara ride on Dal Lake & Mughal Gardens tour",
      "Day trips to Gulmarg gondola & Pahalgam valley",
    ],
  },
  {
    name: "Gujarat Tour",
    slug: "gujarat-tour-package-from-surat",
    seoTitle: "Gujarat Tour Package from Surat — Rann of Kutch & Heritage Trip by Shree Kashtbhanjan Travels",
    image: "/images/gujarat_tour.webp",
    duration: "4 Days / 3 Nights",
    price: "₹10,999",
    priceValue: 10999,
    desc: "Culture, cuisine, and the majestic Rann of Kutch — Gujarat has it all.",
    longDesc:
      "Explore the best of Gujarat starting right from Surat with our 4-day curated tour. Witness the vast white salt desert of the Rann of Kutch, visit the sacred Somnath Temple, and discover the Asiatic lions at Gir National Park. Comfortable travel in AC vehicles with local Gujarati hospitality included.",
    highlights: [
      "AC cab from Surat covering Kutch, Gir & Somnath",
      "3 nights in handpicked heritage & resort properties",
      "Rann of Kutch sunset experience & handicraft village visit",
      "Gir National Park jeep safari (subject to availability)",
    ],
  },
  {
    name: "Manali Tour",
    slug: "manali-tour-package-from-surat",
    seoTitle: "Manali Tour Package from Surat — Himalayan Adventure by Shree Kashtbhanjan Travels",
    image: "/images/manali_tour.webp",
    duration: "4 Days / 3 Nights",
    price: "₹11,999",
    priceValue: 11999,
    desc: "Mountain magic — Rohtang Pass, Solang Valley, and Himalayan adventures.",
    longDesc:
      "Head from Surat to the Himalayan paradise of Manali with our adventure-packed 4-day tour. Conquer the high-altitude Rohtang Pass, enjoy snow activities at Solang Valley, and stroll through Old Manali's charming cafés. We handle flights, local transport, and cozy mountain stays so you can soak in every moment.",
    highlights: [
      "Airport transfers in Kullu-Manali & local AC cab sightseeing",
      "3 nights in mountain-view hotels with breakfast",
      "Rohtang Pass excursion & Solang Valley snow activities",
      "Visit to Hadimba Temple, Mall Road & Old Manali",
    ],
  },
];

/**
 * Look up a tour by its URL slug.
 * @param {string} slug
 * @returns {object | undefined}
 */
export function getTourBySlug(slug) {
  return TOURS.find((t) => t.slug === slug);
}
