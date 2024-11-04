import { axiosApi } from "@/lib/axios/axios";
import { createContext, ReactNode, useContext, useEffect } from "react";

const ContextUserAccont = createContext({} as {});
interface IDataAccont{
    favorites:[]
}
function AccountCountext({children}:{children:ReactNode}){
async function getFavorites() {
    const favoritesUser =  await axiosApi.get("/api/getUserFavorites")
    console.log(favoritesUser.data)
    
}    
    useEffect(()=>{
        getFavorites()
    },[])
    return(
        <ContextUserAccont.Provider value={{}}>
            {children}
        </ContextUserAccont.Provider>
    )
}
export function AccontProvider({children}:{children:ReactNode}){
    
    return(
        <AccountCountext>
            {children}
        </AccountCountext>
    )
}

export const useUserData = ()=>useContext(ContextUserAccont)