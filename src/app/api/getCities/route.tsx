import { NextApiRequest, NextApiResponse } from 'next';
import { collection, getDocs, QuerySnapshot } from 'firebase/firestore';
import { db } from '@/lib/firebase/firebase';
import { cookies } from 'next/headers';

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
       // Obtém a instância do Firestore
      const cityCollectionRef = collection(db, "city"); 
      const snapshot = await getDocs(cityCollectionRef); // Obtém os documentos da coleção
      const cities = snapshot.docs.map(doc => ({ name: doc.id, ...doc.data() })); 
      const response = new Response(JSON.stringify(cities), {
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
