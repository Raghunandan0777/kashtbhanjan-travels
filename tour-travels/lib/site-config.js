/**
 * Single source of truth for site URL and business information.
 * Import from here instead of hardcoding values across components.
 */

export const SITE_URL = "https://www.shree-kashtbhanjan-travels.in";

export const BUSINESS = {
  name: "Shree Kashtbhanjan Travels",
  phone: "+917490864522",
  email: "renilprajapati94@gmail.com",
  whatsapp: "917490864522",
  address: {
    streetAddress: "123 Kamrej Char Rasta",
    addressLocality: "Surat",
    addressRegion: "Gujarat",
    postalCode: "394180",
    addressCountry: "IN",
  },
  areaServed: {
    cities: [
      "Surat",
      "Ahmedabad",
      "Mumbai",
      "Vadodara",
      "Rajkot",
    ],
    states: [
      "Gujarat",
      "Rajasthan",
      "Goa",
      "Himachal Pradesh",
      "Jammu & Kashmir",
    ],
  },
};
