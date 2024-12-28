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

export async function FeacturesSection() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <main className="container mx-auto py-12 px-6 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center">
          Transforme sua Presença Online com um Site Profissional
        </h2>
        <p className="text-lg text-gray-700 mt-4 text-center">
          Criamos websites modernos, responsivos e otimizados para SEO, 
          perfeitos para destacar sua marca no mercado.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {features.map((feature, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <feature.icon className="mt-4" size={24} />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-blue-600 text-white mt-12 p-8 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-bold">Oferta Exclusiva</h3>
          <p className="text-lg mt-2">
            Crie seu site agora e ganhe uma <strong>consultoria gratuita</strong> em marketing digital!
          </p>
          <button className="mt-4 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
            Solicitar Orçamento
          </button>
        </div>
      </main>
    </div>
  );
}