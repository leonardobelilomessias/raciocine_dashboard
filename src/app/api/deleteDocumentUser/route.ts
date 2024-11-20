import { db, storage } from '@/lib/firebase/firebase';
import { deleteField, doc, getDoc, updateDoc } from 'firebase/firestore';
import { deleteObject, ref } from 'firebase/storage';
import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

export async function DELETE(request: NextRequest) {
  const session = cookies().get("user_id");
  const user_id = session?.value as string;
  const product  = request.nextUrl.searchParams
  const type = product.get('type') as string

  if (!user_id || !type) {
    const response = new Response(JSON.stringify({message:'id ou documento não encontrado'}), {
      status: 200, // Define o status da resposta
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response
  }
  try {
    // Chama a função para deletar o arquivo da storage
    await deleteDocumentFile(user_id, type);

    // Chama a função para remover o campo do documento no Firestore
    await removeFieldFromDocument(user_id, type);

    const response = new Response(JSON.stringify({message:'Documento deletado com sucesso'}), {
      status: 200, // Define o status da resposta
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response
  } catch (error) {
    const response = new Response(JSON.stringify({message:'Erro ao deletar documento'}), {
      status: 200, // Define o status da resposta
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response
  }
}

const deleteDocumentFile = async (user_id: string, field: string) => {
  const fileRef = ref(storage, `documentsUsers/${user_id}/${field}`);
  // console.log('fileref = ',fileRef)
  // Deleta o arquivo da storage
  await deleteObject(fileRef);
};

const removeFieldFromDocument = async (user_id: string, field: string) => {
  const docRef = doc(db, "documents_users", user_id);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    
    const data = docSnap.data();
    console.log('exist docref de documents db = 01',data)
    if (data && field in data) {
      // Remove o campo especificado do documento utilizando deleteField
      await updateDoc(docRef, {
        [field]: deleteField(), // Exclui o campo do documento
      });
    }
  } else {

    throw new Error("Documento não encontrado.");
  }
};
