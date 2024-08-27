"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button";
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage, Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {  useForm } from "react-hook-form";
// Interfaces
import {v4} from 'uuid'
interface Amenities {
  piscina?: boolean;
  portaria?: boolean;
  academia?: boolean;
  area_privativa?: boolean;
  elevador?: boolean;
  salao_de_festas?: boolean;
  playground?: boolean;
  sauna?: boolean;
  bicicletario?: boolean;
  coworking?: boolean;
  Lavadora?: boolean;
  acessibilidade?: boolean;
  varanda?: boolean;
  pet_place?: boolean;
  area_de_sevico?: boolean;
}
interface IValidationSchema {
  title: string;
  description: string;
  price: string;
  address: string;
  city: string;
  neighborhood: string;
  zip: string;
  bedrooms: string;
  bathrooms: string;
  garages: string;
  area: string;
  amenities: Amenities;
}
import { z } from "zod"
import { useRouter } from "next/navigation";
import { DeleteIcon, Save } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { ChangeEvent, useRef, useState } from "react";
import { AlertNewProduct } from "../AlertNewProduct";
import axios from "axios";
import { toast } from "@/components/ui/use-toast";
import Image from "next/image";
const amenitiesFields = [
  {label:'pool',name:'Piscina'},
  {label:'porter',name:'Portaria 24hrs'},
  {label:'gym',name:'Academia'},
  {label:'private_area',name:'Area privativa'},
  {label:'lift',name:'Elevador'},
  {label:'salon_party',name:'Salão de festas'},
  {label:'playground',name:'Playground'},
  {label:'sauna',name:'Sauna'},
  {label:'bike_rack',name:'Bicicletario'},
  {label:'coworking',name:'Coworking'},
  {label:'washing',name:'Area de lavar'},
  {label:'handicapped',name:'Acessibilidade'},
  {label:'backyard',name:'Varanda'},
  {label:'pet_place',name:'Pet place'},
  {label:'service_area',name:'Area de serviço'}
];
const items = [
  {
    id: "recents",
    label: "Recents",
  },
  {
    id: "home",
    label: "Home",
  },
  {
    id: "applications",
    label: "Applications",
  },
  {
    id: "desktop",
    label: "Desktop",
  },
  {
    id: "downloads",
    label: "Downloads",
  },
  {
    id: "documents",
    label: "Documents",
  },
] as const




