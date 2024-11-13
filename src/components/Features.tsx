import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "@/app/assets/growth.png";
import image3 from "@/app/assets/reflecting.png";
import image4 from "@/app/assets/looking-ahead.png";
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
    image: image4,
  },
  {
    title: "Médio e Alto Padrão",
    description:
      "Imóveis com alto valor agregado, comodidades premium e localizações privilegiadas.",
    image: image3,
  },
  {
    title: "Luxo",
    description:
      "Imóveis explendorosos com o mais alto nível de sofisticação. ",
    image: image,
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
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <Image
      
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
