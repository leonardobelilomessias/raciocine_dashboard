import { formatPriceToBRL } from "@/app/util/formatPrice";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { ReactNode } from "react";
import imageHeader from '@/app/assets/looking-ahead.png'
import { Separator } from "@radix-ui/react-dropdown-menu";
import { truncateText } from "@/app/util/textTrincate";
import { BedDouble, Car, Eye, Heart, MapPin, MessageSquareMore, Ruler, ShowerHead } from "lucide-react";
import { IProduct } from "@/app/types/types";
export function ProductCard({product}:{product:IProduct}){
    return(
        <div className="w-[280px]  ">
        <Card className="mb-10 w-[280px]  ">
        <CardHeader className="" style={{borderBottom:'solid', borderBottomColor:"silver", borderBottomWidth:"0.1px", }} >
        <Image alt="image header" src={imageHeader} width={280} height={140} style={{height:140}} />
    
     </CardHeader>
        <div className="flex flex-col w-[280px]  lg:flex-row">
        <div className="p-3"    >
        <CardTitle className="h-[50px]  w-[280px] text-wrap  ">{truncateText(product.title,38)} </CardTitle>
            <div className="flex flex-col w-[280px]  " >
                    <div className="flex">
                        <div className="pt-1">
                        <MapPin width={16} height={16}  className="text-blue-500 text-[0.1rem]"/>    
                        </div>
                        <p className="text-sm m-o pt-1 w-[280px]">
                        {truncateText("São Gabriel - Belo Horizonte",56)}
                        </p>
                    </div>
                    {/* block icons */}
                    <div className="flex flex-col w-full py-4   justify-center mt-2">
                        <div className="flex justify-between w-full m-auto">
                        <div className="flex  -500 flex-1 mr-0.5">
                                <BedDouble className="text-gray-700"/>
                                <p className="mx-1 text-gray-700">2 Quartos</p>
                            </div>
                            <div className="flex  -500 flex-1 mr-0.5">
                                <ShowerHead className="text-gray-700"/>
                                <p className="mx-1 text-gray-700">2 Banheiros</p>
                            </div>
                        </div>
                        <div className="flex justify-between w-full m-auto">
                        <div className="flex  -500 flex-1 mr-0.5">
                                <Car className="text-gray-700"/> 
                                <p  className="mx-1 text-gray-700">2 Garagens</p>
                        </div>
                        <div className="flex  -500 flex-1 mr-0.5">
                                <Ruler className="text-gray-700"/>
                                <p className="mx-1 text-gray-700">226 m²</p>
                            </div>
                        </div>
                    </div>
                    {/* end block icons  */}

                    {/* block butons actions  */}
                    <div className="flex justify-around mt-3 pt-3    w-[250px] " style={{borderTop:'solid', borderTopColor:"silver", borderTopWidth:"0.1px", }}>
                        <div className="flex flex-col     justify-center">
                                <Heart width={30} height={30} className="m-auto text-primaryPalet" />
                            <p className="text-primaryPalet m-auto text-center">
                                Favoritar
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