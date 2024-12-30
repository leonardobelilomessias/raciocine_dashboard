import { Briefcase, CandlestickChartIcon, ChartBar, Clock, DollarSign, HandCoins, Heart, Lightbulb, Magnet, NotebookText, Shield, SquarePower, Users2, Wand } from "lucide-react";
import robotHero from '@/app/assets/images/Home/robotHero.webp';
import { FaMoneyBill } from "react-icons/fa";

// Dados da oferta principal
export const dataGreatOffer = {
  title: "Aumente sua Visibilidade Online com SEO em Belo Horizonte",
  decription: "Oferecemos serviços completos de SEO para empresas em Belo Horizonte. Aumente o tráfego orgânico, melhore seu posicionamento no Google e conquiste mais clientes.",
  items: [
    {
      icon: Users2,
      value: "30K",
      label: "Mais Visitas"
    },
    {
      icon: Heart,
      value: "80%",
      label: "Maior Engajamento"
    },
    {
      icon: HandCoins,
      value: "10K",
      label: "Mais Conversões"
    }
  ]
};

// Notícias
export const news = [
  {
    title: "Como o SEO pode transformar o desempenho das empresas em BH",
    description: "Estudo revela que empresas de Belo Horizonte que investem em SEO aumentam significativamente sua visibilidade no Google.",
    font: "Jornal O Tempo",
    link: "https://www.otempo.com.br/economia/2024/11/15/seo-em-bh-transforma-negocios",
    img: robotHero
  },
  {
    title: "Google atualiza algoritmo: impacto nas estratégias de SEO",
    description: "Entenda como as últimas atualizações do Google afetam as estratégias de SEO das empresas.",
    font: "Site G1",
    link: "https://g1.globo.com/tecnologia/2024/11/10/google-algoritmo-seo.ghtml",
    img: robotHero
  },
  {
    title: "SEO é a chave para o sucesso digital das empresas de BH",
    description: "A otimização de sites é uma das formas mais eficazes de atrair mais clientes para sua empresa em Belo Horizonte.",
    font: "Jornal Diario do Comércio",
    link: "https://diariodocomercio.com.br/negocios/seo-em-bh-aumento-de-visibilidade/",
    img: robotHero
  }
];

// Serviços de SEO
export const dataPlataforms = [
  {
    title: "SEO On-Page",
    description: `Otimização do conteúdo e estrutura do seu site para melhorar o ranking nos motores de busca.`,
    img: robotHero,
    alt: "SEO On-Page"
  },
  {
    title: "SEO Off-Page",
    description: `Estratégias externas para melhorar a autoridade do seu site, como backlinks e marketing de conteúdo.`,
    img: robotHero,
    alt: "SEO Off-Page"
  },
  {
    title: "SEO Local",
    description: `Aumente sua visibilidade em buscas locais, atraindo clientes da sua região, como Belo Horizonte.`,
    img: robotHero,
    alt: "SEO Local"
  }
];

// Como funciona o processo de SEO
export const dataHowItWorks = {
  title: "Como Funciona o Processo de SEO",
  description: "Nosso processo de SEO é estratégico e orientado a resultados, visando sempre a melhoria contínua e a obtenção de mais tráfego orgânico.",
  steps: [
    {
      titulo: 'Pesquisa de Palavras-chave',
      descricao: 'Identificamos as palavras-chave mais relevantes para seu negócio e público-alvo.',
      icon: CandlestickChartIcon
    },
    {
      titulo: 'Otimização On-Page',
      descricao: 'Realizamos a otimização do conteúdo, títulos, meta descrições, imagens e estrutura do site.',
      icon: NotebookText
    },
    {
      titulo: 'Construção de Backlinks',
      descricao: 'Desenvolvemos estratégias para criar backlinks de qualidade e melhorar a autoridade do seu site.',
      icon: SquarePower
    },
    {
      titulo: 'Análise e Monitoramento',
      descricao: 'Monitoramos os resultados das campanhas de SEO e ajustamos as estratégias conforme necessário.',
      icon: Wand
    }
  ]
};

// Benefícios do SEO
export const dataBeneficies = {
  title: "Por que investir em SEO para sua empresa?",
  description: "O SEO ajuda a melhorar o posicionamento do seu site nos resultados de busca, gerando mais tráfego qualificado e mais oportunidades de negócio.",
  beneficies: [
    {
      title: "Maior Visibilidade",
      description: "Apareça nas primeiras posições do Google e seja encontrado por mais clientes.",
      icon: Briefcase
    },
    {
      title: "Tráfego Orgânico",
      description: "Atraia visitantes sem custos com anúncios pagos, aumentando seu tráfego de forma sustentável.",
      icon: DollarSign
    },
    {
      title: "Credibilidade",
      description: "Sites bem posicionados no Google são mais confiáveis aos olhos dos usuários.",
      icon: Shield
    },
    {
      title: "Resultados a Longo Prazo",
      description: "Investir em SEO é uma estratégia de longo prazo que traz resultados contínuos.",
      icon: ChartBar
    },
    {
      title: "Concorrência",
      description: "Fique à frente da concorrência nas buscas e ganhe mais visibilidade em um mercado competitivo.",
      icon: Lightbulb
    },
    {
      title: "Otimização Local",
      description: "Melhore seu posicionamento em buscas locais, essencial para negócios que atendem clientes em Belo Horizonte.",
      icon: Magnet
    }
  ]
};

