import { formatPriceToBRL } from "@/app/util/formatPrice";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Sparkles, TextSelect } from "lucide-react";
import { IProduct } from "@/app/types/types";
import { listProducts } from "@/lib/firebase/listProducts";
import { ProductCard } from "../../components/ProductCard";
import Link from "next/link";

export async function SelectedContainer(){
  const products = await listProducts()

    return(
        <>
        <Card className="mb-10">
        <CardHeader>
    <CardTitle className="flex"> <Sparkles className="mr-1"/> Perfeitos para você</CardTitle>
    <CardDescription>
        Os calculos são feitos automaticamento por uma inteligência artificial com base nos seus DashboardScreen
        e as informaçoes de mercado 
    </CardDescription>
  </CardHeader>


  <ScrollArea className="w-full h-full overflow-x-auto whitespace-nowrap">
  <div className="flex w-max space-x-4 p-4">

{
  products &&  products.map((item,index)=>(
        

      <ProductCard product={item} key={index}/>
  
  ))
}


<ScrollBar orientation="horizontal"/>
  </div>

    </ScrollArea>

  <CardFooter className="sm:flex p-4 sm:flex-col  justify-between sm:flex-row justify-items-start grid justify-items-start">

  <Link href={"/apartamentos"} className="bg-primaryPalet text-white  rounded p-2 font-medium">ver todos</Link>

  </CardFooter>
        </Card>
        </>
    )
}