'use client'
import axios from "axios";
import { PowerIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export function ButtonDignOut(){
    const router = useRouter()
    async function signOut(){
        await axios.delete('/api/logout')
        router.push('/entrar')
      }
      
    return(
        <button onClick={()=>signOut()} className="flex h-[48px] grow items-center justify-center gap-1 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
        <PowerIcon className="w-4" />
        <div className="hidden md:block text-[15px]">Sair</div>
      </button>
    )
}
