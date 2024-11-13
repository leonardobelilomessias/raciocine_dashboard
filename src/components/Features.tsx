import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import mcmv from "@/app/assets/houses/mcmv.webp";
import medio from "@/app/assets/houses/medio.webp";
import luxo from "@/app/assets/houses/luxo.webp";
import Image, { StaticImageData } from "next/image";

interface FeatureProps {
  title: string;
  description: string;
  image: string | StaticImageData;
}

const features: FeatureProps[] = [
  {
    title: "Popular",
    description:
      "Imóveis financiados pela caixa econõmica federal com direito a subsidio do governo e financiamento facilitado.",
    image: mcmv,
  },
  {
    title: "Médio e Alto Padrão",
    description:
      "Imóveis com alto valor agregado, comodidades premium , localizações privilegiadas e  oportunidades de valorização.",
    image: medio,
  },
  {
    title: "Luxo",
    description:
      "Imóveis esplendorosos com o mais alto nível de sofisticação. Arquiteturas deslumbrantes e imponetes com o apíce da elegância ",
    image: luxo,
  },
];

const featureList: string[] = [
  "Financiamento",
  "Entrada Facilitada",
  "Melhores Localizações",
  "Comodidades",
  "Projetos Modernos",
  "Alta valorização",
  "Lazer completo",
  "Conforto",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Lançamentos{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          em Todos Seguimentos do Mercado
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
        <div className="border rounded" key={title}>

            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent className="min-h-[93px]">{description}</CardContent>

    
            <div className="relative w-full h-[300px]">

              <Image
              sizes="(max-width: 768px) 100vw, 33vw"

              fill
              objectFit="cover"
              src={image}
              alt="About feature"
              className="w-full h-[100px] lg:w-[300px] mx-auto"
              />
              </div>
  
        </div>
        ))}
      </div>
    </section>
  );
};
