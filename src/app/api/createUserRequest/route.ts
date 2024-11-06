import { NextApiRequest, NextApiResponse } from 'next';
import { collection, addDoc, serverTimestamp, doc, setDoc, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase/firebase';
import { AuthService } from '@/app/module/services/auth-services';
import { cookies } from 'next/headers';
import { IFavorite, IProduct } from '@/app/types/types';
import { createFavorite } from '@/lib/firebase/createFavorite';


// Definindo a interface para o produto
interface IUserRequest {
  title: string;
  description: string;
  price: number;
  address: string;
  city: string;
  neighborhood: string;
  zip: string;
  bedrooms: string;
  bathrooms: string;
  garages: string;
  area: string;
  amenities: Record<string, boolean>; // Ajuste o tipo conforme a estrutura do seu objeto amenities
  slug?: string;
  createdAt?: any; // Pode ser do tipo Timestamp do Firebase
  updatedAt?: any; // Pode ser do tipo Timestamp do Firebase
  id_user:string
  id:string
}
export async function POST(request: Request) {
  
    try {
      const {product}: {product:IUserRequest} = await request.json() 
      const session = cookies().get("user_id")
      const user_id = session?.value as string
      product.id_user = user_id
      await  createFavotiresFireBase(product)
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

const createFavotiresFireBase = async (product: IUserRequest): Promise<string> => {
  try {
    const newDate = new Date()
    product.createdAt = Timestamp.fromDate(newDate) 
    const docRef =     await addDoc(collection(db, 'user_requests'), {
      ...product,
      id_user:product.id_user,
      status:"awaiting",
      id_request:`${product.id_user}&&${product.id}`
    });
    // const docRef = await addDoc(collection(db, 'user_favorites'), product);

    return docRef.id;
  } catch (error) {
    console.error('Erro ao adicionar documento:', error);
    throw error;
  }
};
