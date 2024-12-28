import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
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





export const Timer = () => {
  return (
    <section id="testimonials" className="bg-blue-900 flex flex-col md:flex-row  w-screen gap-8 items-center justify-center px-20 py-20 sm:py-20" >
      <div className=" w-1/3 flex flex-col  gap-1 ">
    <p className="text-center text-xl text-white text-border font-bold">Tempo Limitado</p>
    <p className=" text-white text-7xl font-bold text-center">03</p> 
        <div className="flex flex-col ">
            <span className="text-4xl text-white  text-center font-bold">Vagas</span>
            <span className="text-white text-lg font-bold text-center">Disponiveis</span>
        </div>
      </div>
      <div className="flex md:block flex-col">
          <span className="bg-white inline-block shrink self-center  text-center text-blue-800 p-1 text-xs mt-5 rounded-md">Consultória Grátis</span>
          <p className=" text-center md:text-left text-white my-4 font-bold text-3xl md:text-5xl md:h-1/2 ">
              Entre em contato agora e garanta uma vaga.
          </p>
          <Button size={"lg"}>Solicita Consultória Grátis</Button>
      </div>
    </section>
  );
};
