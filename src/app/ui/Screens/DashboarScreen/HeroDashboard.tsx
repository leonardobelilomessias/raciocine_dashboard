import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import img from '@/app/assets/pilot.png'
export function HeroDashboard(){
    return(
        
        <div className="lg:container mt-5">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
        Olá usuário! Temos muitas novidades...
      </h2>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Nossas ferramentas estão disponiveis e atualizadas para o seu uso e obter os melhores resultados.
      </p>
      <div className="mb-6">

      <AspectRatio  ratio={16 / 4} className="bg-muted">
      <Image
        src={img}
        alt="Photo by Drew Beamer"
        fill
        className="h-full w-full rounded-md object-cover"
        />
    </AspectRatio>
    
        </div>
        </div>
    )
}