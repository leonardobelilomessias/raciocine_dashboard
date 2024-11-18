import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
    Table,
    TableBody,
    TableCaption,
    TableFooter,

  } from "@/components/ui/table"
import clsx from "clsx"
import { FilePlus2, FileText, Trash, Trash2 } from "lucide-react"
   
  const invoices = [
    {
      type: "Cpf",
      status: "Em Análise",

      action: "Credit Card",
    },
    {
      type: "Rg",
      status: "Aprovado",

      action: "PayPal",
    },
    {
      type: "Certidão Nascimento.",
      status: "Aprovado",

      action: "Bank Transfer",
    },
    {
      type: "Comprovante renda",
      status: "Aprovado",

      action: "Credit Card",
    },
    {
      type: "Comprovante endereço",
      status: "Rejeitado",

      action: "PayPal",
    },
    {
      type: "Extrato fgts",
      status: "Em Análise",

      action: "Bank Transfer",
    },
    {
      type: "Carteira Trabalho",
      status: "Aprovado",

      action: "Credit Card",
    },
  ]
   
  export function DocummentsTable() {
    function ColorStatus(status:string){
      if(status.toUpperCase()==='Rejeitado'.toUpperCase()) return "text-red-500"
      if(status.toUpperCase()==='Aprovado'.toUpperCase()) return "text-green-500"
        // if(status.toUpperCase()==='Em Análise'.toUpperCase()) return "text-blue-500"
      return""
    }
    return (
      <div>
        <SelectDocument/>
        <p className="text-sm pb-1">A lista dos documentos enviados.</p>
        <Separator className="mb-2"/>


        <div className="flex gap-2 flex-wrap ">
          {invoices.map((invoice) => (
            <div key={invoice.type} className="flex flex-col  min-w-[220px] rounded p-3 gap-2 border ">
              <FileText size={16} />
              <div className={`${ColorStatus(invoice.status)} text-xs  text-end justify-self-end font-bold`}>

                {invoice.status}
                </div>
              <div className="font-bold ">{invoice.type}</div>
              <div>
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                <Button  className="flex  gap-2 bg-white text-black border border"  >
                  <Trash2 size={14}/>
                  Remover
                </Button>
                <Input  className="hidden" id="picture" type="file" />
                </div>
            </div>
              
            </div>
          ))}
        </div>
        <div>
          <div>
            
          </div>
        </div>
      </div>
    )
  }

  function SelectDocument(){
    return(
      <div className="flex flex-col gap-3 flex-wrap mt-10 mb-2">
              <Label>Selecione um novo documento para enviar</Label>
        <div className=" flex flex-row gap-3 flex-wrap">
              <div className="">
                  <Select >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">cpf</SelectItem>
                    <SelectItem value="dark">Rg</SelectItem>
                    <SelectItem value="system">Comprovante de Renda</SelectItem>
                  </SelectContent>
                </Select>
              </div>

            <Button className=" flex items-center gap-2">
            <FilePlus2 size={16} />
              enviar documento
            </Button>
          </div>
      </div>
    )
  }