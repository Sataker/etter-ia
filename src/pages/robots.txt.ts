import type { APIRoute } from 'astro';

/**
 * Crawlers de IA liberados de propósito: sem isso o conteúdo não entra em
 * resposta de ChatGPT, Claude, Perplexity ou AI Overviews.
 */
const AI_AGENTS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'Bingbot',
  'meta-externalagent',
  'cohere-ai',
  'YouBot',
];

export const GET: APIRoute = ({ site }) => {
  const base = site?.href.replace(/\/$/, '') ?? 'https://etter.app.br';
  const body = [
    'User-agent: *',
    'Allow: /',
    '',
    ...AI_AGENTS.flatMap((a) => [`User-agent: ${a}`, 'Allow: /', '']),
    `Sitemap: ${base}/sitemap-index.xml`,
    `# Resumo legível por máquina: ${base}/llms.txt`,
    '',
  ].join('\n');

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
