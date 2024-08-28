import * as jose from 'jose'
import { cookies } from 'next/headers'


async function openSessionToken(token:string) {
    const secret = new TextEncoder().encode(process.env.AUTH_SECRET)
    const {payload} = await  jose.jwtVerify(token,secret)
    return payload
}

async function createSessionToken(payload:{user_id:string}){
    const secret = new TextEncoder().encode(process.env.AUTH_SECRET)
    const session = await new jose.SignJWT(payload).setProtectedHeader({
        alg:"HS256"
    }).setExpirationTime('1d').sign(secret)
    const {exp} = await openSessionToken(session)
    cookies().set('sessions',session,{
        expires:(exp as number)*1000,
        path:'/',
        httpOnly:true
    })
    cookies().set('user_id',payload.user_id,{
        expires:(exp as number)*1000,
        path:'/',
        httpOnly:true
    })
}

async function isSessionValid() {
    const sessionCookie = cookies().get('sessions')

    if(sessionCookie){
        const {value} = sessionCookie
        const {exp} = await openSessionToken(value)
        const currentDAte = new Date().getTime()
        return ((exp as number*1000) > currentDAte)
    }
    return false
}

export const AuthService = {
    openSessionToken,
    createSessionToken,
    isSessionValid,
    deleteSession
}


 

 
async function deleteSession() {
  cookies().delete('sessions')
  cookies().delete('user_id')

}