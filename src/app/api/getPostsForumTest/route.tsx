import { collection, query, orderBy, limit, startAt, startAfter, getDocs, getCountFromServer, doc, getDoc, endAt, endBefore, CollectionReference, DocumentData } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest } from "next/server";
import { cookies } from "next/headers";

interface Product {
  id: string;
  [key: string]: any;
}

export async function GET(request: NextRequest, res: NextApiResponse) {
  const item =request.nextUrl.searchParams
  const pageSize = item.get('pageSize') as string
  const isFirst = item.get('isFirst') as string
  const lastCursor = item.get('lastCursor') as string
  const isPrevious = item.get('isPrevious') as string
  const stepPage = Number(item.get('stepPage')) 
  const session = cookies().get("user_id")
  const user_id = session?.value as string
  console.log("step page aquii", stepPage)
  try {
    const productsCol = collection(db, "post_forum");
    const countSnapshot = await getCountFromServer(productsCol);
    const totalDocs = countSnapshot.data().count;
    const totalPages = Math.ceil(totalDocs / Number(pageSize));

    if(isFirst=="true"){
      console.log('fistPAge aquiii')
      const data = await firstPage({lastCursor,pageSize,productsCol:productsCol,stepPage,totalPages,user_id})
      return new Response(
        JSON.stringify({...data}),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }
    if (lastCursor) {
      const cursorDocRef = doc(db, "post_forum",  lastCursor );
      const cursorDocSnap = await getDoc(cursorDocRef);
      
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
  } catch (error) {
    console.error("Erro ao buscar produtos paginados:", error);
    return new Response(
      JSON.stringify({ error: "Erro ao buscar produtos" }))
  }
}


async function firstPage({productsCol,pageSize,lastCursor,stepPage,totalPages,user_id}:{productsCol:CollectionReference<DocumentData>,pageSize:string, lastCursor:string,stepPage:number,totalPages:number,user_id:string}) {
  // Usa a referência do documento no `startAfter`
  const firstQuery = query(
    productsCol,
    orderBy("created_at", "desc"),
    orderBy("__name__"), // Ordena pelo campo 'created_at'
    limit(Number(pageSize)),
  );
  console.log("emm first", )
  const snapshot = await getDocs(firstQuery);
  const products: Product[] = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
    owner:doc.data().user_id===user_id
  }));
  
  // Retorna o último cursor da página
  const lastDoc = snapshot.docs[snapshot.docs.length - 1];
  // console.log("lat doc aquii",lastDoc.data())
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
    const cursorDocRef = doc(db, "post_forum",  lastCursor );
    const cursorDocSnap = await getDoc(cursorDocRef);
    const nextQuery = query(
      productsCol,
      orderBy("created_at", "desc"),
      orderBy("__name__"), // Ordena pelo campo 'created_at'
      limit(Number(pageSize)),
      startAfter(cursorDocSnap),
    );
    console.log("emm nexxt", )
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
  const cursorDocRef = doc(db, "post_forum",  lastCursor );
  const cursorDocSnap = await getDoc(cursorDocRef);
  if (cursorDocSnap.exists()) {
    console.log("Cursor documento:", cursorDocSnap.data().created_at);
  } else {
    console.error("Documento do cursor não encontrado.");
  }
  console.log(cursorDocSnap.id)
  const nextQuery = query(
    collection(db, "post_forum"),
    orderBy("created_at", "asc"), // Ordena pelo campo 'created_at'
    orderBy("__name__"),
    startAfter(cursorDocSnap),
    limit(Number(pageSize))
  );
  console.log("emm previous", )
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
  const reverseArray = products.reverse()
  const data = {
    data: reverseArray,
    totalPages, // Total de páginas
    lastCursor: products.pop()?.id,
    firstCursor:products[0].id,
    stepPage:stepPage-1
  }
  return data
}