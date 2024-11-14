"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button";
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage, Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {  useForm } from "react-hook-form";
// Interfaces
import {v4} from 'uuid'

import { z } from "zod"
import { useRouter } from "next/navigation";
import { DeleteIcon, Save } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { ChangeEvent, useRef, useState } from "react";
import { AlertNewProduct } from "../AlertNewProduct";
import axios from "axios";
import { toast } from "@/components/ui/use-toast";
import Image from "next/image";
import { Toaster } from "@/components/ui/toaster";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface IValidationSchema {
  title: string;
  description: string;
  price: string;
  author:string
}
const validationSchema = z.object({
  title: z.string(),
  description: z.string(),
  price: z.string(),
  author:z.string(),
});
export function NewEbookForm(){
  const [load, setLoad] = useState(false);
  const [messageModal,setMessageModal] = useState('')
  const [show, setShow] = useState(false);
  const [cover, setCover] = useState<File | null>(null);
  const [previewCover, setPreviewCover] = useState<string | undefined>();
  const [folderName, setFolderName] = useState('');
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const form = useForm<z.infer<typeof validationSchema>>({
        resolver: zodResolver(validationSchema),
      },)
  const onSubmit = async (data: IValidationSchema) => {
        if (!cover) {
          toast({
            title:"Nenhuma capa adicionada",
            description:"Você precisa selecionar uma capa",
            
          })

          return;
        }
        const formCover = new FormData();
        try {
          setLoad(true)
          formCover.append('files', cover);
          const uuidv4 = v4().split('-')[0]
          const slug = data.title.split(" ").join('-')+`-${uuidv4}`
          Object.assign(data,{slug:slug})
          const response = await axios.post('/api/createEbook', data);
          toast({
            title: `Irem adicionald ${data.title}`,
            description: "Friday, February 10, 2023 at 5:57 PM",
          })
           const id = response.data
           formCover.append('bucket', `${id}`);
          if(!!cover){
            try{
              const responseUploadCover= await axios.post('/api/uploadEbookCover', formCover, {
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
              });
              toast({
                title: `Capaa dicionada `,
                description: "Friday, February 10, 2023 at 5:57 PM",
              })
            }catch{
              toast({
                title: `Não foi possivel adicionar a capa`,
                description: "Friday, February 10, 2023 at 5:57 PM",
              })
            }
          }
        } catch (error) {
          console.error('Erro ao enviar os dados:', error);
        }
        finally{
          setLoad(false)
        }
      }
      const handleCoverChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        setCover(file);
        if (file) {
          setPreviewCover(URL.createObjectURL(file));
        }
      };
      const handleRemoveCover = () => {
        setCover(null)
        setPreviewCover('');
        //fileInputRef.current.value = '';
      };
    return(
        <>
        <Toaster/>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1 max-w-[800px]">
      <Label className="font-bold">Titulo</Label>
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
      <Label className="font-bold">Descriçao</Label>
    <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              
              <FormControl>
                <Textarea  placeholder="Descrição" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      <Label className="font-bold">Preço</Label>

        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              
              <FormControl>
                <Input placeholder="Preço" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      <Label className="font-bold">Preço</Label>

      <FormField
        control={form.control}
        name="author"
        render={({ field }) => (
          <FormItem>
            
            <FormControl>
              <Input placeholder="Autor" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

          <p >Imagens</p>
                            <div>
                              <div className="flex flex-col">
                            <div >Adiconar imagens  De Capa</div>

                            <span className="w-40 mb-2 p-2 bg-primaryPalet text-white "> 
                                  <label>Imagem de Capa

                                  <input
                                    type="file"
                                    accept="image/*"
                                    ref={fileInputRef}
                                    onChange={handleCoverChange}
                                    style={{ display: 'none' }}
                                    />
                                    </label>
                                </span>
                                    
                                  {previewCover && (
                                    <div className="image-preview">
                                      <Image src={previewCover} alt="Capa" width={100} height={100} />
                                      <button type="button" onClick={handleRemoveCover}>
                                        <DeleteIcon />
                                      </button>
                                    </div>
                                  )}
                                </div>
                              </div>
                              <div className="col-md-12">
                
                            </div>
{/*  fim do upload de imagens */}
    
        <Button className="flex" type="submit"> <Save className="mr-2"/> Salvar</Button>
      </form>
    </Form>
        </>
    )
}