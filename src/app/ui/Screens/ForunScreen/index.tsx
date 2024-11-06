'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { axiosApi } from "@/lib/axios/axios";
import { BookText, CalendarDays, Download, MessageCircleQuestion, SquarePlus, TvMinimalPlay } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type PostsForumType={
    title:string
    id:string
    message:string
    created_at:string
}
export function ForumScreen(){
    const [postsForum,setPostsForum] = useState<PostsForumType []>([])
async function getforumPosts(){
    const posts = await axiosApi.get("/api/getProductForumPosts")
    setPostsForum(posts.data)
    console.log(posts.data)
}
    useEffect(()=>{
        getforumPosts()
    },[])
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
        <div className="sm:container  pt-10 mx-2 min-h-[70vh]">
            <Card className="mt-4">
                <CardHeader className="flex flex-row justify-between">
                    <div>
                        <CardTitle className="flex gap-5">
                            <MessageCircleQuestion/>
                            Forum
                        </CardTitle>
                        <CardDescription>
                            Duvidas e resposta.
                        </CardDescription>
                    </div>
                    <Button className="gap-2">
                        <SquarePlus size={16}/>
                        Adicionar Novo     
                    </Button>
                </CardHeader>

                <CardContent>
                <div className="flex sm:flex  w-full flex-wrap gap-2 justify-center m-auto">
                {
                                postsForum.map((element)=>(
                                
                                <Card  key={element.id}  className="w-full ">
                                    <Link href={`/forum/${element.id}`}>
                                    <CardHeader>
                                        <CardDescription className="flex gap-10">
                                            {/* span is used because hydrataton error  if use <p> tag */}
                                            <div className=" md:flex gap-2 mb-4 bg-blue-100">
                                                <Avatar className="w-10 h-10 m-auto ">
                                                    <AvatarImage src="https://github.com/shadcn.png" />
                                                    <AvatarFallback>CN</AvatarFallback>
                                                </Avatar>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="bold text-sm">@usuario</span>
                                                <span className="text-xs">{element?.created_at}</span>
                                            </div>
                                        </CardDescription>
                                    <CardTitle>{element.title}</CardTitle>
                                        <span>{element.message}</span>
                                    </CardHeader>
                                    </Link>
                                    <div key={element.id} className="w-full bg-red-200">
                                
                                    
                                        
                                </div>
                                </Card>
                                ))
                            }


    

                    
                </div>
                    
                </CardContent>
                <CardFooter>
                </CardFooter>
                
            </Card>

        </div>
    )
}