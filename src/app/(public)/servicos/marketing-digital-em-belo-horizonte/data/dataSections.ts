import { Briefcase, CandlestickChartIcon, ChartBar, Clock, DollarSign, HandCoins, Heart, Lightbulb, Magnet, NotebookText, Shield, SquarePower, Users2, Wand } from "lucide-react";
import robotHero from '@/app/assets/images/Home/robotHero.webp';
import { FaMoneyBill } from "react-icons/fa";

// Dados da oferta principal
export const dataGreatOffer = {
  title: "Transforme sua empresa com estratégias de Marketing Digital",
  decription: "Oferecemos soluções completas de marketing digital em Belo Horizonte: SEO, mídia paga, redes sociais, e-mail marketing e mais. Potencialize sua presença online e alcance mais clientes.",
  items: [
    {
      icon: Users2,
      value: "15K",
      label: "Novos Clientes"
    },
    {
      icon: Heart,
      value: "90%",
      label: "Maior Engajamento"
    },
    {
      icon: HandCoins,
      value: "8K",
      label: "Aumento nas Vendas"
    }
  ]
};

// Notícias
export const news = [
  {
    title: "Como o marketing digital está mudando o cenário empresarial em BH",
    description: "Empresas de Belo Horizonte estão utilizando estratégias de marketing digital para alcançar um público mais amplo e aumentar suas vendas.",
    font: "Jornal O Tempo",
    link: "https://www.otempo.com.br/economia/2024/10/27/marketing-digital-em-bh",
    img: robotHero
  },
  {
    title: "O impacto das redes sociais no marketing digital",
    description: "Estudo revela que empresas que investem em redes sociais veem aumento no engajamento e nas conversões.",
    font: "Site G1",
    link: "https://g1.globo.com/economia/noticia/2024/11/01/redes-sociais-marketing.ghtml",
    img: robotHero
  },
  {
    title: "Como o SEO pode aumentar sua visibilidade no Google",
    description: "A otimização para mecanismos de busca (SEO) é uma das ferramentas mais eficazes para aumentar a visibilidade online de empresas.",
    font: "Jornal Diario do Comércio",
    link: "https://diariodocomercio.com.br/negocios/seo-em-bh/",
    img: robotHero
  }
];

// Serviços de Marketing Digital
export const dataPlataforms = [
  {
    title: "SEO - Otimização para Buscas",
    description: `Melhore o posicionamento do seu site nos motores de busca e aumente a visibilidade online da sua empresa.`,
    img: robotHero,
    alt: "SEO"
  },
  {
    title: "Publicidade Paga (Google Ads / Facebook Ads)",
    description: `Crie campanhas pagas altamente eficazes para alcançar um público segmentado e gerar mais vendas.`,
    img: robotHero,
    alt: "Publicidade Paga"
  },
  {
    title: "Gestão de Redes Sociais",
    description: `Gerenciamos suas redes sociais de maneira estratégica para aumentar o engajamento e a interação com seu público.`,
    img: robotHero,
    alt: "Gestão de Redes Sociais"
  },
  {
    title: "E-mail Marketing",
    description: `Desenvolvemos campanhas de e-mail marketing personalizadas para fidelizar clientes e aumentar suas conversões.`,
    img: robotHero,
    alt: "E-mail Marketing"
  }
];

// Como funciona o processo de marketing digital
export const dataHowItWorks = {
  title: "Como Funciona o Processo de Marketing Digital",
  description: "Criamos estratégias de marketing digital sob medida para sua empresa, com foco em resultados reais e medição de desempenho.",
  steps: [
    {
      titulo: 'Pesquisa e Planejamento',
      descricao: 'Analisamos seu mercado, concorrência e público-alvo para planejar a melhor estratégia.',
      icon: CandlestickChartIcon
    },
    {
      titulo: 'Criação de Conteúdo',
      descricao: 'Desenvolvemos conteúdo de alta qualidade e relevante para sua audiência.',
      icon: NotebookText
    },
    {
      titulo: 'Execução de Campanhas',
      descricao: 'Lançamos campanhas de mídia paga, SEO e redes sociais para atingir seus objetivos.',
      icon: SquarePower
    },
    {
      titulo: 'Análise de Resultados',
      descricao: 'Monitoramos os resultados das campanhas e ajustamos as estratégias para maximizar o retorno sobre investimento.',
      icon: Wand
    }
  ]
};

// Benefícios do Marketing Digital
export const dataBeneficies = {
  title: "Por que investir em Marketing Digital para sua empresa?",
  description: "O marketing digital permite alcançar um público mais amplo, aumentar a visibilidade da sua marca e gerar mais vendas.",
  beneficies: [
    {
      title: "Visibilidade",
      description: "Aumente sua visibilidade online e seja encontrado por mais clientes.",
      icon: Briefcase
    },
    {
      title: "Custo-Benefício",
      description: "Estratégias eficientes e de baixo custo em comparação com métodos tradicionais de publicidade.",
      icon: DollarSign
    },
    {
      title: "Engajamento",
      description: "Melhore a interação com seus clientes e aumente o engajamento nas redes sociais e e-mails.",
      icon: Heart
    },
    {
      title: "Resultados Mensuráveis",
      description: "Acompanhe e meça os resultados das suas campanhas em tempo real.",
      icon: ChartBar
    },
    {
      title: "Segmentação Precisa",
      description: "Alcance seu público-alvo de forma precisa, segmentando campanhas por interesse, comportamento e demografia.",
      icon: Magnet
    },
    {
      title: "Escalabilidade",
      description: "Aumente suas campanhas de marketing conforme seu negócio cresce, sem limites geográficos.",
      icon: Lightbulb
    }
  ]
};

