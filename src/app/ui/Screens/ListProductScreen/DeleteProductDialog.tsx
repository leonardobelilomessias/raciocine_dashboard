'use client'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
import axios from "axios"
import { Trash2 } from "lucide-react"
  
  export function DeleteProductDialog({idToDelete}:{idToDelete?:string }) {
    async function handleDeleteProduct(){
        console.log('delete product')
         await axios.delete(`/api/deleteProduct?id=${idToDelete}`,)
     }
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline" className="text-red-500 font-bold"> <Trash2 size={16}/>Deletar</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Tem certeza que deseja deletar ?</AlertDialogTitle>
            <AlertDialogDescription>
             O Produto será deletado permanentemente 
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteProduct} className="bg-red-500">Deletar</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  