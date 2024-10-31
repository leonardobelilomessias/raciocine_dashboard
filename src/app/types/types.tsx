import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export interface IFormInputFinance {
  renda?: number; // Agora os campos são opcionais
  entrada?: number;
  saldoFgts?: number;
  estadoCivil?: string;
  filhosDependentes?: string;
  trabalho3Anos?: string;
  primeiroImovel?: string;
  financiamento?: string;
  dataNascimento?: Date | null |string; // Agora é opcional
  tipoRenda?:string
}

export interface IUser{

  name?: string;
  phone?: string;
  email?: string;
  id: string;
  renda?: number; // Agora os campos são opcionais
  entrada?: number;
  saldoFgts?: number;
  estadoCivil?: string;
  filhosDependentes?: string;
  trabalho3Anos?: string;
  primeiroImovel?: string;
  financiamento?: string;
  dataNascimento?: Date | null |string; // Agora é opcional
  tipoRenda?:string
}


export interface INewPost{
  name?: string;
  id?: string;
  title?: string;
  message?: string;
  created_at:Date,
  updated_at:Date
}

export interface INewPostForm{

  title: string;
  message: string;
}

export interface INewSuportForm{

  title: string;
  message: string;
}
export interface INewSuport{
  name: string;
  id: string;
  title: string;
  message: string;
  created_at?:Date,
  updated_at?:Date
}

export interface IPost{
  id:string 
  title:string
  message:string 
  name:string
  date:Date
}

export interface IProduct{
  id?:string
  title: string;
  description: string;
  price: number;
  address: string;
  city: string;
  neighborhood: string;
  zip: string;
  bedrooms: string;
  bathrooms: string;
  garages: string;
  area: string;
  cover:string
  
  amenities:  {
    pool?: boolean;
    porter?: boolean;
    gym?: boolean;
    private_area?: boolean;
    lift?: boolean;
    salon_party?: boolean;
    playground?: boolean;
    sauna?: boolean;
    bike_rack?: boolean;
    coworking?: boolean;
    washing?: boolean;
    handicapped?: boolean;
    backyard?: boolean;
    pet_place?: boolean;
    service_area?: boolean;
  }
}


export interface IProductResponse{
  id?:string
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
  cover:string
  
  amenities:  {
    item:boolean
  }[]
}
export interface IVideoParams{
width?:number | undefined, 
height?:number |undefined
}
export interface IAmenities {
  pool?: boolean;
  porter?: boolean;
  gym?: boolean;
  private_area?: boolean;
  lift?: boolean;
  salon_party?: boolean;
  playground?: boolean;
  sauna?: boolean;
  bike_rack?: boolean;
  coworking?: boolean;
  washing?: boolean;
  handicapped?: boolean;
  backyard?: boolean;
  pet_place?: boolean;
  service_area?: boolean;
}

export interface INavigationElemets{ title: string, link: string, icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>> }