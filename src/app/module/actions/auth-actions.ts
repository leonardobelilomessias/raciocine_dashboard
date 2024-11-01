'use server'


import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { redirect } from "next/navigation";
import { AuthService } from "../services/auth-services";
import { FirebaseError } from "firebase/app";
import { auth } from "@/lib/firebase/firebase";


export async function singin(data:{email:string, password:string}) {
    try {
        const { email, password } = data;
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        if(!user?.uid){
      
          
        }
        if(user?.uid){
        
         // console.log('usuario invalido')
          await AuthService.createSessionToken({user_id:user.uid}) 
        }
        return user
        console.log("Usuário logado com sucesso:", user);
        // Aqui você pode redirecionar o usuário ou realizar outra ação após o login bem-sucedido
      } catch (error) {
        if (error instanceof FirebaseError) {
        throw error

        } else {
          console.error("Erro desconhecido:", error);
            throw error
        }
      }
}




export async function singup(data:{email:string, password:string}) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
    const user = userCredential.user;
    if(user?.uid){
        
      console.log('user com id', user.uid)
       await AuthService.createSessionToken({user_id:user.uid}) 
     }
     return user
    console.log("Usuário criado com sucesso:", user);
    return user;
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    throw error;
  }
}







