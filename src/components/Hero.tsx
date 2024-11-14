import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import Link from "next/link";
// import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-10  md:py-40 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-4xl md:text-6xl font-bold">
          <h1 className="inline">
              A Maior &nbsp;
              &#10;
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Comunidade
            </span>{" "}
          
          </h1>{" "}
          de{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
             Apartamentos na Planta
            </span>{" "}
            do Brasil
          </h2>
        </main>
        <iframe className="w-[320px] md:hidden h-[220px] md:w-[720px] md:h-[385px] lg:w-[590px] lg:h-[345px] "  width="560" height="315" src="https://www.youtube.com/embed/e-VjPNciRT4?si=jgH5uEeBf3QHLGmx" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
        Saiba como tornar a jornada do seu apartamento mais prazerosa e sem complicaçoes.
        </p>

        <div className=" flex gap-4 flex-col md:flex-row ">
        <Link  className="w-full   text-center border-[1px] p-2 rounded border-black text-center text-white bg-black " href={'/entrar'}   >Entrar</Link>

        <Link  className="w-full   text-center border-[1px] p-2 rounded border-black text-center  " href={'/cadastro'}   >
            Cadastrar
            {/* <GitHubLogoIcon className="ml-2 w-5 h-5" /> */}
          </Link>
        </div>
      </div>

      <div className="z-10">
        {/* <HeroCards /> */}
        <iframe className="w-[320px] hidden sm:flex h-[220px] md:w-[720px] md:h-[385px] lg:w-[590px] lg:h-[345px] "  width="560" height="315" src="https://www.youtube.com/embed/e-VjPNciRT4?si=jgH5uEeBf3QHLGmx" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
      </div>

    </section>
  );
};
