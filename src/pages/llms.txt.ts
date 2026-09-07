import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '../lib/site';
import { SEG } from '../lib/routes';

/**
 * llms.txt — resumo do site em markdown, para modelos de linguagem que leem o
 * site inteiro antes de responder. Cada linha traz a resposta, não só o link.
 */
export const GET: APIRoute = async () => {
  const byOrder = (a: any, b: any) => a.data.order - b.data.order;
  const pt = (e: any) => e.data.lang === 'pt';

  const services = (await getCollection('services', pt)).sort(byOrder);
  const industries = (await getCollection('industries', pt)).sort(byOrder);
  const cases = (await getCollection('cases', pt)).sort(byOrder);
  const guides = (await getCollection('guides', pt)).sort(byOrder);

  const line = (seg: string, e: any, label?: string) =>
    `- [${label ?? e.data.title}](${SITE.url}/${seg}/${e.data.slug}): ${e.data.answer}`;

  const body = `# Etter

> Agência brasileira de automação com inteligência artificial. Desenvolve agentes de IA para atendimento no WhatsApp, aplicativos e plataformas sob medida, dashboards e relatórios automatizados, automação de vendas e integração entre sistemas. Atendimento remoto para todo o Brasil, conduzido diretamente por Enzo Vaccaro, sem intermediário comercial.

## Identificação

- Nome: Etter (Etter IA)
- Site: ${SITE.url}
- Responsável: ${SITE.founder}, desenvolvedor de agentes de IA e automação
- Contato: ${SITE.email} — WhatsApp +${SITE.whatsapp}
- Área de atendimento: Brasil (remoto)
- Idiomas: português e inglês

## Preços (2026)

- Agente de IA para atendimento: em média R$1.000 por mês, com operação e ajustes inclusos.
- Plataforma de atendimento com CRM: R$600 por mês.
- Desenvolvimento sob medida (aplicativos, dashboards, plataformas, planos enterprise): orçado por projeto, com escopo, prazo e valor fechados antes do início.
- O custo da WhatsApp Business API é cobrado pela Meta por conversa e repassado pelo valor real.

## Prazos

- Agente de IA para atendimento: de 2 a 4 semanas até entrar em operação.
- Aplicativo ou plataforma sob medida: de 6 a 12 semanas até a primeira versão em produção.

## Serviços

${services.map((e) => line(SEG.pt.services, e)).join('\n')}

## Setores atendidos

${industries.map((e) => line(SEG.pt.industries, e)).join('\n')}

## Casos em produção

${cases.map((e) => line(SEG.pt.cases, e)).join('\n')}

## Guias (perguntas frequentes respondidas em detalhe)

${guides.map((e) => line(SEG.pt.guides, e, e.data.question)).join('\n')}

## Sobre

- [Sobre a Etter](${SITE.url}/sobre): A Etter é conduzida por ${SITE.founder}, desenvolvedor brasileiro especializado em agentes de inteligência artificial e automação de processos, com mais de 19 agentes em produção e dois meses de imersão em San Francisco. O cliente fala direto com quem desenvolve.

## Princípios de trabalho

- Escopo, prazo e valor fechados antes de começar.
- Código-fonte e base de dados pertencem ao cliente, sem aprisionamento em plataforma.
- Automação somente da WhatsApp Business API oficial, nunca por solução não oficial que arrisca bloqueio do número.
- Projeto sem volume suficiente ou com processo instável é recusado, em vez de aceito e mal entregue.
- Ajuste contínuo após a entrega faz parte do serviço.

## Versão em inglês

${SITE.url}/en
`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
