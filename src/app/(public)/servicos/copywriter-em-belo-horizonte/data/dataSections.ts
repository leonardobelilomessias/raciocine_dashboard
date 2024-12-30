import { Briefcase, CandlestickChartIcon, ChartBar, Clock, DollarSign, HandCoins, Heart, Lightbulb, Magnet, NotebookText, Shield, SquarePower, Users2, Wand } from "lucide-react";
import robotHero from '@/app/assets/images/Home/robotHero.webp'
import { Binoculars, Blocks, Brush, ChartArea, ChartBarDecreasing, ChartPie, Flag, Gamepad, Gamepad2, Gauge, Gem, Highlighter, LucideProps, Medal, MessageCircleQuestion, MonitorSmartphone, Search, TowerControl } from "lucide-react";
import { FaMoneyBill } from "react-icons/fa";

export const dataGreatOffer= {
  title:"Escrita Pesuasiva:Deixe os clientes apaixonados.",
  decription:"Criação de texto que cativam clientes. Seja para seu site, blog, anúncios ou redes sociais. Escrevemos textos que seus clientes ficarão encantados.",
  items:[
    {
      icon:Users2,
      value:"21K",
      label:"Potênciais Clientes"
      
    },
    {
      icon:Heart,
      value:"73%",
      label:"Mais Engajamento"
      
    },    {
      icon:HandCoins,
      value:"5K",
      label:" Novas Conversões"
      
    }
  ]}

  //Data to NewsReport

  export const news= [
    {
      title:"Apostando no mercado digital, empresas  de BH veem faturamento crescer",
      description:"Empresários belo-horizontinos contam como é possível se destacar em um mercado amplamente concorrido",
      font:"Jornal O Tempo",
      link:"https://www.otempo.com.br/economia/2024/9/27/apostando-no-mercado-digital--empresas-de-cosmeticos-de-bh-veem-",
      img:robotHero
    },
    {
      title:"61% dos brasileiros compram mais pela internet do que em lojas físicas, aponta estudo",
      description:"Entre esses consumidores, 78% afirmam comprar uma ou mais vezes por mês e a maioria (51%) paga com PIX",
      font:"Site G1",
      link:"https://g1.globo.com/economia/noticia/2022/12/14/61percent-dos-brasileiros-compram-mais-pela-internet-do-que-em-lojas-fisicas-aponta-estudo.ghtml",
      img:robotHero
    },  {
      title:"Faturamento do comércio eletrônico avança em MG",
      description:"Estado foi responsável por movimentar R$ 11,6 bi em vendas pela web no Brasil entre janeiro e agosto deste ano",
      font:"Jornal Diario do Comércio",
      link:"https://diariodocomercio.com.br/negocios/faturamento-do-comercio-eletronico-avanca-em-mg/",
      img:robotHero
    },
  ]

  // Data plataforms

  export const dataPlataforms = [
    {
      title: "Escrita Persuasiva",
      description: `A escrita persuasiva em copywriting é uma técnica utilizada para convencer o público-alvo a realizar uma ação específica, como comprar um produto, serviço ou ideia. Seu objetivo é influenciar a decisão do leitor, criando um vínculo emocional e racional com o conteúdo.`,
      img: robotHero,
      alt: "Opção LandingPage"
    },
    {
      title: "Gatilhos de Interesse",
      description: `Gatilhos Interesse são técnicas psicológicas utilizadas em copywriting para influenciar decisões do público-alvo, criando conexões emocionais e racionalmente convincentes.`,
      img: robotHero,
      alt: "Opção Site institucional"
    },
    {
      title: "Técnicas Pnl",
      description: `Técnicas de PNL (Programação Neurolinguística) em copywriting são estratégias que utilizam princípios psicológicos para influenciar a percepção, comportamento e decisões do público-alvo.`,
      img: robotHero,
      alt: "Opção Ecommerce"
    }
  ];
  

  //Data how it works 

  export const dataHowItWorks = {
    title:"Como Funciona o processo do servço em etapas.",
    description:"Trabalhamos para garantir que o serviço seja executado e você alcance os resultados esperados.",
    steps:[
    {
      titulo: 'Análise de Mercado',
      descricao: 'Pesquisa e análise do público-alvo e concorrentes',
      icon:CandlestickChartIcon
    },
    {
      titulo: 'Planejamento de Conteúdo',
      descricao: 'Definicão de identida de conteúdo alinhado com o cliente',
      icon:NotebookText
    },
    {
      titulo: 'Execução e Veiculação',
      descricao: 'Desenvolvimento e lançamento do produto',
      icon:SquarePower
  
    },
    {
      titulo: 'Otimização e Campanhas',
      descricao: 'Análise de resultados e otimização contínua',
      icon:Wand
  
    },
  ]
}
//data Beneficies
export const dataBeneficies = {
  title:"Porque você precisa de um bom copywriter na sua empresa",
  description:"No mundo digital você pode se destacar dos medianos quando seu cliente entende que você é um profissional qualificado.",
  beneficies: [
    {
      title: "Especialização",
      description: "Conhecimento técnico em redação persuasiva.",
      icon: Briefcase
    },
    {
      title: "Economia de Tempo",
      description: "Reduz tempo gasto em criação de conteúdo.",
      icon: Clock
    },
    {
      title: "Credibilidade",
      description: "Imagem profissional para sua marca.",
      icon: Shield
    },
    {
      title: "Resultados",
      description: "Aumento nas vendas e engajamento.",
      icon: ChartBar
    },
    {
      title: "Criatividade",
      description: "Perspectivas inovadoras e abordagens criativas.",
      icon: Lightbulb
    },
    {
      title: "SEO",
      description: "Otimização para melhor ranking e visibilidade online.",
      icon: Magnet
    }
  ]}



  //data delivered
  export const dataDelivered = {
    title: "Serviços de Copywriting",
    description: "Desenvolvemos conteúdo persuasivo para impulsionar seu negócio",
    items: [
      {
        title: "Copywriting para Redes Sociais",
        popular: 0,
        price: 150,
        description: "Conteúdo atraente para redes sociais",
        buttonText: "Solicitar orçamento",
        benefitList: [
          "Aumento de engajamento",
          "Conteúdo personalizado",
          "Melhoria da imagem da marca",
          "Análise de desempenho",
          "Flexibilidade de atualizações"
        ]
      },
      {
        title: "Copywriting para Sites e Blogs",
        popular: 0,
        price: 300,
        description: "Conteúdo de qualidade para sites e blogs",
        buttonText: "Solicitar orçamento",
        benefitList: [
          "Otimização para SEO",
          "Conteúdo estratégico",
          "Melhoria da conversão",
          "Desenvolvimento de autoridade",
          "Conteúdo adaptável"
        ]
      },

      {
        title: "Copywriting para Anúncios Publicitários",
        popular: 0,
        price: 200,
        description: "Anúncios publicitários impactantes",
        buttonText: "Solicitar orçamento",
        benefitList: [
          "Aumento da visibilidade",
          "Conteúdo atraente",
          "Melhoria da conversão",
          "Otimização para públicos-alvo",
          "Relatórios detalhados"
        ]
      },
 
    ]
  }
