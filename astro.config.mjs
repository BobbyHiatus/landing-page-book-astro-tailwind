import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from "@tailwindcss/vite";
import partytown from '@astrojs/partytown';

// https://astro.build/config
// Static build: every page is plain HTML in dist/, so it can be hosted anywhere
// (Cloudflare, Netlify, Vercel, GitHub Pages).
export default defineConfig({
	site: 'https://bobcavin.bcavin.workers.dev',
	integrations: [sitemap(), partytown()],
	vite: {
		plugins: [tailwindcss()],
	},
});
