// utils/dateUtils.ts
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

// Define a interface para o retorno da função
interface FormattedDate {
  date: string;
  time: string;
}

// Função para formatar o campo de data e horário do Firebase
export const formatFirebaseDate = (dateInput: any): FormattedDate => {
  console.log("vindo para função firebaseDAte",dateInput)
  let dateObject: Date;

  // Verifica se o dateInput é do tipo Timestamp do Firebase
  if (dateInput?.seconds && dateInput?.nanoseconds) {
    dateObject = new Date(dateInput.seconds * 1000 + dateInput.nanoseconds / 1000000);
  } else if (dateInput instanceof Date) {
    // Se já for um objeto Date
    dateObject = dateInput;
  } else {
    throw new Error("Formato de data não suportado");
  }

  // Formata a data e o horário
  const formattedDate = format(dateObject, 'dd/MM/yy', { locale: ptBR });
  const formattedTime = format(dateObject, 'HH:mm', { locale: ptBR });

  return {
    date: formattedDate,
    time: formattedTime,
  };
};
