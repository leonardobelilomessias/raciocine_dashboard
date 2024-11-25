import { formatPriceToBRL } from "@/app/util/formatPrice";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Heart, Rocket } from "lucide-react";
import { ProductCard } from "../../components/ProductCard";
import { IProduct, IProductResponse } from "@/app/types/types";
import { listUserFavorites } from "@/lib/firebase/listProductsUserFavorites";

export async function LaunchContainer({products}:{products:IProductResponse[]|undefined}){
    const favoritesUser =  await listUserFavorites()
    const favoritesList = favoritesUser
    return(
        <div className="md:p-10">
                <Card className="mb-10 p-4">
                <CardHeader>
            <CardTitle className="flex" > <Rocket className="mr-1"/> Todos Lançamentos</CardTitle>
            <CardDescription>
                Aqui estão a lista de todos os produtos
            </CardDescription>
        </CardHeader>



  <div className="flex flex-wrap gap-3 m-auto">

{
    products&&
    products.map((item,index)=>(
        

        <ProductCard favorites={favoritesUser} product={item} key={index}/>
    
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