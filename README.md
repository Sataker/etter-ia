# Etter — site

Site institucional da Etter (etter.app.br). Astro 7 + Tailwind 4, gerado 100% estático,
sem banco de dados. Conteúdo em Content Collections (`src/content/`), PT-BR e EN.

## Rodar

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
npm run preview
```

## Estrutura

```
src/
├── content/{services,industries,cases,guides}/{pt,en}/*.md   # conteúdo
├── pages/                # rotas PT na raiz, EN sob /en
├── components/           # Home, ShiftLog (hero), artigos, listas
├── layouts/Base.astro    # <head>, canonical, hreflang, JSON-LD
├── lib/                  # site, rotas, hubs, schema.org
└── styles/global.css     # tokens de design (Tailwind v4 CSS-first)
```

## Como adicionar conteúdo

Crie um `.md` na pasta da coleção e do idioma. O frontmatter exige `answer`: uma
resposta de 2-3 frases, autossuficiente, que motores generativos possam citar
inteira. Ela aparece no topo da página e entra no `/llms.txt`.

Textos com `:` no meio precisam de aspas no YAML.

## SEO / GEO

- `/llms.txt` — resumo do site para modelos de linguagem, gerado das collections.
- `/robots.txt` — libera explicitamente GPTBot, ClaudeBot, PerplexityBot e afins.
- JSON-LD por página: ProfessionalService, FAQPage, Service, Article, BreadcrumbList.
- hreflang cruzado pt-BR/en + x-default em todas as rotas.

Ao mudar preço ou prazo, atualize também `src/pages/llms.txt.ts` e o guia
`content/guides/*/quanto-custa-agente-de-ia.md` — são as fontes que a IA cita.

## Deploy

Push na branch conectada na Vercel. Build: `npm run build`, saída `dist/`.
