import { doc, deleteDoc } from 'firebase/firestore';
import { db } from './firebase';

export async function deleteFavorite(user_id: string, favoriteId: string) {
  // Cria a referência para o documento aninhado a ser deletado
  const nestedDocRef = doc(db, 'users', user_id, 'favorites', favoriteId);

  try {
    // Deletando o documento aninhado
    await deleteDoc(nestedDocRef);
    console.log('Documento aninhado deletado com sucesso!');
  } catch (error) {
    console.error('Erro ao deletar documento aninhado: ', error);
  }
}