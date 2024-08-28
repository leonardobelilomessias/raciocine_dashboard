export function formatPriceToBRL(price:number) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
  }

  export function formatarMoedaBRL(valor:string ) {
    // Remove tudo que não é dígito
    const valorApenasDigitos = Number(valor.replace(/\D/g, ''));
  
    // Formata o número para moeda BRL
    const valorFormatado = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(valorApenasDigitos / 100); // Dividindo por 100 para posicionar corretamente os centavos
  
    return valorFormatado;
  }