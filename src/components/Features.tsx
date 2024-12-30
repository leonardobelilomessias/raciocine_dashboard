import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import sitesImage from "@/app/assets/images/Home/ecommerce2.webp";
import TrafegoImage from "@/app/assets/images/Home/trafego6.webp";
import consultImage from "@/app/assets/images/Home/bussinesswoman2.webp";
import CulsttechImage from "@/app/assets/images/Home/developer.webp"
import Image, { StaticImageData } from "next/image";

interface FeatureProps {
  title: string;
  description: string;
  image: string | StaticImageData;
}

const features: FeatureProps[] = [
  {
    title: "Desenvolvimento de Sitemas",
    description:
      "Deixe os detalhes técnicos conosco; cuidamos da configuração completa do seu site ou loja virtual, para que você possa focar no crescimento do seu negócio. ",
    image: sitesImage,
  },
  {
    title: "Anúncios Online",
    description:
      "Maximize o impacto do seu conteúdo . Com estratégias de segmentação precisas, entregamos suas mensagens para o público certo, no momento certo. ",
    image: TrafegoImage,
  },
  {
    title: "Design e conteúdo",
    description:
      "Criação de criativos para encantar seus cliente atráves de design moderno e alinhado com a identidade do seu negócio. ",
    image: CulsttechImage,
  },
];

const featureList: string[] = [
  "Funil de Vendas",
  "Ecommerce",
  "SEO",
  "Gerenciamento de Tráfego",
  "Desenvolvimento de Software",
  "Social media",
  "Copywrite",
  "Filmmaker",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Tudo em um {" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
        único serviço
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
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 33vw"

              fill
              style={{objectFit: "cover"}}
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
