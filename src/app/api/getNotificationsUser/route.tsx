import { NextApiRequest, NextApiResponse } from 'next';
import { collection, doc, DocumentData, endBefore, getCountFromServer, getDoc, getDocs, limit, orderBy, query, QuerySnapshot, startAfter, where } from 'firebase/firestore';
import { db } from '@/lib/firebase/firebase';
import { cookies } from 'next/headers';
import { IFavorite } from '@/app/types/types';
import { NextRequest } from 'next/server';

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
export  async function GET(request: NextRequest) {
  const item =request.nextUrl.searchParams
  const pageSize = item.get('pageSize') as string
  const isFirst = item.get('isFirst') as string
  const lastCursor = item.get('lastCursor') as string
  const isPrevious = item.get('isPrevious') as string
  const stepPage = Number(item.get('stepPage')) 
  const session = cookies().get("user_id")
  const user_id = session?.value as string
  const results: DocumentData[] = [];
  try {
    const productsCol = collection(db, "notifications");

    // Obtenha a contagem total de documentos
    const countSnapshot = await getCountFromServer(query(productsCol,where("id_user", "in", [`${user_id}`, "all"])));
    const totalDocs = countSnapshot.data().count;
    const totalPages = Math.ceil(totalDocs / Number(pageSize));

    // Configura a query
    let productsQuery = query(
      productsCol,
      where("id_user", "in", [`${user_id}`, "all"]),
      orderBy("created_at", "desc"), // Ordena pelo campo 'created_at'
      limit(Number(pageSize)) // Define o limite de documentos por página
    );
    
    // Se houver um cursor, adiciona `startAt` ou `startAfter`
    if (lastCursor) {
      // Recupera a referência ao documento com base no `lastCursor` (ID do documento)
      const cursorDocRef = doc(db, "notifications",  lastCursor );
      const cursorDocSnap = await getDoc(cursorDocRef);
      // Verifica se o documento existe
      if (cursorDocSnap.exists()) {
        if(isPrevious=="false"){

          // Usa a referência do documento no `startAfter`

          productsQuery = query(productsQuery, startAfter(cursorDocSnap));
          console.log("emm nexxt", isPrevious==null)
        }
        if(isPrevious=="true"){
          productsQuery = query(productsQuery, endBefore(cursorDocSnap));
          console.log("em previouuuuuuuus", isPrevious==null)
        }
        
      } else {
        console.warn("Documento de cursor não encontrado:", lastCursor);
      }
    }
    
    const snapshot = await getDocs(productsQuery);
  
    // Mapeia os documentos
    const products: Product[] = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    
    // Retorna o último cursor da página
    const lastDoc = snapshot.docs[snapshot.docs.length - 1];
    // console.log("lat doc aquii",lastDoc.data())
    const newStep = isPrevious=="false"?stepPage+1:stepPage-1
    console.log(isFirst)
    return new Response(
      JSON.stringify({
        data: products,
        totalPages, // Total de páginas
        lastCursor: lastDoc ? lastDoc.id : null,
        firstCursor:products[0].id,
        stepPage:!!isFirst?0:newStep
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } 
    catch (error) {
      if (error instanceof Error) {
        const res = new Response()     
        return res
      } else {
        return Response.json({ error: 'An unknown error occurred' });
      }
    }

}
