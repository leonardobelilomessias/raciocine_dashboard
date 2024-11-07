import { NextApiRequest, NextApiResponse } from 'next';
import { collection, getDocs, QuerySnapshot } from 'firebase/firestore';
import { db } from '@/lib/firebase/firebase';

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

    try {
      const productsCol = collection(db, 'post_forum');
      const productSnapshot: QuerySnapshot = await getDocs(productsCol);
      
      // Mapeia os documentos e inclui o ID junto com os dados
      const productList: Product[] = productSnapshot.docs.map(doc => ({
        id: doc.id, // Inclui o ID do documento
        ...doc.data() // Inclui os dados do documento
      })) as Product[];
      const response = new Response(JSON.stringify(productList), {
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
