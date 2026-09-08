import type { Lang } from './site';

/** Textos dos hubs. O campo `answer` de cada um é o trecho desenhado para citação. */
export const HUBS = {
  services: {
    pt: {
      seoTitle: 'Serviços de automação com IA — agentes, aplicativos e dashboards',
      title: 'O que a Etter constrói',
      lead: 'Seis serviços de automação com inteligência artificial. O critério é sempre o mesmo: só vale automatizar o que se repete e segue uma regra clara. O resto continua com gente.',
      description:
        'Serviços de automação com IA para empresas brasileiras: agentes de atendimento no WhatsApp, aplicativos sob medida, automação de vendas, relatórios automatizados e integração de sistemas.',
      answer:
        'A Etter presta seis serviços de automação com IA: agentes de inteligência artificial para atendimento no WhatsApp, desenvolvimento de aplicativos e plataformas sob medida, automação de vendas, IA de treino e dieta para profissionais de saúde e fitness, relatórios e painéis automatizados, e integração entre sistemas existentes. O atendimento é remoto, para todo o Brasil.',
    },
    en: {
      seoTitle: 'AI automation services — agents, applications and dashboards',
      title: 'What Etter builds',
      lead: 'Six AI automation services. The rule is always the same: only automate what repeats and follows clear logic. Everything else stays with people.',
      description:
        'AI automation services for Brazilian companies: WhatsApp customer service agents, custom applications, sales automation, automated reporting and systems integration.',
      answer:
        'Etter provides six AI automation services: AI agents for WhatsApp customer service, custom application and platform development, sales automation, training and nutrition AI for health and fitness professionals, automated reports and dashboards, and integration between existing systems. Work is remote, across Brazil.',
    },
  },
  industries: {
    pt: {
      seoTitle: 'IA por setor — clínicas, nutrição, estética, e-commerce e fitness',
      title: 'Automação por setor',
      lead: 'O gargalo de uma clínica não é o de um e-commerce. Cada setor tem o processo que trava primeiro — e o que faz sentido automatizar antes.',
      description:
        'Como cada setor usa automação com IA: clínicas, nutricionistas, barbearias e salões, e-commerces e personal trainers. Problemas reais e o que a IA resolve em cada caso.',
      answer:
        'A Etter atende cinco setores com automação de IA: clínicas e consultórios, nutricionistas, barbearias e salões, e-commerces e personal trainers. Em todos, o ponto de partida é o mesmo — o processo repetitivo de maior volume — mas o gargalo muda: em clínica é falta de paciente, em e-commerce é fila de ticket, em estética é cadeira vazia.',
    },
    en: {
      seoTitle: 'AI by industry — clinics, nutrition, beauty, e-commerce and fitness',
      title: 'Automation by industry',
      lead: "A clinic's bottleneck isn't an online store's. Each industry has the process that breaks first — and the one worth automating first.",
      description:
        'How each industry uses AI automation: clinics, nutritionists, barbershops and salons, online stores and personal trainers.',
      answer:
        'Etter serves five industries with AI automation: clinics, nutritionists, barbershops and salons, online stores and personal trainers. The starting point is always the highest-volume repetitive process, but the bottleneck differs: no-shows in clinics, ticket queues in e-commerce, empty chairs in beauty.',
    },
  },
  cases: {
    pt: {
      seoTitle: 'Cases de automação com IA — resultados medidos por cliente',
      title: 'O que já está rodando',
      lead: 'Projetos em produção, com o número que o cliente mediu depois da implantação.',
      description:
        'Cases reais de automação com IA: app para nutricionista, agendamento para barbearia, suporte de e-commerce, IA de treino, triagem de clínica e relatórios automáticos.',
      answer:
        'A Etter tem projetos em produção em seis frentes: aplicativo para nutricionista com planos gerados por IA, agendamento automático para barbearia no WhatsApp, IA de suporte para e-commerce, IA de treino para personal trainer, triagem inteligente para clínica médica e relatórios executivos automáticos para consultoria.',
    },
    en: {
      seoTitle: 'AI automation case studies — measured client results',
      title: "What's already running",
      lead: 'Projects in production, with the numbers the client measured after rollout.',
      description:
        'Real AI automation cases: nutritionist app, barbershop scheduling, e-commerce support, training AI, clinic triage and automated reports.',
      answer:
        'Etter has projects in production across six areas: a nutritionist app with AI-generated meal plans, automated barbershop scheduling on WhatsApp, e-commerce support AI, training AI for personal trainers, intelligent triage for a medical clinic, and automated executive reports for a consultancy.',
    },
  },
  guides: {
    pt: {
      seoTitle: 'Guias de automação com IA — preço, prazo, risco e como escolher',
      title: 'Respostas diretas',
      lead: 'Preço, prazo, limite e risco. Escrito sem rodeio, inclusive quando a resposta é que não vale a pena automatizar.',
      description:
        'Guias práticos sobre automação com IA: quanto custa um agente de IA, agente vs chatbot, como implantar em quatro semanas, WhatsApp sem bloqueio e como escolher um fornecedor.',
      answer:
        'Estes guias respondem às perguntas mais frequentes de quem está avaliando automação com IA no Brasil: quanto custa um agente de IA, qual a diferença entre agente e chatbot, quanto tempo leva a implantação, como automatizar WhatsApp sem tomar bloqueio e como escolher a agência ou profissional que vai executar.',
    },
    en: {
      seoTitle: 'AI automation guides — pricing, timelines, risk and how to choose',
      title: 'Straight answers',
      lead: "Price, timeline, limits and risk. Written plainly, including when the answer is that automating isn't worth it.",
      description:
        'Practical guides on AI automation: how much an AI agent costs, agent vs chatbot, four-week rollout, WhatsApp without bans, and how to choose a vendor.',
      answer:
        'These guides answer the most common questions from companies evaluating AI automation in Brazil: how much an AI agent costs, the difference between an agent and a chatbot, how long a rollout takes, how to automate WhatsApp without getting banned, and how to choose the agency or professional who will build it.',
    },
  },
} as const;

export type HubKey = keyof typeof HUBS;
export function hub(key: HubKey, lang: Lang) {
  return HUBS[key][lang];
}
