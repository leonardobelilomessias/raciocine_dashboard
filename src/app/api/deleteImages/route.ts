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
  try {
  const { productId, imageUrls }  =  await request.json() 

      if (!productId || !Array.isArray(imageUrls) || imageUrls.length === 0) {
        const response = new Response(JSON.stringify({ error: 'ID do produto inválido ou array de URLs inválido ou vazio' }), {
          status: 400, // Define o status da resposta
          headers: {
            'Content-Type': 'application/json'
          }
        });
      return response
      }
      const deletePromises = imageUrls.map(async (imageUrl) => {
        try {
          // Extrai o caminho relativo do URL do Firebase Storage
          const storagePath = decodeURIComponent(imageUrl.split('/o/')[1].split('?')[0]);

          // Verifica se a URL da imagem contém o ID do produto
          if (!storagePath.startsWith(productId)) {
            throw new Error(`A imagem ${imageUrl} não pertence ao produto ${productId}`);
          }

          // Cria uma referência ao arquivo usando o caminho
          const fileRef = ref(storage, storagePath);

          // Deleta o arquivo
          await deleteObject(fileRef);
          console.log(`Imagem deletada: ${imageUrl}`);
        } catch (error) {
          console.error(`Erro ao deletar imagem ${imageUrl}:`, error);
        }
      });
      await Promise.all(deletePromises);
      const response = new Response(JSON.stringify({ message: 'Imagens deletadas com sucesso' }), {
        status: 200, // Define o status da resposta
        headers: {
          'Content-Type': 'application/json'
        }
      });
    return response
  } catch (error) {
    console.error("Erro ao deletar produto e bucket:", error);
    const response = new Response(JSON.stringify({ error: 'Erro ao processar a solicitação de letar imagens' }), {
      status: 500, // Define o status da resposta
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response
    
  }
  
  }
  