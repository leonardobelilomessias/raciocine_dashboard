// Ajuste o caminho conforme necessário
import { db, storage } from '@/lib/firebase/firebase';
import { doc, deleteDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { revalidatePath } from 'next/cache';
type Data = {
  [key: string]: any;
};

type UpdatedData = Data & {
  updatedAt: any;
  id?: string; // Campo id opcional
};

export async function POST(request: Request, ) {
      const {post} =  await request.json() 
console.log('em api update post',post)
      try {
      if (!post) {
        const response = new Response(JSON.stringify({ error: 'Dados insuficientes' }), {
          status: 400, // Define o status da resposta
          headers: {
            'Content-Type': 'application/json'
          }
        });
      return response
      }
        // Atualiza o documento no Firestore
        const docRef = doc(db, 'post_forum', post.id);
        const updatedData: UpdatedData = { ...post, updatedAt: serverTimestamp() };
        await updateDoc(docRef, updatedData);
  
        // Adiciona o campo id ao objeto retornado
        
  
        // Responde com sucesso e retorna o objeto atualizado com o id
        const response = new Response(JSON.stringify(updatedData), {
          status: 200, // Define o status da resposta
          headers: {
            'Content-Type': 'application/json'
          }
        });
        revalidatePath("/forum")
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
  