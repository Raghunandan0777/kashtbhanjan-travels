import "./globals.css";

export const metadata = {
  title: "Shree Kashat Bhanjan Travels — Premium Taxi, Tour & Travel Services",
  description:
    "Experience luxury travel with Shree Kashat Bhanjan Travels. Premium taxi, airport transfers, corporate travel, and curated tour packages. Book your ride on WhatsApp — available 24/7.",
  keywords:
    "Shree Kashat Bhanjan Travels, Kashat Bhanjan Travels, kashatbhanjan travel, luxury taxi, premium car rental, airport transfer, tour packages, chauffeur service, WhatsApp booking, travel India",
  openGraph: {
    title: "Shree Kashat Bhanjan Travels — Travel in Comfort. Arrive in Style.",
    description:
      "Premium taxi, airport transfers, and luxury tour packages. Book instantly on WhatsApp.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth" suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-background" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
