"use server"
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";
import { INewSuport } from "@/app/types/types";
import { revalidatePath } from "next/cache";



export const createNewSupport = async (data:INewSuport) => {
    
    try {
      // Referencia a coleção onde o documento será adicionado
      const docRef = await setDoc(doc(db, "support",data.id), {
        title: data.title,
        message: data.message,
        name:data.name,
        id:data.id,
        created_at: new Date(),
        updated_at:new Date()
      });
      revalidatePath('/suporte');
      return{message:"oii"}
      console.log("Documento adicionado com ID: ", docRef);
    } catch (e) {
      console.error("Erro ao adicionar documento: ", e);
      return { message: 'Database Error: Failed to Delete Invoice' };
    }
  };

  