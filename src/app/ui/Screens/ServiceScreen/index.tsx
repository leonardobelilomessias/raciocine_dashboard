import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import ImageLog from '@/app/assets/images/services/service-develop.webp'
import ImageSEO from '@/app/assets/images/services/service-seo.webp'
import ImageAds from '@/app/assets/images/services/service-ads.webp'
import ImageSocial from '@/app/assets/images/services/service-social-mesia.webp'
import ImageCopy from '@/app/assets/images/services/service-copywriter.webp'
import ImageFilm from '@/app/assets/images/services/service-filmmaker.webp'
import ImageDesign from '@/app/assets/images/services/service-design.webp'


import Image from "next/image";
import Link from "next/link";

const services = [
    {
      title: "Criação de Sites",
      description: "Sites institucionais, Landing pages, Lojas Virtuais para o destaque do seu negócio",
      img: ImageLog,
      link:'/criacao-de-site-em-belo-horizonte'
    },

    {
      title: "Anúncios Online",
      description: "Publicidade eficaz em Google Ads, Facebook Ads e outras plataformas para alcançar seu público",
      img: ImageAds,
      link: '/anuncios-online-em-belo-horizonte'
    },
    {
      title: "Social Media",
      description: "Gerenciamento e criação de conteúdo para redes sociais: Facebook, Instagram, Twitter e LinkedIn",
      img: ImageSocial,
      link: '/social-media-em-belo-horizonte'
    },
    {
        title: "SEO (Otimização para Buscas)",
        description: "Aumente visibilidade, tráfego e conversões com estratégias de SEO personalizadas",
        img: ImageSEO,
        link: '/seo-em-belo-horizonte'
      },
    {
      title: "Copywriter",
      description: "Criação de conteúdo persuasivo para sites, blogs, anúncios e redes sociais",
      img: ImageCopy,
      link: '/copywriter-em-belo-horizonte'
    },
    {
      title: "Filmmaker (Produção de Vídeos)",
      description: "Criação de vídeos institucionais, explicativos e publicitários de alta qualidade",
      img: ImageFilm,
      link: '/filmmaker-em-belo-horizonte'
    },
    {
      title: "Design Gráfico",
      description: "Criação de logotipos, identidade visual, materiais de marketing e design para redes sociais",
      img: ImageDesign,
      link: '/design-grafico-em-belo-horizonte'
    }
  ];
export function ServiceScreen(){
    return(
        <main  className="min-h-screen container pb-40 md:pb-40">
        <h1 className="text-4xl md:text-5xl font-bold text-center mt-10">Nossos Serviços</h1>
        <div className="flex mt-10 gap-4 flex-wrap items-center mx-auto">
        {
            services.map((service)=>(
                <Link key={service.title} className="w-[420px]" href={`/servicos/${service.link}`}>
                <Card className=" items-center" key={service.title}>
                <CardHeader className="text-center">
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center flex-col ">
                    <Image src={service.img}width={350} alt="logo"/>
                </CardContent>
                <CardFooter className="flex items-center align-centet justify-center">
                    <Button>Saber mais</Button>
                </CardFooter>
            </Card>
                </Link>
            ))
        }

        </div>

      </main>
    )
}