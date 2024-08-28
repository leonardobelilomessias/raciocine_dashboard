import { NextApiRequest, NextApiResponse } from 'next';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase/firebase';
import { createFavorite } from '@/lib/firebase/createFavorite';
import { AuthService } from '@/app/module/services/auth-services';
import { cookies } from 'next/headers';
import { IProduct } from '@/app/types/types';


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
      const {product}: {product:IProduct} = await request.json() 
      const session = cookies().get("user_id")
      const user_id = session?.value as string
      await  createFavorite(user_id,product)
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

