import { NextApiRequest, NextApiResponse } from 'next';
import { collection, addDoc, serverTimestamp, doc, setDoc, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase/firebase';
import { AuthService } from '@/app/module/services/auth-services';
import { cookies } from 'next/headers';
import { IFavorite, IProduct } from '@/app/types/types';
import { createFavorite } from '@/lib/firebase/createFavorite';


// Definindo a interface para o produto
interface IAppointment {
  user_id:string,
  date:string |Timestamp
  type:string
  status:string
}
export async function POST(request: Request) {
  
    try {
      const {appointment}: {appointment:IAppointment} = await request.json() 
      const session = cookies().get("user_id")
      const user_id = session?.value as string
      appointment.user_id = user_id
    
      await  createaAppointmentFireBase(appointment)
      const response = new Response(JSON.stringify({teste:"teste"}), {
        status: 200, // Define o status da resposta
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return response
    } catch (error) {
      console.error('Erro ao adicionar produto:', error);
      const response = new Response(JSON.stringify({ error: 'Failed to add product' }), {
        status: 500, // Define o status da resposta
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return response
    }

}

const createaAppointmentFireBase = async (appointment: IAppointment): Promise<string> => {
  try {
    const newDate = new Date(appointment.date as string)
    appointment.date = Timestamp.fromDate(newDate) 
    const docRef =     await addDoc(collection(db, 'user_appointments'), {
      type: appointment.type,
      date: appointment.date,// Converte Date para Timestamp
      user_id:appointment.user_id,
      status:"awaiting"
    });
    // const docRef = await addDoc(collection(db, 'user_favorites'), product);

    return docRef.id;
  } catch (error) {
    console.error('Erro ao adicionar documento:', error);
    throw error;
  }
};
