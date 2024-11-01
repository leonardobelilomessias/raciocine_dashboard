"use server";
import { doc, updateDoc } from 'firebase/firestore';
import { db } from './firebase'; // Certifique-se de que este caminho está correto
import { FirebaseError } from 'firebase/app';
import { IUser } from '@/app/types/types';
import { revalidatePath } from 'next/cache';

// Interface para os dados financeiro

// Função para atualizar o perfil financeiro
export const updateAccountUser = async (
   data:IUser,id:string
): Promise<void | FirebaseError | any> => {
  try {
    // Obter a referência ao documento
    const profileRef = doc(db, 'users', id);
    // Atualizar o documento com os novos dados
    await updateDoc(profileRef, {
      ...data // Usa a sintaxe spread para incluir apenas os campos fornecidos
    });
    revalidatePath('/perfil')
    // revalidatePath('/dashboard')


  } catch (error) {
    if (error instanceof FirebaseError) {
      // Lidar com erros específicos do Firebase
      console.error("Erro ao atualizar perfil financeiro:", error.code, error.message);
      throw error;
    } else {
      // Lidar com outros tipos de erros (caso ocorra)
      console.error("Erro desconhecido:", error);
      return error;
    }
  }
};
