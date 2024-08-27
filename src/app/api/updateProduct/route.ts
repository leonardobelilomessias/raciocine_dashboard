// Ajuste o caminho conforme necessário
import { db, storage } from '@/lib/firebase/firebase';
import { doc, deleteDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { ref, deleteObject, listAll } from 'firebase/storage';
import type { NextApiRequest, NextApiResponse } from 'next';
import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';
type Data = {
  [key: string]: any;
};

type UpdatedData = Data & {
  updatedAt: any;
  id?: string; // Campo id opcional
};

export async function POST(request: Request, ) {
      const { docId, data , bombom} =  await request.json() 
console.log('em api update product',docId, bombom )
      try {
      if (!docId || !data) {
        const response = new Response(JSON.stringify({ error: 'Dados insuficientes' }), {
          status: 400, // Define o status da resposta
          headers: {
            'Content-Type': 'application/json'
          }
        });
      return response
      }
        // Atualiza o documento no Firestore
        const docRef = doc(db, 'products', docId);
        const updatedData: UpdatedData = { ...data, updatedAt: serverTimestamp() };
        await updateDoc(docRef, updatedData);
  
        // Adiciona o campo id ao objeto retornado
        updatedData.id = docId;
  
        // Responde com sucesso e retorna o objeto atualizado com o id
        const response = new Response(JSON.stringify(updatedData), {
          status: 200, // Define o status da resposta
          headers: {
            'Content-Type': 'application/json'
          }
        });
        revalidatePath("/lista")
        return response
        
    
  } catch (error) {
    console.error("Erro ao deletar produto e bucket:", error);
    const response = new Response(JSON.stringify({ error: "Erro ao atualizar produto e bucket." }), {
      status: 500, // Define o status da resposta
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response
    
  }
  
  }
  