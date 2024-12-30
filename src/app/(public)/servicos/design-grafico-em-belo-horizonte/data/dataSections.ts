import { Briefcase, CandlestickChartIcon, ChartBar, Clock, DollarSign, HandCoins, Heart, Lightbulb, Magnet, NotebookText, Shield, SquarePower, Users2, Wand } from "lucide-react";
import robotHero from '@/app/assets/images/Home/robotHero.webp';
import { FaMoneyBill } from "react-icons/fa";

// Dados da oferta principal
export const dataGreatOffer = {
  title: "Design Gráfico Profissional em Belo Horizonte",
  decription: "Transforme a imagem da sua marca com um design gráfico exclusivo. Desde logotipos a materiais publicitários, criamos soluções visuais que encantam e convertem.",
  items: [
    {
      icon: Users2,
      value: "15K",
      label: "Clientes Satisfeitos"
    },
    {
      icon: Heart,
      value: "85%",
      label: "Mais Engajamento"
    },
    {
      icon: HandCoins,
      value: "2K",
      label: "Novas Oportunidades"
    }
  ]
};

// Notícias
export const news = [
  {
    title: "Design gráfico em BH: Como empresas estão conquistando o mercado local",
    description: "Empresas de Belo Horizonte estão investindo em design gráfico para fortalecer suas marcas e aumentar sua presença no mercado.",
    font: "Jornal O Tempo",
    link: "https://www.otempo.com.br/economia/2024/9/27/design-grafico-bh-conquistar-mercado-local",
    img: robotHero
  },
  {
    title: "Estudo revela: empresas com boa identidade visual aumentam 30% nas vendas",
    description: "Investir em um design gráfico de qualidade impacta diretamente nas vendas e no sucesso de uma marca.",
    font: "Site G1",
    link: "https://g1.globo.com/economia/noticia/2024/12/14/design-empresas-identidade-visual-aumenta-vendas.ghtml",
    img: robotHero
  },
  {
    title: "Empresas em BH crescem com o uso de design gráfico como diferencial",
    description: "Empresas de Belo Horizonte têm utilizado o design gráfico como uma ferramenta estratégica para aumentar sua competitividade.",
    font: "Jornal Diario do Comércio",
    link: "https://diariodocomercio.com.br/negocios/design-grafico-diferencial-em-bh/",
    img: robotHero
  }
];

// Serviços de design gráfico
export const dataPlataforms = [
  {
    title: "Criação de Logotipos",
    description: `Desenvolvemos logotipos exclusivos e profissionais que refletem a identidade da sua marca e causam impacto imediato nos seus clientes.`,
    img: robotHero,
    alt: "Opção Criação de Logotipo"
  },
  {
    title: "Identidade Visual",
    description: `Criamos identidades visuais completas, que incluem paleta de cores, tipografia e elementos gráficos, para fortalecer a sua marca.`,
    img: robotHero,
    alt: "Opção Identidade Visual"
  },
  {
    title: "Materiais Publicitários",
    description: `Desenvolvemos materiais publicitários impactantes, como flyers, banners e anúncios, que atraem e engajam seu público-alvo.`,
    img: robotHero,
    alt: "Opção Material Publicitário"
  }
];

// Como funciona o processo
export const dataHowItWorks = {
  title: "Como Funciona o Processo de Design Gráfico",
  description: "A criação de um design gráfico eficaz passa por etapas detalhadas para garantir que a sua marca se destaque.",
  steps: [
    {
      titulo: 'Pesquisa e Análise',
      descricao: 'Análise do mercado e do público-alvo para entender suas necessidades.',
      icon: CandlestickChartIcon
    },
    {
      titulo: 'Planejamento Criativo',
      descricao: 'Desenvolvimento do conceito e alinhamento com os objetivos da sua marca.',
      icon: NotebookText
    },
    {
      titulo: 'Criação e Design',
      descricao: 'Desenvolvimento do design gráfico, incluindo logotipos, identidade visual e outros materiais.',
      icon: SquarePower
    },
    {
      titulo: 'Entrega e Implementação',
      descricao: 'Entrega dos arquivos finais e orientação sobre como aplicar o design em diferentes plataformas.',
      icon: Wand
    }
  ]
};

// Benefícios do design gráfico profissional
export const dataBeneficies = {
  title: "Por que investir em Design Gráfico Profissional?",
  description: "O design gráfico de qualidade melhora a percepção da sua marca e cria um impacto visual duradouro.",
  beneficies: [
    {
      title: "Especialização",
      description: "Profissionais especializados em design gráfico com anos de experiência.",
      icon: Briefcase
    },
    {
      title: "Economia de Tempo",
      description: "Deixe a criação de design com os especialistas e concentre-se em seu negócio.",
      icon: Clock
    },
    {
      title: "Credibilidade",
      description: "Um design de qualidade passa confiança e seriedade para sua marca.",
      icon: Shield
    },
    {
      title: "Resultados Visíveis",
      description: "Impacto visual direto nas vendas e no engajamento com a marca.",
      icon: ChartBar
    },
    {
      title: "Criatividade",
      description: "Abordagens criativas que tornam sua marca única e memorável.",
      icon: Lightbulb
    },
    {
      title: "SEO Visual",
      description: "Design otimizado para visibilidade nas plataformas online e atração de público.",
      icon: Magnet
    }
  ]
};

