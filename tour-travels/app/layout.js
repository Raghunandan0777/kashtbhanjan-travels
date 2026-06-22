import "./globals.css";
import Script from "next/script";
import { SITE_URL, BUSINESS } from "@/lib/site-config";
import FloatingActions from "@/components/FloatingActions";
import LoadingScreen from "@/components/LoadingScreen";

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
  verification: {
    google: "eAuaLFt1lkKBnkE0hhEAcWtMcA4Dkj7On1cVMKn7-qA",
  },
  openGraph: {
    title:
      "Shree Kashtbhanjan Travels — Premium Taxi, Tour & Travel Services in Surat",
    description:
      "Experience luxury travel with Shree Kashtbhanjan Travels. Premium local taxi, airport transfers, corporate travel, and outstation tour packages in Surat, Gujarat.",
    url: SITE_URL,
    siteName: BUSINESS.name,
    images: [
      {
        url: "/images/hero_background.webp",
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
    images: ["/images/hero_background.webp"],
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
  areaServed: [
    ...BUSINESS.areaServed.cities.map((city) => ({
      "@type": "City",
      name: city,
    })),
    ...BUSINESS.areaServed.states.map((state) => ({
      "@type": "State",
      name: state,
    })),
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth" suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-background" suppressHydrationWarning>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-gold focus:text-background focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold focus:text-sm"
        >
          Skip to main content
        </a>
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
        <LoadingScreen />
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}


