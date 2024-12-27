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
    title: "Landing Page",
    popular: 0,
    price: 0,
    description:
      "Pagina de Captura de leads. Ideal para cadastrar novos clientes",
      buttonText: "Solicitar oraçamento",
    benefitList: [
      "OnePage",
      "Desing Responsivo",
      "Cadastro de Contatos",
      "Integração Email Marketing",
      "Ads Tracking",
    ],
  },
  {
    title: "Institucional",
    popular: 1,
    price: 50,
    description:
      "Mostre detalhes da sua empresa  ou serviço. Seja encontrado nos mecanismos de busca.",
    buttonText: "Solicitar oraçamento",
    benefitList: [
      "Responsividade",
      "Multiplas Páginas",
      "Blog de conteúdo",
      "Otimização Mecanismos de Buscas",
      "Marketing Tools(analitcs,ads e etc.)",
    ],
  },
  {
    title: "Loja Vitual",
    popular: 0,
    price: 200,
    description:
      " Vendas 24 horas todos os dias. Permita que seus clientes comprem e façam pagamantos online. ",
      buttonText: "Solicitar oraçamento",
    benefitList: [
      "Responsividade",
      "Pagamento Online",
      "Cálculo de frete",
      "Controle de Estoque",
      "Gerenciamento de clientes",
    ],
  },
];

export const PricingSites = () => {
  return (
    <section
      id="pricing"
      className="container "
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Escolha
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Já  Sua  {" "}
        </span>
        Opção de Site
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

                                <Button className="w-full">{pricing.buttonText}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
