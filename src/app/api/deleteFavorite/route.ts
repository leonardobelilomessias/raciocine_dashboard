// Ajuste o caminho conforme necessário
import { deleteFavorite } from '@/lib/firebase/deleteFavorite';
import { db, storage } from '@/lib/firebase/firebase';
import { doc, deleteDoc } from 'firebase/firestore';
import { ref, deleteObject, listAll } from 'firebase/storage';
import type { NextApiRequest, NextApiResponse } from 'next';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(request: NextRequest, ) {
      const product  = request.nextUrl.searchParams
      const product_id = product.get('product_id')
      console.log(product_id)
      const session = cookies().get("user_id")
      const user_id = session?.value as string
    try {

        if(product_id){

          await deleteFavorite(user_id,product_id)
          const response = new Response(JSON.stringify({ message: "Favorito excluido com sucesso" }), {
            status: 200, // Define o status da resposta
            headers: {
              'Content-Type': 'application/json'
            }
          });
        revalidatePath("/favoritos")

          return response
        }else{
            console.log("Erro ao deletar produto e bucket: id não encontrado", );
      const response = new Response(JSON.stringify({ error: "Erro ao deletar favorito." }), {
        status: 404, // Define o status da resposta
        headers: {
          'Content-Type': 'application/json'
        }
      });
       return response
    }
    
    revalidatePath("/favoritos")
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

