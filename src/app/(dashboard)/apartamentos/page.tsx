import { ApartamentScreen } from "@/app/ui/Screens/ApartamentsScreen";
import { listProducts } from "@/lib/firebase/listProducts";

export default  async function apartamento(){
    const products = await listProducts()
    return(
        <>
            <ApartamentScreen  products={products} />
        </>
    )
}