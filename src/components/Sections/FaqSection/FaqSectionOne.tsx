import FaqService from '@/components/FaqService';
import { Accordion, AccordionContent, AccordionItem } from '@/components/ui/accordion';
import { AccordionTrigger } from '@radix-ui/react-accordion';
import React from 'react';


interface FAQ {
    pergunta: string;
    resposta: string;
}


type FaqTypes={
    title:string
    items: FAQ[];
}
export const FaqSectionOne = ({data}:{data:FaqTypes}) => {
    return (
        <div className="max-w-4xl mx-auto p-4 md:p-6 lg:p-8 py-10">
            <h2 className="text-3xl font-bold mb-4">{data.title}</h2>
            <Accordion type="single" collapsible>
                {data.items.map((faq, index) => (
                    <AccordionItem className='py-5' key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-xl font-bold">
                            <h3>{faq.pergunta}</h3>
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 mt-2">
                            {faq.resposta}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};







