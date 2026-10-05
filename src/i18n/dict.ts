import type { Locale } from './config';

interface Strings {
  works: string;
  writing: string;
  research: string;
  about: string;
  pricing: string;
  sayHello: string;
  footerCta: string;
}

export const dict: Record<Locale, Strings> = {
  en: {
    works: 'Works',
    writing: 'Writing',
    research: 'Research',
    about: 'About',
    pricing: 'Pricing',
    sayHello: 'Say hello',
    footerCta: "Have a project? Let's ship it.",
  },
  id: {
    works: 'Karya',
    writing: 'Tulisan',
    research: 'Riset',
    about: 'Tentang',
    pricing: 'Harga',
    sayHello: 'Hubungi saya',
    footerCta: 'Punya proyek? Mari wujudkan.',
  },
};
