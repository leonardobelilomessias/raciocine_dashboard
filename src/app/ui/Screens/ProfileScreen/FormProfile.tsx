"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button";
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage, Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {  useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import { z } from "zod"
import { useRouter } from "next/navigation";
import { Pencil, Save } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import "react-datepicker/dist/react-datepicker.css";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { IUser } from "@/app/types/types";
import { updateAccountUser } from "@/lib/firebase/updateAccountUser";
import { fakeUserId } from "@/app/mocks/fakeDatabase";
import { revalidatePath } from "next/cache";
import { newDate } from "react-datepicker/dist/date_utils";
import {ptBR} from 'date-fns/locale';
import { registerLocale } from 'react-datepicker';
registerLocale('pt-BR', ptBR);


const formSchema = z.object({
  id:z.string(),
  email: z.string().email(),
  name: z.string(),
  phone:z.string(),
  renda: z.number({invalid_type_error: 'O valor deve ser um número'}),
  entrada: z.number({invalid_type_error: 'O valor deve ser um número'}),
  saldoFgts: z.number({invalid_type_error: 'O valor deve ser um número'}),
  estadoCivil: z.string(),
  filhosDependentes: z.string(),
  trabalho3Anos: z.string(),
  primeiroImovel: z.string(),
  financiamento: z.string(),
  dataNascimento: z.date(),
  tipoRenda: z.string()

})

export function FormProfile({dataUser}:{dataUser:IUser}){ 
// Divide a string em dia, mês e ano
const [day, month, year] = String(dataUser?.dataNascimento).split("-");
const [realDate,setRealDate] = useState(new Date(Number(year), Number(month) - 1, Number(day)));
  const [edit,setEdit] = useState(false)
  const [values,setValues] = useState(dataUser)
    const router = useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
        mode:"onChange",
        resolver: zodResolver(formSchema),
        defaultValues: {
          id:dataUser.id,
          email: dataUser.email,
          name:  dataUser.name,
          phone: dataUser.phone,
          renda:  Number(dataUser.renda),
          entrada:  Number(dataUser.entrada),
          saldoFgts: Number(dataUser.saldoFgts),
          estadoCivil:  dataUser.estadoCivil,
          filhosDependentes:  dataUser.filhosDependentes,
          trabalho3Anos:  dataUser.trabalho3Anos,
          primeiroImovel:  dataUser.primeiroImovel,
          financiamento: dataUser.financiamento,
          dataNascimento:  new Date(Number(year), Number(month) - 1, Number(day)) , 
          tipoRenda:  dataUser.tipoRenda
        },
      })
      async function onSubmit(values: z.infer<typeof formSchema>) {
        
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
        try{
        await   updateAccountUser(values,dataUser.id)
        setEdit(false)
        }catch(e){
          console.log(e)
        }
    

        
      }
    return(
        <>
      
      <div className="flex  justify-between">
      <p className="font-bold text-xl mb-3">Dados Pessoais</p>
        <Button className="bg-primaryPalet" onClick={()=>{setEdit(true)}}>  <Pencil size={16} className="mx-1"/> Editar Perfil</Button>
      </div>

        <Form  {...form}>
      <form  onSubmit={form.handleSubmit(onSubmit)} className="space-y-1">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
        <FormLabel className="font-bold">Email</FormLabel>
              <FormControl>
                <Input disabled={true} placeholder="Digite seu Email" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
    <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
                      <FormLabel className="font-bold">Nome</FormLabel>
              <FormControl>
                <Input disabled={!edit} placeholder="Digite seu Nome" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
                      <FormLabel className="font-bold">Telefone</FormLabel>
              <FormControl>
                <Input disabled={!edit} placeholder="Digite seu telefone" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
            <p className="font-bold text-xl mb-3 mt-5 pt-7 pb-2">Dados Financeiros</p>
                <FormField
          control={form.control}
          name="renda"
          render={({ field }) => (
            <FormItem>
                      <FormLabel className="font-bold">Renda bruta</FormLabel>
              <FormControl>
              <Input
              disabled={!edit}
              placeholder="Digite sua renda bruta mensal"
              {...field}
              value={field.value || ''}
              onChange={(e) => {
                field.onChange(parseInt(e.target.value, 10));
              }}
            />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="entrada"
          render={({ field }) => (
            <FormItem>
                      <FormLabel className="font-bold">Entrada</FormLabel>
              <FormControl>
                <Input disabled={!edit} placeholder="Digite sua entrada" {...field}        
                 value={field.value || ''}
                  onChange={(e) => {
                field.onChange(parseInt(e.target.value, 10));
              }}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="saldoFgts"
          render={({ field }) => (
            <FormItem>
                      <FormLabel className="font-bold">Saldo de FGTS</FormLabel>
              <FormControl>
                <Input  disabled={!edit}       placeholder="Digite sua renda bruta mensal"
              {...field}
              value={field.value }
              onChange={(e) => {
                field.onChange(parseInt(e.target.value, 10));
              }} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
                <FormField
          control={form.control}
          name="estadoCivil"
          render={({ field }) => (
            <FormItem>
            
              <FormLabel className="font-bold">Estado civil</FormLabel>
              <FormControl>
              <Select disabled={!edit} onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Estado Civil" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="solteiro">Solteiro</SelectItem>
                    <SelectItem value="casado">Casado</SelectItem>
                    <SelectItem value="divorciado">Divorciado</SelectItem>
                    <SelectItem value="viuvo">Viuvo</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="tipoRenda"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Tipo de Renda</FormLabel>
              
              <FormControl>
              
              <Select disabled={!edit} onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Tipo de Renda" />
                  </SelectTrigger>
                  <SelectContent {...field}>
                    <SelectItem value="formal">Formal</SelectItem>
                    <SelectItem value="informal">Informal</SelectItem>
                    <SelectItem value="mista">Mista</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
              <FormField 
          control={form.control}
          name="dataNascimento"
          render={({ field }) => (
            <FormItem >
              <FormLabel className="flex flex-col mt-2 font-bold " >Data de nascimento</FormLabel>
              
              <FormControl>
              
              <DatePicker disabled={!edit} className={
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          
        } selected={realDate} 
   onChange={(value)=>{field.onChange(value);  setRealDate(new Date(field.value))
   }} />
              </FormControl>
              <FormMessage />
            {String(field.value)}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="financiamento"
          render={({ field }) => (
            <FormItem>
                <FormLabel className="font-bold"> Possui algum financiamento?</FormLabel>
                  <FormControl>
                    <RadioGroup disabled={!edit} defaultValue={field.value} className="my-3" onValueChange={field.onChange} >
                    <div className="flex gap-3">

                      <div className="flex items-center space-x-2 flex">
                        <RadioGroupItem value="nao" id="nao" />
                        <Label htmlFor="nao">Não</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="sim" id="nao" />
                        <Label htmlFor="sim">Sim</Label>
                      </div>
                    </div>
                  </RadioGroup>

                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
      <FormField
          control={form.control}
          name="filhosDependentes"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Possui Filhos menores ou pessoas dependentes de sua renda?</FormLabel>
              <FormControl>
              <RadioGroup disabled={!edit} defaultValue={field.value} className="my-3" onValueChange={field.onChange} >
                <div className="flex gap-3">

                  <div className="flex items-center space-x-2 flex">
                    <RadioGroupItem value="nao" id="nao" />
                    <Label htmlFor="nao">Não</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="sim" id="nao" />
                    <Label htmlFor="sim">Sim</Label>
                  </div>
                </div>
              </RadioGroup>

              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> 
           <FormField
          control={form.control}
          name="trabalho3Anos"
          render={({ field }) => (
            <FormItem>
                <FormLabel className="font-bold">Trabalhou mais de três anos de carteira assinada?</FormLabel>
              <FormControl>
              <RadioGroup disabled={!edit} defaultValue={field.value} className="my-3" onValueChange={field.onChange} >
                <div className="flex gap-3">

                  <div className="flex items-center space-x-2 flex">
                    <RadioGroupItem value="nao" id="nao" />
                    <Label htmlFor="nao">Não</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="sim" id="nao" />
                    <Label htmlFor="sim">Sim</Label>
                  </div>
                </div>
              </RadioGroup>

              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="primeiroImovel"
          render={({ field }) => (
            <FormItem>
              
                <FormLabel className="font-bold">É a compra do primeiro Imóvel??</FormLabel>
              <FormControl>
              <RadioGroup disabled={!edit} defaultValue={field.value} className="my-3" onValueChange={field.onChange} >
                <div className="flex gap-3">

                  <div className="flex items-center space-x-2 flex">
                    <RadioGroupItem value="nao" id="nao" />
                    <Label htmlFor="nao">Não</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="sim" id="nao" />
                    <Label htmlFor="sim">Sim</Label>
                  </div>
                </div>
              </RadioGroup>

              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="py-4">

        <Button disabled={!edit} className="flex bg-primaryPalet" type="submit"> <Save className="mr-2"/> Salvar</Button>
        </div>
      </form>
    </Form>

        </>
    )
}