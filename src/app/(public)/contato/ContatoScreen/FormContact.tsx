"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button";
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage, Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {  useForm } from "react-hook-form";
import axios, { AxiosError } from 'axios';
import { z } from "zod"
import { useRouter } from "next/navigation";
import { FirebaseError } from "firebase/app";
import React from "react";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { axiosApi } from "@/lib/axios/axios";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string({ message: "Nome é obrigatorio" }).min(1,{ message: "Nome obrigatorio" }).max(50),
  bussiness:z.string({ message: "empresa é obrigatorio" }).min(1,{ message: "Nome da empresa Obrigatorio" }).max(50),
  email: z.string({ message: "email é obrigatorio" }).email({ message: "Digite um email válido." }),
  whatsapp: z.string({ message: "O whatsapp é obrigatorio" }).min(11,{ message: "Digite whatsapp com DDD ex.:31986261771 ." }).max(11),
  message:z.string({ message: "A mensagem é obrigatoria" }).min(1,{message:"Digite uma mensagem valida"})
  
});

export function FormContact(){
  const { toast } = useToast()
  const[load,setLoad]= React.useState(false)
    const router = useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
        
        },
      })
    async   function onSubmit(values: z.infer<typeof formSchema>) {
      setLoad(true)
        try{
          const consult = {...values}
          await axiosApi.post("/api/contact",{consult})
      
            console.log(consult)
          }catch(error){
            if (error instanceof FirebaseError) {
              if(error.code==='auth/invalid-credential'){
                toast({
                  variant: "destructive",
                  title: "Email ou senha invalida.",
                  description: "There was a problem with your request.",
                  action: <ToastAction altText="Try again">Try again</ToastAction>,
                })
                // toast("Usuario ou senhas incorretos. Tente novamente");
              }
              // Lidar com erros específicos do Firebase
              //  console.error("Erro ao registrar:", error.code);
            } 
            if (error instanceof AxiosError){
            console.log(error.response?.data)
              if(error.response?.status  ===401){
                toast({
                  variant: "destructive",
                  title: "Email e senha estão incorretos",
                  description: "Verifique os dados de login e tente novamente.",
                  action: <ToastAction altText="Tente novamente">Tente novamente</ToastAction>,
                })
                // toast("Usuario ou senhas incorretos. Tente novamente");
              }else{
                                toast({
                                  variant: "destructive",
                                  title: "Houve um erro com o login",
                                  description: "Verifique os dados de login e tente novamente mais tarde, ou entre em contato com o suporte.",
                                  action: <ToastAction altText="Tente novamente">Tente novamente</ToastAction>,
                                })
              }
                // toast("Usuario ou senhas incorretos. Tente novamente");
              
              
            } 
            console.log(error)
          }finally{
            setLoad(false)
          }


      }
    return(
        <>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="align-left self-end ">Nome</FormLabel>
              <FormControl>
                <Input placeholder="Nome" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="align-left self-end ">Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
    <FormField
          control={form.control}
          name="bussiness"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome da Empresa</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Nome da Empresa" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
    <FormField
          control={form.control}
          name="whatsapp"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Whatsapp</FormLabel>
              <FormControl>
                <Input placeholder="Whatsapp" type="tel" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
            <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensagem</FormLabel>
              <FormControl>
                <Textarea placeholder="Mensssagem"  rows={10} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {
        !load&&
        <Button className="w-full mt-3"  type="submit">Cadastrar</Button>

        
        }
      </form>
    </Form>{
load&&
      <Button className="w-full mt-2" disabled>
            <Loader2 className="w-full flex  animate-spin" />

      </Button>
    }

        </>
    )
}