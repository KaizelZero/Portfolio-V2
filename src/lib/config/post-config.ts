import { dev } from '$app/environment';

export const title = 'Shakespeare';
export const description = 'SvelteKit blog for poets';
export const url = dev ? 'http://localhost:5173/' : 'https://joyofcode.xyz/';

export type Categories = 'sveltekit' | 'svelte';

export type Post = {
  title: string;
  slug: string;
  description: string;
  date: string;
  categories: Categories[];
  published: boolean;
};
