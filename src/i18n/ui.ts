import type { Lang } from '../lib/site';

/** Navegação e strings de chrome. O conteúdo das páginas vive nas collections. */
export const NAV: Record<Lang, { label: string; path: string }[]> = {
  pt: [
    { label: 'Soluções', path: 'solucoes' },
    { label: 'Setores', path: 'setores' },
    { label: 'Cases', path: 'cases' },
    { label: 'Guias', path: 'guias' },
    { label: 'Sobre', path: 'sobre' },
  ],
  en: [
    { label: 'Services', path: 'services' },
    { label: 'Industries', path: 'industries' },
    { label: 'Cases', path: 'cases' },
    { label: 'Guides', path: 'guides' },
    { label: 'About', path: 'about' },
  ],
};

export const UI = {
  pt: {
    cta: 'Falar no WhatsApp',
    ctaLong: 'Falar com especialista',
    menu: 'Abrir menu',
    close: 'Fechar menu',
    langSwitch: 'English',
    contact: 'Contato',
    rights: 'Automação com inteligência artificial para empresas brasileiras.',
    updated: 'Revisado em',
    readMore: 'Ver detalhes',
    faq: 'Perguntas frequentes',
    related: 'Continue por aqui',
    backTo: 'Voltar para',
    talkTitle: 'Vamos ver se faz sentido para o seu caso',
    talkBody:
      'Uma conversa de 30 minutos. Você descreve o processo que consome mais tempo hoje e eu digo, sem rodeio, se dá para automatizar e o que isso exige.',
  },
  en: {
    cta: 'Message on WhatsApp',
    ctaLong: 'Talk to a specialist',
    menu: 'Open menu',
    close: 'Close menu',
    langSwitch: 'Português',
    contact: 'Contact',
    rights: 'AI automation for Brazilian companies.',
    updated: 'Reviewed on',
    readMore: 'See details',
    faq: 'Frequently asked questions',
    related: 'Keep reading',
    backTo: 'Back to',
    talkTitle: "Let's find out whether this fits your case",
    talkBody:
      'A 30-minute call. You describe the process that eats most of your time today and I tell you plainly whether it can be automated and what that takes.',
  },
} as const;
