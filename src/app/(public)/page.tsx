
import { HomeScreen } from "../ui/Screens/HomeScreen";
import { Metadata } from "next";
import { StructureData } from "../ui/components/StructureData";
import Head from "next/head";


export const metadata: Metadata = {
  title: 'Raciocine - Soluções Digitais em Belo Horizonte',
  description: 'Raciocine é sua parceira em soluções digitais em Belo Horizonte. Oferecemos serviços de desenvolvimento de software, marketing digital, design, copywriting, filmmaker, social media e SEO para empreendedores locais.',
  keywords: 'soluções digitais, Belo Horizonte, desenvolvimento de software, marketing digital, design, copywriting, filmmaker, social media, SEO, empreendedorismo, serviços digitais',
  openGraph: {
    title: 'Raciocine - Soluções Digitais em Belo Horizonte',
    description: 'Descubra como a Raciocine pode ajudar sua empresa em Belo Horizonte com soluções digitais completas. De marketing digital a desenvolvimento de software, estamos prontos para transformar seu negócio.',
    url: 'https://raciocine.com',
    siteName: 'Raciocine',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: 'https://raciocine.com/images/raciocine-software-criacao-de-sites-seo-trafego-pago-marketing-digital-em-belo-horizonte-minas-gerais.png',
        width: 1200,
        height: 630,
        alt: 'Raciocine - Soluções Digitais em Belo Horizonte',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raciocine - Soluções Digitais em Belo Horizonte',
    description: 'Soluções digitais para empreendedores em Belo Horizonte. Marketing digital, desenvolvimento de software, design, SEO e muito mais.',
    images: ['https://raciocine.com/images/raciocine-software-criacao-de-sites-seo-trafego-pago-marketing-digital-em-belo-horizonte-minas-gerais.png'],
  },
  alternates: {
    canonical: 'https://raciocine.com',
    languages: {
      'pt-BR': 'https://raciocine.com',
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
  "@type": "Organization",
  "name": "Raciocine",
  "url": "https://raciocine.com",
  "description": "Raciocine oferece soluções digitais completas para empreendedores em Belo Horizonte. Serviços de desenvolvimento de software, marketing digital, design, copywriting, filmmaker, social media e SEO.",
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
  "image": "https://raciocine.com/images/raciocine-software-criacao-de-sites-seo-trafego-pago-marketing-digital-em-belo-horizonte-minas-gerais.png",
  "serviceType": "Soluções Digitais, Desenvolvimento de Software, Marketing Digital, Design, Copywriting, Filmmaker, Social Media, SEO",
  "priceRange": "$$",
  "sameAs": [
    "https://www.instagram.com/raciocinesolucoes",
  ]
};


export default function Home() {
  return (
    <>
    <Head>
    <link rel="preload" href="http://raciocine.com/images/robotHero.webp" as="image" />
    
      <link rel="preload" href="http://localhost:3000/images/robotHero.webp" as="image" />
    </Head>
      <StructureData data={schemaData}/>
      <main >
        <HomeScreen/>
      </main>
    </>
  );
}
