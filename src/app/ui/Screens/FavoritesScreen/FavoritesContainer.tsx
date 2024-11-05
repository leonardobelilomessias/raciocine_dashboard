'use client'
import { formatPriceToBRL } from "@/app/util/formatPrice";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode, useEffect, useState } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Heart, Rocket } from "lucide-react";
import { axiosApi } from "@/lib/axios/axios";
import { FavoriteCard } from "../../components/FavoriteCard";
import { IFavorite } from "@/app/types/types";

export function FavoritesContainer(){
    const [favorites,setFavorites] = useState([]as IFavorite[])
    async function getFavorites():Promise<IFavorite[]> {
        const favoriteAxios =  await axiosApi.get("/api/getUserFavorites")
        const favoritesUser =favoriteAxios.data
        setFavorites(favoritesUser)
        console.log(favoritesUser)
        return favoritesUser as IFavorite[]
        
    }    
        useEffect(()=>{
            getFavorites()
        },[])
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
    favorites.map((item,index)=>(
        <FavoriteCard  
        key={item.id_favorite}
        setFavorite={setFavorites}
        getFavorites={getFavorites}
        address={item.address} 
        id_favorite={item.id_favorite}
        area={item.area}
        bathrooms={item.bedrooms}
        bedrooms={item.bedrooms}
        city={item.city}
        cover={item.cover}
        description={item.description}
        garages={item.garages}
        neighborhood={item.neighborhood}
        price={item.price} 
        title={item.title}
        zip={item.zip}
        id={item.id}    
    />
    
    ))
}


{!(favorites.length>=1) && <p>Você ainda não tem favoritos.</p>}
  </div>



  <CardFooter className="sm:flex p-4 sm:flex-col  justify-center sm:flex-row justify-items-center grid justify-items-center">

<Button className="bg-primaryPalet">Ver Mais</Button>
  </CardFooter>
        </Card>
        </div>
    )
}