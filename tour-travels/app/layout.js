import "./globals.css";
import Script from "next/script";
import { SITE_URL, BUSINESS } from "@/lib/site-config";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | Shree Kashtbhanjan Travels",
    default:
      "Shree Kashtbhanjan Travels — Premium Taxi, Tour & Travel Services in Surat",
  },
  description:
    "Experience luxury travel with Shree Kashtbhanjan Travels. Premium local taxi, airport transfers, corporate travel, and outstation tour packages in Surat, Gujarat.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title:
      "Shree Kashtbhanjan Travels — Premium Taxi, Tour & Travel Services in Surat",
    description:
      "Experience luxury travel with Shree Kashtbhanjan Travels. Premium local taxi, airport transfers, corporate travel, and outstation tour packages in Surat, Gujarat.",
    url: SITE_URL,
    siteName: BUSINESS.name,
    images: [
      {
        url: "/images/hero_background.png",
        width: 1200,
        height: 630,
        alt: "Shree Kashtbhanjan Travels Fleet",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Shree Kashtbhanjan Travels — Premium Taxi, Tour & Travel Services",
    description:
      "Premium local taxi, airport transfers, corporate travel, and outstation tour packages in Surat, Gujarat.",
    images: ["/images/hero_background.png"],
  },
};

/* Sitewide TaxiService JSON-LD */
const taxiServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  name: BUSINESS.name,
  image: `${SITE_URL}/images/hero_background.png`,
  url: SITE_URL,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.address.streetAddress,
    addressLocality: BUSINESS.address.addressLocality,
    addressRegion: BUSINESS.address.addressRegion,
    postalCode: BUSINESS.address.postalCode,
    addressCountry: BUSINESS.address.addressCountry,
  },
  areaServed: BUSINESS.areaServed.map((area) => ({
    "@type": "City",
    name: area,
  })),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth" suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-background" suppressHydrationWarning>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DCTMFX7FDF"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-DCTMFX7FDF');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(taxiServiceJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}


