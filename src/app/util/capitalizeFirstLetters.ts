/**
 * Capitaliza a primeira letra de cada palavra em uma string.
 * @param text - O texto a ser transformado.
 * @returns O texto com as primeiras letras de cada palavra em maiúsculas.
 */
export function capitalizeFirstLetters(text: string): string {
    if (!text) return text; // Verifica se o texto é vazio ou nulo
    
    return text
      .split(" ") // Divide o texto em palavras
      .map((word) => {
        if (!word) return word; // Ignora palavras vazias (caso existam múltiplos espaços)
        return word[0].toUpperCase() + word.slice(1).toLowerCase(); // Capitaliza a primeira letra
      })
      .join(" "); // Junta as palavras novamente em uma string
  }
  

  