const validationSchema = z.object({
  title: z.string(),
  description: z.string(),
  price: z.string(),
  address: z.string(),
  city: z.string(),
  neighborhood: z.string(),
  zip: z.string(),
  bedrooms: z.string(),
  bathrooms: z.string(),
  garages: z.string(),
  area: z.string(),
  amenitiesFields: z.array(z.string())
});
export function NewProductForm(){
  const [load, setLoad] = useState(false);
  const [messageModal,setMessageModal] = useState('')
  const [show, setShow] = useState(false);
  const [cover, setCover] = useState<File | null>(null);
  const [previewCover, setPreviewCover] = useState<string | undefined>();

  const [files, setFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [folderName, setFolderName] = useState('');
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const router = useRouter()
    const form = useForm<z.infer<typeof validationSchema>>({
        resolver: zodResolver(validationSchema),
        defaultValues: {
            title: "",
            description:"",
            // items: ["recents", "home"],
            
        },
      })
      function setSubmit(data:any ){
        onSubmit(data)
      }
      const onSubmit = async (data: any) => {
        if (files.length <= 0) {
          setMessageModal('Você precisa selecionar pelo menos uma imagem');
          handleShow();
          return;
        }
        if (!cover) {
          setMessageModal('Você precisa selecionar uma capa');
          handleShow();
          return;
        }
        const formData = new FormData();
        const formCover = new FormData();
    
    //teste
        try {
          
          setLoad(true)
          for (const file of files) {
            formData.append('files', file);
          }
          formCover.append('files', cover);
          const uuidv4 = v4().split('-')[0]
          const slug = data.title.split(" ").join('-')+`-${uuidv4}`
          Object.assign(data,{slug:slug})
          const filesInFormData = formData.getAll('files');
          toast({
            title: `Irem adicionald ${data.title}`,
            description: "Friday, February 10, 2023 at 5:57 PM",
          })
           const response = await axios.post('/api/createproduct', data);
          console.log(response.data)
           const id = response.data
           formData.append('bucket', `${id}`);
           formCover.append('bucket', `${id}`);
    
         
          if(files.length>0){
            const responseUploadImages = await axios.post('/api/image', formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            });
          }
          if(files.length>0){
    
            const responseUploadCover= await axios.post('/api/uploadCover', formCover, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            });
          }
    
          // if (response.status ==200) {
          //   router.push(`/sucesso/${slug}`);
          // }
    
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
    
      const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = Array.from(e.target.files || []);
        setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
      
        const newPreviewUrls = selectedFiles.map((file) =>
          URL.createObjectURL(file)
        );
        setPreviewUrls((prevUrls) => [...prevUrls, ...newPreviewUrls]);
      };
      const handleRemoveImage = (index: number) => {
        setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
        setPreviewUrls((prevUrls) => prevUrls.filter((_, i) => i !== index));
        if (fileInputRef.current) {
          // Verifica se a referência não é null antes de acessar a propriedade value
          (fileInputRef.current as HTMLInputElement).value = '';
        }
      };
    return(
        <>
        <AlertNewProduct  show={show} handleClose={handleClose} messageModal={messageModal}/>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(setSubmit)} className="space-y-1">
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
          name="price"
          render={({ field }) => (
            <FormItem>
              
              <FormControl>
                <Input placeholder="Local" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
                <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              
              <FormControl>
                <Input placeholder="Local" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
                <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              
              <FormControl>
                <Input placeholder="Local" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
                <FormField
          control={form.control}
          name="neighborhood"
          render={({ field }) => (
            <FormItem>
              
              <FormControl>
                <Input placeholder="Local" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
                <FormField
          control={form.control}
          name="zip"
          render={({ field }) => (
            <FormItem>
              
              <FormControl>
                <Input placeholder="Local" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
                <FormField
          control={form.control}
          name="bedrooms"
          render={({ field }) => (
            <FormItem>
              
              <FormControl>
                <Input placeholder="Local" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
                        <FormField
          control={form.control}
          name="bathrooms"
          render={({ field }) => (
            <FormItem>
              
              <FormControl>
                <Input placeholder="Local" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
                <FormField
          control={form.control}
          name="garages"
          render={({ field }) => (
            <FormItem>
              
              <FormControl>
                <Input placeholder="Local" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
                <FormField
          control={form.control}
          name="area"
          render={({ field }) => (
            <FormItem>
              
              <FormControl>
                <Input placeholder="Local" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
<FormField
          control={form.control}
          name="amenitiesFields"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Sidebar</FormLabel>
                <FormDescription>
                  Select the items you want to display in the sidebar.
                </FormDescription>
              </div>
              {amenitiesFields.map((item) => (
                <FormField
                  key={item.name}
                  control={form.control}
                  name="amenitiesFields"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.name}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.name)}
                            onCheckedChange={(checked) => {
                              if(!!field.value){
                                
                                return checked? field.onChange([...field.value, item.name]): field.onChange (field.value?.filter((value) => value !== item.name))
                              }else{
                                
                                field.onChange([item.name])
                              }
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="ltn__apartments-tab-content-inner">
<p >Imagens</p>
                            <div>
                              <div className="col-md-12">
                                <div className="input-item input-item-textarea ltn__custom-icon">
                            <p >Adiconar imagens  De Capa</p>

                            <Button > 
                                  <label>Imagem de Capa

                                  <input
                                    type="file"
                                    accept="image/*"
                                    ref={fileInputRef}
                                    onChange={handleCoverChange}
                                    style={{ display: 'none' }}
                                    />
                                    </label>
                                </Button>
                                    
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
                                <div className="input-item input-item-textarea ltn__custom-icon">
                            <p >Adiconar imagens a galeria</p>
                                <Button >

                                  <label>Adicionar imagens

                                  <input
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    ref={fileInputRef}
                                    onChange={handleFileChange}
                                    style={{ display: 'none' }}
                                    />
                                    </label>
                                </Button>
                                  <div className="image-previews">
                                    {previewUrls.map((url, index) => (
                                      <div className="image-preview" key={index}>
                                        <Image src={url} alt={`Imagem ${index + 1}`} width={100} height={100} />
                                        <button type="button" onClick={() => handleRemoveImage(index)}>
                                          <DeleteIcon />
                                        </button>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
{/*  fim do upload de imagens */}
    
        <Button className="flex" type="submit"> <Save className="mr-2"/> Salvar</Button>
      </form>
    </Form>
        </>
    )
}