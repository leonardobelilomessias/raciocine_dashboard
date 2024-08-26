import { IFormInputFinance, IUser, INewPost, INewPostForm, INewSuportForm, INewSuport, IPost, IVideoParams } from "../types/types";

// Exemplo de dados para IFormInputFinance
export const fakeUserId = 'kpJsmJzlEIc4oBPDitHbDucYMyu1'
const formInputFinance: IFormInputFinance = {
    renda: 5000,
    entrada: 20000,
    saldoFgts: 15000,
    estadoCivil: "Solteiro",
    filhosDependentes: "nao",
    trabalho3Anos: "sim",
    primeiroImovel: "sim",
    financiamento: "nao",
    dataNascimento: "1990-01-15",
    tipoRenda: "formal"
  };
  
  // Exemplo de dados para IUser
  const user: IUser = {
    name: "João Silva",
    phone: "+55 11 91234-5678",
    email: "joao.silva@example.com",
    id: "user123"
  };
  
  // Exemplo de dados para INewPost
  const newPost: INewPost = {
    name: "Maria Oliveira",
    id: "post123",
    title: "Lançamento de imóvel",
    message: "Novo imóvel disponível no bairro X.",
    created_at: new Date(),
    updated_at: new Date()
  };
  
  // Exemplo de dados para INewPostForm
  const newPostForm: INewPostForm = {
    title: "Atualização no sistema",
    message: "Sistema atualizado para a versão 1.2."
  };
  
  // Exemplo de dados para INewSuportForm
  const newSuportForm: INewSuportForm = {
    title: "Erro ao acessar conta",
    message: "Não consigo acessar minha conta após a última atualização."
  };
  
  // Exemplo de dados para INewSuport
  const newSuport: INewSuport = {
    name: "Carlos Souza",
    id: "support123",
    title: "Problema na conta",
    message: "Erro ao tentar recuperar a senha.",
    created_at: new Date(),
    updated_at: new Date()
  };
  
  // Exemplo de dados para IPost
  const post: IPost = {
    id: "post456",
    title: "Venda de imóvel",
    message: "Imóvel vendido com sucesso na região Y.",
    name: "João Silva",
    date: new Date()
  };
  
  // Exemplo de dados para IVideoParams
  const videoParams: IVideoParams = {
    width: 1920,
    height: 1080
  };
  
export {formInputFinance}