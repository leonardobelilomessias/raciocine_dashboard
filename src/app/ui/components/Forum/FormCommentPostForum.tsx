'use client'
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { axiosApi } from "@/lib/axios/axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {z} from 'zod'

const formSchema = z.object({
    message: z.string().min(1,{message:"O Campo de mensagem não pode estar vazio"}),
  })
export default function FormCommentPostForum({ user_name, user_id,user_avatar,id_post_comment,getCommentsPost}:{ user_name:string,  user_avatar:string,user_id:string,id_post_comment:string,getCommentsPost:()=>Promise<void>}){
    const [idPost,setIdPost] = useState("")
    const[load,setLoad] = useState(false)
    const [created,setCreated] = useState(false)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        
        defaultValues: {
            message:"",
        },
        
      })
      async   function onSubmit(values: z.infer<typeof formSchema>) {
        const newComment = { message:values.message,user_name, user_id,user_avatar,id_post_comment}
        
        try{
            setLoad(true)
            const responseComment = await axiosApi.post('/api/createCommentPostForum',{comment:newComment})
            await getCommentsPost()
            // const postForum ={message:values.message,title:values.title}
            // const responsePost = await axiosApi.post("/api/updatePostForum",{post:{id:post.id, user_name:post.user_name,created_at:post.created_at,...postForum}})
            // const {idPostCreated} = responsePost.data
            // const response =await axiosApi.get(`/api/getPostForumById?id=${post.id}`)
            // setIdPost(idPostCreated)
            // setPostForum(response.data)
            // setCreated(true)
            form.reset()
        }catch{
            alert("não foi possivel criar a postagem")
        }
        finally{
            setLoad(false)
        }
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
  
      }
    return(
    <div className="w-full  p-2 gap-2">
    <Form {...form}>

        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                              <FormItem>
                              <FormControl>
                              <Textarea className="border rounded w-full p-2 text-sm h-20 mb-1" placeholder="Deixe um comentario na postagem.."  {...field} />
                              </FormControl>
                              <FormMessage />
                          </FormItem>
                          )}
                          />
        {    !load&& <Button className="my-1">Comentar</Button>  }
        {    load&& <Button className="my-1" disabled={true} > <Loader2 className="animate-spin" />Comentando </Button>  }                  

        </form>
        </Form>
    </div>
    )
}