// import { singin } from "@/modules/auth/actions/auth-actions";
// import { AuthService } from "@/modules/auth/services/auth-services";
import { AuthService } from "@/app/module/services/auth-services";
import { NextApiRequest, NextApiResponse } from "next";

export async function DELETE(request: Request) {


        const session =  await AuthService.isSessionValid()
        if (session){
            AuthService.deleteSession()
        }
    
    return Response.json({logout:true})
}