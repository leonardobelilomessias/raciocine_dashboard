import { NextApiRequest, NextApiResponse } from 'next';
import { collection, doc, getDoc, getDocs, QuerySnapshot } from 'firebase/firestore';
import { db, storage } from '@/lib/firebase/firebase';
import { NextRequest } from 'next/server';
import { getDownloadURL, listAll, ref } from 'firebase/storage';

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
type ListResponse = {
  urls: string[];
};
// Manipulador de requisições da API
export  async function GET(request: NextRequest) {
    const product  = request.nextUrl.searchParams
    const id = product.get('id') as string
    if (!id || typeof id !== "string") {
      const response = new Response(JSON.stringify({error: "Invalid ID parameter" }), {
        status: 400, // Define o status da resposta
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
    try {
      const listRef = ref(storage, id.trim());
      const list = await listAll(listRef);
      const urls = await Promise.all(
        list.items.map((item) => getDownloadURL(item))
      );
      const responseUrls  = { urls };
        const response = new Response(JSON.stringify(responseUrls), {
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
