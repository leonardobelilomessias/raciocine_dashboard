import { Briefcase, CandlestickChartIcon, ChartBar, Clock, DollarSign, HandCoins, Heart, Lightbulb, Magnet, NotebookText, Shield, SquarePower, Users2, Wand } from "lucide-react";
import robotHero from '@/app/assets/images/Home/robotHero.webp';
import { FaMoneyBill } from "react-icons/fa";

// Dados da oferta principal
export const dataGreatOffer = {
  title: "Produção de Vídeos Profissionais em Belo Horizonte",
  decription: "Destaque sua marca com vídeos criativos e impactantes. Produção de vídeos corporativos, publicitários e eventos, com qualidade cinematográfica.",
  items: [
    {
      icon: Users2,
      value: "5K",
      label: "Clientes Satisfeitos"
    },
    {
      icon: Heart,
      value: "80%",
      label: "Mais Engajamento"
    },
    {
      icon: HandCoins,
      value: "3K",
      label: "Novas Oportunidades"
    }
  ]
};

// Notícias
export const news = [
  {
    title: "A produção de vídeos em BH cresce como ferramenta para marketing digital",
    description: "Empresas de Belo Horizonte estão usando vídeos como estratégia eficaz para engajamento e conversão de clientes.",
    font: "Jornal O Tempo",
    link: "https://www.otempo.com.br/economia/2024/9/27/filmmaker-bh-mercado",
    img: robotHero
  },
  {
    title: "Vídeos publicitários se destacam nas campanhas de marketing digital",
    description: "Estudo mostra que empresas que utilizam vídeos em suas campanhas aumentam em até 50% o engajamento nas redes sociais.",
    font: "Site G1",
    link: "https://g1.globo.com/economia/noticia/2024/12/14/video-marketing-engajamento.ghtml",
    img: robotHero
  },
  {
    title: "Como a produção de vídeos para empresas em BH está alavancando vendas",
    description: "Empresas locais estão descobrindo o poder do vídeo marketing para impulsionar suas vendas e aumentar a presença digital.",
    font: "Jornal Diario do Comércio",
    link: "https://diariodocomercio.com.br/negocios/producao-de-video-alavanca-vendas-em-bh/",
    img: robotHero
  }
];

// Serviços de filmmaking
export const dataPlataforms = [
  {
    title: "Vídeos Institucionais",
    description: `Criamos vídeos institucionais que transmitem os valores da sua empresa de forma profissional e impactante.`,
    img: robotHero,
    alt: "Vídeos Institucionais"
  },
  {
    title: "Vídeos Publicitários",
    description: `Produzimos vídeos publicitários criativos para atrair, engajar e converter seu público-alvo.`,
    img: robotHero,
    alt: "Vídeos Publicitários"
  },
  {
    title: "Cobertura de Eventos",
    description: `Oferecemos cobertura completa de eventos, como conferências, casamentos, e lançamentos, com qualidade cinematográfica.`,
    img: robotHero,
    alt: "Cobertura de Eventos"
  },
  {
    title: "Documentários",
    description: `Desenvolvemos documentários impactantes, contando histórias reais que emocionam e informam.`,
    img: robotHero,
    alt: "Documentários"
  }
];

// Como funciona o processo de produção
export const dataHowItWorks = {
  title: "Como Funciona o Processo de Produção de Vídeos",
  description: "A produção de vídeos é uma jornada criativa, e garantimos que cada etapa seja bem planejada para entregar resultados excepcionais.",
  steps: [
    {
      titulo: 'Briefing e Planejamento',
      descricao: 'Definimos o objetivo do vídeo, a mensagem principal e o público-alvo.',
      icon: CandlestickChartIcon
    },
    {
      titulo: 'Roteirização',
      descricao: 'Elaboramos um roteiro criativo e estratégico para o vídeo, alinhado com os objetivos da sua marca.',
      icon: NotebookText
    },
    {
      titulo: 'Produção e Filmagem',
      descricao: 'Realizamos a gravação com equipamentos de alta qualidade, garantindo a excelência visual e sonora.',
      icon: SquarePower
    },
    {
      titulo: 'Edição e Pós-Produção',
      descricao: 'Finalizamos o vídeo com edição profissional, efeitos especiais, e ajustes sonoros e visuais.',
      icon: Wand
    }
  ]
};

// Benefícios do vídeo profissional
export const dataBeneficies = {
  title: "Por que investir em vídeos profissionais para sua empresa?",
  description: "Vídeos bem produzidos são uma poderosa ferramenta de marketing, aumentando o engajamento e gerando resultados reais para o seu negócio.",
  beneficies: [
    {
      title: "Especialização",
      description: "Equipe especializada em filmagem e edição de vídeos para diversas plataformas.",
      icon: Briefcase
    },
    {
      title: "Economia de Tempo",
      description: "Cuidamos de todo o processo de produção, desde o planejamento até a entrega do vídeo final.",
      icon: Clock
    },
    {
      title: "Credibilidade",
      description: "Um vídeo de qualidade transmite confiança e profissionalismo para sua marca.",
      icon: Shield
    },
    {
      title: "Resultados Visíveis",
      description: "Aumente o engajamento, as vendas e o reconhecimento de marca com vídeos impactantes.",
      icon: ChartBar
    },
    {
      title: "Criatividade",
      description: "Desenvolvemos ideias criativas que fazem seu vídeo se destacar da concorrência.",
      icon: Lightbulb
    },
    {
      title: "SEO e Visibilidade",
      description: "Otimizamos seus vídeos para SEO, garantindo visibilidade em plataformas de busca e redes sociais.",
      icon: Magnet
    }
  ]
};

