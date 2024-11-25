import { axiosApi } from "@/lib/axios/axios"

export async function deletePostForum(id_post:string, owner:boolean,updateFuc?:()=>void|Promise<void>){
    await axiosApi.delete(`/api/deletePostForum?post_id=${id_post}&owner=${owner}`)
    if(!!updateFuc) await updateFuc();

}