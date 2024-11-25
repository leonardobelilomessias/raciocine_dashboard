import { axiosApi } from "@/lib/axios/axios";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

const ContextUserAccont = createContext({} as IDataAccont);
interface IDataAccont{
    favoritesList:string[]
}
function AccountCountext({children}:{children:ReactNode}){
    const [userFavoritesList,setUserFavoristeList] = useState([])
async function getFavorites() {
    const favoritesUser =  await axiosApi.get("/api/getUserFavoritesListIds")
    setUserFavoristeList(favoritesUser.data)
    console.log("favoristos usuario", favoritesUser) 
    
}    
    useEffect(()=>{
        getFavorites()
    })
    return(
        <ContextUserAccont.Provider value={{favoritesList:userFavoritesList}}>
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