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
    image: "https://github.com/shadcn.png",
    name: "John Doe React",
    userName: "@john_Doe",
    comment: "Nunca vi algo parecido, fui tão bem atendido que já quero comprar outro imóvel! kkk",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "John Doe React",
    userName: "@john_Doe1",
    comment:
      "Realmente cumprem o que promete. Atendimento de ponta a ponta com cordialidade e respeito. Sem aquelas pegadinhas do mercado. Parabéns à Equipe!",
  },

  {
    image: "https://github.com/shadcn.png",
    name: "John Doe React",
    userName: "@john_Doe2",
    comment:
      "As vezes no silêncio da noite... fico imaginando porque não conheci a plataforma antes! Estou Apaixonada!",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "John Doe React",
    userName: "@john_Doe3",
    comment:
      "Na comunidade encontrei pessoas com o mesmo sonho e mesmo propósito. Isso me fortaleceu para conquistar meu sonho da casa própria",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "John Doe React",
    userName: "@john_Doe4",
    comment:
      "A regra é clara... Se não está na comunidade esta perdendo as melhores oportunides.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "John Doe React",
    userName: "@john_Doe5",
    comment:
      "Recomendo a todos iniciantes que estão pedidos no mercado e até quem já participa do mercado imobiliário como investidor. Contúdos exclusivos e personalizados de acordo com o seu momento.",
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
          As Pessoas Estão Amando{" "}
        </span>
        Na Nossa Comunidade
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
      Nossa comunidade é ativa e atualizada. Com informações em tempo real. Tire suas dúvidas, receba dicas e deixe seus depoimentos, para crescimento da comunidade.
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
