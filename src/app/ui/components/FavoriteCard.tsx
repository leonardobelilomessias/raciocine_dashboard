import { formatPriceToBRL } from "@/app/util/formatPrice";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { ReactNode } from "react";
import imageHeader from '@/app/assets/looking-ahead.png'
import { Separator } from "@radix-ui/react-dropdown-menu";
import { truncateText } from "@/app/util/textTrincate";
import { BedDouble, Car, Eye, Heart, MapPin, MessageSquareMore, Ruler, ShowerHead, X } from "lucide-react";
import { IFavorite } from "@/app/types/types";
import { axiosApi } from "@/lib/axios/axios";
export function FavoriteCard({ getFavorites,setFavorite,title, address, price, city, cover,bedrooms,bathrooms,area,garages,description,id, neighborhood,zip, id_favorite}:{getFavorites:()=>Promise<IFavorite[]>,setFavorite:([])=>void,id_favorite:string,title:string, address:string, neighborhood:string, bathrooms:string, bedrooms:string,city:string,area:string,cover:string,description:string,garages:string,price:string|number,zip:string,id:string|undefined}){
    async function deleteFavorite(id_product:string) {
        try{
            await axiosApi.delete(`/api/deleteFavorites?product_id=${id_product}`)
            await getFavorites()
        }
        catch{
            alert("houve um erro")
        }
    }
    return(
        <div className="w-[280px]  ">
        <Card className="mb-10 w-[280px]  ">
        <CardHeader className="" style={{borderBottom:'solid', borderBottomColor:"silver", borderBottomWidth:"0.1px", }} >
        <Image alt="image header" src={cover} width={280} height={140} style={{height:140}} />
    
     </CardHeader>
        <div className="flex flex-col w-[280px]  lg:flex-row">
        <div className="p-3"    >
        <CardTitle className="h-[50px]  w-[280px] text-wrap  ">{truncateText(title,38)} </CardTitle>
            <div className="flex flex-col w-[280px]  " >
                    <div className="flex">
                        <div className="pt-1">
                        <MapPin width={16} height={16}  className="text-blue-500 text-[0.1rem]"/>    
                        </div>
                        <p className="text-sm m-o pt-1 w-[280px]">
                        {truncateText(`${neighborhood} - ${city}`,56)}
                        </p>
                    </div>
                    {/* block icons */}
                    <div className="flex flex-col w-full py-4   justify-center mt-2">
                        <div className="flex justify-between w-full m-auto">
                        <div className="flex  -500 flex-1 mr-0.5">
                                <BedDouble className="text-gray-700"/>
                                <p className="mx-1 text-gray-700">{bedrooms} Quartos</p>
                            </div>
                            <div className="flex  -500 flex-1 mr-0.5">
                                <ShowerHead className="text-gray-700"/>
                                <p className="mx-1 text-gray-700">{bathrooms} Banheiros</p>
                            </div>
                        </div>
                        <div className="flex justify-between w-full m-auto">
                        <div className="flex  -500 flex-1 mr-0.5">
                                <Car className="text-gray-700"/> 
                                <p  className="mx-1 text-gray-700">{garages} Garagens</p>
                        </div>
                        <div className="flex  -500 flex-1 mr-0.5">
                                <Ruler className="text-gray-700"/>
                                <p className="mx-1 text-gray-700">{area} m²</p>
                            </div>
                        </div>
                    </div>
                    {/* end block icons  */}

                    {/* block butons actions  */}
                    <div className="flex justify-around mt-3 pt-3    w-[250px] " style={{borderTop:'solid', borderTopColor:"silver", borderTopWidth:"0.1px", }}>
                        <div onClick={()=>deleteFavorite(id as string)} className="flex flex-col     justify-center">
                                <X width={30} height={30} className="m-auto text-red-500" />
                            <p className=" m-auto text-center">
                                Excluir
                            </p>
                        </div>
                        <div className="flex flex-col     justify-center">
                                <MessageSquareMore  width={30} height={30} className="m-auto text-primaryPalet " />
                            <p className="text-primaryPalet m-auto text-center">
                                Contato
                            </p>
                        </div>
                        <div className="flex flex-col     justify-center">
                                <Eye width={32} height={30} className="m-auto text-primaryPalet" />
                            <p className="text-primaryPalet m-auto text-center">
                                olhadinha
                            </p>
                        </div>
                    </div>
            </div>

        </div>

        </div>
        </Card>
        </div>
    )
}