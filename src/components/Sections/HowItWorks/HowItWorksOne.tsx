import { CandlestickChartIcon, ChartCandlestick, LucideProps, NotebookText, Plane, SquarePower, Wand } from 'lucide-react';
import React from 'react';

type Step = {
  titulo: string;
  descricao: string;
  icon:React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
}


type dataHowItWork ={
  title:string
  description:string
  steps:Step[]
}
export const HowItWorksOne = ({data}:{data:dataHowItWork}) => {
  return (
    <div className="my-20 mx-auto p-4 md:p-6 lg:p-8 flex flex-col items-center justify-center gap-4">
      <h2 className="text-3xl font-bold mb-4 text-center ">{data.title}</h2>
        <div className='bg-gray-100 w-96 h-56 flex items-center justify-center align-middle'>
            <p> video youtube</p>
        </div>
        <Stepper steps={data.steps}/>
    </div>
  );
};



function Stepper({steps}:{steps:Step[]}) {
    return (
<div>
  <h2 className="sr-only">Etapas</h2>

  <div>
    <ol
      className="grid grid-cols-1 divide-x divide-gray-100 overflow-hidden rounded-lg border border-gray-100 text-sm text-gray-500 sm:grid-cols-4"
    >
     {
      steps.map((step)=>(
        <li key={step.titulo} className="flex md:items-center md:justify-center gap-2 p-4">
        <step.icon/>
  
          <p className="leading-none">
            <strong className="block font-medium"> {step.titulo} </strong>
            <small className="mt-1"> {step.descricao} </small>
          </p>
        </li>
      ))
     }
    </ol>
  </div>
</div>
    );
  }