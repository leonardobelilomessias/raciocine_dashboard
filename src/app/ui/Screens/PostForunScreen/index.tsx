'use client'
import { formatFirebaseDate } from "@/app/util/date";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { axiosApi } from "@/lib/axios/axios";
import { ArrowLeft, BookText, CalendarDays, Download, MessageCircleQuestion, TvMinimalPlay } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type PostsForumType={
    title:string
    id:string
    message:string
    created_at:string
}
export function PostForumScreen({id}:{id:string}){
    const [postForum,setPostForum] = useState<PostsForumType >()
async function getforumPosts(){
    const post = await axiosApi.get(`/api/getPostForumById?id=${id}`)
    setPostForum(post.data)
    console.log(post.data)
}
    useEffect(()=>{
        getforumPosts()
    },[false])

    return(
        <div className="sm:container pt-10 mx-2">
            <Link href={"/forum"} className="text-primaryPalet flex"><ArrowLeft /> Voltar</Link>
            <Card className="mt-4">
                <CardHeader>
                <CardTitle className="flex gap-5">
                    <MessageCircleQuestion/>
                    Forum
                </CardTitle>
                <CardDescription>
                    Duvidas e resposta.
                </CardDescription>
                <div className="flex sm:flex  w-full flex-wrap gap-2 justify-center m-auto">
                {
                                
                                <Card  key={postForum?.id}  className="w-full ">
                                    <CardHeader>
                                        <CardDescription className="flex gap-10">
                                            {/* span is used because hydrataton error  if use <p> tag */}
                                            <div className=" md:flex gap-2 mb-10 bg-blue-100">
                                                <Avatar className="w-10 h-10 m-auto ">
                                                    <AvatarImage src="https://github.com/shadcn.png" />
                                                    <AvatarFallback>CN</AvatarFallback>
                                                </Avatar>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="bold">@usuario</span>
                                                <div>
                                                    <span>Postado em { !!postForum && formatFirebaseDate(postForum?.created_at).date }</span>
                                                    <span> às { !!postForum && formatFirebaseDate(postForum?.created_at).time }</span>
                                                </div>


                                            </div>
                                        </CardDescription>
                                    <CardTitle>{postForum?.title}</CardTitle>
                                            <span>{postForum?.message}</span>
                                    </CardHeader>

                                </Card>
                                
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