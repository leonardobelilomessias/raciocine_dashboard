import { Blocks, Brush, ChartBarDecreasing, Gauge, MessageCircleQuestion, MonitorSmartphone, Search } from "lucide-react";
import React from "react";
import LandImage from '@/app/assets/images/services/sites/landing-service.png'
import InstitucionalImage from '@/app/assets/images/services/sites/institucional-service.png'
import EcommerceImage from '@/app/assets/images/services/sites/ecommerce-service.png'


import Image from "next/image";
const features = [
  {
    title: "Landing Page",
    description: "Websites únicos criados para refletir a identidade da sua marca, aumentando a conversão e engajamento dos visitantes. Nossos landing pages são projetados para serem responsivos, intuitivos e personalizados de acordo com as necessidades da sua marca.",
    img: LandImage,
    alt: "Opção LandingPage"
  },
  {
    title: "Site Institucional",
    description: "Sites que se adaptam a todos os dispositivos, de desktops a smartphones, garantindo uma experiência do usuário consistente e de alta qualidade. Nossos sites institucionais são projetados para serem modernos, seguros e otimizados para motores de busca.",
    img: InstitucionalImage,
    alt: "Opção Site institucional"
  },
  {
    title: "Loja Virtual",
    description: "Mais visibilidade no Google com otimização profissional de SEO, aumentando as vendas e a conversão de leads. Nossas lojas virtuais são projetadas para serem fáceis de navegar, seguras e personalizadas de acordo com as necessidades da sua marca, oferecendo uma experiência de compra única e agradável para os clientes.",
    img: EcommerceImage,
    alt: "Opção Ecommerce"
  }
];

export function SitesTypes() {
  return (
  
      <main className="container mx-auto py-12 px-6 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center">
          Tipos de Sites
        </h2>
        <p className="text-lg text-gray-700 mt-4 text-center">
          Trabalhamos com diferentes modelos para atender sua necessidade.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {features.map((feature, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <Image src={feature.img} alt={feature.alt}/>
              <h2 className="text-xl font-semibold mb-2 mt-4">{feature.title}</h2>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </main>

  );
}