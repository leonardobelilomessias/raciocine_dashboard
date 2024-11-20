
import { db, storage } from '@/lib/firebase/firebase';
import { doc, DocumentData, getDoc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { revalidatePath } from 'next/cache';
import {v4} from 'uuid'

export async function POST(request: Request,response:Response) {
  const result = await request.formData()
  const nameBucket = result.get('bucket')
  const file = result.getAll('files')[0]
  const resulturls = await uploadImageCover(file,nameBucket)
  return Response.json(resulturls)
};


const uploadImageCover = async (file:any, name_bucket:any ): Promise<string> => {

if (!name_bucket ) {
  throw new Error('Bucket is required and must be a non-empty array');
}


const storageRef = ref(storage, `documentUsers/${name_bucket}`);
const snapshot = await uploadBytes(storageRef, file, {
  contentType: file.type,
});

const url = await getDownloadURL(snapshot.ref);

const docRef = doc(db, 'documents_user', name_bucket);
const docSnap = await getDoc(docRef);

if (!docSnap.exists()) {
  throw new Error('Document does not exist');
}

const ebook: DocumentData = docSnap.data() || {};
ebook.cover = url;
await updateDoc(docRef, ebook);
revalidatePath('/lista')
return url;
};


