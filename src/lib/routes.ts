import type { Lang } from './site';

/** Segmento de URL por idioma. PT usa termos que as pessoas buscam em português. */
export const SEG: Record<Lang, Record<'services' | 'industries' | 'cases' | 'guides' | 'about', string>> = {
  pt: { services: 'solucoes', industries: 'setores', cases: 'cases', guides: 'guias', about: 'sobre' },
  en: { services: 'services', industries: 'industries', cases: 'cases', guides: 'guides', about: 'about' },
};

export const LABEL: Record<Lang, Record<string, string>> = {
  pt: { services: 'Soluções', industries: 'Setores', cases: 'Cases', guides: 'Guias', about: 'Sobre' },
  en: { services: 'Services', industries: 'Industries', cases: 'Cases', guides: 'Guides', about: 'About' },
};
