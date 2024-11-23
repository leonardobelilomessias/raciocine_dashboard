import { NextApiRequest, NextApiResponse } from 'next';
import { collection, CollectionReference, doc, DocumentData, endBefore, getCountFromServer, getDoc, getDocs, limit, orderBy, query, QuerySnapshot, startAfter, where } from 'firebase/firestore';
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
  console.log("id usuario em notificaçoes ", user_id)
  const results: DocumentData[] = [];
  try {
    const productsCol = collection(db, "notifications");
    const countSnapshot = await getCountFromServer(query(productsCol,where("id_user", "in", [`${user_id}`, "all"])));

    const totalDocs = countSnapshot.data().count;
    const totalPages = Math.ceil(totalDocs / Number(pageSize));

    if(isFirst=="true"){
      const data = await firstPage({lastCursor,pageSize,productsCol:productsCol,stepPage,totalPages,user_id})
      return new Response(
        JSON.stringify({...data}),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    if (lastCursor) {
      // Recupera a referência ao documento com base no `lastCursor` (ID do documento)
      const cursorDocRef = doc(db, "notifications",  lastCursor );
      const cursorDocSnap = await getDoc(cursorDocRef);
      // Verifica se o documento existe
      if (cursorDocSnap.exists()) {
        if(isPrevious=="false"){
          const data = await nextPage({lastCursor,pageSize,productsCol:productsCol,stepPage,totalPages,user_id})
          return new Response(
            JSON.stringify({...data}),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
          );
        }
        if(isPrevious=="true"){
          const data = await previousPage({lastCursor,pageSize,productsCol:productsCol, stepPage,totalPages,user_id})
          return new Response(
            JSON.stringify({...data}),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
          );
        }
        
      } else {
        console.warn("Documento de cursor não encontrado:", lastCursor);
      }
    }
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



async function firstPage({productsCol,pageSize,lastCursor,stepPage,totalPages,user_id}:{productsCol:CollectionReference<DocumentData>,pageSize:string, lastCursor:string,stepPage:number,totalPages:number,user_id:string}) {
  // Usa a referência do documento no `startAfter`
  const firstQuery = query(
    productsCol,
    where("id_user", "in", [`${user_id}`, "all"]),
    orderBy("created_at", "desc"),
    // orderBy("__name__"), // Ordena pelo campo 'created_at'
    limit(Number(pageSize)),
  );
  const snapshot = await getDocs(firstQuery);
  const products: Product[] = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
    owner:doc.data().user_id===user_id
  }));
  
  // Retorna o último cursor da página
  const lastDoc = snapshot.docs[snapshot.docs.length - 1];
  const data = {
    data: products,
    totalPages, // Total de páginas
    lastCursor: lastDoc ? lastDoc.id : null,
    firstCursor:products[0].id,
    stepPage:0
  }
  return data  
}

 async function nextPage({productsCol,pageSize,lastCursor,stepPage,totalPages,user_id}:{productsCol:CollectionReference<DocumentData>,pageSize:string, lastCursor:string,stepPage:number,totalPages:number,user_id:string}){
    // Usa a referência do documento no `startAfter`
    const cursorDocRef = doc(db, "notifications",  lastCursor );
    const cursorDocSnap = await getDoc(cursorDocRef);
    const nextQuery = query(
      productsCol,
      where("id_user", "in", [`${user_id}`, "all"]),
      orderBy("created_at", "desc"),
      // orderBy("__name__"), // Ordena pelo campo 'created_at'
      limit(Number(pageSize)),
      startAfter(cursorDocSnap),
    );
    const snapshot = await getDocs(nextQuery);
    const products: Product[] = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      owner:doc.data().user_id===user_id
    }));
    
    // Retorna o último cursor da página
    const lastDoc = snapshot.docs[snapshot.docs.length - 1];
    // console.log("lat doc aquii",lastDoc.data())
    const newStep = stepPage-1
    const data = {
      data: products,
      totalPages, // Total de páginas
      lastCursor: lastDoc ? lastDoc.id : null,
      firstCursor:products[0].id,
      stepPage:stepPage+1
    }
    return data
}

async function previousPage({productsCol,pageSize,lastCursor,stepPage,totalPages,user_id}:{productsCol:CollectionReference<DocumentData>,pageSize:string, lastCursor:string,stepPage:number,totalPages:number,user_id:string}){
  // Usa a referência do documento no `startAfter`
  const cursorDocRef = doc(db, "notifications",  lastCursor );
  const cursorDocSnap = await getDoc(cursorDocRef);
  const nextQuery = query(
    productsCol,
    where("id_user", "in", [`${user_id}`, "all"]),
    orderBy("created_at", "asc"),
    startAfter(cursorDocSnap),
    // orderBy("__name__"), // Ordena pelo campo 'created_at'
    limit(Number(pageSize)),
  );
  const snapshot = await getDocs(nextQuery);
  const products: Product[] = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
    owner:doc.data().user_id===user_id
  }));
  
  // Retorna o último cursor da página
  const lastDoc = snapshot.docs[snapshot.docs.length - 1];
  const newStep = stepPage-1
  const reverseArray = products.reverse()
  const data = {
    data: reverseArray,
    totalPages, // Total de páginas
    lastCursor: products[products.length-1].id,
    firstCursor:products[0].id,
    stepPage:stepPage-1
  }
  return data
}