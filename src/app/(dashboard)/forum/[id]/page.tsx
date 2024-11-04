import { PostForumScreen } from "@/app/ui/Screens/PostForunScreen";

export default async function PostForum({params:{id}}:{params:{id:string}}){
    return(
        <>
        <PostForumScreen id={id}/>
        </>
    )
}