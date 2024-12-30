import { Button } from "@/components/ui/button";

interface dataTimer {
  title: string;
  buttonText: string;
  numberHighlight: string;
  labelNumber: string;
  callToAction:string
  miniLabel:string

}

export const TimerOne = ({data}:{data:dataTimer}) => {
  return (
    <section id="testimonials" className="bg-blue-900 flex flex-col md:flex-row  w-screen gap-8 items-center justify-center px-20 py-20 sm:py-20" >
      <div className=" w-1/3 flex flex-col  gap-1 ">
    <p className="text-center text-xl text-white text-border font-bold">Tempo Limitado</p>
    <p className=" text-white text-7xl font-bold text-center">{data.numberHighlight}</p> 
        <div className="flex flex-col ">
            <span className="text-4xl text-white  text-center font-bold">{data.labelNumber}</span>
            <span className="text-white text-lg font-bold text-center">Disponiveis</span>
        </div>
      </div>
      <div className="flex md:block flex-col">
          <span className="bg-white inline-block shrink self-center  text-center text-blue-800 p-1 text-xs mt-5 rounded-md">{data.miniLabel}</span>
          <p className=" text-center md:text-left text-white my-4 font-bold text-3xl md:text-5xl md:h-1/2 ">
              {data.callToAction}.
          </p>
          <Button size={"lg"}>{data.buttonText}</Button>
      </div>
    </section>
  );
};
