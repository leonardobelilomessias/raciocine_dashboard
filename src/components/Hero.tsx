import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
// import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-10 md:py-40 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-4xl md:text-6xl font-bold">
          <h1 className="inline">
            Especialistas em&nbsp; &#10;
            <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
              Software
            </span>{" "}
          </h1>{" "}
          e{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#0064e9] text-transparent bg-clip-text">
              Marketing Digital
            </span>{" "} em Belo Horizonte, Minas Gerais.
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
        <p>Transforme seu negócio com estratégias de <strong>software</strong>  e <strong>Marketing Digital em Belo Horizonte</strong>. Ajudamos empresas mineiras a alcançar mais clientes e expandir sua presença online.</p>



        {/* Botões de CTA */}
        <div className="flex gap-4 flex-col md:flex-row">
          <Link
            className="w-full flex gap-2 text-center border-[1px] p-2 rounded border-black text-center text-white bg-black items-center align-center justify-center"
            href="https://wa.me/5531986261771?text=Olá! Gostaria de saber mais informações sobre os serviços."
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
