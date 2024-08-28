import { HouseScreen } from "@/app/ui/Screens/HouseScreen";


export default function imovel({params:{id}}:{params:{id:string}}){

    // const router = useRouter();
    // const resulRouter = router.query;
    // const id = resulRouter.id as string;
    return(
        <>
        <HouseScreen id={id}/>
        </>
    )
}