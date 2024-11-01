import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase'; // Certifique-se de que este caminho está correto
import { FirebaseError } from 'firebase/app';
interface IFormInputFinance {
    renda?: number; // Agora os campos são opcionais
    entrada?: number;
    saldoFgts?: number;
    estadoCivil?: string;
    filhosDependentes?: string;
    trabalho3Anos?: string;
    primeiroImovel?: string;
    financiamento?: string;
    dataNascimento?: Date | null; // Agora é opcional
    tipoRenda:string
  }
// Função para buscar o perfil financeiro pelo ID do usuário
export const getFinanceProfile = async (userId: string): Promise<IFormInputFinance | null | FirebaseError> => {
  try {
    console.log('Fetching revenue data...');

    // Obter a referência ao documento
    const profileRef = doc(db, 'finance_profile', userId);

    // Buscar o documento
    const docSnapshot = await getDoc(profileRef);
   

    if (docSnapshot.exists()) {
      // O documento foi encontrado, retornar os dados
      return docSnapshot.data() as IFormInputFinance;
    } else {
      // Documento não encontrado
      return null;
    }
  } catch (error) {
    if (error instanceof FirebaseError) {
      // Lidar com erros específicos do Firebase
      console.error("Erro ao buscar perfil financeiro:", error.code, error.message);
      throw error;
    } else {
      // Lidar com outros tipos de erros (caso ocorra)
      console.error("Erro desconhecido:", error);
      throw error;
    }
  }
};