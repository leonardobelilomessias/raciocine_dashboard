import { FormSingIn } from "@/app/ui/components/FormSigin";
import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import { Navbar } from "./Navbar";

export const HeroLogin = () => {
  return (
    <div className="bg-gray-200 min-h-screen">
        <Navbar/>
    <section className="container p-4 flex flex-col   gap-10">
      {/* Título - Comunidade Apartamento na Planta Belo Horizonte */}
      <div className="bg-white p-8 rounded-xl  pb-60 pt-10">

      <div className="text-center lg:text-start bg-white space-y-6 lg:w-full">
        <main className="text-center text-5xl md:text-6xl font-bold">
         <div>

          <h1 className="inline text-center">
            <span className="inline  bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
              Comunidade
            </span>{" "}
            Apartamento
          </h1>{" "}
          na{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Planta
            </span>{" "}
            Minas Gerais
          </h2>
         </div>
        </main>
      </div>
<div className=" flex flex-row  flex-col justify-center lg:flex-row ">
    <div className="flex  min-h-60  flex-1 ">
    <iframe
    className="min-h-60 md:min-h-[420px] xl:min-h-[420px]"
    width={'100%'}
    height={"100%"}
src="https://www.youtube.com/embed/OhagXaxl72k?si=uoYsOfHG1GuVS2NL&amp;controls=0"
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
    </div>


        {/* Descrição e Botões */}
        <div className=" px-5 flex flex-col flex-1  max-w-lg m-auto ">

          <p className="flex">
            Saiba como tornar a jornada do seu apartamento mais prazerosa e sem complicações.
          </p>
          <FormSingIn/>
          <div className="flex flex-col md:flex-row lg:flex-col gap-4 lg:gap-6 mt-6 lg:mt-10 ">

          </div>
        </div>

        {/* Video Section */}
        <div className="">

        </div>
            
      </div>
    
    </div>
    </section>
    </div>
  );
};
