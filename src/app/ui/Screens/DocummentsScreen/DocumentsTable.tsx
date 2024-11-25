import { truncateText } from "@/app/util/textTrincate"
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
import { axiosApi } from "@/lib/axios/axios"
import clsx from "clsx"
import { ArrowUpFromLine, FileCheck, FilePlus2, FileText, Loader2, Trash, Trash2, X } from "lucide-react"
import { ChangeEvent, useEffect, useRef, useState } from "react"
import { CardDocument } from "./CardDocument"
import { transformObjectToArray } from "./transformObjectToArray"

   

  
  export function DocummentsTable() {
    type Document = { status: string; url: string,type:string };
    const [documents,setDocuments] = useState<Document[]>([])
    async function getDocuments(){
      const response = await axiosApi.get(`/api/getDocumentsByUserId`)
      console.log(response.data)
      const documentArray = transformObjectToArray(response.data);
      setDocuments(documentArray)
    }
  
    useEffect(()=>{
      getDocuments()
    })
    return (
      <div>
        <SelectDocument getDocuments={getDocuments}/>
        <p className="text-sm pb-1">A lista dos documentos enviados.</p>
        <Separator className="mb-2"/>


        <div className="flex gap-2 flex-wrap ">
          {documents.map((document) => (
            
              
            <CardDocument getDocuments={getDocuments} key={document.type} status={document.status} type={document.type} url={document.url}/>
          ))}
        </div>
        <div>
          <div>
            
          </div>
        </div>
      </div>
    )
  }

function SelectDocument({getDocuments}:{getDocuments:()=>Promise<void>}){
  const [load,setLoad]=useState(false)
    const[valueFile,setValueFile] = useState("")
    function handleValueFile(e:any){
      console.log(e)
      setValueFile(e)
    }
    const [fillDocument,setFillDocument]= useState(false)
    const [fileDocument,setDocument] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const handleFileDocumentChange = (e: ChangeEvent<HTMLInputElement>) => {
      setFillDocument(true)
      const file = e.target.files ? e.target.files[0] : null;
      console.log("file aquii",file)
      setDocument(file);
      if (file) {
        //setPreviewCover(URL.createObjectURL(file));
      }
    };
    const handleRemoveFileDocument = () => {
      console.log("remove document")
      setDocument(null)
      setFillDocument(false)
      //setPreviewCover('');
      //fileInputRef.current.value = '';
    };
    async function sendDocument(){
      setLoad(true)
      try{

        const formData = new FormData();
        if(fileDocument){
          formData.append('files', fileDocument);
          formData.append('field', valueFile);
          console.log(` em sendDocument => ${formData}`)
          const responseUploadImages = await axiosApi.post('/api/uploadDocumentUser', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          
        }
      }catch(e){
        throw(e)
      }
      finally{
        await getDocuments()
        setFillDocument(false)
        setDocument(null)
        setLoad(false)
      }


      
    }
    return(
      <div className="flex flex-col gap-3 flex-wrap mt-10 mb-8">
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
               {fillDocument&& 
               <ButtonSendDocument handleRemoveFileDocument={handleRemoveFileDocument} load={load} sendDocument={sendDocument} />
            
            }
          </div>
          
          {
          fileDocument&&
          <div className="flex items-center gap-2 bg-sky-100 p-2 rounded">
          <FileCheck size={18}   />
          <p>{ truncateText(JSON.stringify(fileDocument.name),22)}</p>
          </div>
          }
      </div>
    )
  }

  function ButtonSendDocument({sendDocument,handleRemoveFileDocument,load}:{handleRemoveFileDocument:()=>void,sendDocument:()=>Promise<void>, load:boolean}){
    return(
      <div>
        { !load&&
        <div className=" flex items-center gap-2">

        <span className=" flex items-center gap-2" onClick={()=>sendDocument()}>
        <label className="flex items-center gap-2 bg-primaryPalet text-white p-2 rounded text-sm font-bold cursor-pointer">
          
          
        <ArrowUpFromLine size={16} />
        Enviar Documento
        </label>
        </span>
        <div onClick={()=> handleRemoveFileDocument()} className="flex items-center border rounded p-1 gap-1 cursor-pointer">
        <X className="text-red-500"/>
        <p className="text-sm">Remover</p>
        </div>
        </div>
        }
        {
          !!load&&
          <div className=" flex items-center gap-2">
              <span className=" flex items-center gap-2" onClick={()=>sendDocument()}>
              <label className="flex items-center gap-2 bg-blue-400 text-white p-2 rounded text-sm font-bold cursor-pointer">         
              <Loader2 className="animate-spin" />
              Enviando Documento
              </label>
              </span>
          </div>
        }
      </div>
    )
  }