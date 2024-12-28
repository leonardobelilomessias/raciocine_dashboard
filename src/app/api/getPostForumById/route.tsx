import { NextApiRequest, NextApiResponse } from 'next';
import { collection, doc, getDoc, getDocs, QuerySnapshot } from 'firebase/firestore';
import { db } from '@/lib/firebase/firebase';
import { NextRequest } from 'next/server';
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
type PostsForumType={
  title:string
  id:string
  message:string
  created_at:string
  
}
// Manipulador de requisições da API
export  async function GET(request: NextRequest) {
    const product  = request.nextUrl.searchParams
    const session = await cookies().get("user_id")
    const user_id = session?.value as string
    const id = product.get('id') as string
    try {
        const docRef = await doc(db, 'post_forum', id.trim());
      const productSnapshot = await getDoc(docRef);
      
      // Mapeia os documentos e inclui o ID junto com os dados

      if (productSnapshot.exists()) {
        const productData = {
          ...productSnapshot.data(),
          owner:productSnapshot.data().user_id===user_id,
          id:productSnapshot.id
        }
        const response = new Response(JSON.stringify(productData), {
            status: 200, // Define o status da resposta
            headers: {
              'Content-Type': 'application/json'
            }
          });
          return response
      } else {
        const response = new Response(JSON.stringify({message:"Product not found"}), {
            status: 404, // Define o status da resposta
            headers: {
              'Content-Type': 'application/json'
            }
          });
          return response
      }


    } catch (error) {
      if (error instanceof Error) {
        const res = new Response()     
        return res
      } else {
        return Response.json({ error: 'An unknown error occurred' });
      }
    }

}
