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
import { ArrowUpFromLine, FilePlus2, FileText, Trash, Trash2 } from "lucide-react"
import { ChangeEvent, useRef, useState } from "react"
   
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
    const[valueFile,setValueFile] = useState("")
    function handleValueFile(e:any){
      console.log(e)
      setValueFile(e)
    }
    const formData = new FormData();
    const [fillDocument,setFillDocument]= useState(false)
    const [fileDocument,setDocument] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const handleFileDocumentChange = (e: ChangeEvent<HTMLInputElement>) => {

      setFillDocument(true)
      const file = e.target.files ? e.target.files[0] : null;
      setDocument(file);
      if (file) {
        //setPreviewCover(URL.createObjectURL(file));
      }
    };
    const handleRemoveFileDocument = () => {
      setDocument(null)
      //setPreviewCover('');
      //fileInputRef.current.value = '';
    };
    return(
      <div className="flex flex-col gap-3 flex-wrap mt-10 mb-2">
              <Label>Selecione um novo documento para enviar</Label>
        <div className=" flex flex-row gap-3 flex-wrap">
              <div className="">
                  <Select onValueChange={(e)=>handleValueFile(e)} >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Escolha um documento" />
                  </SelectTrigger>
                  <SelectContent  >
                    <SelectItem value="cpf">Cpf</SelectItem>
                    <SelectItem value="rg">Rg</SelectItem>
                    <SelectItem value="proof_address">Comprovante de endereço</SelectItem>
                    <SelectItem value="bank_statement">Extrato bancário</SelectItem>
                    <SelectItem value="income_tax">Declaração imposto de renda</SelectItem>
                    <SelectItem value="civil_status">Certidão estado civil</SelectItem>
                    <SelectItem value="fgts_statement">Extrato Fgts</SelectItem>
                    <SelectItem value="work_card">Carteira de trabalho</SelectItem>
                  </SelectContent>
                </Select>
              </div>

            {!fillDocument&& <span className=" flex items-center gap-2">
              <label              className={
                valueFile==="" ?'flex items-center gap-2 bg-blue-300 text-white p-2 rounded text-sm font-bold cursor-pointer':
                ' flex items-center gap-2 bg-primaryPalet text-white p-2 rounded text-sm font-bold cursor-pointer'
  
              }>
  
                {valueFile&&<input
                  type="file"
                  accept="image/*"
                    ref={fileInputRef}
                  onChange={handleFileDocumentChange}
                  style={{ display: 'none' }}
                  />}
               <FilePlus2 size={16} />
              Carregar Documento
              </label>
            </span>
            
            }
               {fillDocument&& <span className=" flex items-center gap-2">
              <label className="flex items-center gap-2 bg-primaryPalet text-white p-2 rounded text-sm font-bold cursor-pointer">
                
                <input
                  type="file"
                  accept="image/*"
                    ref={fileInputRef}
                  onChange={handleFileDocumentChange}
                  style={{ display: 'none' }}
                  />
               <ArrowUpFromLine size={16} />
              Enviar Documento
              </label>
            </span>
            
            }
          </div>
      </div>
    )
  }