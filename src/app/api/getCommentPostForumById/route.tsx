import { NextApiRequest, NextApiResponse } from 'next';
import { collection, doc, getDoc, getDocs, query, QuerySnapshot, where } from 'firebase/firestore';
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
    const comment  = request.nextUrl.searchParams
    const session = cookies().get("user_id")
    const user_id = session?.value as string
    const id = comment.get('id') as string
    try {
      const postsRef = collection(db, "comments_post_forum");

      // Criação da query com filtro pelo campo `id_post`
      const q = query(postsRef, where("id_post_comment", "==", id));
    
      // Executa a consulta
      const querySnapshot = await getDocs(q);
    
      // Retorna os documentos encontrados
      const resultados = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
        const response = new Response(JSON.stringify(resultados), {
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
