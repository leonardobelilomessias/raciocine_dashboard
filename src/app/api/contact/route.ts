import { NextApiRequest, NextApiResponse } from 'next';
import { collection, addDoc, serverTimestamp, doc, setDoc, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase/firebase';
import { AuthService } from '@/app/module/services/auth-services';
import { cookies } from 'next/headers';
import { IFavorite, IProduct } from '@/app/types/types';
import { createFavorite } from '@/lib/firebase/createFavorite';


// Definindo a interface para o produto
interface IContact {
  name:string,
  bussiness:string
  email:string
  whatsapp:string
  message:string
  updated_at:string |Timestamp
}
export async function POST(request: Request) {
  
    try {
      const {consult}: {consult:IContact} = await request.json() 

        console.log('aqui em consult',consult)
    
      const idContactCreated = await  createapostForumFireBase(consult)
      const response = new Response(JSON.stringify({idContactCreated:idContactCreated}), {
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

const createapostForumFireBase = async (client: IContact): Promise<string> => {
  try {


    const docRef =     await addDoc(collection(db, 'contact'), {
      name: client.name,
      created_at:  new Date() ,// Converte Date para Timestamp
      bussiness:client.bussiness,
      status:"pendding",
      whatsapp:client.whatsapp,
      email:client.email,
      message:client.message
    });
    // const docRef = await addDoc(collection(db, 'user_favorites'), product);

    return docRef.id;
  } catch (error) {
    console.error('Erro ao adicionar documento:', error);
    throw error;
  }
};
