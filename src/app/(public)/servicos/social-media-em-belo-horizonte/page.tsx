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
  title: 'Social Media em Belo Horizonte - Raciocine',
  description: 'Serviços de Social Media em Belo Horizonte. Criação de estratégias de conteúdo e gerenciamento de redes sociais para aumentar sua presença online e engajamento.',
  keywords: 'social media, Belo Horizonte, redes sociais, gerenciamento de redes sociais, marketing digital, estratégia de conteúdo, social media marketing',
  openGraph: {
    title: 'Social Media em Belo Horizonte - Raciocine',
    description: 'Impulsione sua marca com nossos serviços de Social Media em Belo Horizonte. Gerenciamento de redes sociais e criação de estratégias de conteúdo para aumentar seu engajamento online.',
    url: 'https://raciocine.com/social-media-em-belo-horizonte',
    siteName: 'Raciocine',
    locale: 'pt_BR',
    type: 'article',
    images: [
      {
        url: 'https://raciocine.com/images/social-media.jpg',
        width: 1200,
        height: 630,
        alt: 'Social Media em Belo Horizonte',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Media em Belo Horizonte - Raciocine',
    description: 'Transforme sua presença online com nossos serviços de Social Media em Belo Horizonte. Estratégias eficazes para engajamento e crescimento nas redes sociais.',
    images: ['https://raciocine.com/images/social-media.jpg'],
  },
  alternates: {
    canonical: 'https://raciocine.com/social-media-em-belo-horizonte',
    languages: {
      'pt-BR': 'https://raciocine.com/social-media-em-belo-horizonte',
      'en': 'https://raciocine.com/en/services/social-media-in-belo-horizonte',
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
  "name": "Raciocine - Social Media em Belo Horizonte",
  "url": "https://raciocine.com/social-media-em-belo-horizonte",
  "description": "Serviços de Social Media em Belo Horizonte. Estratégias de marketing e gerenciamento de redes sociais para melhorar sua presença online e engajamento.",
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
  "image": "https://raciocine.com/images/social-media.jpg",
  "serviceType": "Social Media, Gerenciamento de Redes Sociais, Marketing Digital, Estratégias de Conteúdo",
  "priceRange": "$$"
};


export default function Page() {
  const title = "A melhor Empresa de Social Media de Belo Horizonte"
  const description= "Desenvolvemos conteúdo personalizado para empresas em Belo Horizonte, aumentando conversões, fortalecendo marcas e melhorando visibilidade online."

  return (
    <>
    <main>
      <StructureData data={schemaData}/>
      <HeroGeralSectionImage img={robotHero}   title={title} description={description} highlightBlue="Empresa" highlightPink="Social Media" />
      <GreatOfferOne img={robotHero} title={dataGreatOffer.title} description={dataGreatOffer.decription} data={dataGreatOffer.items}/>
      <NewsRepportOne reverse={true} cover={robotHero} title="Veja o que midia diz sobre o mercado digital." description="descricao brece" data={news}/>
      <PlataformOne title="Como nos atuamos nas redes socais." description="Trabalhamos para que sua marca tenha uma presença relevante nas redes sociais." data={dataPlataforms}/>
      <HowItWorksOne data={dataHowItWorks}/>
      <TriggerServiceOne description="Todo dia surge uma nova tendência e o público está sempre exigindo que marcas participem. Nós te auxiliamos com as redes sociais, para que você possa focar no seu negócio." title="Marque Presença Total em Todas Redes " img={robotHero} link="#"/>
      <BeneficiesSectionOne  data={dataBeneficies}/>
      <ProductDeliveryOne data={dataDelivered}/>
      <TimerOne data={dataTimer}/>
      <TestimonialsSectionOne data={dataTestimonials}/>
      <FaqSectionOne data={dataFaqs}/>
    </main>
    </>
  );
};

