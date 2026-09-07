// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://etter.app.br',
  trailingSlash: 'never',
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'pt', locales: { pt: 'pt-BR', en: 'en-US' } },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
  build: { inlineStylesheets: 'always' },
  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
});
