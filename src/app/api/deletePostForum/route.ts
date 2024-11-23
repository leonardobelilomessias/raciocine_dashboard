// Ajuste o caminho conforme necessário
import { db, storage } from '@/lib/firebase/firebase';
import { doc, deleteDoc, collection, query, where, getDocs, getDoc } from 'firebase/firestore';
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

 async function deletePostForumFirebase(postId: string) {
      try {
        // Referência para a coleção de comentários
        const commentsCollection = collection(db, "comments_post_forum");
        // Consultar todos os comentários relacionados ao post
        const q = query(commentsCollection, where("id_post_comment", "==", postId));
        const querySnapshot = await getDocs(q);
    
        // Apagar cada comentário encontrado
        const deleteCommentsPromises = querySnapshot.docs.map((commentDoc) =>
          deleteDoc(doc(db, "comments_post_forum", commentDoc.id))
        );
        await Promise.all(deleteCommentsPromises);
    
        // Apagar o post na tabela `post_forum`
        await deleteDoc(doc(db, "post_forum", postId));
    
        console.log(`Post e seus comentários relacionados foram apagados com sucesso!`);
      } catch (error) {
        console.error("Erro ao apagar o post e seus comentários:", error);
      }
  }


  