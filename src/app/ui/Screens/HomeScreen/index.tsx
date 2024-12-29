import { About } from "@/components/About";
import { Cta } from "@/components/Cta";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import LocationMap from "@/components/LocationMap";
import { Navbar } from "@/components/Navbar";
import { Newsletter } from "@/components/Newsletter";
import { Pricing } from "@/components/Pricing";
import { Results } from "@/components/Results";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Services } from "@/components/Services";
import { Sponsors } from "@/components/Sponsors";
import { Team } from "@/components/Team";
import { Testimonials } from "@/components/Testimonials";
import { TriggerService } from "@/components/TriggerService";
import AdstrackingImage from '@/app/assets/images/services/ads/adstracking.webp'
import FaqService from "@/components/FaqService";

export function HomeScreen(){
    return(    
    <>
      <Hero />
      <Sponsors />
      <Results/>
      <HowItWorks />
      <TriggerService description="Desperte o desejo de clientes atráves de estratégias que agregam valor no seu produto. Fornecemos uma modelagem de funil que fará sua marca ser cobiça no mercado." title="Torne-se irresistive para seus cliente" link="/servicos" img={AdstrackingImage}/>
      <Features />
      <Testimonials />
      <About />
      <Services />
      <Cta />
      {/* <Team />
      <Pricing /> */}
      <LocationMap/>
      <FaqService faqArray={faqs}/>
      <Newsletter />
      <ScrollToTop />

    </>
    )
}
const faqs = [
  {
      pergunta: 'Quais serviços estão inclusos no marketing digital em BH?',
      resposta: 'Incluímos serviços como gestão de redes sociais, SEO, campanhas de anúncios pagos, criação de conteúdo e análise de métricas.',
  },
  {
      pergunta: 'Como o marketing digital pode ajudar minha empresa em Belo Horizonte?',
      resposta: 'O marketing digital aumenta a visibilidade da sua marca, atrai mais clientes e gera maior engajamento com seu público-alvo.',
  },
  {
      pergunta: 'Qual é o prazo para começar a ver resultados com marketing digital?',
      resposta: 'Os resultados dependem das estratégias utilizadas, mas geralmente começam a aparecer entre 3 e 6 meses após a implementação.',
  },
  {
      pergunta: 'Preciso fornecer algum material ou conteúdo para as campanhas?',
      resposta: 'Não necessariamente. Nossa equipe pode criar o conteúdo necessário, mas você pode fornecer materiais caso deseje.',
  },
  {
      pergunta: 'Posso personalizar os serviços contratados?',
      resposta: 'Sim. Oferecemos pacotes personalizados de acordo com as necessidades e objetivos da sua empresa.',
  },
  {
      pergunta: 'Os serviços incluem análise e relatórios de desempenho?',
      resposta: 'Sim. Fornecemos análises detalhadas e relatórios periódicos para acompanhar o desempenho das estratégias.',
  },
];

