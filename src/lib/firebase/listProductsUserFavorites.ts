import { collection, getDocs, QuerySnapshot } from "firebase/firestore";
import { db } from "./firebase";
import { IProduct, IProductResponse } from "@/app/types/types";
import { cookies } from "next/headers";

export async function listUserFavorites(){
  const session = cookies().get("user_id")
  const user_id = session?.value as string
  console.log("id usre in favorite list i d", user_id)
    try {
        const productsCol = collection(db, 'user_favorites');
        const productSnapshot: QuerySnapshot = await getDocs(productsCol);
        
        // Mapeia os documentos e inclui o ID junto com os dados
        const productList  = productSnapshot.docs.map(doc => (doc.data().id)) 
        
        return productList 
      } catch (error) {
    
          console.log(error)
    
      }
}