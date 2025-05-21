// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import robots from 'astro-robots';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://ramoweb.com",
  integrations: [
    tailwind(),
    sitemap(),
    robots({
      host: "ramoweb.com",
      sitemap: [
        "https://ramoweb.com/sitemap-index.xml",
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