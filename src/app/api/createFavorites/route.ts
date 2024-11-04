import { NextApiRequest, NextApiResponse } from 'next';
import { collection, addDoc, serverTimestamp, doc, setDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase/firebase';
import { AuthService } from '@/app/module/services/auth-services';
import { cookies } from 'next/headers';
import { IFavorite, IProduct } from '@/app/types/types';
import { createFavorite } from '@/lib/firebase/createFavorite';


// Definindo a interface para o produto
interface Product {
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
}
export async function POST(request: Request) {
  
    try {
      const {product}: {product:IFavorite} = await request.json() 
      const session = cookies().get("user_id")
      const user_id = session?.value as string
      product.id_user = user_id
      product.id_favorite = `${user_id}&${product.id}`
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

const createFavotiresFireBase = async (product: IFavorite): Promise<string> => {
  try {
    const docRef = doc(db, "user_favorites", product.id_favorite);
    // const docRef = await addDoc(collection(db, 'user_favorites'), product);
    await setDoc(docRef, product);
    return docRef.id;
  } catch (error) {
    console.error('Erro ao adicionar documento:', error);
    throw error;
  }
};
