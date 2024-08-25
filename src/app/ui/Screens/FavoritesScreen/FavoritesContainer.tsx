import { formatPriceToBRL } from "@/app/util/formatPrice";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Heart, Rocket } from "lucide-react";
import { FAvoriteCard } from "../../components/FavoriteCard";

export function FavoritesContainer(){
    return(
        <div className="md:p-10">
        <Card className="mb-10 p-4">
        <CardHeader>
    <CardTitle className="flex" > <Heart className="mr-1"/> Favoritos</CardTitle>
    <CardDescription>
        Aqui estão a lista dos seus item adicionados como favoritos
    </CardDescription>
  </CardHeader>



  <div className="flex flex-wrap gap-3 m-auto">

{
    [11,2,3,5,5,5,8,69,89].map((ite,index)=>(
        

        <FAvoriteCard key={index}/>
    
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