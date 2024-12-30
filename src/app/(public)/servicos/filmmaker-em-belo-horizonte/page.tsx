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
  title: 'Criação de Site e Sites em Belo Horizonte - Raciocine',
  description: 'Serviços profissionais de criação de site e sites em Belo Horizonte. Desenvolvemos landing pages, e-commerces e sites institucionais sob medida.',
  keywords: 'criação de site, criação de sites, Belo Horizonte, landing pages, e-commerce, sites institucionais, desenvolvimento web, Raciocine',
  openGraph: {
    title: 'Criação de Site e Sites em Belo Horizonte - Raciocine',
    description: 'Especialistas em desenvolvimento de site e sites em Belo Horizonte. Oferecemos soluções completas para sua presença digital, incluindo landing pages, e-commerces e sites institucionais.',
    url: 'https://raciocine.com/servicos/criacao-de-site-em-belo-horizonte',
    siteName: 'Raciocine',
    locale: 'pt_BR',
    type: 'article',
    images: [
      {
        url: 'https://raciocine.com/images/criacao-de-sites.jpg',
        width: 1200,
        height: 630,
        alt: 'Criação de Sites em Belo Horizonte',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Criação de Site e Sites em Belo Horizonte - Raciocine',
    description: 'Desenvolvemos sites modernos e responsivos em Belo Horizonte. Garanta sua presença online com nossas soluções.',
    images: ['https://raciocine.com/images/criacao-de-sites.jpg'],
  },
  alternates: {
    canonical: 'https://raciocine.com/servicos/criacao-de-site-em-belo-horizonte',
    languages: {
      'pt-BR': 'https://raciocine.com/servicos/criacao-de-site-em-belo-horizonte',
      'en': 'https://raciocine.com/en/services/website-creation-in-belo-horizonte',
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
  "name": "Raciocine - Criação de Site e Sites em Belo Horizonte",
  "url": "https://raciocine.com/servicos/criacao-de-site-em-belo-horizonte",
  "description": "Serviços profissionais de criação de site e sites em Belo Horizonte. Desenvolvemos landing pages, e-commerces e sites institucionais sob medida.",
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
  "image": "https://raciocine.com/images/criacao-de-sites.jpg",
  "serviceType": "Criação de Site, Criação de Sites, Landing Pages, E-commerce, Sites Institucionais",
  "priceRange": "$$$"
};

export default function Page() {
  const title = "A melhor Empresa de Filmmaker de belo horizonte"
  const description= "Desenvolvemos conteúdo personalizado para empresas em Belo Horizonte, aumentando conversões, fortalecendo marcas e melhorando visibilidade online."

  return (
    <>
    <main>
      <StructureData data={schemaData}/>
      <HeroGeralSectionImage img={robotHero}   title={title} description={description} highlightBlue="Empresa" highlightPink="Filmmaker" />
      <GreatOfferOne img={robotHero} title={dataGreatOffer.title} description={dataGreatOffer.decription} data={dataGreatOffer.items}/>
      <NewsRepportOne reverse={true} cover={robotHero} title="Veja o que midia diz sobre o mundo digital." description="descricao brece" data={news}/>
      <PlataformOne title="Tipos de Videos que Produzimos" description="Somos especialistas em capiturar os melhores momentos." data={dataPlataforms}/>
      <HowItWorksOne data={dataHowItWorks}/>
      <TriggerServiceOne description="Palavras comovem, imagens encantam, maus um video bem feito tira o folêgo. Com um video profissional seus clientes percebem aldo valor associado a sua marca." title=" Faça seus clientes ficarem impressionadas " img={robotHero} link="#"/>
      <BeneficiesSectionOne  data={dataBeneficies}/>
      <ProductDeliveryOne data={dataDelivered}/>
      <TimerOne data={dataTimer}/>
      <TestimonialsSectionOne data={dataTestimonials}/>
      <FaqSectionOne data={dataFaqs}/>
    </main>
    </>
  );
};

