import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import clsx from "clsx"
   
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
      <Table>
        <TableCaption>A lista dos documentos enviados.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Tipo</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Ação</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.type}>
              <TableCell className="font-medium">{invoice.type}</TableCell>
              <TableCell className={`${ColorStatus(invoice.status)}`}>{invoice.status}</TableCell>
              <TableCell>
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label   htmlFor="picture">

                  Enviar

                </Label>
                <Input  className="hidden" id="picture" type="file" />
                </div>
            </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Mantenha seus documentos atualizados</TableCell>
            
          </TableRow>
        </TableFooter>
      </Table>
    )
  }