import { Blocks, Brush, ChartBarDecreasing, Gauge, MessageCircleQuestion, MonitorSmartphone, Search } from "lucide-react";
import React from "react";
import LandImage from '@/app/assets/images/services/service-seo.webp'
import MetaAdsImage from '@/app/assets/images/services/ads/metaads.webp'
import OthersAdsImage from '@/app/assets/images/services/ads/others-ads.webp'


import Image from "next/image";
const features = [
  {
    title: "Google Ads",
    description: `Google ads permite que empresas possam colocar seu link no topo da pesquisas. Com isso aumenta o número de visitas atráves de anuncios`,
    img: LandImage,
    alt: "Opção LandingPage"
  },
  {
    title: "Meta Ads",
    description: `A Meta Ads integra plataformas como Facebook e Instagram, permitindo que seus clientes encontrem facilmente seus produtos ou serviços, ampliando seu alcance nas redes sociais.`,
    img: MetaAdsImage,
    alt: "Opção Site institucional"
  },
  {
    title: "Outros",
    description: `Expanda sua presença online com anúncios personalizados em plataformas como LinkedIn, Twitter, YouTube, TikTok e mais. Otimize seu marketing digital!`,
    img: OthersAdsImage,
    alt: "Opção Ecommerce"
  }
];

export function AdsPlataforms() {
  return (
  
      <main className="container mx-auto py-12 px-6 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center">
          Principais plataformas de Anúncios online em Belo Horizonte
        </h2>
        <p className="text-lg text-gray-700 mt-4 text-center">
          Trabalhamos para que seu produto ou serviço tenha destaque com divulgação online em Belo Honrizonte.
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {features.map((feature, index) => (
            <li key={index} className="bg-white shadow-lg rounded-lg p-6">
              <Image src={feature.img} alt={feature.alt}/>
              <h3 className="text-xl font-semibold mb-2 mt-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </li>
          ))}
        </ul>
      </main>

  );
}