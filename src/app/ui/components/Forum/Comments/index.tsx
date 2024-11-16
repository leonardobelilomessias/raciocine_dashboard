'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { axiosApi } from "@/lib/axios/axios";
import { Timestamp } from "firebase/firestore";
import { useEffect, useState } from "react";
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
  }
export default function CommentsPost({comments}:{ comments:ICommetsPostForum[]}){

    return(
        <div>

        <p>Comentários</p>
    
        {
            (comments.length>0)&&
            comments.map((item)=>(
                <div key={item.id} className="p-4 bg-sky-50 p-2 mb-4 ">
                <div className=" md:flex gap-2 mb-2 items-center ">
                            <Avatar className="w-8 h-8 ">
                                <AvatarImage src={item.user_avatar} />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <p className="text-sm font-bold text-gray-700">{item.user_name}</p>
                </div>
                <p className="text-sm">{item.message}</p>
            </div>
            ))
        }

        </div>
    )
}