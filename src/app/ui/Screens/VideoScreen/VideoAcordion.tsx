import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Separator } from "@radix-ui/react-dropdown-menu"
import { Play, TvMinimalPlayIcon, Video, Youtube } from "lucide-react"
import Link from "next/link"
  
  export function VideoAccordion() {
    const elemts = [{
        title:"Como financiar seu primeiro imovel",link:"/video/aoksd",category:"fin"},
        {title:"Documentos para o financiamento",link:"/video/aoksd", category:"fin"},
        {title:"partamento tipo vs Area Privativa",link:"/video/aoksd", category:"con"},
        {title:"Qual melhor posição do apartamento",link:"/video/aoksd", category:"con"},
        {title:"São gabriel coração de BH",link:"/video/aoksd", category:"rai"},
        {title:"Nova pampulha - perto de tudo ",link:"/video/aoksd", category:"rai"},
        {title:"Como fazer uma grana extra para o ape",link:"/video/aoksd", category:"dic"},
        {title:"Melhores planos de pagamento",link:"", category:"dic"},
  
  
      ]
    return (
      <Accordion type="single"  collapsible className="w-full" defaultValue={'item-1'}>
        <AccordionItem value="item-1" >
          <AccordionTrigger className="font-bold">Financiamento</AccordionTrigger>
          { 
            elemts.map((elemt)=>{

                if(elemt.category ==='fin') return <Link key={elemt.title} href={elemt.link} className="min-h-10 bg-red-200">
            <AccordionContent className="flex gap-3 text-primaryPalet ">
            <Youtube className="text-primaryPalet"/>
            {elemt.title}
          </AccordionContent>
          <Separator/>
            </Link>}
    )
          }

        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="font-bold">Modelos Construtivos</AccordionTrigger>
          { 
            elemts.map((elemt)=>{

                if(elemt.category ==='con') return <Link key={elemt.title} href={elemt.link} className="min-h-10 bg-red-200">
            <AccordionContent className="flex gap-3 text-primaryPalet ">
            <Youtube className="text-primaryPalet"/>
            {elemt.title}
          </AccordionContent>
          <Separator/>
            </Link>}
    )
          }
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="font-bold">Raio-x do Bairro</AccordionTrigger>
          { 
            elemts.map((elemt)=>{

                if(elemt.category ==='rai') return <Link key={elemt.title} href={elemt.link} className="min-h-10 bg-red-200">
            <AccordionContent className="flex gap-3 text-primaryPalet ">
            <Youtube className="text-primaryPalet"/>
            {elemt.title}
          </AccordionContent>
          <Separator/>
            </Link>}
    )
          }
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="font-bold">Dicas</AccordionTrigger>
          { 
            elemts.map((elemt)=>{

                if(elemt.category ==='dic') return <Link key={elemt.title} href={elemt.link} className="min-h-10 bg-red-200">
            <AccordionContent className="flex gap-3 text-primaryPalet ">
            <Youtube className="text-primaryPalet"/>
            {elemt.title}
          </AccordionContent>
          <Separator/>
            </Link>}
    )
          }
        </AccordionItem>
        
      </Accordion>
    )
  }
  