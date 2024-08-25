

import { signInWithEmailAndPassword, User } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { auth } from "./firebase";
interface ILoginInputs {
    email: string;
    password: string;
  
  }

  export const signInUser = async (data: ILoginInputs): Promise<User> => {
  try {
    const { email, password } = data;
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    return user
    console.log("Usuário logado com sucesso:", user);
    // Aqui você pode redirecionar o usuário ou realizar outra ação após o login bem-sucedido
  } catch (error) {
    if (error instanceof FirebaseError) {
    
    //   console.error("Erro ao fazer login:", error.code, error.message);
    throw error
    } else {
      console.error("Erro desconhecido:", error);
        throw error
    }
  }
};