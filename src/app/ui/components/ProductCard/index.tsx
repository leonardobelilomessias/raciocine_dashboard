
import { formatPriceToBRL } from "@/app/util/formatPrice";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { ReactNode, useState } from "react";
import imageHeader from '@/app/assets/looking-ahead.png'
import { Separator } from "@radix-ui/react-dropdown-menu";
import { truncateText } from "@/app/util/textTrincate";
import { BedDouble, Car, Eye, Heart, MapPin, MessageSquareMore, Ruler, ShowerHead } from "lucide-react";
import { IProduct } from "@/app/types/types";
import { FooterProductCard } from "./FooterProductCard";
import Link from "next/link";
export function ProductCard({product}:{product:IProduct}){

    return(
        <div className="w-[280px]  ">
        <Card className="mb-10 w-[280px]  ">
        <Link href={`/imovel/${product.id}`}>
        <CardHeader className="" style={{borderBottom:'solid', borderBottomColor:"silver", borderBottomWidth:"0.1px", }} >
        <Image alt="image header" src={product.cover} width={280} height={140} style={{height:140}} />
     </CardHeader>
    </Link>
        <div className="flex flex-col w-[280px]  lg:flex-row">
        <div className="p-3"    >
        <Link href={`/imovel/${product.id}`}>
        <CardTitle className="h-[50px]  w-[280px] text-wrap  ">{truncateText(product.title,38)} </CardTitle>
        </Link>
            <div className="flex flex-col w-[280px]  " >
                    <div className="flex">
                        <div className="pt-1">
                        <MapPin width={16} height={16}  className="text-blue-500 text-[0.1rem]"/>    
                        </div>
                        <p className="text-sm m-o pt-1 w-[280px]">
                        {truncateText(`${product.neighborhood} - ${product.city}`,56)}
                        </p>
                    </div>
                    {/* block icons */}
                    <div className="flex flex-col w-full py-4   justify-center mt-2">
                        <div className="flex justify-between w-full m-auto">
                        <div className="flex  -500 flex-1 mr-0.5">
                                <BedDouble className="text-gray-700"/>
                                <p className="mx-1 text-gray-700">{product.bedrooms} Quartos</p>
                            </div>
                            <div className="flex  -500 flex-1 mr-0.5">
                                <ShowerHead className="text-gray-700"/>
                                <p className="mx-1 text-gray-700">{product.bathrooms} Banheiros</p>
                            </div>
                        </div>
                        <div className="flex justify-between w-full m-auto">
                        <div className="flex  -500 flex-1 mr-0.5">
                                <Car className="text-gray-700"/> 
                                <p  className="mx-1 text-gray-700">{product.garages} Garagens</p>
                        </div>
                        <div className="flex  -500 flex-1 mr-0.5">
                                <Ruler className="text-gray-700"/>
                                <p className="mx-1 text-gray-700">{product.area} m²</p>
                            </div>
                        </div>
                    </div>
                    {/* end block icons  */}

                    {/* block butons actions  */}
                    <FooterProductCard  address={product.address} 
                    amenities={product.amenities}
                    area={product.area}
                    bathrooms={product.bedrooms}
                    bedrooms={product.bedrooms}
                    city={product.city}
                    cover={product.cover}
                    description={product.description}
                    garages={product.garages}
                    neighborhood={product.neighborhood}
                    price={product.price} 
                    title={product.title}
                    zip={product.zip}
                    id={product.id}
                    

                    />
            </div>

        </div>

        </div>
        </Card>
        </div>
    )
}