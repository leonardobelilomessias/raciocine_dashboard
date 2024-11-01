// Ajuste o caminho conforme necessário
import { db, storage } from '@/lib/firebase/firebase';
import { doc, deleteDoc } from 'firebase/firestore';
import { ref, deleteObject, listAll } from 'firebase/storage';
import type { NextApiRequest, NextApiResponse } from 'next';
import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(request: NextRequest, ) {
      const product  = request.nextUrl.searchParams
      const id = product.get('id')

    try {
        if(id){
            // Deletar documento no Firestore
            await deleteProductDocument(id);
      
            // Deletar bucket no Firebase Storage
            await deleteProductBucket(id);
      
            await deleteCover(id);
            const response = new Response(JSON.stringify({ message: "Produto e bucket deletados com sucesso." }), {
                status: 200, // Define o status da resposta
                headers: {
                  'Content-Type': 'application/json'
                }
              });
            return response
        }else{
            console.log("Erro ao deletar produto e bucket: id não encontrado", );
      const response = new Response(JSON.stringify({ error: "Erro ao deletar produto e bucket." }), {
        status: 404, // Define o status da resposta
        headers: {
          'Content-Type': 'application/json'
        }
      });
      // return response
    revalidatePath("/lista")

    }
    
    revalidatePath("/lista")
  } catch (error) {
    console.error("Erro ao deletar produto e bucket:", error);
    const response = new Response(JSON.stringify({ error: "Erro ao deletar produto e bucket." }), {
      status: 500, // Define o status da resposta
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response
    
  }
  
  }


const deleteProductDocument = async (id: string): Promise<void> => {
  try {
    const docRef = doc(db, 'products', id);
    await deleteDoc(docRef);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Erro ao deletar documento: ${error.message}`);
    } else {
      throw new Error(`Erro ao deletar documento: ${String(error)}`);
    }
  }
};

const deleteProductBucket = async (id: string): Promise<void> => {
  try {
    const bucketRef = ref(storage, id);
    if(bucketRef?.name){

        
        const list = await listAll(bucketRef);
        const deletePromises = list.items.map((itemRef) => deleteObject(itemRef));
        await Promise.all(deletePromises);
        
        console.log(`Todos os objetos com o prefixo ${id} deletados do Firebase Storage.`);
    }else{
        console.log('nenhum bucket encontrado')
    }
  } catch (error) {
    if (error instanceof Error) {
      if (error.message.includes('object-not-found')) {
        console.log(`Nenhum objeto encontrado com o prefixo ${id} no Firebase Storage. Nenhuma ação necessária.`);
      } else {
        throw new Error(`Erro ao deletar objetos: ${error.message}`);
      }
    } else {
      throw new Error(`Erro ao deletar objetos: ${String(error)}`);
    }
  }
};

const deleteCover = async (id: string): Promise<void> => {
  try {
    const imageRef = ref(storage, `/covers/${id}`);
    if(!imageRef?.name){
    await deleteObject(imageRef);
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Erro ao deletar capa: ${error.message}`);
    } else {
      throw new Error(`Erro ao deletar capa: ${String(error)}`);
    }
  }
};
