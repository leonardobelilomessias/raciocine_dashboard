
import { storage } from '@/lib/firebase/firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import {v4} from 'uuid'

export async function POST(request: Request,response:Response) {
  const result = await request.formData()
  const name = result.get('bucket') as string
  const file = result.getAll('files')
  console.log(file.length)

const resulturls = await sendFiles(file ,name)


  
  return Response.json(resulturls )
};

async function sendFiles(files:FormDataEntryValue[],name:string){
  let urls:any[] = ["jata"] 

  urls = await files.map(async (file:any)=>{
    const uuid = v4()
    const newNameImage = `${uuid}.${file.type.split('/')[1]}`
    const storageRef = ref(storage, `${name}/${newNameImage}`);
    const snapshot = await uploadBytes(storageRef, file, {
      contentType: file.type,
    });
    const url = await getDownloadURL(snapshot.ref);
    // console.log(url)
  return url 
  
  })

return Promise.all(urls)
}