// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import robots from 'astro-robots';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://ramoweb.com",
  vite: {
    plugins: [
      // @ts-ignore - Type incompatibility between Tailwind CSS Vite plugin and Astro
      tailwindcss(),
    ],
  },
  integrations: [
    sitemap(),
    robots({
      host: "ramoweb.com",
      sitemap: [
        "https://ramoweb.com/sitemap-0.xml",
        "https://www.ramoweb.com/sitemap-0.xml",
      ],
      policy: [
        {
          userAgent: [
            "Applebot",
            "Googlebot",
            "bingbot",
            "Yandex",
            "Yeti",
            "Baiduspider",
            "360Spider",
            "*",
          ],
          allow: ["/"],
          disallow: ["/_astro"],
          crawlDelay: 5,
        },
      ],
    }),
  ],
});