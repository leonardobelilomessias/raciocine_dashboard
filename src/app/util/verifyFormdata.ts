export function verifyFormdata(filesInFormData:FormData){
    filesInFormData.forEach((file, index) => {
        if (file instanceof File) {
          console.log(`Arquivo ${index + 1}:`);
          console.log(`Nome: ${file.name}`);
          console.log(`Tamanho: ${file.size} bytes`);
          console.log(`Tipo: ${file.type}`);
        } else {
          console.log(`Valor não é um arquivo: ${file}`);
        }
      });
}