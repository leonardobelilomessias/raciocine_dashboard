import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Carla Silva",
    userName: "@carlassilva_",
    comment:
      "Contratei os serviços de software e marketing e fiquei impressionada com a qualidade e o comprometimento. A equipe é incrível!",
  },
  {
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Rafael Oliveira",
    userName: "@rafael_0live1rabh",
    comment:
      "Eles transformaram completamente a presença online da minha empresa. Resultados que superaram todas as expectativas!",
  },
  {
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    name: "Ana  Deitel",
    userName: "@anadeitel_",
    comment:
      "Desde o primeiro contato até a entrega do projeto, o atendimento foi impecável. A melhor escolha em Belo Horizonte!",
  },
  {
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    name: "Thiago Pereira",
    userName: "@othiago_pereiraa",
    comment:
      "A expertise dessa equipe em software e marketing é impressionante. Me ajudaram a alcançar novos patamares no mercado.",
  },
  {
    image: "https://randomuser.me/api/portraits/women/30.jpg",
    name: "Luciana Corina",
    userName: "@luciana.corina",
    comment:
      "Além de profissionais, são extremamente criativos e comprometidos. Recomendo a todos que buscam inovação e qualidade!",
  },
  {
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    name: "Eduardo Toves",
    userName: "@eduardo_toves",
    comment:
      "Não conhecia uma empresa que unisse tão bem tecnologia e marketing. Eles realmente sabem o que estão fazendo!",
  },
];



export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Descrubra o que
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Nossos Clientes{" "}
        </span>
        dizem Sobre Nossos Serviços
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
      
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt=""
                    src={image}
                    loading="lazy"
                  />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
