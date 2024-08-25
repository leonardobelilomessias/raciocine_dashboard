import { collection, getDocs, QuerySnapshot } from "firebase/firestore";
import { db } from "./firebase";
import { IProduct } from "@/app/types/types";

export async function listProducts(){
    try {
        const productsCol = collection(db, 'products');
        const productSnapshot: QuerySnapshot = await getDocs(productsCol);
        
        // Mapeia os documentos e inclui o ID junto com os dados
        const productList  = productSnapshot.docs.map(doc => ({
          id: doc.id, // Inclui o ID do documento
          ...doc.data() // Inclui os dados do documento
        })) 
        
        return productList as IProduct[]
      } catch (error) {
    
          console.log(error)
    
      }
}