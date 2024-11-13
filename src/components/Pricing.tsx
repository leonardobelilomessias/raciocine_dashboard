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
    title: "Grátis",
    popular: 0,
    price: 0,
    description:
      "Comece sua jornada da pesquisa até a compra agora mesmo sem qualquer custo.",
    buttonText: "Começar Agora",
    benefitList: [
      "Análise de Poder de Compra",
      "Últimos Lançamentos",
      "Fichas técnicas completas",
      "Acesso a Aulas Exclusivas",
      "Acesso a Comunidade",
    ],
  },
  {
    title: "Premium",
    popular: 1,
    price: 50,
    description:
      "Evolua e Acesse as melhores ferramentas e profissionais do mercado.",
    buttonText: "Fazer Inscrição",
    benefitList: [
      "Acesso a pré Lançamentos",
      "Estatégia de mercado",
      "2 Créditos em consultória",
      "Prioridade no Suporte",
      "Conteúdo Premium",
    ],
  },
  {
    title: "Consultoria",
    popular: 0,
    price: 200,
    description:
      "Avance e estaja na frente com os melhores profissionais do mercado com atendimento exclusivo e personalizado",
    buttonText: "Contatar Consultoria",
    benefitList: [
      "Acesso a hall de investidores",
      "Personal Consult",
      "Ferramentas em inteligência artifícial",
      "Suporte exclusivo",
      "5 creditos em consultória",
    ],
  },
];

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Garanta
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Já  Seu {" "}
        </span>
        Accesso
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Escolha o melhor modalidade que te atende na sua jornada de mercado.
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
                    Most popular
                  </Badge>
                ) : null}
              </CardTitle>
              <div>
                <span className="text-3xl font-bold">R${pricing.price}</span>
                <span className="text-muted-foreground"> /mês</span>
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button className="w-full">{pricing.buttonText}</Button>
            </CardContent>

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
          </Card>
        ))}
      </div>
    </section>
  );
};
