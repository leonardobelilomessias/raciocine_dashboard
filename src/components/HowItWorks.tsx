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
    title: "Produtos Selecionados",
    description:
      "Favorite e receba as informações de produtos mais alinhados com seu perfil de compra.",
  },
  {
    icon: <MapIcon />,
    title: "Estratégias de Localização",
    description:
      "Tenha as melhores informações privilegiadas sobre os bairros e cidades. ",
  },
  {
    icon: <PlaneIcon />,
    title: "Lançamentos Exclusivos",
    description:
      "Infomações sobre lançamentos em primeira mão para garantir melhores oportunidades na sua compra",
  },
  {
    icon: <GiftIcon />,
    title: "Bônus e Promoções",
    description:
      "Notificações de preços promocionais e bônus na compra de imóvies",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
      Facilitamos{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
        sua{" "}
        </span>
      jornada da pesquisa até à compra
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
      Tenha em mãos os melhores Recursos para você estar por dentro das novidades do mercados imobiliario. 
      Com especialistas e um ambiente virtual para você interagir em tempo real com uma comunidade ativa.
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
