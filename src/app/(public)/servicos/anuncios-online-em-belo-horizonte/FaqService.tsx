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

const FaqService = () => {
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
    <div className="max-w-4xl mx-auto p-4 md:p-6 lg:p-8">
      <h2 className="text-3xl font-bold mb-4">Perguntas Frequentes</h2>
      <div className="flex flex-col space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-gray-100 shadow-md rounded-lg p-4">
            <h3 className="text-xl font-bold mb-2">{faq.pergunta}</h3>
            <p className="text-gray-600">{faq.resposta}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


export default FaqService;