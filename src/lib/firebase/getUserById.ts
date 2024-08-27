'use server'
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase'; // Certifique-se de que este caminho está correto
import { FirebaseError } from 'firebase/app';
import { IUser } from '@/app/types/types';

// Função para buscar o perfil financeiro pelo ID do usuário
export const getUserById = async (userId: string) => {
  try {
    // Obter a referência ao documento
    const profileRef = doc(db, 'users', userId);

    // Buscar o documento
    const docSnapshot = await getDoc(profileRef);

    
      return docSnapshot.data() as IUser;

    
  } catch (error) {
    if (error instanceof FirebaseError) {
      // Lidar com erros específicos do Firebase
      console.error("Erro ao buscar perfil usuario:", error.code, error.message);
      throw error;
    } else {
      // Lidar com outros tipos de erros (caso ocorra)
      console.error("Erro desconhecido:", error);
      throw error;
    }
  }
};