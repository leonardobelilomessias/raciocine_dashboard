import { NextApiRequest, NextApiResponse } from 'next';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase/firebase';
import { revalidatePath } from 'next/cache';


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
      const product: Product = await request.json() 
      product.createdAt = new Date();
      product.updatedAt = new Date();
      const docId = await addProduct(product);
      const response = new Response(JSON.stringify(docId), {
        status: 200, // Define o status da resposta
        headers: {
          'Content-Type': 'application/json'
        }
      });
      revalidatePath('/lista')
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

const addProduct = async (product: Product): Promise<string> => {
  try {
    const docRef = await addDoc(collection(db, 'products'), product);
    return docRef.id;
  } catch (error) {
    console.error('Erro ao adicionar documento:', error);
    throw error;
  }
};
