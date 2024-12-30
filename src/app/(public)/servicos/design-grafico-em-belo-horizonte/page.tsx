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
  title: 'SEO em Belo Horizonte - Raciocine',
  description: 'Serviços de SEO em Belo Horizonte para melhorar o ranking do seu site nos motores de busca. Aumente sua visibilidade e atraia mais clientes com estratégias de otimização.',
  keywords: 'SEO, Belo Horizonte, otimização de sites, estratégias de SEO, marketing digital, visibilidade online, SEO local',
  openGraph: {
    title: 'SEO em Belo Horizonte - Raciocine',
    description: 'Aumente o tráfego do seu site com serviços especializados em SEO em Belo Horizonte. Melhore seu ranking no Google e atraia mais clientes com nossas estratégias de otimização.',
    url: 'https://raciocine.com/seo-em-belo-horizonte',
    siteName: 'Raciocine',
    locale: 'pt_BR',
    type: 'article',
    images: [
      {
        url: 'https://raciocine.com/images/seo.jpg',
        width: 1200,
        height: 630,
        alt: 'SEO em Belo Horizonte',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO em Belo Horizonte - Raciocine',
    description: 'Impulsione seu site nos motores de busca com nossos serviços de SEO em Belo Horizonte. Aumente sua visibilidade online e atraia mais visitantes.',
    images: ['https://raciocine.com/images/seo.jpg'],
  },
  alternates: {
    canonical: 'https://raciocine.com/seo-em-belo-horizonte',
    languages: {
      'pt-BR': 'https://raciocine.com/seo-em-belo-horizonte',
      'en': 'https://raciocine.com/en/services/seo-in-belo-horizonte',
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
  "name": "Raciocine - SEO em Belo Horizonte",
  "url": "https://raciocine.com/seo-em-belo-horizonte",
  "description": "Serviços de SEO em Belo Horizonte para melhorar o ranking do seu site nos motores de busca. Aumente sua visibilidade e atraia mais clientes com estratégias de otimização.",
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
  "image": "https://raciocine.com/images/seo.jpg",
  "serviceType": "SEO, Otimização de Sites, Marketing Digital, Estratégias de SEO, SEO Local",
  "priceRange": "$$"
};




export default function Page() {
  const title = "A melhor Empresa de Design de belo horizonte"
  const description= "Desenvolvemos conteúdo personalizado para empresas em Belo Horizonte, aumentando conversões, fortalecendo marcas e melhorando visibilidade online."

  return (
    <>
    <main>
      <StructureData data={schemaData}/>
      <HeroGeralSectionImage img={robotHero}   title={title} description={description} highlightBlue="Empresa" highlightPink="Design" />
      <GreatOfferOne img={robotHero} title={dataGreatOffer.title} description={dataGreatOffer.decription} data={dataGreatOffer.items}/>
      <NewsRepportOne reverse={true} cover={robotHero} title="Veja o que midia diz sobre o mercado digital." description="descricao brece" data={news}/>
      <PlataformOne title="Tipos de Matériais Gráficos Produzidos" description="Somos especialistas em craçao de materiais gráficos em Belo Horizonte." data={dataPlataforms}/>
      <HowItWorksOne data={dataHowItWorks}/>
      <TriggerServiceOne description="Com um design no nível da arte você mostra o alto valor da sua empresa. Tenha materias gráficos de qualidade alinhados com a dentidade visual da sua empresa. " title=" Faça Seus Clientes Ficarem Facidados " img={robotHero} link="#"/>
      <BeneficiesSectionOne  data={dataBeneficies}/>
      <ProductDeliveryOne data={dataDelivered}/>
      <TimerOne data={dataTimer}/>
      <TestimonialsSectionOne data={dataTestimonials}/>
      <FaqSectionOne data={dataFaqs}/>
    </main>
    </>
  );
};

