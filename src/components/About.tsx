import { Statistics } from "./Statistics";
import pilot from "@/app/assets/pilot.png";
import Image from "next/image";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <Image
      
            src={pilot }
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                Tudo que {" "}
                </span>
                você precisa para a melhor decisão da sua vida
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
              Os melhores Recursos e ferramentas do mercados imobiliário. Com especialistas e um ambiente virtual para você interagir em tempo real com uma comunidade ativa.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
