'use client'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CalendarDays, ThumbsUp, TvMinimalPlay } from "lucide-react";
import { VideoAccordion } from "./VideoAcordion";
import { VideoPlayer } from "../../components/Videoplayer";
import Link from "next/link";
import { IoMdThumbsDown, IoMdThumbsUp } from "react-icons/io";
import { FiThumbsUp } from "react-icons/fi";
import { LiaThumbsDown, LiaThumbsUp } from "react-icons/lia";
import { useState } from "react";
export function VideoScreen({id}:{id:string}){
    return(
        <div className="sm:container pt-10 mx-2">
            <Link href={'/videos'} className="flex text-primaryPalet  gap-2">
                <ArrowLeft/>
            
                voltar para videos
            </Link>
            <Card className="mt-4">
                <CardHeader>
                <CardTitle className="flex gap-5">
                    <TvMinimalPlay/>
                    Exemplo titulo do video
                </CardTitle>
                <CardDescription>
                    Melhores videos para você está por dentro do tudo!
                </CardDescription>
                <div className="flex gap-2 md:flex-row flex-col md:flex-wrap " >
                    <div className='flex flex-col flex-1 sm:min-w-[800px]  md:max-w-[700px]'>
                        <VideoPlayer id={id}/>
                        <div className="p-4 flex justify-between">
                            <p className="text-sm ">20085 Visualizações</p>
                            <div className="mx-4">
                                <LikeVideo/>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 border rounded">
                    <CardContent>
                        <VideoAccordion id={id} />
                    </CardContent>
                    </div>
                </div>
                </CardHeader>
                <CardFooter>
                </CardFooter>
                
            </Card>

        </div>
    )
}

function LikeVideo(){
    const [isLiked,setisLiked] = useState(false)
    return(
        <div className="flex items-center"  onClick={()=>setisLiked(!isLiked)}>
            <p className="text-sm">20085</p>
            {isLiked&&
            <div>
                <IoMdThumbsUp size={24}/>
            </div>}
{           !isLiked&& <div>
                <LiaThumbsUp size={24} />
            </div>}
        </div>
    )
}