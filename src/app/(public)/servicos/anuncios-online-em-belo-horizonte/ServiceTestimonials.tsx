import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
      "Meu anúncio online com vocês foi um sucesso! Aumentei minhas vendas em 30% após apenas 2 meses.",
  },
  {
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Rafael Oliveira",
    userName: "@rafael_0live1rabh",
    comment:
      "A equipe de anúncios online de vocês é incrível! Melhorou significativamente minha visibilidade no mercado de BH.",
  },
  {
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    name: "Ana Deitel",
    userName: "@anadeitel_",
    comment:
      "Fiquei impressionada com o atendimento personalizado e eficaz. Meu anúncio online alcançou mais de 10.000 visualizações!",
  },
  {
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    name: "Thiago Pereira",
    userName: "@othiago_pereiraa",
    comment:
      "Vocês entenderam perfeitamente minhas necessidades e criaram um anúncio online que superou minhas expectativas!",
  },
  {
    image: "https://randomuser.me/api/portraits/women/30.jpg",
    name: "Luciana Corina",
    userName: "@luciana.corina",
    comment:
      "A qualidade dos anúncios online e o suporte técnico foram fundamentais para o sucesso da minha campanha em Belo Horizonte.",
  },
  {
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    name: "Eduardo Toves",
    userName: "@eduardo_toves",
    comment:
      "Minha empresa alcançou um aumento significativo nas vendas após utilizar os serviços de anúncios online de vocês. Recomendo!",
  },
];




export const ServiceTestimonials = () => {
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
