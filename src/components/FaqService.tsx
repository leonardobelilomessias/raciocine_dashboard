import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';


interface FAQ {
    pergunta: string;
    resposta: string;
}



const FaqService = ({faqArray}:{faqArray:FAQ[]}) => {
    return (
        <div>
            <FAQSection faqs={faqArray} />
        </div>
    );
};

interface FAQSectionProps {
    faqs: FAQ[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => {
    return (
        <div className="max-w-4xl mx-auto p-4 md:p-6 lg:p-8">
            <h2 className="text-3xl font-bold mb-4">Perguntas Frequentes</h2>
            <Accordion type="single" collapsible>
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
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

export default FaqService;

