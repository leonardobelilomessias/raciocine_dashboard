'use client'
import { z } from "zod"
import {  useForm } from "react-hook-form";
import { FormField, FormItem, FormControl, FormMessage, Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { axiosApi } from "@/lib/axios/axios";
import {  CircleCheck, Loader2, MessageCircleQuestion, SquarePlus, Trash2, } from "lucide-react";
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
import { deletePostForum } from "./functionsForum";
import { DeletePostDialog } from "../../components/Forum/DeletePostDialog";
import { SkeletonForum } from "./SkeletonForum";
import post from "@/app/(dashboard)/posts/post/[id]";
type PostsForumType={
    title:string
    id:string
    message:string
    created_at:string
    user_name:string
    owner:boolean
}

export function ForumScreenTeste(){
    const fetchPosts = async (pageSize: number, cursor: string | null | undefined, isPrevious:boolean, isFirst?:boolean,) => {
        const res = await fetch(`/api/getPostsForumTest?pageSize=${pageSize}&isPrevious=${isPrevious}&lastCursor=${cursor || ""}&isFirst=${isFirst||""}&stepPage=${step}`);
        const data = await res.json();
        return data;
      };
    const [lastCursors, setLastCursor] = useState<string>(); // Cursors para cada página
    const [totalPages, setTotalPages] = useState(0);
    const [step,setStep] = useState(0)
    const pageSize = 3;
    const[load,setLoad]= useState(false)
    const [firstCursor,setFirstCusor] = useState<string |null | undefined>()
    const [postsForum,setPostsForum] = useState<PostsForumType []>([])
    async function getforumPosts(isPrevious:boolean,isFirst:boolean){

        setLoad(true)
        try{
            if(isFirst){
                const posts = await fetchPosts(pageSize, null, isPrevious, isFirst=true)
                setPostsForum(posts.data)
                console.log("passando=>",posts)
                setTotalPages(posts.totalPages);
                setLastCursor(posts.lastCursor)
                setFirstCusor(posts.firstCursor)
                
            }
            if(!isPrevious && !isFirst){
                
                const posts = await fetchPosts(pageSize, lastCursors, isPrevious, isFirst)
                setPostsForum(posts.data)
                console.log("passando=>",posts)
                setTotalPages(posts.totalPages);
                setLastCursor(posts.lastCursor)
                setFirstCusor(posts.firstCursor)
                setStep(posts.stepPage)
            }
            if(isPrevious){
                const cursor = postsForum[0].id
                const posts = await fetchPosts(pageSize, firstCursor, isPrevious, isFirst)
                setPostsForum(posts.data)
                console.log("passando=>",posts)
                setTotalPages(posts.totalPages);
                setLastCursor(posts.lastCursor)
                setFirstCusor(posts.firstCursor)
                setStep(posts.stepPage)
            }

        }catch(e){
            throw(e)
        }finally{
            setLoad(false)
        }
    }
    useEffect(()=>{
        getforumPosts(false, true)
    },[])

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
                <CreatePostForumDialog setPostsForum={setPostsForum}/>
                </CardHeader>

                <CardContent>
                <div>
                {(postsForum!= undefined)&&
                <div className="flex sm:flex  w-full flex-wrap gap-2 justify-center m-auto">
                   {!!load&& <SkeletonForum/>}
                { !load&&
                                postsForum.map((element)=>(
                                    
                                    <Card  key={element.id}  className="w-full ">
                                    <CardHeader>
                                        <CardDescription className="flex gap-10 ">
                                            {/* span is used because hydrataton error  if use <p> tag */}
                                    <Link href={`/forum/${element.id}`} className="flex gap-3">
                                            <div className=" md:flex gap-2 mb-4 ">
                                                <Avatar className="w-10 h-10 m-auto ">
                                                    <AvatarImage src="https://github.com/shadcn.png" />
                                                    <AvatarFallback>CN</AvatarFallback>
                                                </Avatar>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="bold text-sm font-bold">{element.user_name} - {element.id}</span>
                                                <div className="flex gap-1">
                                                <span className="text-xs">criado em { formatFirebaseDate(element?.created_at).date}</span>

                                                    <span className="text-xs"> as {formatFirebaseDate(element?.created_at).time}</span>
                                                </div>
                                            </div>
                                    </Link>
                                    {
                                        element.owner&&
                                        <div  className=" flex flex-1 justify-end">
                                        
                                                <DeletePostDialog getforumPosts={getforumPosts} deletePostForum={deletePostForum} id={element.id} owner={element.owner} />
                                        </div>
                                            
                                        }
                                        </CardDescription>
                                    <CardTitle>{element.title}</CardTitle>
                                        <span>{element.message}</span>
                                    </CardHeader>
                                    <div key={element.id} className="w-full bg-red-200">                                                
                                </div>
                                </Card>
                                ))
                            }                
                </div>}
                    
                </div>
                </CardContent>
                <CardFooter>
                    
                </CardFooter>
                
            </Card>
            <div className="flex gap-3 border rounded p-2">
        
          <Button
          className="flex gap-3 rounded p-2"
            disabled={step<=0}
            onClick={() => getforumPosts(true,false)}
            
          >
            Anterior
          </Button>
          <Button
          className="flex gap-3 rounded p-2"
            disabled={totalPages==step+1}
            onClick={() => getforumPosts(false,false)}
            
          >
            Proxima
          </Button>
    
      </div>
        </div>
    )
}

const formSchema = z.object({
    title:z.string().min(1,{message:"O Titulo não pode estar vazio"}),
    message: z.string().min(1,{message:"O Campo de mensagem não pode estar vazio"})
    
  })
 
export function CreatePostForumDialog({setPostsForum}:{setPostsForum:([])=>void}) {
    const [idPost,setIdPost] = useState("")
    const[load,setLoad] = useState(false)
    const [created,setCreated] = useState(false)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            message:"",

        },
      })
      async   function onSubmit(values: z.infer<typeof formSchema>) {

        try{
            setLoad(true)
            const postForum ={message:values.message,title:values.title}
            const responsePost = await axiosApi.post("/api/createPostForum",{postForum:postForum})
            const {idPostCreated} = responsePost.data
            const response = await axiosApi.get("/api/getPostsForum")
            setIdPost(idPostCreated)
            setPostsForum(response.data)
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
      useEffect(()=>{
        console.log('componet montado', created)
        return()=>{
            if(created){

                setCreated(false)
            }
        console.log('componet desmontado',created)

        }
    },[false])
      return (
          
          <Dialog>
        <DialogTrigger asChild>
        <Button className="gap-2">
                        <SquarePlus size={16}/>
                        Adicionar Novo     
                    </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
{            
          !created &&        
         <div>
          <DialogHeader>
            <DialogTitle>Criar Postagem</DialogTitle>
            <DialogDescription>
              Envie sua mensagem para que ela seja adicionada no forum.
            </DialogDescription>
          </DialogHeader>
    <Form {...form}  >
        <form onSubmit={form.handleSubmit(onSubmit)}>

        
                    <Label htmlFor="title" className="">
                    Titulo
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

                        {!load && "Enviar"}
                        {!!load && "Enviando"}

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
        {created&& <CreatedPost created={created} setCreated={setCreated} id={idPost}/>}
        </DialogContent>
      </Dialog>

    )
  }
  
function  CreatedPost({id,setCreated,created}:{ created:boolean,id:string,setCreated:(item:boolean)=>void}){
    useEffect(()=>{
        console.log('componet montado', created)
        return()=>{
            if(created){

                 setCreated(false)
            }
        console.log('componet desmontado',created)

        }
    },[false])
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



  
  