import {  type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { PortableText, PortableTextBlockComponent, PortableTextMarkComponent } from '@portabletext/react';
import { site } from "../../../../../site";
import { Metadata } from "next";
import { urlFor } from "@/sanity/lib/image";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import {  BlogPosting, WithContext} from 'schema-dts'
 import moment from 'moment'
import { StructureData } from "@/app/ui/components/StructureData";
import { ArrowLeft } from "lucide-react";
interface PortableTextComponents {
  block: Record<string, PortableTextBlockComponent>;
  mark: Record<string, PortableTextMarkComponent>;
}
type Props ={
    params:{slug:string}
    searchParams:{[key:string]:string|string[]|undefined}
  
  }

const POST_QUERY = `*[_type == "post" && slug.current == $slug]{
_createdAt,
_id,
title,
description,
body,
image,
publishedAt,
author->
}[0]`;

const { projectId, dataset } = client.config();
const urlForfix = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };


export async function generateMetadata({params,searchParams}:Props):Promise<Metadata>{
    const query=`*[_type == "post" && slug.current == $slug]{
   _createdAt,
   _id,
   title,
   description,
   body,
   image,
   }[0]`;
   const data = await client.fetch(query,{slug:params.slug})
   return {
     applicationName:"Raciocine | Desenvolvimento de Software e Marketing Digital em Belo Horizonte",
     creator:"Leonardo Belilo Messias",
     metadataBase: new URL(site.url),
     title:data.title,
     description:data.description,
     openGraph:{
       title:data.title,
       description:data.description,
       images:urlFor(data.image)?.url(),
       type:'article',
       locale:"pt_BR"
     },
     authors:[{name:'Leonardo Belilo Messias'}]
   }
   }
export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await client.fetch<SanityDocument>(POST_QUERY, params, options);
  const postImageUrl = post.image
    ? urlForfix(post.image)?.width(550).height(310).url()
    : null;
    const authorImageurl = post.author.image
    ? urlForfix(post.author.image)?.width(550).height(310).url()
    : null;
console.log(post)
const schemaData :WithContext<BlogPosting> = {
  "@context":"https://schema.org",
  "@type":"BlogPosting",
  "headline":post.title,
  "description":post.description,
  "image":urlFor(post.image).url() ?? "",
  "author":{
    "@type":"Person",
    "name":post.author.name,
    "url":"https://br.linkedin.com/in/leonardo-belilo-messias"
  },
  "mainEntityOfPage":{
    "@type":"WebPage",
    "@id":site.url
  },
  "datePublished": moment(post._createdAt).format("yyyy-mm-dd"),
  publisher:{
    "@type":"Person",
    "name":post.author.name
  }

}
  return (
    <>
    <StructureData data={schemaData}/>
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
      <Link href="/blog" className="hover:underline flex gap-2 my-5">
          <ArrowLeft/>
          <p>Voltar para Posts to posts</p>
      </Link>
      {postImageUrl && (
        <Image
        src={postImageUrl}
        alt={post.title}
          className="aspect-video rounded-xl"
          width="550"
          height="310"
        />
      )}
      <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
        <p>Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
      <article className="prose">
         < PortableTextComponent value={post.body}/>
      </article>
      <div>
        <p className="font-bold">Autor</p>
        <div>
          {
            authorImageurl &&
          <Image width={50} height={150} src={authorImageurl} alt={`autor ${post.author.name}`} />
          }
         <p>{post.author.name}</p>
        </div>
      </div>
    </main>
</>
  );
}
const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className="text-3xl font-bold">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-bold">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-bold">{children}</h3>,
    p: ({ children }) => <p className="mb-4">{children}</p>,
    },
    mark: {
      strong: ({ children }) => <strong className="font-bold">{children}</strong>,
      em: ({ children }) => <em className="italic">{children}</em>,
    },
  };

  interface PortableTextProps {
    value: any;
  }
  
  const PortableTextComponent: React.FC<PortableTextProps> = ({ value }) => {
    return <PortableText value={value} components={components} />;
  };