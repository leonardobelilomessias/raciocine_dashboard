'use client'
import { formatPriceToBRL } from "@/app/util/formatPrice";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode, useEffect, useState } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Heart, Rocket } from "lucide-react";
import { axiosApi } from "@/lib/axios/axios";
import { IFavorite, IProductResponse } from "@/app/types/types";
import { FavoriteCard } from "../../components/FavoriteCard";
import { SkeletonCardHouse } from "../../components/Skeletons/SkeletonCardHouse";
import { AxiosError } from "axios";

export function FavoritesContainer(){
    const [favorites,setFavorites] = useState([]as IProductResponse[])
    const [load,setLoad] = useState(true)
    async function getFavorites() {
      try{


        setLoad(true)
        const favoriteAxios =  await axiosApi.get("/api/getUserFavorites")
        const favoritesUser =favoriteAxios.data
        setFavorites(favoritesUser)
        console.log(favoritesUser)
      }catch(e){
        console.log(e)
      }finally{
        setLoad(false)
      }
    }    
        useEffect(()=>{
            getFavorites()
        },[])
    return(
        <div className="md:p-10">
        <Card className="mb-10 p-4">
        <CardHeader>
        <CardTitle className="flex" > <Heart className="mr-1"/> Favoritos</CardTitle>
        <CardDescription>Aqui estão a lista dos seus item adicionados como favoritos</CardDescription>
        </CardHeader>
        <CardContent>
        { !!load && <SkeletonCardHouse/>}

          <div className="flex flex-wrap gap-3 m-auto bg-gray-50 p-4 items-center justify-center md:justify-start">
        {
            !!(favorites.length>0)&&
            favorites.map((item,index)=>(
                <FavoriteCard  
                key={item.id}
                getFavorites={getFavorites}
                product={item} 
                />
            ))
        }
        {!(favorites.length>=1) && load && <p>Você ainda não tem favoritos.</p>}
          </div>
        </CardContent>
        <CardFooter className="sm:flex p-4 sm:flex-col  justify-center sm:flex-row justify-items-center grid justify-items-center">
        <Button className="bg-primaryPalet">Ver Mais</Button>
        </CardFooter>
        </Card>
        </div>
    )
}