import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Configuração de Campanhas",
    popular: 0,
    price: 0,
    description:
      "Configuração de ecossistemas para veiculação de anúncios",
      buttonText: "Solicitar oraçamento",
    benefitList: [
      "Configuração gerenciado de anúncios",
      "Criação Meta Pixel",
      "Implementação Google Tag Manage",
      "Criação Funil de vendas",
      "Ads Tracking",
    ],
  },
  {
    title: "Criação de Criativos",
    popular: 0,
    price: 50,
    description:
      "Peças publicitárias para alcance de audiência e público definido.",
    buttonText: "Solicitar oraçamento",
    benefitList: [
      "Design de criativo",
      "Copywrite",
      "Testes A/B",
      "Planejamento de veiculação",
      "Seguimentação de midias",
    ],
  },
  {
    title: "Gerenciamento",
    popular: 0,
    price: 200,
    description:
      " Monitoramento de Resultados e Otimização de Campanhas.",
      buttonText: "Solicitar oraçamento",
    benefitList: [
      "Analise diária",
      "Exploraçao de oportunidade",
      "Refinamento de Campanha",
      "Configuraçao de Remarketing",
      "Relatórios semanais",
    ],
  },
];

export const ProductDelivery = () => {
  return (
    <section
      id="pricing"
      className="container  my-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Saiba
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          oque  {" "}
        </span>
        Nós Te Entragamos
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Saiba detalhes da entrega do servico de anúncios online para sua empresa em Belo Horizonte.
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge
                    variant="secondary"
                    className="text-sm text-primary"
                  >
                    Mais popular
                  </Badge>
                ) : null}
              </CardTitle>
              {/* <div>
                <span className="text-3xl font-bold">R${pricing.price}</span>
                <span className="text-muted-foreground"> /mês</span>
              </div> */}

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span
                  key={benefit}
                  className="flex"
                  >
                    <Check className="text-green-500" />{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
                  
                  
                          
              </div>
            </CardFooter>
            <CardFooter>

                                {/* <Button className="w-full">{pricing.buttonText}</Button> */}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
