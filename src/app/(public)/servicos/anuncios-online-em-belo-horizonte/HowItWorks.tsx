import { ChartCandlestick, NotebookText, Plane, SquarePower, Wand } from 'lucide-react';
import React from 'react';

interface Etapa {
  titulo: string;
  descricao: string;
}

const etapas: Etapa[] = [
  {
    titulo: 'Análise de Mercado',
    descricao: 'Pesquisa e análise do público-alvo e concorrentes',
  },
  {
    titulo: 'Planejamento de Funil',
    descricao: 'Definição do funil de vendas e estratégias de conversão',
  },
  {
    titulo: 'Execução e Veiculação',
    descricao: 'Desenvolvimento e lançamento do produto',
  },
  {
    titulo: 'Otimização e Campanhas',
    descricao: 'Análise de resultados e otimização contínua',
  },
];

const HowItWorks = () => {
  return (
    <div className="my-20 mx-auto p-4 md:p-6 lg:p-8 flex flex-col items-center justify-center gap-4">
      <h2 className="text-3xl font-bold mb-4 text-center ">Etapas de Criação de Produto</h2>
        <div className='bg-gray-100 w-96 h-56 flex items-center justify-center align-middle'>
            <p> video youtube</p>
        </div>
        <Stepper/>
    </div>
  );
};

export default HowItWorks;

function Stepper() {
    return (
<div>
  <h2 className="sr-only">Steps</h2>

  <div>
    <ol
      className="grid grid-cols-1 divide-x divide-gray-100 overflow-hidden rounded-lg border border-gray-100 text-sm text-gray-500 sm:grid-cols-4"
    >
      <li className="flex md:items-center md:justify-center gap-2 p-4">
      <ChartCandlestick/>

        <p className="leading-none">
          <strong className="block font-medium"> Analise de mercado </strong>
          <small className="mt-1"> Seu posicionamento e o da concorencia no mercado. </small>
        </p>
      </li>

      <li className="relative flex md:items-center md:justify-center gap-2 bg-gray-50 p-4">
        <span
          className="absolute -left-2 top-1/2 hidden size-4 -translate-y-1/2 rotate-45 border border-gray-100 sm:block ltr:border-b-0 ltr:border-s-0 ltr:bg-white rtl:border-e-0 rtl:border-t-0 rtl:bg-gray-50"
        >
        </span>

        <span
          className="absolute -right-2 top-1/2 hidden size-4 -translate-y-1/2 rotate-45 border border-gray-100 sm:block ltr:border-b-0 ltr:border-s-0 ltr:bg-gray-50 rtl:border-e-0 rtl:border-t-0 rtl:bg-white"
        >
        </span>
        <NotebookText/>

        <p className="leading-none">
          <strong className="block font-medium"> Planejamentos </strong>
          <small className="mt-1"> Criaçao de funil de vendas e campanhas. </small>
        </p>
      </li>

      <li className="flex md:items-center md:justify-center gap-2 p-4">
      <SquarePower/>

        <p className="leading-none">
          <strong className="block font-medium"> Execuçao. </strong>
          <small className="mt-1"> Veixulaçao de campanhas para públicos direcionados </small>
        </p>
      </li>

      <li className="flex md:items-center md:justify-center gap-2 p-4">
        <Wand/>

        <p className="leading-none">
          <strong className="block font-medium"> Otimização </strong>
          <small className="mt-1"> Aprimoração de resultados estrategicos . </small>
        </p>
      </li>
    </ol>
  </div>
</div>
    );
  }