// Serviços entregues
export const dataDelivered = {
  title: "Serviços de Design Gráfico",
  description: "Desenvolvemos soluções gráficas completas para transformar sua marca.",
  items: [
    {
      title: "Criação de Logotipo",
      popular: 0,
      price: 800,
      description: "Desenvolvimento de logotipos personalizados e profissionais.",
      buttonText: "Solicitar orçamento",
      benefitList: [
        "Design único",
        "Alta identidade visual",
        "Impacto imediato",
        "Arquivos entregues em diversos formatos",
        "Atendimento personalizado"
      ]
    },
    {
      title: "Identidade Visual Completa",
      popular: 0,
      price: 2500,
      description: "Criação de identidade visual, incluindo paleta de cores e tipografia.",
      buttonText: "Solicitar orçamento",
      benefitList: [
        "Design alinhado com sua marca",
        "Versatilidade para diferentes plataformas",
        "Consistência visual",
        "Entrega dos arquivos finais",
        "Suporte contínuo"
      ]
    },
    {
      title: "Materiais Publicitários",
      popular: 0,
      price: 1200,
      description: "Design de materiais gráficos, como flyers, banners e anúncios.",
      buttonText: "Solicitar orçamento",
      benefitList: [
        "Materiais impactantes",
        "Design otimizado para engajamento",
        "Alta conversão",
        "Formatos flexíveis",
        "Criação sob demanda"
      ]
    }
  ]
};

// Depoimentos
export const dataTestimonials = {
  title: "O que nossos clientes dizem",
  description: "Depoimentos reais de clientes satisfeitos com nossos serviços de design gráfico",
  items: [
    {
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Carla Silva",
      userName: "@carlassilva_",
      comment: "O logotipo que criaram para minha marca realmente a destacou no mercado! A identidade visual ficou perfeita.",
    },
    {
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Rafael Oliveira",
      userName: "@rafael_0live1rabh",
      comment: "O design do meu material publicitário ficou incrível. Aumentei as vendas em 25% com os novos flyers.",
    },
    {
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      name: "Ana Deitel",
      userName: "@anadeitel_",
      comment: "A identidade visual da minha marca ficou impecável. Agora temos uma presença sólida no mercado.",
    },
    {
      image: "https://randomuser.me/api/portraits/men/41.jpg",
      name: "Thiago Pereira",
      userName: "@othiago_pereiraa",
      comment: "Criaram um logotipo que realmente reflete a personalidade da nossa empresa. Ficou fantástico!",
    },
    {
      image: "https://randomuser.me/api/portraits/women/30.jpg",
      name: "Luciana Corina",
      userName: "@luciana.corina",
      comment: "A criação do meu logo e identidade visual foi muito bem feita! Transmitiu profissionalismo e autenticidade.",
    },
    {
      image: "https://randomuser.me/api/portraits/men/10.jpg",
      name: "Eduardo Toves",
      userName: "@eduardo_toves",
      comment: "Os materiais publicitários criados foram um sucesso! Tivemos um retorno impressionante nas campanhas.",
    }
  ]
};

// Perguntas Frequentes
export const dataFaqs = {
  title: "Perguntas Frequentes sobre Design Gráfico",
  items: [
    {
      pergunta: "O que é design gráfico?",
      resposta: "É a arte de criar soluções visuais que comunicam uma mensagem, fortalecendo a identidade de uma marca."
    },
    {
      pergunta: "Como posso melhorar a imagem da minha marca?",
      resposta: "Investir em um design gráfico profissional, como logotipos e identidade visual, é essencial para fortalecer sua marca."
    },
    {
      pergunta: "Qual o prazo para criação de um logotipo?",
      resposta: "Geralmente, o processo leva de 5 a 15 dias, dependendo da complexidade do projeto."
    },
    {
      pergunta: "Vocês atendem empresas de Belo Horizonte?",
      resposta: "Sim, nosso foco é atender empresas locais e ajudar a fortalecer sua presença visual no mercado de BH."
    },
    {
      pergunta: "Posso solicitar alterações depois de receber os designs?",
      resposta: "Sim, oferecemos revisões e ajustes conforme necessário até que você fique 100% satisfeito."
    },
    {
      pergunta: "Os designs são entregues em quais formatos?",
      resposta: "Entregamos todos os arquivos em diversos formatos (AI, PNG, JPG, PDF), para que você possa usá-los em qualquer plataforma."
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