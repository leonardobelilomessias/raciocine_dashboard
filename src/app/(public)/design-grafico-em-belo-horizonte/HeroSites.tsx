import { Button } from "../../../components/ui/button";
import { buttonVariants } from "../../../components/ui/button";
import { HeroCards } from "../../../components/HeroCards";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
// import { GitHubLogoIcon } from "@radix-ui/react-icons";
import LogoBrain from '@/app/assets/logos/brain_logo.png'
import Image from "next/image";

export const HeroSites = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-10 md:py-40 gap-10 ">
    <Image src={LogoBrain} alt="logo raciocine" className="absolute right-40 top-10 opacity-[6%] z-0 md:opacity-20"/>
      <div className="text-center lg:text-start space-y-6 z-10">
        <main className="text-4xl md:text-6xl font-bold">
          <h1 className="inline">
            A Melhor  &nbsp; &#10;
            <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
              
              Empresa
            </span>{" "}
          </h1>{" "}
          de{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#0064e9] text-transparent bg-clip-text">
            Design Gráfico em Belo Horizonte
            </span>{" "}  Minas Gerais.
          </h2>
        </main>
        
        {/* Vídeo do YouTube */}
        <iframe
          className="w-[320px] md:hidden h-[220px] md:w-[720px] md:h-[385px] lg:w-[590px] lg:h-[345px]"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/e-VjPNciRT4?si=jgH5uEeBf3QHLGmx"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>

        {/* Descrição otimizada para SEO */}
        <p>Crie um site profissional em Belo Horizonte e transforme seu negócio com nossas soluções de criação de sites personalizados. Nossa equipe de especialistas em desenvolvimento web e marketing digital em Belo Horizonte ajuda empresas mineiras a alcançar mais clientes, expandir sua presença online e aumentar conversões.</p>



        {/* Botões de CTA */}
        <div className="flex gap-4 flex-col md:flex-row">
          <Link
            className="w-full flex gap-2 text-center border-[1px] p-2 rounded border-black text-center text-white bg-black items-center align-center justify-center"
            href="https://wa.me/5531986261771?text=Olá! Gostaria de saber mais informações sobre os serviços de criação de sites."
          >
            <FaWhatsapp size={24}/>
            Chamar no Whatsapp 
          </Link>

          <Link
            className="w-full text-center border-[1px] p-2 rounded border-black text-center"
            href={'/consultoria-digital-em-belo-horizonte'}
          >
            Solicitar consultoria (Gratis)
          </Link>
        </div>
      </div>

      <div className="z-10">
        {/* Imagem ou Cards adicionais (comentado) */}
        {/* <HeroCards /> */}
        
        {/* Vídeo do YouTube */}
        <iframe
          className="w-[320px] hidden sm:flex h-[220px] md:w-[720px] md:h-[385px] lg:w-[590px] lg:h-[345px]"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/e-VjPNciRT4?si=jgH5uEeBf3QHLGmx"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </section>
  );
};