// Serviços entregues
export const dataDelivered = {
  title: "Serviços de SEO em Belo Horizonte",
  description: "Oferecemos serviços completos de SEO para empresas de Belo Horizonte, com foco em resultados duradouros e eficazes.",
  items: [
    {
      title: "SEO On-Page",
      popular: 0,
      price: 1200,
      description: "Otimização do conteúdo e estrutura do seu site para melhorar sua posição no Google.",
      buttonText: "Solicitar orçamento",
      benefitList: [
        "Otimização de conteúdo",
        "Melhoria de estrutura de URLs",
        "Ajustes em tags e meta descrições",
        "Melhoria da velocidade do site",
        "Análise e melhoria da experiência do usuário"
      ]
    },
    {
      title: "SEO Off-Page",
      popular: 0,
      price: 1500,
      description: "Estratégias externas de SEO, como backlinks e otimização de redes sociais, para aumentar a autoridade do seu site.",
      buttonText: "Solicitar orçamento",
      benefitList: [
        "Construção de backlinks de qualidade",
        "Melhoria da autoridade do domínio",
        "Marketing de conteúdo",
        "Promoção em redes sociais",
        "Campanhas de guest posting"
      ]
    },
    {
      title: "SEO Local",
      popular: 0,
      price: 1000,
      description: "Melhoria do posicionamento do seu site em buscas locais para atrair mais clientes de Belo Horizonte.",
      buttonText: "Solicitar orçamento",
      benefitList: [
        "Otimização para Google My Business",
        "Marketing local",
        "Posicionamento em mapas e diretórios",
        "Aumento da visibilidade local",
        "Otimização para pesquisas geolocalizadas"
      ]
    }
  ]
};

// Depoimentos
export const dataTestimonials = {
  title: "O que nossos clientes dizem",
  description: "Depoimentos de clientes satisfeitos com o aumento de visibilidade e tráfego após investir em SEO.",
  items: [
    {
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Carla Silva",
      userName: "@carlassilva_",
      comment: "Após otimizar nosso site com SEO, nossa visibilidade no Google aumentou muito. Já conseguimos aumentar as vendas!",
    },
    {
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Rafael Oliveira",
      userName: "@rafael_0live1rabh",
      comment: "O investimento em SEO foi essencial para o crescimento do nosso negócio. Hoje estamos na primeira página do Google!",
    },
    {
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      name: "Ana Deitel",
      userName: "@anadeitel_",
      comment: "A equipe fez um excelente trabalho com SEO, conseguimos atrair mais clientes de Belo Horizonte e aumentar as vendas!",
    },
    {
      image: "https://randomuser.me/api/portraits/men/41.jpg",
      name: "Thiago Pereira",
      userName: "@othiago_pereiraa",
      comment: "O SEO local foi a chave para nosso crescimento em Belo Horizonte. A presença local melhorou significativamente.",
    },
    {
      image: "https://randomuser.me/api/portraits/women/30.jpg",
      name: "Luciana Corina",
      userName: "@luciana.corina",
      comment: "Com o SEO, nosso site tem melhor posicionamento e mais tráfego, o que trouxe um ótimo retorno para nossa empresa!",
    },
    {
      image: "https://randomuser.me/api/portraits/men/10.jpg",
      name: "Eduardo Toves",
      userName: "@eduardo_toves",
      comment: "O trabalho de SEO foi impecável. Nossa empresa de Belo Horizonte nunca teve tantos visitantes no site!",
    }
  ]
};

// Perguntas Frequentes sobre SEO
export const dataFaqs = {
  title: "Perguntas Frequentes sobre SEO",
  items: [
    {
      pergunta: "O que é SEO?",
      resposta: "SEO (Search Engine Optimization) é o conjunto de estratégias usadas para melhorar o posicionamento de um site nos motores de busca, como o Google."
    },
    {
      pergunta: "Quanto tempo leva para ver os resultados do SEO?",
      resposta: "Os resultados de SEO podem levar entre 30 a 90 dias para aparecer, dependendo da competição e do tipo de otimização."
    },
    {
      pergunta: "O SEO é importante para pequenas empresas?",
      resposta: "Sim, o SEO é essencial para pequenas empresas, pois permite competir com grandes players em Belo Horizonte e em outros mercados locais."
    },
    {
      pergunta: "O que é SEO local?",
      resposta: "SEO local é a otimização de seu site para aparecer em resultados de busca relacionados à sua localização, como Belo Horizonte."
    },
    {
      pergunta: "Como posso saber se o SEO está funcionando?",
      resposta: "Utilizamos ferramentas de análise para monitorar o tráfego, rankings e conversões, ajustando as estratégias conforme necessário."
    },
    {
      pergunta: "SEO é uma estratégia de longo prazo?",
      resposta: "Sim, SEO é uma estratégia de longo prazo. Embora os resultados iniciais possam levar algum tempo, os benefícios duram mais do que a publicidade paga."
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
