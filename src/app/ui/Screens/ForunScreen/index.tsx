
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BookText, CalendarDays, Download, MessageCircleQuestion, TvMinimalPlay } from "lucide-react";
import Image from "next/image";


export function ForumScreen(){
    const elemtsBooks = [{
        title:"Como financiar seu primeiro imovel",link:"/video/aoksd",category:"fin"},
        {title:"Documentos para o financiamento",link:"/video/aoksd", category:"fin"},
        {title:"partamento tipo vs Area Privativa",link:"/video/aoksd", category:"con"},
        {title:"Qual melhor posição do apartamento",link:"/video/aoksd", category:"con"},
        {title:"São gabriel coração de BH",link:"/video/aoksd", category:"rai"},
        {title:"Nova pampulha - perto de tudo ",link:"", category:"rai"},
        {title:"Como fazer uma grana extra para o ape",link:"", category:"dic"},
        {title:"Melhores planos de pagamento",link:"", category:"dic"},
  
  
      ]
    return(
        <div className="sm:container mt-10 mx-2">
            <Card className="mt-4">
                <CardHeader>
                <CardTitle className="flex gap-5">
                    <MessageCircleQuestion/>
                    Forum
                </CardTitle>
                <CardDescription>
                    Duvidas e resposta.
                </CardDescription>
                <div className="flex sm:flex  flex-wrap gap-2 justify-center m-auto">
                {
                                elemtsBooks.map((element)=>(
                                <Card key={element.title}  className="w-full">
                                    <CardHeader>
                                    <CardTitle>{element.title}</CardTitle>
                                        <CardDescription className="flex gap-10">
                                            <span>@usuario</span>
                                            <span>15 de julho às 19:35</span>
                                            <span>test</span>

                                        </CardDescription>
                                    </CardHeader>
                                    <div key={element.title} className="w-full bg-red-200">
                                
                                    
                                        
                                </div>
                                </Card>
                                ))
                            }


    

                    
                </div>
                <CardContent>
                    
                </CardContent>
                </CardHeader>
                <CardFooter>
                </CardFooter>
                
            </Card>

        </div>
    )
}