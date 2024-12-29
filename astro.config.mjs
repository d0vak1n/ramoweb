// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import robots from 'astro-robots';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
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