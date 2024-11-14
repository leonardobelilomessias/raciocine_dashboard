import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import cubeLeg from "@/app/assets/people/womanHouse.png";
import woman2 from "@/app/assets/people/woman2.jpg";

import Image from "next/image";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Estatisticas Diárias",
    description:
      "Quadro demonstrativo de estatísticas diários sobre o mercado.",
    icon: <ChartIcon />,
  },
  {
    title: "Perfil de Poder de compra",
    description:
      "Calculo por inteligencia artificial para saber o seu poder de compra.",
    icon: <WalletIcon />,
  },
  {
    title: "Comunidade Ativa",
    description:
      "Acesso a maior comunidade de imóveis na planta do brasil.",
    icon: <MagnifierIcon />,
  },
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Plataforma Exclusiva{" "}
            </span>
            Para Membros
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            Tenha acesso a unica plantaforma personalizada com foco ao cliente do mercado imóbiliario.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
        <div className="relative hidden md:flex h-[600px] w-[700px] ">

        <Image
          fill
          src={woman2}
          style={{objectFit: "cover"}}
          className="w-[300px] md:w-[600px] h-[6000px] lg:w-[600px] object-contain"
          alt="About services"
          />
          </div>
      </div>
    </section>
  );
};
