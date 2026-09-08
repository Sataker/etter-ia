export const SITE = {
  name: 'Etter IA',
  domain: 'etter.app.br',
  /** Endereço canônico. Precisa bater com o domínio primário na Vercel. */
  url: 'https://www.etter.app.br',
  founder: 'Enzo Vaccaro',
  email: 'enzo@etter.app.br',
  whatsapp: '5517997683220',
  founded: '2025',
  areaServed: 'BR',
} as const;

/** Link de WhatsApp com mensagem pré-preenchida por contexto. */
export function wa(message: string): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const WA_DEFAULT = {
  pt: wa('Olá Enzo! Vim pelo site da Etter e quero entender como a IA pode ajudar meu negócio.'),
  en: wa('Hi Enzo! I came from the Etter website and I want to understand how AI could help my business.'),
} as const;

export type Lang = 'pt' | 'en';

/** Prefixo de rota do idioma. PT é o default e não leva prefixo. */
export function localePath(lang: Lang, path = ''): string {
  const clean = path.replace(/^\/+/, '');
  const base = lang === 'pt' ? '' : `/${lang}`;
  return clean ? `${base}/${clean}` : base || '/';
}

/** Idioma a partir do primeiro segmento da URL. */
export function langFromUrl(url: URL): Lang {
  return url.pathname.split('/')[1] === 'en' ? 'en' : 'pt';
}

/** Caminho sem o prefixo de idioma — base para montar os hreflang. */
export function pathWithoutLocale(url: URL): string {
  const segments = url.pathname.split('/').filter(Boolean);
  if (segments[0] === 'en') segments.shift();
  return segments.join('/');
}
