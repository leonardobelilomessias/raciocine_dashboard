'use client'
import { truncateText } from "@/app/util/textTrincate";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import clsx from "clsx";
import { useState } from "react";

export function SupportCard({title, message, time, status}:{title:string, message:string, time?:string, status:'awaiting'|'ansered'}){
    const [showText,setShowText]= useState(false)
    const statusMap={
        'awaiting':'Aguardando Resposta',
        'ansered':'Respondido'
    }
    return(
        <div className=" max-w-[300px] min-w-[300px] ">
            <Card className="relative  min-h-[200px] ">
                <CardHeader>
                <Badge 
                
                className={clsx("bg-primaryPalet  text-center block absolute right-2 top-2 truncate",{
                    "bg-green-500  text-center block absolute right-2 top-2 truncate": status==="ansered"
                })}>{statusMap[status]}</Badge>
                    <p className="text-wrap font-bold truncate mt-3 text-gray-900">
                    {title}
                    </p>
                </CardHeader>
                <CardContent>
                    { !showText?<div>
                        {truncateText(
                            
                            `   ${message}
                            `,50)}
                            <p className="text-primaryPalet" onClick={()=>setShowText(true)}>ver mais</p>
                        </div>
                        :
                        <div>
                        {
                            
                            `   ${message}
                            `}
                            <p className="text-primaryPalet" onClick={()=>setShowText(false)}>ver menos</p>
                        </div>
                        }

                </CardContent>
            </Card>
        </div>)
}
    