import { useRouter } from "next/navigation";


export default function HomePage({
  params: { id }
}: {
  params: { id: string }
}) {
    //   const router = useRouter();
    // const resulRouter = router.query;
    // const id = resulRouter.id as string;
  return (

    <>meu id:{id}</>
    
  );
}
