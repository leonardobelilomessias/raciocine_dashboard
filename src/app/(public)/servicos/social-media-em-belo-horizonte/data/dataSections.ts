import { Briefcase, CandlestickChartIcon, ChartBar, Clock, DollarSign, HandCoins, Heart, Lightbulb, Magnet, NotebookText, Shield, SquarePower, Users2, Wand } from "lucide-react";
import robotHero from '@/app/assets/images/Home/robotHero.webp';
import { FaMoneyBill } from "react-icons/fa";

// Dados da oferta principal
export const dataGreatOffer = {
  title: "Impulsione sua Marca com Social Media em Belo Horizonte",
  decription: "Oferecemos serviços especializados em Social Media para empresas de Belo Horizonte. Conquiste mais seguidores, aumente o engajamento e converta fãs em clientes.",
  items: [
    {
      icon: Users2,
      value: "20K",
      label: "Mais Seguidores"
    },
    {
      icon: Heart,
      value: "70%",
      label: "Aumento no Engajamento"
    },
    {
      icon: HandCoins,
      value: "12K",
      label: "Novas Conversões"
    }
  ]
};

// Notícias
export const news = [
  {
    title: "Como o Marketing nas Redes Sociais está Transformando Negócios em BH",
    description: "Empresas de Belo Horizonte estão se destacando ao utilizar estratégias eficazes de Social Media para engajar mais clientes.",
    font: "Jornal O Tempo",
    link: "https://www.otempo.com.br/economia/2024/11/15/marketing-nas-redes-sociais-em-bh",
    img: robotHero
  },
  {
    title: "Redes Sociais Como Ferramenta de Crescimento: Como Empresas de BH Estão Aumentando suas Vendas",
    description: "A utilização de estratégias de social media para aumentar a visibilidade online tem sido a chave para o sucesso de muitos empreendedores de Belo Horizonte.",
    font: "Site G1",
    link: "https://g1.globo.com/negocios/2024/11/10/redes-sociais-para-aumento-de-vendas.ghtml",
    img: robotHero
  },
  {
    title: "Estudo Revela que 75% das Empresas de BH Apostam em Marketing de Influência",
    description: "Entenda como o marketing de influência nas redes sociais está ajudando a aumentar a relevância de marcas em Belo Horizonte.",
    font: "Jornal Diario do Comércio",
    link: "https://diariodocomercio.com.br/negocios/social-media-bh/",
    img: robotHero
  }
];

// Serviços de Social Media
export const dataPlataforms = [
  {
    title: "Gestão de Redes Sociais",
    description: `Gerenciamos suas redes sociais com estratégias personalizadas, criando conteúdo atrativo e relevante para sua audiência.`,
    img: robotHero,
    alt: "Gestão de Redes Sociais"
  },
  {
    title: "Campanhas Pagas (Ads)",
    description: `Criamos e gerenciamos campanhas pagas em plataformas como Facebook, Instagram e Google Ads, para atrair mais clientes e aumentar as vendas.`,
    img: robotHero,
    alt: "Campanhas Pagas"
  },
  {
    title: "Marketing de Influência",
    description: `Trabalhamos com influenciadores locais para promover sua marca e aumentar sua visibilidade nas redes sociais.`,
    img: robotHero,
    alt: "Marketing de Influência"
  }
];

// Como funciona o processo de Social Media Marketing
export const dataHowItWorks = {
  title: "Como Funciona o Processo de Social Media Marketing",
  description: "Nosso processo é orientado para gerar resultados concretos, com aumento de engajamento, seguidores e conversões.",
  steps: [
    {
      titulo: 'Análise de Mercado e Público-Alvo',
      descricao: 'Estudo do seu público e concorrência para criar uma estratégia de social media eficaz.',
      icon: CandlestickChartIcon
    },
    {
      titulo: 'Criação de Conteúdo',
      descricao: 'Desenvolvimento de conteúdo criativo e estratégico para engajar sua audiência nas redes sociais.',
      icon: NotebookText
    },
    {
      titulo: 'Gestão de Campanhas e Ads',
      descricao: 'Criação e gerenciamento de campanhas pagas para ampliar o alcance e gerar mais vendas.',
      icon: SquarePower
    },
    {
      titulo: 'Análise de Resultados',
      descricao: 'Monitoramento e otimização das campanhas, analisando dados para ajustar as estratégias e maximizar os resultados.',
      icon: Wand
    }
  ]
};

// Benefícios do Social Media Marketing
export const dataBeneficies = {
  title: "Por que investir em Social Media Marketing?",
  description: "As redes sociais são ferramentas poderosas para gerar visibilidade, engajamento e vendas para sua empresa.",
  beneficies: [
    {
      title: "Aumento de Visibilidade",
      description: "Expanda sua presença nas redes sociais e alcance um público muito maior.",
      icon: Briefcase
    },
    {
      title: "Engajamento com o Público",
      description: "Atraia e interaja com seu público de maneira autêntica e eficaz.",
      icon: Heart
    },
    {
      title: "Geração de Leads",
      description: "Crie estratégias para converter seguidores em leads qualificados e potenciais clientes.",
      icon: DollarSign
    },
    {
      title: "Relevância Local",
      description: "Conquiste visibilidade no seu mercado local, como em Belo Horizonte, e atraia mais clientes da região.",
      icon: Shield
    },
    {
      title: "Marketing Criativo",
      description: "Utilize criativos inovadores para capturar a atenção do seu público e gerar impacto nas redes sociais.",
      icon: Lightbulb
    },
    {
      title: "Campanhas Segmentadas",
      description: "Direcione suas campanhas para o público certo, aumentando as chances de conversão e retorno sobre investimento (ROI).",
      icon: Magnet
    }
  ]
};

