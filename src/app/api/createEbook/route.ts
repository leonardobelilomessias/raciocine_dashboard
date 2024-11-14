import { NextApiRequest, NextApiResponse } from 'next';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase/firebase';
import { revalidatePath } from 'next/cache';


// Definindo a interface para o produto
interface INewEbook {
  title: string;
  description: string;
  price: string;
  author:string
  slug?: string;
  createdAt?: any; // Pode ser do tipo Timestamp do Firebase
  updatedAt?: any; // Pode ser do tipo Timestamp do Firebase
}
export async function POST(request: Request) {
  
    try {
      const ebook: INewEbook = await request.json() 
      ebook.createdAt = new Date();
      ebook.updatedAt = new Date();
      const docId = await addEbook(ebook);
      const response = new Response(JSON.stringify(docId), {
        status: 200, // Define o status da resposta
        headers: {
          'Content-Type': 'application/json'
        }
      });
      revalidatePath('/ebooks')
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

const addEbook = async (ebook: INewEbook): Promise<string> => {
  try {
    const docRef = await addDoc(collection(db, 'ebooks'), ebook);
    return docRef.id;
  } catch (error) {
    console.error('Erro ao adicionar documento:', error);
    throw error;
  }
};
