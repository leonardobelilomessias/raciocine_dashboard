import { Button } from "@/components/ui/button";
import { Binoculars, Blocks, Brush, ChartArea, ChartBarDecreasing, ChartPie, Flag, Gamepad, Gamepad2, Gauge, Gem, Highlighter, Medal, MessageCircleQuestion, MonitorSmartphone, Search, TowerControl } from "lucide-react";
import Link from "next/link";
import React from "react";

const features = [
  {
  title: "Autoridade",
  description: "Mostre sua expertise de mercado, posicionando-se como uma autoridade em Belo Horizonte.",
  icon: Medal
  },
  {
  title: "Valor",
  description: "Aumente a percepção de valor do seu produto ou serviço, tornando-o objeto de desejo dos clientes.",
  icon: Gem
  },
  {
  title: "Branding",
  description: "Crie uma marca que se torne referência quando seus clientes pensam no seu produto ou serviço em Belo Horizonte.",
  icon: Flag
  },
  {
  title: "Escala",
  description: "Conquiste novos espaços e escale seu negócio para outras localidades ou setores em Belo Horizonte.",
  icon: ChartArea
  },
  {
  title: "Controle",
  description: "Saiba onde, como e quando seus leads estão se convertendo em clientes por meio de métricas de anúncios.",
  icon: Gamepad2
  },
  {
  title: "Previsibilidade",
  description: "Planeje campanhas de marketing digital com base em dados de mercado para garantir melhor eficiência de suas publicidades digitais.",
  icon: Binoculars
  }
  ];
  
  

export function FeacturesSection() {
  return (
    <section className="min-h-screen flex flex-col items-center">
      <main className="container mx-auto py-12 px-6 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center">
          Porque Criar Campanhas de  Publicidade Digital
        </h2>
        <p className="text-lg text-gray-700 mt-4 text-center">
          Alguns dos motivos  para criar uma estratégia de de Publicidade online em Belo Horizonte para seu produto ou serviço.
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
          <Link
            href="https://wa.me/5531986261771?text=Olá! Gostaria de saber mais informações sobre os serviços de anuncios online."

            >
            <Button className="mt-4 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">Solicitar Orçamento</Button>
            
          </Link>
        </div>
      </main>
    </section>
  );
}