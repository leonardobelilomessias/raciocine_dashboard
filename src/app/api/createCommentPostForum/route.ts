import { NextApiRequest, NextApiResponse } from 'next';
import { collection, addDoc, serverTimestamp, doc, setDoc, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase/firebase';
import { AuthService } from '@/app/module/services/auth-services';
import { cookies } from 'next/headers';
import { IFavorite, IProduct } from '@/app/types/types';
import { createFavorite } from '@/lib/firebase/createFavorite';


// Definindo a interface para o produto
interface IPostForum {
  user_id:string,
  date:string |Timestamp
  message:string
  user_avatar:string
  user_name:string
  status:string
  id_post_comment:string
  updated_at:string |Timestamp
}
export async function POST(request: Request) {
  
  
    try {
      const {comment}: {comment:IPostForum} = await request.json() 
      const session = cookies().get("user_id")
      const user_id = session?.value as string
      comment.user_id = user_id
    
      const idPostCreated = await  createaCommentPostForumFireBase(comment)
      const response = new Response(JSON.stringify({idPostCreated:idPostCreated}), {
        status: 200, // Define o status da resposta
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return response
    } catch (error) {
      console.error('Erro ao adicionar produto:', error);
      const response = new Response(JSON.stringify({ error: 'Failed to add product' }), {
        status: 500, // Define o status da resposta
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return response
    }

}

const createaCommentPostForumFireBase = async (comment: IPostForum): Promise<string> => {
  try {
    const newDate = new Date()
    comment.date = Timestamp.fromDate(newDate) 
    comment.date = Timestamp.fromDate(newDate) 

    const docRef =     await addDoc(collection(db, 'comments_post_forum'), {
      id_post_comment:comment.id_post_comment,
      user_avatar: comment.user_avatar,
      user_id:comment.user_id,
      user_name:comment.user_name,
      status:"pendding",
      message:comment.message,
      created_at: comment.date ,// Converte Date para Timestamp
      updated_at:comment.date ,
    });
    // const docRef = await addDoc(collection(db, 'user_favorites'), product);

    return docRef.id;
  } catch (error) {
    console.error('Erro ao adicionar documento:', error);
    throw error;
  }
};
