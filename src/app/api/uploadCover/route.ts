
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


  
  return Response.json(resulturls )
};

async function sendFiles(files:any[],name:string|null){
  let urls:any[] = ["jata"] 

  urls = await files.map(async (file)=>{
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



const uploadImageCover = async (file:any, name_bucket:any ): Promise<string> => {
  //console.log('fild em uploadcover',fields.bucket)


if (!name_bucket ) {
  throw new Error('Bucket is required and must be a non-empty array');
}


const storageRef = ref(storage, `covers/${name_bucket}`);
const snapshot = await uploadBytes(storageRef, file, {
  contentType: file.type,
});

const url = await getDownloadURL(snapshot.ref);

const docRef = doc(db, 'products', name_bucket);
const docSnap = await getDoc(docRef);

if (!docSnap.exists()) {
  throw new Error('Document does not exist');
}

const product: DocumentData = docSnap.data() || {};
product.cover = url;
await updateDoc(docRef, product);
revalidatePath('/lista')
return url;
};


