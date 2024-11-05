import { NextApiRequest, NextApiResponse } from 'next';
import { collection, DocumentData, getDocs, query, QuerySnapshot, where } from 'firebase/firestore';
import { db } from '@/lib/firebase/firebase';
import { cookies } from 'next/headers';
import { IFavorite } from '@/app/types/types';

// Define a interface para o produto
interface Product {
  id: string;
  [key: string]: any; // Permite adicionar outras propriedades do produto
}

// Define a interface para a resposta da API
interface ApiResponse {
  error?: string;
  [key: string]: any; // Permite adicionar outras propriedades
}

// Manipulador de requisições da API
export  async function GET() {
  const session = cookies().get("user_id")
  const user_id = session?.value as string
  const results: DocumentData[] = [];
  const collectionRef = collection(db, 'notifications');
    try {
      const combinedQuery = query(collectionRef, where("id_user", "in", [`${user_id}`, "all"]));
    const querySnapshot = await getDocs(combinedQuery);

    querySnapshot.forEach((doc) => {
      results.push({ id: doc.id, ...doc.data() });
    });
      
      // Mapeia os documentos e inclui o ID junto com os dados
      // const productList: Product[] = productSnapshot.docs.map(doc => ({
      //   id: doc.id, // Inclui o ID do documento
      //   ...doc.data() // Inclui os dados do documento
      // })) as Product[];
      const response = new Response(JSON.stringify(results), {
        status: 200, // Define o status da resposta
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return response
    } catch (error) {
      if (error instanceof Error) {
        const res = new Response()     
        return res
      } else {
        return Response.json({ error: 'An unknown error occurred' });
      }
    }

}
