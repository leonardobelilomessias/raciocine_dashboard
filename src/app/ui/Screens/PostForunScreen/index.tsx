'use client'
import { formatFirebaseDate } from "@/app/util/date";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { axiosApi } from "@/lib/axios/axios";
import { ArrowLeft, BookText, CalendarDays, Download, MessageCircleQuestion, TvMinimalPlay } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { deletePostForum } from "../ForunScreen/functionsForum";
import { DeletePostDialog } from "../../components/Forum/DeletePostDialog";
import { EditPostForumDialog } from "../../components/Forum/EditPostDialog";
import { Button } from "@/components/ui/button";
import FormCommentPostForum from "../../components/Forum/FormCommentPostForum";
import CommentsPost from "../../components/Forum/Comments";
import { Timestamp } from "firebase/firestore";
interface ICommetsPostForum {
    id:string
    user_id:string,
    date:string |Timestamp
    message:string
    user_avatar:string
    user_name:string
    status:string
    id_post_comment:string
    updated_at:string |Timestamp
  }[]
type PostsForumType={
    title:string
    id:string
    message:string
    created_at:string
    owner:boolean
    user_name:string
}
export function PostForumScreen({id}:{id:string}){
    const [comments,setComments] = useState([] as ICommetsPostForum[])
    const [postForum,setPostForum] = useState<PostsForumType >()
    async function getCommentsPost(){
        const  response = await axiosApi.get(`/api/getCommentPostForumById?id=${id}`)
        console.log('commentarios',response.data)
        setComments(response.data)
    }
async function getforumPosts(){
    const post = await axiosApi.get(`/api/getPostForumById?id=${id}`)
    setPostForum(post.data)
    console.log(post.data)
}
    useEffect(()=>{
        getforumPosts()
        getCommentsPost()
    })

    return(
        <div className="sm:container pt-10 mx-2">
            <Link href={"/forum"} className="text-primaryPalet flex"><ArrowLeft /> Voltar</Link>
            <Card className="mt-4 min-h-[80vh]">
                <CardHeader>
                <CardTitle className="flex gap-5">
                    <MessageCircleQuestion/>
                    Forum
                </CardTitle>
                <CardDescription>
                    Duvidas e resposta.
                </CardDescription>
                <div className="flex sm:flex  w-full flex-wrap gap-2 justify-center m-auto">
                { !!postForum &&
                                
                <Card  key={postForum?.id}  className="w-full ">
                    <CardHeader>
                        <CardDescription className="flex gap-10 ">
                            {/* span is used because hydrataton error  if use <p> tag */}
                        <Link href={`/forum/${postForum?.id}`} className="flex gap-3">
                            <div className=" md:flex gap-2 mb-4 ">
                                <Avatar className="w-10 h-10 m-auto ">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </div>
                            <div className="flex flex-col">
                                <span className="bold text-sm font-bold">{postForum?.user_name}</span>
                                <div className="flex gap-1">
                                <span className="text-xs">criado em { formatFirebaseDate(postForum?.created_at).date}</span>

                                    <span className="text-xs"> as {formatFirebaseDate(postForum?.created_at).time}</span>
                                </div>
                            </div>
                    </Link>
                    {
                        postForum?.owner&&
                        <div  className=" flex flex-1 justify-end gap-2 mr-8">
                                <DeletePostDialog getforumPosts={getforumPosts} deletePostForum={deletePostForum} id={postForum.id} owner={postForum.owner} />
                                <EditPostForumDialog post={postForum} setPostForum={setPostForum} />
                        </div>
                    }
                        </CardDescription>
                        <CardTitle>{postForum?.title}</CardTitle>
                            <span>{postForum?.message}</span>
                    </CardHeader>
                    <div key={postForum?.id} className="w-full bg-red-200">                                                
                    </div>
                </Card>
                                
                }
                </div>
                <FormCommentPostForum getCommentsPost={getCommentsPost}  id_post_comment={id}  user_avatar="https://github.com/shadcn.png"  user_id="kZrx4yJpIWZly1SLwZvlpHZNIcs1" user_name="usuario_teste"/>
                <CommentsPost  comments={comments} />
                </CardHeader>
            </Card>

        </div>
    )
}