"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button";
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage, Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {  useForm } from "react-hook-form";

import { z } from "zod"
import { useRouter } from "next/navigation";
import { Save } from "lucide-react";

const formSchema = z.object({
  title: z.string(),
  description: z.string(),
  local:z.string(),

})

export function NewProductForm(){
    const router = useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            description:"",
            local:""
        },
      })
      function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)

      }
    return(
        <>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
        
              <FormControl>
                <Input placeholder="Titulo" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
    <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              
              <FormControl>
                <Input placeholder="Descrição" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="local"
          render={({ field }) => (
            <FormItem>
              
              <FormControl>
                <Input placeholder="Local" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="flex" type="submit"> <Save className="mr-2"/> Salvar</Button>
      </form>
    </Form>
        </>
    )
}