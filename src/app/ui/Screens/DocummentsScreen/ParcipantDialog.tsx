import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { zodResolver } from "@hookform/resolvers/zod"
import { Plus, Users } from "lucide-react"
import { useForm } from "react-hook-form"
import {z} from 'zod'
interface IValidationSchema{
    name:string
    email:string
    cpf:string
    address:string
    fone:string
}
const validationSchema = z.object({
    name:z.string(),
    email:z.string(),
    cpf:z.string(),
    address:z.string(),
    fone:z.string()
})
export function ParticipantDialog() {
    const form = useForm<z.infer<typeof validationSchema>>({
        resolver:zodResolver(validationSchema)
    })
    function onSubmit(values:IValidationSchema){
        console.log(values)
    }
  return (
    <Dialog>
      <DialogTrigger asChild>
      <Button size='sm' className="p-2 rounded flex items-center gatp-1">
                <Plus size={16}/>
              <p className="text-sm">Adicionar participante</p>
    </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Form {...form} >
        <form className="flex flex-col gap-2" onSubmit={form.handleSubmit(onSubmit)}>

            <DialogHeader>
            <DialogTitle>Adicionar novo participante</DialogTitle>
            <DialogDescription>
                Adicione um novo participante para enviar a documentação.
            </DialogDescription>
            </DialogHeader>
            <Label className="font-bold">Nome</Label>
            <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                    
                    <FormControl>
                        <Input  placeholder="Nome do Participante" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                            <Label>Email</Label>
            <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
                <FormItem>
                
                <FormControl>
                    <Input  placeholder="Email do Participante" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
                        <Label>Cpf</Label>
            <FormField
            control={form.control}
            name="cpf"
            render={({ field }) => (
                <FormItem>
                
                <FormControl>
                    <Input  placeholder="Cpf do Participante" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
                        <Label>Endereço</Label>
            <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
                <FormItem>
                
                <FormControl>
                    <Input  placeholder="Endereço do Participante" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
                        <Label>Telefone</Label>
            <FormField
            control={form.control}
            name="fone"
            render={({ field }) => (
                <FormItem>
                
                <FormControl>
                    <Input  placeholder="Telefone do Participante" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <DialogFooter>
            <Button type="submit">Save changes</Button>
            </DialogFooter>
            </form>


        </Form>
      </DialogContent>
    </Dialog>
  )
}