// Serviços entregues
export const dataDelivered = {
  title: "Serviços de Social Media em Belo Horizonte",
  description: "Oferecemos soluções completas de Social Media Marketing para empresas de Belo Horizonte, com estratégias de conteúdo, ads e influenciadores.",
  items: [
    {
      title: "Gestão de Redes Sociais",
      popular: 0,
      price: 1200,
      description: "Gestão de redes sociais, incluindo criação de conteúdo e interação com seguidores.",
      buttonText: "Solicitar orçamento",
      benefitList: [
        "Criação de conteúdo personalizado",
        "Aumento de seguidores",
        "Interação com o público",
        "Análise de engajamento",
        "Gestão de crises"
      ]
    },
    {
      title: "Campanhas Pagas (Ads)",
      popular: 0,
      price: 1500,
      description: "Criação e gestão de campanhas pagas para atrair mais clientes através de Facebook, Instagram e Google Ads.",
      buttonText: "Solicitar orçamento",
      benefitList: [
        "Aumento de alcance",
        "Segmentação precisa",
        "Retorno sobre investimento",
        "Criação de anúncios criativos",
        "Análise de desempenho"
      ]
    },
    {
      title: "Marketing de Influência",
      popular: 0,
      price: 1800,
      description: "Trabalhamos com influenciadores para promover sua marca de forma autêntica e aumentar sua visibilidade nas redes sociais.",
      buttonText: "Solicitar orçamento",
      benefitList: [
        "Seleção de influenciadores relevantes",
        "Aumento da confiança do público",
        "Promoções e sorteios",
        "Aumento do engajamento",
        "Melhoria da imagem da marca"
      ]
    }
  ]
};

// Depoimentos
export const dataTestimonials = {
  title: "O que nossos clientes dizem",
  description: "Veja o que nossos clientes de Belo Horizonte estão dizendo sobre os resultados que conquistaram com nossos serviços de Social Media Marketing.",
  items: [
    {
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Carla Silva",
      userName: "@carlassilva_",
      comment: "Com a gestão das minhas redes sociais, aumentei muito o engajamento e consegui novos clientes. Estou muito satisfeita com o trabalho!",
    },
    {
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Rafael Oliveira",
      userName: "@rafael_0live1rabh",
      comment: "A estratégia de Social Media foi incrível, nossa presença online nunca foi tão forte e atraímos muitos novos seguidores.",
    },
    {
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      name: "Ana Deitel",
      userName: "@anadeitel_",
      comment: "Trabalhar com influenciadores foi um divisor de águas para nossa marca. O alcance foi enorme!",
    },
    {
      image: "https://randomuser.me/api/portraits/men/41.jpg",
      name: "Thiago Pereira",
      userName: "@othiago_pereiraa",
      comment: "As campanhas pagas ajudaram a aumentar nossa base de clientes e otimizar o investimento. Estamos muito satisfeitos com os resultados!",
    },
    {
      image: "https://randomuser.me/api/portraits/women/30.jpg",
      name: "Luciana Corina",
      userName: "@luciana.corina",
      comment: "A equipe de social media conseguiu aumentar significativamente nossa visibilidade. O número de seguidores cresceu muito.",
    },
    {
      image: "https://randomuser.me/api/portraits/men/10.jpg",
      name: "Eduardo Toves",
      userName: "@eduardo_toves",
      comment: "O trabalho de Social Media fez nossa marca se destacar nas redes sociais e gerou um aumento significativo em vendas!",
    }
  ]
};

// Perguntas Frequentes sobre Social Media Marketing
export const dataFaqs = {
  title: "Perguntas Frequentes sobre Social Media Marketing",
  items: [
    {
      pergunta: "O que é Social Media Marketing?",
      resposta: "É o uso de plataformas de redes sociais para promover sua marca, aumentar o engajamento e atrair novos clientes."
    },
    {
      pergunta: "Como saber se minha estratégia de Social Media está funcionando?",
      resposta: "Acompanhe os resultados como aumento de seguidores, engajamento (curtidas, comentários) e conversões. Ferramentas de análise ajudam nesse monitoramento."
    },
    {
      pergunta: "Quanto tempo leva para ver resultados nas redes sociais?",
      resposta: "Os resultados podem variar, mas geralmente em 30 a 60 dias já é possível perceber um aumento no engajamento e no número de seguidores."
    },
    {
      pergunta: "Qual rede social devo usar para meu negócio?",
      resposta: "Isso depende do seu público-alvo. Facebook, Instagram e LinkedIn são ótimas opções, mas é importante entender onde seu público está mais presente."
    },
    {
      pergunta: "O que são campanhas pagas?",
      resposta: "São anúncios pagos que ajudam a aumentar seu alcance nas redes sociais e alcançar novos clientes com segmentação precisa."
    },
    {
      pergunta: "O que é marketing de influência?",
      resposta: "Marketing de influência envolve parcerias com influenciadores para promover sua marca, aproveitando sua base de seguidores para gerar mais visibilidade."
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