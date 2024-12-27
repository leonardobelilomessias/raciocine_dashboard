import { Blocks, Brush, ChartBarDecreasing, Gauge, MessageCircleQuestion, MonitorSmartphone, Search } from "lucide-react";
import React from "react";

const features = [
  {
    title: "Design Personalizado",
    description: "Websites únicos criados para refletir a identidade da sua marca.",
    icon: Brush 
  },
  {
    title: "Responsividade",
    description: "Sites que se adaptam a todos os dispositivos, de desktops a smartphones.",
    icon: MonitorSmartphone
  },
  {
    title: "SEO Otimizado",
    description: "Mais visibilidade no Google com otimização profissional de SEO.",
    icon: Search
  },
  {
    title: "Velocidade",
    description: "Experiência de navegação rápida e fluida para seus usuários.",
    icon: Gauge
  },
  {
    title: "Integrações",
    description: "Conectamos seu site às principais ferramentas, como WhatsApp e Google Analytics.",
    icon: Blocks
  },
  {
    title: "Suporte Contínuo",
    description: "Oferecemos suporte técnico para manter seu site sempre atualizado.",
    icon: MessageCircleQuestion
  }
];

export function Benneficies() {
  return (
<div className="bg-white py-12">
  <h2 className="text-4xl font-bold text-center">O que nossos clientes dizem</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
    {[
      { nome: "João Silva", empresa: "Empresa X", depoimento: "Excelente serviço! Aumentamos nossa visibilidade em 300%." },
      { nome: "Maria Luiza", empresa: "Empresa Y", depoimento: "O design do nosso site é incrível! Muito obrigada." },
      { nome: "Pedro Henrique", empresa: "Empresa Z", depoimento: "O suporte técnico é rápido e eficaz. Recomendo!" },
    ].map((depoimento, index) => (
      <div key={index} className="bg-gray-100 shadow-lg rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-2">{depoimento.nome} ({depoimento.empresa})</h3>
        <p className="text-gray-600">{depoimento.depoimento}</p>
      </div>
    ))}
  </div>
</div>
  );
}