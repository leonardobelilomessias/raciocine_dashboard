
import { db, storage } from '@/lib/firebase/firebase';
import { doc, DocumentData, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import {v4} from 'uuid'

export async function POST(request: Request,response:Response) {
  const session = cookies().get("user_id")
  const user_id = session?.value as string
  const result = await request.formData()
  const field = result.get('field')
  const file = result.getAll('files')[0]
  console.log(file,field, user_id)
  const resulturls = await uploadImageCover(file,field, user_id)

  return Response.json(resulturls)
};


const uploadImageCover = async (file:any, field:any ,user_id:any): Promise<string> => {

if (!user_id ) {
  throw new Error('Bucket is required and must be a non-empty array');
}


const storageRef = ref(storage, `documentsUsers/${user_id}/${field}`);
const snapshot = await uploadBytes(storageRef, file, {
  contentType: file.type,
});

const url = await getDownloadURL(snapshot.ref);

const docRef = doc(db, "documents_users", user_id);
const document : Record<string, any>= {}
document[`${field}`] = {status:"pending",url:url}
await setDoc(docRef, document, { merge: true });


return url;
};


