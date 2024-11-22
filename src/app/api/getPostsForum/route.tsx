import { NextApiRequest, NextApiResponse } from 'next';
import { collection, getDocs, QuerySnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase/firebase';
import { cookies } from 'next/headers';

// Define a interface para o produto
interface Product {
  id: string;
  [key: string]: any; // Permite adicionar outras propriedades do produto
}

// Manipulador de requisições da API
export async function GET() {
  try {
    // Obtém a coleção 'post_forum' e ordena pelo campo 'created_at' em ordem decrescente
    const productsCol = collection(db, 'post_forum');
    const productsQuery = query(productsCol, orderBy('created_at', 'desc'));
    const productSnapshot: QuerySnapshot = await getDocs(productsQuery);

    // Obtém o cookie do usuário
    const session = cookies().get("user_id");
    const user_id = session?.value;

    if (!user_id) {
      // Retorna erro se o cookie 'user_id' não existir
      return new Response(
        JSON.stringify({ error: 'User not authenticated' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Mapeia os documentos e marca os que pertencem ao usuário
    const productList: Product[] = productSnapshot.docs.map(doc => ({
      id: doc.id, // Inclui o ID do documento
      ...doc.data(), // Inclui os dados do documento
      owner: doc.data().user_id === user_id, // Adiciona propriedade 'owner'
    }));

    // Retorna a lista de produtos como resposta
    return new Response(
      JSON.stringify(productList),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    // Tratamento de erros
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error fetching products:', error);

    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
