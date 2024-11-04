'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { axiosApi } from "@/lib/axios/axios";
import { BookText, CalendarDays, Download, MessageCircleQuestion, TvMinimalPlay } from "lucide-react";
import Image from "next/image";
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
    },[])

    return(
        <div className="sm:container pt-10 mx-2">
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
                                    <CardTitle>{postForum?.title}</CardTitle>
                                        <CardDescription className="flex gap-10">
                                            {/* span is used because hydrataton error  if use <p> tag */}
                                            <span>@usuario</span>
                                            <span>{postForum?.created_at}</span>
                                            <span>test</span>
                                        </CardDescription>
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