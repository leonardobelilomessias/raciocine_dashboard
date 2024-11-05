"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button";
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage, Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {  useForm } from "react-hook-form";

import { z } from "zod"
import { useRouter } from "next/navigation";
import { Save, Send } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { createNewSupport } from "@/lib/firebase/createNewSupporte";

const formSchema = z.object({
  title:z.string().min(1),
  message: z.string().min(1)


})

export function SupportForm(){
    const router = useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            message:"",

        },
      })
    async   function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
        await createNewSupport({...values, name:"Leo",id:"kpJsmJzlEIc4oBPDitHbDucYMyu1"})

      }
    return(
        <div className="flex  w-200 flex-1">
        <Form {...form}  >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 w-[400px] sm:w-[600px] lg:w-[800px]">
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
      
        <Button className="flex  bg-primaryPalet"  type="submit"> <Send className="mr-2"/> Enviar</Button>
      </form>
    </Form>
        </div>
    )
}