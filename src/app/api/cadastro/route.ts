// import { singin } from "@/modules/auth/actions/auth-actions";
// import { AuthService } from "@/modules/auth/services/auth-services";
import { singin, singup } from "@/app/module/actions/auth-actions";
import { IUser } from "@/app/types/types";
import { db } from "@/lib/firebase/firebase";
import { FirebaseError } from "firebase/app";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try{
        const {email, password} = await request.json() 
        const response = await singup({email,password})
     
        // const session =  await AuthService.isSessionValid()
        // console.log('response',email,password)
        const formattedDate = new Intl.DateTimeFormat('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        }).format( new Date(`${"1990"}-${"01"}-${"01"}`));
        const user ={

            name: response.providerData[0].email as string ,
            phone: "indefinido",
            email: response.providerData[0].email as string,
            id: response.uid as string,
            renda: 0, // Agora os campos são opcionais
            entrada: 0,
            saldoFgts: 0,
            estadoCivil: "Não definido",
            filhosDependentes: "nao",
            trabalho3Anos: "nao",
            primeiroImovel:"nao",
            financiamento: "nao",
            dataNascimento:  formattedDate, // Agora é opcional
            tipoRenda:"formal"
          }
        //  console.log(user)
        await createNewUserDb(user)
        return NextResponse.json(response)
    }catch(error){
        if (error instanceof FirebaseError) {
            if(error.code==='auth/invalid-credential'){
                const response = new Response(JSON.stringify({message:'Email ou senha invalido'}),{
                    status:401
                })
                return response
            }
    }
    
}
}

const createNewUserDb = async (user: IUser): Promise<string> => {
    try {
      const docRef = doc(db, "users", user.id);
      await setDoc(docRef, user);
      return docRef.id;
    } catch (error) {
      console.error('Erro ao adicionar documento:', error);
      throw error;
    }
  };