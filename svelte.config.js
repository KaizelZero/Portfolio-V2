import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { escapeSvelte, mdsvex } from 'mdsvex';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeInferReadingTimeMeta from 'rehype-infer-reading-time-meta';
import rehypeSlug from 'rehype-slug';
import rehypeUnwrapImages from 'rehype-unwrap-images';
import { createHighlighter } from 'shiki';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
  extensions: ['.md'],
  layout: {
    _: './src/lib/components/layout/mdsvex.svelte'
  },
  highlight: {
    highlighter: async (code, lang = 'text') => {
      const highlighter = await createHighlighter({
        themes: ['poimandres'],
        langs: ['javascript', 'typescript']
      });
      await highlighter.loadLanguage('javascript', 'typescript');
      const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'poimandres' }));
      return `{@html \`${html}\` }`;
    }
  },
  rehypePlugins: [
    rehypeSlug,
    rehypeUnwrapImages,
    rehypeInferReadingTimeMeta,
    [
      rehypeExternalLinks,
      {
        target: '_blank',
        rel: ['nofollow, noopener, noreferrer']
      }
    ]
  ]
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

  kit: {
    // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
    // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
    // See https://svelte.dev/docs/kit/adapters for more information about adapters.
    adapter: adapter()
  },

  extensions: ['.svelte', '.md']
};

export default config;