// Serviços entregues
export const dataDelivered = {
  title: "Serviços de Produção de Vídeos",
  description: "Oferecemos uma gama completa de serviços de produção de vídeos para empresas de Belo Horizonte e além.",
  items: [
    {
      title: "Vídeos Institucionais",
      popular: 0,
      price: 3000,
      description: "Vídeos institucionais que apresentam sua empresa, valores e diferenciais.",
      buttonText: "Solicitar orçamento",
      benefitList: [
        "Qualidade cinematográfica",
        "Roteiro criativo",
        "Edição profissional",
        "Ideal para apresentações e sites",
        "Vídeo de impacto"
      ]
    },
    {
      title: "Vídeos Publicitários",
      popular: 0,
      price: 5000,
      description: "Vídeos publicitários criativos para campanhas de marketing e redes sociais.",
      buttonText: "Solicitar orçamento",
      benefitList: [
        "Atração de público",
        "Engajamento nas redes sociais",
        "Alta taxa de conversão",
        "Vídeos curtos e impactantes",
        "Personalização total"
      ]
    },
    {
      title: "Cobertura de Eventos",
      popular: 0,
      price: 4000,
      description: "Cobertura completa de eventos, com filmagem de alta qualidade e edição profissional.",
      buttonText: "Solicitar orçamento",
      benefitList: [
        "Cobertura de eventos corporativos, sociais e culturais",
        "Alta qualidade de áudio e vídeo",
        "Vídeos editados para destacar momentos especiais",
        "Entrega rápida",
        "Produção completa"
      ]
    },
    {
      title: "Documentários",
      popular: 0,
      price: 7000,
      description: "Documentários criados para contar histórias inspiradoras e emocionantes de forma profissional.",
      buttonText: "Solicitar orçamento",
      benefitList: [
        "Pesquisa e planejamento",
        "Roteiro e filmagem",
        "Edição profissional",
        "Estilo cinematográfico",
        "Ideal para apresentar sua história"
      ]
    }
  ]
};

// Depoimentos
export const dataTestimonials = {
  title: "O que nossos clientes dizem",
  description: "Depoimentos reais de clientes satisfeitos com os vídeos que produzimos para suas empresas e eventos.",
  items: [
    {
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Carla Silva",
      userName: "@carlassilva_",
      comment: "O vídeo institucional ficou perfeito! Transmitiu exatamente a mensagem que queríamos passar para os nossos clientes.",
    },
    {
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Rafael Oliveira",
      userName: "@rafael_0live1rabh",
      comment: "A cobertura do nosso evento foi incrível! A equipe fez um trabalho impecável e o vídeo final ficou sensacional.",
    },
    {
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      name: "Ana Deitel",
      userName: "@anadeitel_",
      comment: "Os vídeos publicitários para as redes sociais aumentaram nosso engajamento em mais de 50%. Foi um ótimo investimento!",
    },
    {
      image: "https://randomuser.me/api/portraits/men/41.jpg",
      name: "Thiago Pereira",
      userName: "@othiago_pereiraa",
      comment: "A produção do documentário foi um sucesso. A equipe entendeu exatamente o que queríamos e entregou um trabalho incrível!",
    },
    {
      image: "https://randomuser.me/api/portraits/women/30.jpg",
      name: "Luciana Corina",
      userName: "@luciana.corina",
      comment: "Adoramos a produção do vídeo institucional. A qualidade de filmagem e edição ficou acima das nossas expectativas!",
    },
    {
      image: "https://randomuser.me/api/portraits/men/10.jpg",
      name: "Eduardo Toves",
      userName: "@eduardo_toves",
      comment: "A equipe foi superprofissional e o vídeo publicitário gerou mais vendas para nossa empresa. Totalmente recomendado!",
    }
  ]
};

// Perguntas Frequentes
export const dataFaqs = {
  title: "Perguntas Frequentes sobre Produção de Vídeos",
  items: [
    {
      pergunta: "O que é a produção de vídeos para empresas?",
      resposta: "É a criação de vídeos corporativos, publicitários, e outros tipos de conteúdo visual para promover sua marca, produtos ou serviços."
    },
    {
      pergunta: "Qual o prazo para produção de um vídeo?",
      resposta: "O prazo varia conforme a complexidade do projeto, mas em geral, a produção pode levar de 10 a 30 dias."
    },
    {
      pergunta: "Quais tipos de vídeos vocês produzem?",
      resposta: "Produzimos vídeos institucionais, publicitários, cobertura de eventos e documentários, sempre com alta qualidade de produção."
    },
    {
      pergunta: "Vocês atendem empresas em Belo Horizonte?",
      resposta: "Sim, atendemos empresas de Belo Horizonte e região, com foco em filmes e vídeos impactantes para o mercado local."
    },
    {
      pergunta: "Posso solicitar ajustes após a entrega do vídeo?",
      resposta: "Sim, oferecemos revisões para garantir que o vídeo final atenda todas as suas expectativas."
    },
    {
      pergunta: "Qual a importância do vídeo marketing?",
      resposta: "O vídeo marketing é uma das formas mais eficazes de alcançar e engajar seu público, aumentando a conversão e fidelidade de clientes."
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