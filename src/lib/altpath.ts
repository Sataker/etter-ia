import { getCollection } from 'astro:content';
import { SEG } from './routes';
import type { Lang } from './site';

type SegKey = keyof (typeof SEG)['pt'];
const COLLECTION_KEYS = ['services', 'industries', 'cases', 'guides'] as const;
type CollectionKey = (typeof COLLECTION_KEYS)[number];

/** Nome do arquivo sem a pasta de idioma — é o que liga a versão PT à EN. */
function fileKey(id: string): string {
  return id.split('/').slice(1).join('/');
}

/**
 * Traduz um caminho de um idioma para o outro.
 *
 * Não basta trocar o prefixo: os segmentos mudam (`guias` → `guides`) e os slugs
 * também. O par entre idiomas é o nome do arquivo, não o slug.
 * Caminho desconhecido cai na home do outro idioma, nunca num 404.
 */
export async function altPath(lang: Lang, bare: string): Promise<string> {
  const other: Lang = lang === 'pt' ? 'en' : 'pt';
  if (!bare) return '';

  const [seg, slug] = bare.split('/');
  const key = (Object.keys(SEG[lang]) as SegKey[]).find((k) => SEG[lang][k] === seg);
  if (!key) return '';

  const otherSeg = SEG[other][key];
  if (!slug || !COLLECTION_KEYS.includes(key as CollectionKey)) return otherSeg;

  const entries = await getCollection(key as CollectionKey);
  const current = entries.find((e) => e.data.lang === lang && e.data.slug === slug);
  if (!current) return otherSeg;

  const twin = entries.find((e) => e.data.lang === other && fileKey(e.id) === fileKey(current.id));
  return twin ? `${otherSeg}/${twin.data.slug}` : otherSeg;
}
