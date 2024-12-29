import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Seja referência no seu setor",
    description:
      "Modelagem de negócio para aumentar a percepção de valor do publico alvo para o seu negocio.",
  },
  {
    icon: <MapIcon />,
    title: "Foco no mercado mineiro",
    description:
      "Estratégias focadas no comportamento de compra online em Belo Horizonte Minas gerais. ",
  },
  {
    icon: <PlaneIcon />,
    title: "Tecnologia internacional",
    description:
      "Utilização de tecnologias avançadas usadas e testadas internacionalmente.",
  },
  {
    icon: <GiftIcon />,
    title: "Suporte de Ponta a Ponta",
    description:
      "Suporte completo em todas as areas do digital. Sem a necessidade de serviços terceiros.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
      Crescimento {" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
        sustentável {" "}
        </span>
      da sua empresa com o melhor em Tecnologias e Marketing  em Belo Horizonte.
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
      O público mineiro é diferente de qualquer outro do Brail e do mundo.
      Desenvolvemos técnicas e uma estrutura de <strong>marketing digital em belo horizonte</strong> única para os mineiros. 
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
