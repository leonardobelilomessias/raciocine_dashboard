import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { axiosApi } from "@/lib/axios/axios";
import { FileText, Trash2 } from "lucide-react";
type Document = { status: string; url: string, type:string };

export function CardDocument({status,type,url,getDocuments}:{status:string,url:string, type:string, getDocuments:()=> Promise<void>}){
    async function deleteDocument(){
        await axiosApi.delete(`/api/deleteDocumentUser?type=${type}`)
        await getDocuments()
        
    }
    return(
        <div  className="flex flex-col  min-w-[220px] rounded p-3 gap-2 border ">
            <FileText size={16} />
            <div className={`${ColorStatus(status)} text-xs  text-end justify-self-end font-bold`}>
            {translateStatus(status)}
            </div>
        <div className="font-bold ">{translateType(type)}</div>
        <div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
          <Button onClick={deleteDocument}  className="flex  gap-2 bg-white text-black border border"  >
            <Trash2 size={14}/>
            Remover
          </Button>
          <Input  className="hidden" id="picture" type="file" />
          </div>
      </div>
        
      </div>
    )
}
function ColorStatus(status:string){
    if(status.toUpperCase()==='rejected'.toUpperCase()) return "text-red-500"
    if(status.toUpperCase()==='accepted'.toUpperCase()) return "text-green-500"
 if(status.toUpperCase()==='pending'.toUpperCase()) return "text-yellow-500"
    return""
  }




function translateType(type: string): string {
  const translations: Record<string, string> = {
    cpf: "Cpf",
    rg: "Rg",
    proof_address: "Comprovante de endereço",
    bank_statement: "Extrato bancário",
    income_tax: "Declaração imposto de renda",
    civil_status: "Certidão estado civil",
    fgts_statement: "Extrato FGTS",
    work_card: "Carteira de trabalho",
  };

  return translations[type] || type; // Retorna a tradução ou o valor original se não houver mapeamento
}

function translateStatus(status: string): string {
    const statusTranslations: Record<string, string> = {
      pending: "Pendente",
      accepted: "Aceito",
      rejected: "Negado",
    };
  
    return statusTranslations[status] || status; // Retorna a tradução ou o valor original se não houver mapeamento
  }