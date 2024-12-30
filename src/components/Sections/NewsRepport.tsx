
import DiarioLogo from '@/app/assets/logos/news/logo-diario-comercio.webp'
import G1Logo from '@/app/assets/logos/news/logo-g1.webp'
import TempoLogo from '@/app/assets/logos/news/logo-tempo.webp'
import NewsImage from '@/app/assets/logos/news/noticia.webp'
import Image from "next/image";
import Link from "next/link";

const news= [
  {
    title:"Apostando no mercado digital, empresas  de BH veem faturamento crescer",
    description:"Empresários belo-horizontinos contam como é possível se destacar em um mercado amplamente concorrido",
    font:"Jornal O Tempo",
    link:"https://www.otempo.com.br/economia/2024/9/27/apostando-no-mercado-digital--empresas-de-cosmeticos-de-bh-veem-",
    img:TempoLogo
  },
  {
    title:"61% dos brasileiros compram mais pela internet do que em lojas físicas, aponta estudo",
    description:"Entre esses consumidores, 78% afirmam comprar uma ou mais vezes por mês e a maioria (51%) paga com PIX",
    font:"Site G1",
    link:"https://g1.globo.com/economia/noticia/2022/12/14/61percent-dos-brasileiros-compram-mais-pela-internet-do-que-em-lojas-fisicas-aponta-estudo.ghtml",
    img:G1Logo
  },  {
    title:"Faturamento do comércio eletrônico avança em MG",
    description:"Estado foi responsável por movimentar R$ 11,6 bi em vendas pela web no Brasil entre janeiro e agosto deste ano",
    font:"Jornal Diario do Comércio",
    link:"https://diariodocomercio.com.br/negocios/faturamento-do-comercio-eletronico-avanca-em-mg/",
    img:DiarioLogo
  },
]

export const NewsRepport = () => {
  return (
    <section
      id="sponsors"
      className="container my-32 sm:py-30 overflow-hidden flex flex-col md:flex-row justify-items-center justify-center content-center items-center "
    >

      <Image  src={NewsImage} alt="Bussines Man" height={500} width={500}/>

      <div className=" bg-blue-600 flex flex-col p-10   items-center max-w-[600px]">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-2  text-white">O que a midia diz sobre anuncios online em Belo Horizonte.</h2>
          <div className="flex flex-col gap-8">
            {
              news.map((item)=>(
                <div key={item.title} className="flex flex-col md:flex-row   md:gap-4">
                <Image className='rounded-full border-4 border-blue-900' src={item.img} alt="example" width={110} height={110}/>
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-white">{item.title}</h3>
                  <p className="text-white text-sm">{item.description}</p>
                  <h4 className="text-white text-sm underline">Link da Fonte: <Link href={item.link}>{item.font}</Link></h4>
                </div>
            </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};