// Serviços entregues
export const dataDelivered = {
  title: "Serviços de Marketing Digital",
  description: "Oferecemos uma gama completa de serviços de marketing digital para empresas de Belo Horizonte e região.",
  items: [
    {
      title: "SEO (Otimização para Buscas)",
      popular: 0,
      price: 1500,
      description: "Melhore o posicionamento do seu site no Google e aumente a visibilidade da sua marca.",
      buttonText: "Solicitar orçamento",
      benefitList: [
        "Análise de palavras-chave",
        "Estratégias de link building",
        "Otimização on-page e off-page",
        "Relatórios de desempenho",
        "Aumento no tráfego orgânico"
      ]
    },
    {
      title: "Publicidade Paga (Google Ads / Facebook Ads)",
      popular: 0,
      price: 2500,
      description: "Criação de campanhas pagas para Google e Facebook, com foco em conversões e ROI.",
      buttonText: "Solicitar orçamento",
      benefitList: [
        "Segmentação precisa",
        "Aumento de tráfego qualificado",
        "Campanhas otimizadas",
        "Relatórios detalhados",
        "Maximização do retorno"
      ]
    },
    {
      title: "Gestão de Redes Sociais",
      popular: 0,
      price: 1200,
      description: "Gestão estratégica de suas redes sociais, com criação de conteúdo e monitoramento de resultados.",
      buttonText: "Solicitar orçamento",
      benefitList: [
        "Gestão de Facebook, Instagram, LinkedIn",
        "Planejamento de conteúdo",
        "Aumento de seguidores e engajamento",
        "Análises e relatórios mensais",
        "Atendimento a clientes e interações"
      ]
    },
    {
      title: "E-mail Marketing",
      popular: 0,
      price: 1000,
      description: "Criação de campanhas de e-mail marketing que fidelizam clientes e aumentam as vendas.",
      buttonText: "Solicitar orçamento",
      benefitList: [
        "Design de e-mails responsivos",
        "Segmentação de listas",
        "Campanhas automatizadas",
        "Análises de desempenho",
        "Aumento de conversões"
      ]
    }
  ]
};

// Depoimentos
export const dataTestimonials = {
  title: "O que nossos clientes dizem",
  description: "Depoimentos reais de clientes satisfeitos com as estratégias de marketing digital implementadas em suas empresas.",
  items: [
    {
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Carla Silva",
      userName: "@carlassilva_",
      comment: "Nosso tráfego orgânico aumentou em 60% após a otimização de SEO. A equipe é muito profissional e competente!",
    },
    {
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Rafael Oliveira",
      userName: "@rafael_0live1rabh",
      comment: "A gestão das nossas redes sociais foi impecável, tivemos um aumento significativo no engajamento.",
    },
    {
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      name: "Ana Deitel",
      userName: "@anadeitel_",
      comment: "As campanhas de Google Ads nos trouxeram um retorno incrível. Nunca vendemos tanto!",
    },
    {
      image: "https://randomuser.me/api/portraits/men/41.jpg",
      name: "Thiago Pereira",
      userName: "@othiago_pereiraa",
      comment: "As estratégias de e-mail marketing realmente fizeram a diferença nas nossas conversões. Super recomendo!",
    },
    {
      image: "https://randomuser.me/api/portraits/women/30.jpg",
      name: "Luciana Corina",
      userName: "@luciana.corina",
      comment: "As campanhas de SEO e redes sociais ajudaram nossa empresa a se destacar no mercado.",
    },
    {
      image: "https://randomuser.me/api/portraits/men/10.jpg",
      name: "Eduardo Toves",
      userName: "@eduardo_toves",
      comment: "Excelente atendimento e resultados acima das expectativas. As estratégias de marketing digital são eficazes!",
    }
  ]
};

// Perguntas Frequentes
export const dataFaqs = {
  title: "Perguntas Frequentes sobre Marketing Digital",
  items: [
    {
      pergunta: "O que é marketing digital?",
      resposta: "Marketing digital é o conjunto de estratégias online usadas para promover produtos ou serviços, incluindo SEO, publicidade paga, redes sociais e e-mail marketing."
    },
    {
      pergunta: "Quanto tempo leva para ver os resultados do marketing digital?",
      resposta: "O tempo varia conforme a estratégia, mas em média os resultados podem ser vistos entre 30 a 90 dias, dependendo do tipo de campanha."
    },
    {
      pergunta: "O marketing digital funciona para todas as empresas?",
      resposta: "Sim, qualquer tipo de empresa pode se beneficiar do marketing digital, desde pequenas empresas até grandes corporações."
    },
    {
      pergunta: "Como posso medir o sucesso das minhas campanhas de marketing?",
      resposta: "Utilizamos ferramentas de análise para medir tráfego, conversões, ROI e outros KPIs importantes."
    },
    {
      pergunta: "O que é SEO e como ele pode beneficiar minha empresa?",
      resposta: "SEO é a otimização do seu site para aparecer nas primeiras posições do Google, o que aumenta a visibilidade e atrai mais visitantes para o seu site."
    },
    {
      pergunta: "Quais são as vantagens de usar redes sociais para minha empresa?",
      resposta: "As redes sociais permitem criar uma conexão direta com seus clientes, aumentar a interação e promover sua marca de forma criativa e envolvente."
    }
  ]
};

export const dataTimer= {
  title: "teste titulo",
  buttonText:"Solicitar Consultoria",
  numberHighlight:"3",
  labelNumber:"Vagas",
  callToAction:"Entre em contato agora e solicite sua vaga",
  miniLabel:"Consultória Gratuita."

}