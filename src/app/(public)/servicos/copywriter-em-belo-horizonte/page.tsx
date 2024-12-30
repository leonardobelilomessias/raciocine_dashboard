import React from "react";

import { Metadata } from "next";

import robotHero from '@/app/assets/images/Home/robotHero.webp'
import { HeroGeralSectionImage } from "@/components/Sections/Heros/HeroGeralSectionImage";
import { HeroGeralSectionVideo } from "@/components/Sections/Heros/HeroGeralSectionVideo";
import { GreatOfferOne } from "@/components/Sections/GreatOffers/GreatOfferOne";
import { Users2 } from "lucide-react";
import { NewsRepportOne } from "@/components/Sections/NewsReport/NewsRepportOne";
import { dataBeneficies, dataDelivered, dataFaqs, dataGreatOffer, dataHowItWorks, dataPlataforms, dataTestimonials, dataTimer, news } from "./data/dataSections";
import { PlataformOne } from "@/components/Sections/Plataforms/PlataformOne";
import { HowItWorksOne } from "@/components/Sections/HowItWorks/HowItWorksOne";
import { TriggerServiceOne } from "@/components/Sections/TriggerService/TriggerServiceOne";
import { BeneficiesSectionOne } from "@/components/Sections/BenefciesSection/BeneficiesSectionOne";
import { ProductDeliveryOne } from "@/components/Sections/ProductDelivery/ProductDeliveryOne";
import { TimerOne } from "@/components/Sections/TimerSection/TimerOne";
import { TestimonialsSectionOne } from "@/components/Sections/TestimonialsSection/TestimonialsSectionOne";
import { FaqSectionOne } from "@/components/Sections/FaqSection/FaqSectionOne";
import { StructureData } from "@/app/ui/components/StructureData";



export const metadata: Metadata = {
  title: 'Copywriter Online em Belo Horizonte - Raciocine',
  description: 'Serviços de copywriting online em Belo Horizonte. Criação de textos persuasivos para atrair clientes e gerar mais vendas.',
  keywords: 'copywriter, Belo Horizonte, textos persuasivos, marketing, conteúdo digital, redação publicitária',
  openGraph: {
    title: 'Copywriter Online em Belo Horizonte - Raciocine',
    description: 'Especialistas em redação persuasiva e estratégias de conteúdo digital em Belo Horizonte. Aumente suas vendas e engajamento.',
    url: 'https://raciocine.com/servicos/copywriter-em-belo-horizonte',
    siteName: 'Raciocine',
    locale: 'pt_BR',
    type: 'article',
    images: [
      {
        url: 'https://raciocine.com/images/copywriter.jpg',
        width: 1200,
        height: 630,
        alt: 'Copywriter Online em Belo Horizonte',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Copywriter Online em Belo Horizonte - Raciocine',
    description: 'Descubra como um copywriter pode transformar suas estratégias de marketing em Belo Horizonte.',
    images: ['https://raciocine.com/images/copywriter.jpg'],
  },
  alternates: {
    canonical: 'https://raciocine.com/servicos/copywriter-em-belo-horizonte',
    languages: {
      'pt-BR': 'https://raciocine.com/servicos/copywriter-em-belo-horizonte',
      'en': 'https://raciocine.com/en/services/copywriter-in-belo-horizonte',
    },
  },
  other: {
    'contact:phone': '(31) 98626-1771',
    'contact:email': 'contato@raciocine.com',
    'contact:address': 'Av. do Contorno, 2905 - 4º andar - Santa Efigênia, Belo Horizonte - MG, 30110-915',
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Raciocine - Copywriter Online em Belo Horizonte",
  "url": "https://raciocine.com/servicos/copywriter-em-belo-horizonte",
  "description": "Serviços de copywriting online em Belo Horizonte. Criação de textos persuasivos para atrair clientes e gerar mais vendas.",
  "telephone": "+55-31-98626-1771",
  "email": "contato@raciocine.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. do Contorno, 2905 - 4º andar",
    "addressLocality": "Belo Horizonte",
    "addressRegion": "MG",
    "postalCode": "30110-915",
    "addressCountry": "BR"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Belo Horizonte, Minas Gerais, Brasil"
  },
  "image": "https://raciocine.com/images/copywriter.jpg",
  "serviceType": "Copywriting, Redação Publicitária, Marketing Digital",
  "priceRange": "$$"
};
export default function Page() {
  const titleHero = "A Melhor Empresa de Copywrite de Belo Horizonte"
  const descriptionHero= "Transforme sua presença online com nossos serviços de copywriting em Belo Horizonte. Atraia mais clientes com textos persuasivos e eficazes criados por especialistas em marketing digital."



  return (
    <>
    <main>
      <StructureData data={schemaData}/>
      <HeroGeralSectionImage img={robotHero}   title={titleHero} description={descriptionHero} highlightBlue="Empresa" highlightPink="Copywrite" />
      <GreatOfferOne img={robotHero} title={dataGreatOffer.title} description={dataGreatOffer.decription} data={dataGreatOffer.items}/>
      <NewsRepportOne reverse={true} cover={robotHero} title="Veja o que midia diz sobre o mercado digital em Belo Horizonte." description="descricao brece" data={news}/>
      <PlataformOne title="Algumas Principais Atividades do Copywiter" description="Criar Textos persuasivos de copy envolve muitos processos.Aqui estão alguns deles." data={dataPlataforms}/>
      <HowItWorksOne data={dataHowItWorks}/>
      <TriggerServiceOne description="Com textos de alta qualidade pode mudar o jogo do seu negócio. Cative até mesmo aqueles clientes mais exigentes, com um conteúdo elaborado e bem escrito." title=" Faça seus clientes ficarem impressionados " img={robotHero} link="#"/>
      <BeneficiesSectionOne  data={dataBeneficies}/>
      <ProductDeliveryOne data={dataDelivered}/>
      <TimerOne data={dataTimer}/>
      <TestimonialsSectionOne data={dataTestimonials}/>
      <FaqSectionOne data={dataFaqs}/>
    </main>
    </>
  );
};

