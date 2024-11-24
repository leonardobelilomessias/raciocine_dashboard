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
import useSWR from 'swr'

type FetcherArgs = [input: RequestInfo | URL, init?: RequestInit];
async function fetcher<T>(input: RequestInfo | URL, init?: RequestInit): Promise<T> {
  return fetch(input, init)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => data as T);
}
export function FavoritesContainer(){
  const { data, error, isLoading } = useSWR('/api/getUserFavorites', fetcher) 
  const dataFavorites = data as IProductResponse[]
    return(
        <div className="md:p-10">
        <Card className="mb-10 p-4">
        <CardHeader>
        <CardTitle className="flex" > <Heart className="mr-1"/> Favoritos</CardTitle>
        <CardDescription>Aqui estão a lista dos seus item adicionados como favoritos</CardDescription>
        </CardHeader>
        <CardContent>
        { !!isLoading && <SkeletonCardHouse/>}

          <div className="flex flex-wrap gap-3 m-auto bg-gray-50 p-4 items-center justify-center md:justify-start">
        {
          !!dataFavorites &&  !!(dataFavorites.length>0)&&
          dataFavorites.map((item,index)=>(
                <FavoriteCard  
                key={item.id}
                product={item} 
                />
            ))
        }
        {!!dataFavorites && !(dataFavorites.length>=1) && !isLoading && <p>Você ainda não tem favoritos.</p>}
          </div>
        </CardContent>
        <CardFooter className="sm:flex p-4 sm:flex-col  justify-center sm:flex-row justify-items-center grid justify-items-center">
        <Button className="bg-primaryPalet">Ver Mais</Button>
        </CardFooter>
        </Card>
        </div>
    )
}