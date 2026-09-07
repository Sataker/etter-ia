import type { Lang } from './site';

const ORG_ID = 'https://etter.app.br/#organization';

export function faqSchema(faq: { q: string; a: string }[]) {
  if (!faq.length) return null;
  return {
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function serviceSchema(d: { title: string; answer: string; description: string }) {
  return {
    '@type': 'Service',
    name: d.title,
    description: d.answer,
    provider: { '@id': ORG_ID },
    areaServed: { '@type': 'Country', name: 'Brasil' },
    serviceType: d.title,
  };
}

export function articleSchema(
  d: { title: string; answer: string; updated: string; question?: string },
  lang: Lang,
  url: string
) {
  return {
    '@type': 'Article',
    headline: d.question ?? d.title,
    description: d.answer,
    inLanguage: lang === 'pt' ? 'pt-BR' : 'en',
    datePublished: d.updated,
    dateModified: d.updated,
    mainEntityOfPage: url,
    author: { '@type': 'Person', name: 'Enzo Vaccaro' },
    publisher: { '@id': ORG_ID },
  };
}

export function caseSchema(d: { title: string; answer: string; sector: string }) {
  return {
    '@type': 'CreativeWork',
    name: d.title,
    abstract: d.answer,
    about: d.sector,
    creator: { '@id': ORG_ID },
  };
}
