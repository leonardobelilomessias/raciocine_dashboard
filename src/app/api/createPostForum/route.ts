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
  title:string
  status:string
  updated_at:string |Timestamp
}
export async function POST(request: Request) {
  
    try {
      const {postForum}: {postForum:IPostForum} = await request.json() 
      const session = cookies().get("user_id")
      const user_id = session?.value as string
      postForum.user_id = user_id
    
      await  createapostForumFireBase(postForum)
      const response = new Response(JSON.stringify({teste:"teste"}), {
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

const createapostForumFireBase = async (postForum: IPostForum): Promise<string> => {
  try {
    const newDate = new Date()
    postForum.date = Timestamp.fromDate(newDate) 
    postForum.date = Timestamp.fromDate(newDate) 

    const docRef =     await addDoc(collection(db, 'post_forum'), {
      title: postForum.title,
      created_at: postForum.date ,// Converte Date para Timestamp
      user_id:postForum.user_id,
      status:"pendding",
      message:postForum.message,
      updated_at:postForum.date ,
      user_name:"user_text_username"
    });
    // const docRef = await addDoc(collection(db, 'user_favorites'), product);

    return docRef.id;
  } catch (error) {
    console.error('Erro ao adicionar documento:', error);
    throw error;
  }
};
