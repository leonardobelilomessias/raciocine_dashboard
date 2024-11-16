'use client'
import { z } from "zod"
import {  useForm } from "react-hook-form";
import { FormField, FormItem, FormControl, FormMessage, Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { axiosApi } from "@/lib/axios/axios";
import {  CircleCheck, Loader2, MessageCircleQuestion, Pencil, SquarePlus, Trash2, } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea";
import { formatFirebaseDate } from "@/app/util/date";
import { GiConfirmed } from "react-icons/gi";
import { id } from "date-fns/locale";
type PostsForumType={
    title:string
    id:string
    message:string
    created_at:string
    user_name:string
    owner:boolean
}

const formSchema = z.object({
  title:z.string().min(1,{message:"O Titulo não pode estar vazio"}),
  message: z.string().min(1,{message:"O Campo de mensagem não pode estar vazio"}),
})

export function EditPostForumDialog({setPostForum, post}:{setPostForum:(post:PostsForumType)=>void,post:PostsForumType}) {
  const [idPost,setIdPost] = useState("")
  const[load,setLoad] = useState(false)
  const [created,setCreated] = useState(false)
  const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
          title: post.title,
          message:post.message,
      },
    })
    async   function onSubmit(values: z.infer<typeof formSchema>) {
      console.log(values)
      try{
          setLoad(true)
          const postForum ={message:values.message,title:values.title}
          const responsePost = await axiosApi.post("/api/updatePostForum",{post:{id:post.id, user_name:post.user_name,created_at:post.created_at,...postForum}})
          const {idPostCreated} = responsePost.data
          const response =await axiosApi.get(`/api/getPostForumById?id=${post.id}`)
          setIdPost(idPostCreated)
          setPostForum(response.data)
          setCreated(true)
      }catch{
          alert("não foi possivel criar a postagem")
      }
      finally{
          setLoad(false)
      }
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      console.log(values)

    }
    return (
        
        <Dialog>
      <DialogTrigger asChild>
      <div className="gap-2">
        <Pencil size={16}/>
      </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
{            
        !created &&        
       <div>
        <DialogHeader>
          <DialogTitle>Editar Postagem</DialogTitle>
          <DialogDescription>
            Edite sua mensagem para que ela seja atualizada no forum.
          </DialogDescription>
        </DialogHeader>
  <Form {...form}  >
      <form onSubmit={form.handleSubmit(onSubmit)}>

      
                  <Label htmlFor="title" className="">
                  Titulo {}
                  </Label>
                  <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                          <FormItem>
                  
                      <FormControl>
                          <Input placeholder="Escreva seu titulo" {...field} />
                      </FormControl>

                      <FormMessage />
                      </FormItem>
                  )}
                  />
          
                      <Label htmlFor="message" className="">
                          Mensagem
                      </Label>
                      <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                              <FormItem>
                              <FormControl>
                              <Textarea placeholder="Escreva sua mensagem" rows={12} {...field} />
                              </FormControl>
                              <FormMessage />
                          </FormItem>
                          )}
                          />
              <div className="my-3">
                  <Button type="submit" disabled={!!load}>
                  {!!load &&<Loader2 className="animate-spin" />}

                      {!load && "Salvar"}
                      {!!load && "Salvando"}

                  </Button>
                  <DialogClose>
                      <Button variant={"ghost"} >Cancelar</Button>
                  </DialogClose>
              </div>
      </form>
      </Form>
        <DialogFooter>
        </DialogFooter>
      </div>
      }
      {created&& <CreatedPost id={idPost}/>}
      </DialogContent>
    </Dialog>

  )
}

function  CreatedPost({id}:{id:string}){
  return(
      <div className="flex flex-col items-center gap-3">
      <DialogHeader>
          <DialogTitle>Post criado com Sucesso</DialogTitle>
          <DialogDescription>
            Envie sua mensagem para que ela seja adicionada no forum.
          </DialogDescription>
        </DialogHeader>
           <CircleCheck size={48}  className="text-primaryPalet" />
           <Link className="text-primaryPalet font-bold" href={`/forum/${id}`}>Ver postagem</Link>
      </div>
  )
}