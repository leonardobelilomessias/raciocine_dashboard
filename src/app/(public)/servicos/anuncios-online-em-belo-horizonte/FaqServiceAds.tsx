import FaqService from '@/components/FaqService';
import { Accordion, AccordionContent, AccordionItem } from '@/components/ui/accordion';
import { AccordionTrigger } from '@radix-ui/react-accordion';
import React from 'react';


interface FAQ {
    pergunta: string;
    resposta: string;
}

const faqs: FAQ[] = [
    {
        pergunta: 'Posso anunciar para outras cidades ou estados?',
        resposta: 'Sim, somos especialistas em anúncios online em Belo Horizonte, mas adequamos nossas estratégias à necessidade do cliente.',
    },
    {
        pergunta: 'Tenho que fazer alguma configuração na contratação do serviço?',
        resposta: 'Não. Nossa equipe faz toda a configuração. Apenas são solicitadas as credenciais de contas e plataformas.',
    },
    {
        pergunta: 'Na contratação do serviço, estão inclusas todas as plataformas?',
        resposta: 'Sim. Na contratação, será definida qual plataforma o cliente deseja anunciar, de acordo com seu orçamento.',
    },
    {
        pergunta: 'Preciso criar design de artes?',
        resposta: 'Não. Na contratação do serviço, já está inclusa a criação de artes de criativos para veiculação de campanhas.',
    },
    {
        pergunta: 'Já tenho anúncios veiculados; posso contratar o serviço?',
        resposta: 'Sim. Nossa equipe fará o processo de migração da sua empresa para nossa base.',
    },
    {
        pergunta: 'Na contratação do serviço, está incluído o valor dos anúncios?',
        resposta: 'Não. Na contratação, o cliente definirá quanto irá separar de orçamento para cada plataforma.',
    },
];

const FaqServiceAds = () => {
    return (
        <div>
            <FAQSection faqs={faqs} />
        </div>
    );
};

interface FAQSectionProps {
    faqs: FAQ[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => {
    return (
        <FaqService faqArray={faqs}/>
    );
};

export default FaqServiceAds;

