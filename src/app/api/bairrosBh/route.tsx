import { NextApiRequest, NextApiResponse } from 'next';
import { collection, getDocs, QuerySnapshot } from 'firebase/firestore';
import { db } from '@/lib/firebase/firebase';
import { cookies } from 'next/headers';

// Define a interface para o produto
interface Product {
  id: string;
  [key: string]: any; // Permite adicionar outras propriedades do produto
}

// Define a interface para a resposta da API
interface ApiResponse {
  error?: string;
  [key: string]: any; // Permite adicionar outras propriedades
}

// Manipulador de requisições da API
export  async function GET() {

    try {
      
      const productList=await addBairrosToFirestore()
      const response = new Response(JSON.stringify(productList), {
        status: 200, // Define o status da resposta
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return response
    } catch (error) {
      if (error instanceof Error) {
        const res = new Response()     
        return res
      } else {
        return Response.json({ error: 'An unknown error occurred' });
      }
    }

}
import { getFirestore, doc, setDoc } from "firebase/firestore";

const bairrosBH = [
  "Aarão Reis",
  "Aeroporto",
  "Aparecida",
  "Apoena",
  "Átila de Paiva",
  "Bairro da Graça",
  "Baleia",
  "Barreiro",
  "Barroca",
  "Belvedere",
  "Boa Viagem",
  "Boa Vista",
  "Buritis",
  "Cabana do Pai Tomás",
  "Caiçara",
  "Calafate",
  "Camargos",
  "Carlos Prates",
  "Carmo",
  "Centro",
  "Céu Azul",
  "Cidade Jardim",
  "Cidade Nova",
  "Concórdia",
  "Copacabana",
  "Corumbiara",
  "Cruzeiro",
  "Dom Bosco",
  "Dom Cabral",
  "Dona Clara",
  "Dona Clara I",
  "Esplanada",
  "Estoril",
  "Floresta",
  "Funcionários",
  "Gameleira",
  "Goiânia",
  "Grajaú",
  "Havaí",
  "Heliópolis",
  "Indaiá",
  "Ipê",
  "Jardim América",
  "Jardim Atlântico",
  "Jardim Montanhês",
  "Jardim Vitória",
  "João Pinheiro",
  "Lagoinha",
  "Liberdade",
  "Lourdes",
  "Luxemburgo",
  "Madre Gertrudes",
  "Manacás",
  "Mangabeiras",
  "Maria Goretti",
  "Maria Helena",
  "Maria Virgínia",
  "Minas Brasil",
  "Monte Azul",
  "Nova Cintra",
  "Nova Esperança",
  "Nova Floresta",
  "Nova Gameleira",
  "Nova Suíssa",
  "Oeste",
  "Olhos d’Água",
  "Ouro Preto",
  "Padre Eustáquio",
  "Palmares",
  "Pampulha",
  "Paquetá",
  "Parque São José",
  "Pedro II",
  "Petrolândia",
  "Planalto",
  "Pongeluppi",
  "Pompéia",
  "Prado",
  "Providência",
  "Renascença",
  "Sagrada Família",
  "Santa Amélia",
  "Santa Efigênia",
  "Santa Helena",
  "Santa Inês",
  "Santa Lúcia",
  "Santa Maria",
  "Santa Mônica",
  "Santa Tereza",
  "Santana do Cafézal",
  "Santo André",
  "Santo Antônio",
  "Santo Agostinho",
  "São Bento",
  "São Bernardo",
  "São Cristóvão",
  "São Francisco",
  "São Gabriel",
  "São Geraldo",
  "São João Batista",
  "São Lucas",
  "São Luiz",
  "São Marcos",
  "São Pedro",
  "São Salvador",
  "Savassi",
  "Serra",
  "Silveira",
  "Sion",
  "Taquaril",
  "União",
  "Vale do Jatobá",
  "Vila Clóris",
  "Vila Nova Paraíso",
  "Vila Oeste",
  "Vila Pinho",
  "Zilah Spósito"
];

const addBairrosToFirestore = async () => {
  const db = getFirestore(); // Obtém a instância do Firestore
  const docRef = doc(db, "city", "belo_horizonte"); // Define o caminho do documento

  try {
    await setDoc(docRef, { bairros: bairrosBH }); // Insere o array no Firestore
    console.log("Bairros adicionados com sucesso!");
  } catch (error) {
    console.error("Erro ao adicionar bairros:", error);
  }
};

