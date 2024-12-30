import { Button } from "@/components/ui/button";
import { LucideProps } from "lucide-react";
import Link from "next/link";
import React from "react";


  
  type beneficiesType = {
    title:string
    description:string
    beneficies:{
      title:string
      description:string
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
    }[]
  }
export function BeneficiesSectionOne({data}:{data:beneficiesType}) {
  return (
    <section className="min-h-screen flex flex-col items-center">
      <main className="container mx-auto py-12 px-6 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center">
          {data.title}
        </h2>
        <p className="text-lg text-gray-700 mt-4 text-center">
          {data.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {data.beneficies.map((item, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <item.icon className="mt-4" size={24} />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
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