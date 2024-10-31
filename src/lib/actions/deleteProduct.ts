'use server'

import axios from "axios"
import { revalidatePath } from "next/cache"

 
export   async function handleDeleteProduct(idToDelete:any){
    console.log('delete product')
    await axios.delete(`${process.env.URL_HOST}/api/deleteProduct?id=${idToDelete}`,)
    revalidatePath('/lista')
 }