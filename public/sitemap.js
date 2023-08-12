import { createSitemap } from "sitemap";
import fs from "fs";
import path from "path";

const baseUrl = "https://www.yourwebsite.com"; // Replace with your actual URL

const pages = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/home", changefreq: "daily", priority: 0.8 },
  { url: "/about", changefreq: "weekly", priority: 0.6 },
  { url: "/contact", changefreq: "monthly", priority: 0.5 },
  { url: "/projects", changefreq: "weekly", priority: 0.7 },
  // Add more pages as needed
];

const sitemap = createSitemap({
  hostname: baseUrl,
  cacheTime: 600000, // 600 seconds (10 minutes) cache purge period
  urls: pages,
});

const sitemapPath = path.join(process.cwd(), "public", "sitemap.xml");
fs.writeFileSync(sitemapPath, sitemap.toString());

console.log("Sitemap generated successfully!");
