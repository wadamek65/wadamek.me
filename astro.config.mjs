import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { remarkReadingTime } from './remark-reading-time.mjs';
import mdx from '@astrojs/mdx';
import sentry from '@sentry/astro';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://wadamek.me',
	integrations: [
		tailwind(),
		mdx(),
		sitemap(),
		icon({
			iconDir: 'src/media/icons',
		}),
		sentry({
			dsn: 'https://0f5f72f1a2f880465f08659f4cea2694@o552412.ingest.us.sentry.io/4507390034509824',
			sourceMapsUploadOptions: {
				project: 'wadamek-me',
				authToken: process.env.SENTRY_AUTH_TOKEN,
			},
			enabled: import.meta.env.PROD,
			tracesSampleRate: 1.0,
		}),
	],
	markdown: {
		remarkPlugins: [remarkReadingTime],
	},
});
