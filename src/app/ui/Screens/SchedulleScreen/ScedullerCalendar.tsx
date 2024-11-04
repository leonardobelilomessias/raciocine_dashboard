"use client"


import { Calendar } from "@/components/ui/calendar"
import "react-datepicker/dist/react-datepicker.css";
import DatePicker, { registerLocale } from 'react-datepicker';
import { useState } from "react";
import { ptBR } from 'date-fns/locale'; 
import { date } from "zod";
import { Label } from "@/components/ui/label";
import { CalendarDays } from "lucide-react";
registerLocale('pt-BR', ptBR);
export function SchedulleCalendar() {
  
  const initialDate = new Date();
  initialDate.setHours(10, 30, 0, 0); 
  const [startDate, setStartDate] = useState<Date | null>(initialDate);
  const [selectDate, setSelectDate] = useState<Date | null>(initialDate);

  // Função para permitir apenas horários futuros
  const filterPassedTime = (time: Date) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    // Verifica se a data e o horário selecionado estão no futuro
    const isFuture = currentDate.getTime() < selectedDate.getTime();

    // Define o horário de início (9:30) e fim (17:30)
    const startHour = 9.5; // 9:30 em formato decimal
    const endHour = 17.5;  // 17:30 em formato decimal
    const selectedHour = selectedDate.getHours() + selectedDate.getMinutes() / 60;

    // Verifica se está dentro do intervalo
    const isWithinHours = selectedHour >= startHour && selectedHour <= endHour;

    return isFuture && isWithinHours;
  };
  const handleDateChange = (date: Date | null) => {
    setStartDate(date);
    if (date) {
      console.log("Data e Hora Selecionada:", date);
      console.log("Data formatada:", date.toLocaleDateString());
      console.log("Hora formatada:", date.toLocaleTimeString());
    }
  };
  return (
        <div className="flex flex-row gap-3 align-center justify-center">
      <DatePicker
      id="terms"
      className="border border-primaryPalet p-1 rounded"
      selected={startDate}
      onChange={handleDateChange}
      dateFormat="Pp"
      showTimeSelect // Exibe seletor de horas
      filterTime={filterPassedTime} // Filtra para horários futuros
      timeIntervals={15} // Intervalos de 15 minutos para seleção de horas
      minDate={new Date()}
      locale="pt-BR" // Define a localização para português brasileiro
    />
    <Label htmlFor="terms" className=" flex  align-middle align-center items-center  justify-center" ><CalendarDays className="text-primaryPalet" /></Label>
    {/* {JSON.stringify(startDate)} */}
        </div>
  )
}
