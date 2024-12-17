export const siteConfig = {
  // Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
  author: 'Jimmy Truong',
  title: 'Jimmy Truong',
  description: 'Jimmy Truong Resume',
  lang: 'en-GB',
  ogLocale: 'en_GB',
  date: {
    locale: 'en-GB',
    options: {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }
  }
};

export const resumeData = {
  name: 'Jimmy Truong',
  email: 'truong.jimmy@outlook.com',
  location: 'Denver, CO',
  job_title: 'Technical Support Engineer @ ',
  company: {
    name: 'IQGEO',
    url: 'https://www.iqgeo.com/'
  },
  skills: {
    languages: ['JavaScript', 'TypeScript', 'Python', 'C++'],
    frontend: ['React', 'Next.js', 'Svelte', 'Sveltekit', 'Astro', 'TailwindCSS'],
    backend: ['Node.js', 'Express.js'],
    others: ['PostgreSQL', 'Docker', 'Git', 'Linux']
  }
};

export const menuLinks: Array<{ title: string; path: string }> = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: 'Blog',
    path: '/blog'
  },
  {
    title: 'Tools',
    path: '/tools'
  },
  {
    title: 'Projects',
    path: '/projects'
  }
];

export const socialLinks: Array<{
  title: string;
  path: string;
  icon_light: string;
  icon_dark: string;
}> = [
  {
    title: 'GitHub',
    path: 'https://github.com/kaizelzero',
    icon_light: 'https://api.iconify.design/el:github.svg?color=%23ffffff',
    icon_dark: 'https://api.iconify.design/el:github.svg?color=%23000000'
  },
  {
    title: 'LinkedIn',
    path: 'https://www.linkedin.com/in/truong-jimmy/',
    icon_light: 'https://api.iconify.design/el:linkedin.svg?color=%23ffffff',
    icon_dark: 'https://api.iconify.design/el:linkedin.svg?color=%23000000'
  }
];
