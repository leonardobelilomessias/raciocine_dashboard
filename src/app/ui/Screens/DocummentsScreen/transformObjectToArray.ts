
type Document = { status: string; url: string, type:string };
export function transformObjectToArray(obj: Record<string, any>): Document[] {
    return Object.entries(obj)
      .filter(([key]) => key !== "id") // Exclui a chave "id"
      .map(([key, value]) => ({
        type: key, // Adiciona o nome da chave original como "type"
        status: value.status, // Extrai a propriedade "status"
        url: value.url, // Extrai a propriedade "url"
      }));
  }