// import { singin } from "@/modules/auth/actions/auth-actions";
// import { AuthService } from "@/modules/auth/services/auth-services";
import { singin } from "@/app/module/actions/auth-actions";
import { FirebaseError } from "firebase/app";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try{
        const {email, password} = await request.json() 
     const response = await singin({email,password})
     
        // const session =  await AuthService.isSessionValid()
        // console.log('response',email,password)
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