import { Bell, BookText, CalendarDays, Flag, Folder, Heart, Hotel, House, HousePlus, List, ListCollapse, MessageCircleQuestion, Radar, Rocket, TvMinimalPlay, User } from "lucide-react";

export const navigationElementsAccount = [
  { title: 'Perfil', link: '/perfil', icon: User },
  { title: 'Favoritos', link: "/favoritos", icon: Heart },
  { title: 'Agendamentos', link: "/agendamentos", icon: CalendarDays },
  { title: 'Documentos', link: "/documentos", icon: Folder },
  { title: 'Notificações', link: '/notificacoes', icon: Bell },

];

export const navigationElementsTools = [
  { title: 'Todos', link: '/apartamentos', icon: Hotel },
  { title: 'Lancamentos', link: "/lancamentos", icon: Rocket }, 

];
export const navigationElementsCommunity= [
  { title: 'Home', link: '/dashboard', icon: House  },
  { title: 'Videos', link: '/videos', icon: TvMinimalPlay },
  { title: 'Ebooks', link: "/ebooks", icon: BookText }, 
  { title: 'Forum', link: "/forum", icon: MessageCircleQuestion },

];



export const navigationDev = [
  { title: 'Listar Produtos', link: '/lista', icon: List },
  { title: 'Novo Imovel', link: "/novo", icon: HousePlus },
];