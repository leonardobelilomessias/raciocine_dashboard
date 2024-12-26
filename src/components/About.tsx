import { Statistics } from "./Statistics";
import pilot from "@/app/assets/images/Home/sanpedro.png";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col items-center md:flex-row gap-8 md:gap-12">
          <Image
      
            src={pilot }
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                Fazemos Parte {" "}
                </span>
                San Pedro Valley Startups de Belo Horizonte
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
              Somos Uma empresa cadastrada no hall das maiores startups de Belo Horizonte Minas Gerais.
              </p>
            </div>

            {/* <Statistics /> */}
            <Link target="_blank"  className=" bg-white flex gap-1 border rounded m-4 p-2 max-w-72"  href={"https://sanpedrovalley.org.br/"}>
            <p>Conheça o San Pedro Valley </p>
            <ArrowRight/>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
