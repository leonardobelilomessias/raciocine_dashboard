// Ajuste o caminho conforme necessário
import { db, storage } from '@/lib/firebase/firebase';
import { doc, deleteDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(request: NextRequest, ) {
      const post  = request.nextUrl.searchParams
      const product_id = post.get('post_id')
      const owner = post.get('owner')

      // console.log(product_id)
      const session = cookies().get("user_id")
      const user_id = session?.value as string
      // console.log(owner)
    try {

        if(!!product_id && owner=='true'){
          console.log('ownner dentro do delete post',typeof(owner), owner)
          await deletePostForumFirebase(product_id)
          const response = new Response(JSON.stringify({ message: "Favorito excluido com sucesso" }), {
            status: 200, // Define o status da resposta
            headers: {
              'Content-Type': 'application/json'
            }
          });
        revalidatePath("/forum")

          return response
        }else{
            console.log("Erro ao deletar produto e bucket: id não encontrado ou não é propietario", );
      const response = new Response(JSON.stringify({ error: "Erro ao deletar favorito." }), {
        status: 401, // Define o status da resposta
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

 async function deletePostForumFirebase(id: string) {
    // Cria a referência para o documento aninhado a ser deletado
    try {
      const docRef = doc(db, 'post_forum', `${id}`);
      console.log("dentro delete post firebase",id)
      await deleteDoc(docRef);
      console.log(`Documento com ID ${JSON.stringify(docRef) } foi deletado com sucesso.`);


    } catch (error) {
      console.error('Erro ao deletar documento aninhado: ', error);
    }
  }

  