import { SITE_URL } from "@/lib/site-config";
import { TOURS } from "@/lib/tours";
import { SEO_DATA } from "@/lib/seo-data";

export const dynamic = "force-static";

export default function sitemap() {
  const now = new Date().toISOString();

  /* Homepage */
  const homepage = {
    url: `${SITE_URL}/`,
    lastModified: now,
    changeFrequency: "daily",
    priority: 1.0,
  };

  /* Tour detail pages */
  const tourPages = TOURS.map((tour) => ({
    url: `${SITE_URL}/tours/${tour.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  /* Existing taxi / service pages from seo-data.js */
  const servicePages = Object.values(SEO_DATA)
    .filter((page) => page.slug) // skip the "home" entry which has slug ""
    .map((page) => ({
      url: page.canonical,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    }));

  return [homepage, ...tourPages, ...servicePages];
}
