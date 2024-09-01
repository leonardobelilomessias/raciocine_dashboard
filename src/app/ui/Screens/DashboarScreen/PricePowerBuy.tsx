'use client'
import { formatPriceToBRL } from "@/app/util/formatPrice";
import clsx from "clsx";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export function PricePowerBuy({value}:{value:number}){
    const [powerBuyVisible,setVisiblePowerBuy] = useState(true)

    return(
    <>
    <h3 className="text-primaryPalet text-3xl font-semibold tracking-tight flex items-center gap-2"> 
        {!powerBuyVisible?<Eye onClick={()=>setVisiblePowerBuy(true)}/>:<EyeOff onClick={()=> setVisiblePowerBuy(false)}/>} 
        
        <p  className={clsx("",{"blur-md":powerBuyVisible===true})}>{formatPriceToBRL(value).split(',')[0]}</p>
    </h3>
    </>
    )
}