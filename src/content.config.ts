import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * IDs precisam incluir a pasta do idioma. Sem isso, o campo `slug` do
 * frontmatter vira o id e o arquivo EN sobrescreve o PT de mesmo slug.
 */
const byLang = (base: string) =>
  glob({ pattern: '**/*.md', base, generateId: ({ entry }) => entry.replace(/\.md$/, '') });

const faq = z
  .array(z.object({ q: z.string(), a: z.string() }))
  .default([]);

const common = {
  lang: z.enum(['pt', 'en']),
  slug: z.string(),
  title: z.string(),
  /** <title> da página — formato "serviço + qualificador", não slogan. */
  seoTitle: z.string(),
  description: z.string(),
  /** Resposta de 2-3 frases que um motor generativo pode citar inteira. */
  answer: z.string(),
  updated: z.string(),
  faq,
};

const services = defineCollection({
  loader: byLang('./src/content/services'),
  schema: z.object({
    ...common,
    order: z.number(),
    featured: z.boolean().default(false),
    summary: z.string(),
    bullets: z.array(z.string()),
    deliverables: z.array(z.string()).default([]),
  }),
});

const industries = defineCollection({
  loader: byLang('./src/content/industries'),
  schema: z.object({
    ...common,
    order: z.number(),
    audience: z.string(),
    pains: z.array(z.string()),
    solutions: z.array(z.string()),
    caseRef: z.string().optional(),
  }),
});

const cases = defineCollection({
  loader: byLang('./src/content/cases'),
  schema: z.object({
    ...common,
    order: z.number(),
    sector: z.string(),
    kind: z.string(),
    metrics: z.array(z.object({ value: z.string(), label: z.string() })),
  }),
});

const guides = defineCollection({
  loader: byLang('./src/content/guides'),
  schema: z.object({
    ...common,
    order: z.number(),
    /** Pergunta literal que a pessoa digita na IA ou no Google. */
    question: z.string(),
    readingTime: z.string(),
  }),
});

export const collections = { services, industries, cases, guides };
