import { formatPriceToBRL } from "@/app/util/formatPrice";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Download, Heart, Pencil, Rocket, Trash2 } from "lucide-react";
import { FAvoriteCard } from "../../components/FavoriteCard";
import Image from "next/image";

export function ListProductsContainer(){
    return(
        <div className="md:p-10">
        <Card className="mb-10 p-4">
        <CardHeader>
    <CardTitle className="flex" > 
        {/* <Rocket className="mr-1"/> */}
         Todos Produtos</CardTitle>
    <CardDescription>
        Aqui estão a lista de todos os produtos
    </CardDescription>
  </CardHeader>



  <div className="flex flex-col flex-wrap gap-3 m-auto">

{
    [11,2,3,5,5,5,8,69,89].map((ite,index)=>(
        

<div key={index} className="w-full flex flex-row gap-5">

<div className="w-[220px]">
<div className="w-[220px] h-[120px] relative " >
    <Image style={{borderRadius:4}} src="https://github.com/shadcn.png" alt="img" fill />
</div>
</div>

    <div >
        <CardTitle className=" h-[56px]  text-wrap truncate"> titulo do imovel  </CardTitle>
        <div className="flex gap-3">
            <Button className="w-full gap-1 bg-primaryPalet" > <Pencil/> Editar</Button>
            <Button className="w-full gap-1 bg-red-500" > <Trash2/> Apagar</Button>   
        </div>
    </div>
    
</div>    
    ))
}



  </div>



  <CardFooter className="sm:flex p-4 sm:flex-col  justify-center sm:flex-row justify-items-center grid justify-items-center">

<Button className="bg-primaryPalet">Ver Mais</Button>
  </CardFooter>
        </Card>
        </div>
    )
}