// data timer
export const dataTimer= {
  title: "teste titulo",
  buttonText:"Solicitar Consultoria",
  numberHighlight:"3",
  labelNumber:"Vagas",
  callToAction:"Entre em contato agora e solicite sua vaga",
  miniLabel:"Consultória Gratuita."

}

//data testimonials

export const dataTestimonials = {
  title: "O que nossos clientes dizem",
  description: "Depoimentos reais de clientes satisfeitos",

  items: [
    {
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Carla Silva",
      userName: "@carlassilva_",
      comment: "Transformei minha marca com o conteúdo personalizado de vocês! +40% nas vendas.",
    },
    {
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Rafael Oliveira",
      userName: "@rafael_0live1rabh",
      comment: "Vocês entenderam perfeitamente minha marca! Melhor presença online.",
    },
    {
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      name: "Ana Deitel",
      userName: "@anadeitel_",
      comment: "Fiquei impressionada com a qualidade do conteúdo! Site nunca foi tão atraente.",
    },
    {
      image: "https://randomuser.me/api/portraits/men/41.jpg",
      name: "Thiago Pereira",
      userName: "@othiago_pereiraa",
      comment: "Vocês capturaram a essência da minha marca! Conteúdo incrível.",
    },
    {
      image: "https://randomuser.me/api/portraits/women/30.jpg",
      name: "Luciana Corina",
      userName: "@luciana.corina",
      comment: "Competência e criatividade! Superou minhas expectativas.",
    },
    {
      image: "https://randomuser.me/api/portraits/men/10.jpg",
      name: "Eduardo Toves",
      userName: "@eduardo_toves",
      comment: "Fundamental para o sucesso da minha campanha publicitária.",
    }
  ]
};


/// data faqs 
export const dataFaqs = {
  title: "Perguntas Frequentes sobre Nossos Serviços de Copywriting",
  items: [
    {
      pergunta: "O que é o serviço de copywriting ?",
      resposta: "Copywriting é a criação de conteúdo persuasivo para promover marcas, produtos ou serviços."
    },
    {
      pergunta: "Quais são os benefícios do copywriting para minha marca?",
      resposta: "Aumento de vendas, melhoria da imagem da marca, engajamento e conversão."
    },
    {
      pergunta: "Vocês oferecem serviços de copywriting para redes sociais?",
      resposta: "Sim, criamos conteúdo atraente para redes sociais."
    },
    {
      pergunta: "Quanto tempo leva para criar conteúdo de copywriting?",
      resposta: "O prazo varia de acordo com o projeto, mas geralmente leva de 3 a 7 dias."
    },
    {
      pergunta: "Posso solicitar revisões no conteúdo?",
      resposta: "Sim, oferecemos até 3 revisões gratuitas."
    },
    {
      pergunta: "Vocês têm experiência em copywriting para meu nicho?",
      resposta: "Sim, trabalhamos com diversos nichos. Entre em contato para discutir seu projeto."
    },
    {
      pergunta: "Como posso contratar seus serviços de copywriting?",
      resposta: "Entre em contato conosco pelo site ou e-mail para discutir seu projeto."
    }
  ]
};