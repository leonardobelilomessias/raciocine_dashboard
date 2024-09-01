
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebase";
 interface ISupportResponse{
  title:string
  message:string
  status:'awaiting' |'ansered'

 }
// Função para buscar um documento pelo campo "id"
export async function listSupportsByUserId(userId: string) {
  // Referência ao Firestore


  // Referência à coleção onde os documentos estão armazenados
  const collectionRef = collection(db, "support");

  // Criando uma consulta para encontrar o documento com o campo "id" igual ao userId
  const q = query(collectionRef, where("user_id", "==", userId),);

  try {
    // Executando a consulta
    const querySnapshot = await getDocs(q);

    // Verificando se encontrou algum documento
    if (querySnapshot.empty) {
      console.log("Nenhum documento encontrado.");
      return null;
    }
    let suportArray:ISupportResponse[] = [] 
    querySnapshot.forEach((doc) => {
      const data = doc.data() as ISupportResponse;
      suportArray.push(data);
    });


  
    return suportArray as ISupportResponse[];
  } catch (error) {
    console.error("Erro ao buscar documento:", error);
    return null;
  }
}