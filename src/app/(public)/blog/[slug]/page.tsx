import { PortableText, PortableTextBlockComponent, PortableTextMarkComponent } from '@portabletext/react';
import { type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { site } from "../../../../../site";
import { Metadata } from "next";
import { urlFor } from "@/sanity/lib/image";
import { BlogPosting, WithContext } from 'schema-dts';
import moment from 'moment';
import { StructureData } from "@/app/ui/components/StructureData";
import { ArrowLeft, Calendar, Instagram, Linkedin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface ExtendedPortableTextComponents {
  block: Record<string, PortableTextBlockComponent>;
  mark: Record<string, PortableTextMarkComponent>;
  types?: {
    image?: ({ value }: { value: SanityImageSource }) => JSX.Element;
  };
}

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const POST_QUERY = `*[_type == "post" && slug.current == $slug]{
  _createdAt,
  _id,
  title,
  description,
  body,
  image,
  publishedAt,
  keywords,
  author->
}[0]`;

const { projectId, dataset } = client.config();
const urlForfix = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const query = `*[_type == "post" && slug.current == $slug]{
    _createdAt,
    _id,
    title,
    description,
    body,
    image,
    keywords,
  }[0]`;
  const data = await client.fetch(query, { slug: params.slug });
  return {
    applicationName: "Raciocine | Desenvolvimento de Software e Marketing Digital em Belo Horizonte",
    creator: "Leonardo Belilo Messias",
    metadataBase: new URL(site.url),
    title: data.title,
    description: data.description,
    keywords:data.keywords,
    openGraph: {
      title: data.title,
      description: data.description,
      images: urlFor(data.image)?.url(),
      type: 'article',
      locale: "pt_BR"
    },
    authors: [{ name: 'Leonardo Belilo Messias' }]
  };
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
  const authorImageurl = post.author.photo
    ? urlForfix(post.author.photo)?.width(500).height(500).url()
    : null;

  const schemaData: WithContext<BlogPosting> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "image": urlFor(post.image).url() ?? "",
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "url": "https://br.linkedin.com/in/leonardo-belilo-messias"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": site.url
    },
    "datePublished": moment(post._createdAt).format("yyyy-mm-dd"),
    publisher: {
      "@type": "Person",
      "name": post.author.name
    }
  };

  return (
    <>
      <StructureData data={schemaData} />
      <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
        <Link href="/blog" className="hover:underline flex gap-2 my-5 ">
          <ArrowLeft />
          <p>Voltar para Posts</p>
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
        <p>keywords=={JSON.stringify(post.keywords)}</p>
        <div className="flex gap-2 items-center text-gray-500">
          <Calendar size={16} />
          <p className="text-sm">Publicado em {new Date(post.publishedAt).toLocaleDateString()}</p>
        </div>
        <article className="prose mb-10">
          <PortableTextComponent value={post.body} />
        </article>
        <Separator />
        <div>
          <p className="font-bold">Autor</p>
          <div className="flex gap-2 mt-2 items-center">
            <div>
                {authorImageurl && (
                  <Image
                    className="rounded-full"
                    width={80}
                    height={80}
                    src={authorImageurl}
                    alt={`autor ${post.author.name}`}
                  />
                )}
            </div>

            <div>
              <p className="font-bold text-sm">{post.author.name}</p>
              <p className="text-gray-500 text-sm">{post.author.profession}</p>
              <i className='text-sm text-gray-400'>{post.author.bio}</i>
              <div className='flex gap-2'>
                <Link href={"/"}> <Instagram  size={20} /></Link>
                <Link href={"/"}> <Linkedin  size={20} /></Link>

              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

const components: ExtendedPortableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className="text-3xl font-bold mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-bold mb-3">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-bold mb-2">{children}</h3>,
    h4: ({ children }) => <h4 className="text-lg font-bold mb-2">{children}</h4>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700 my-4">
        {children}
      </blockquote>
    ),
    p: ({ children }) => <p className="mb-4 text-justify">{children}</p>,
    ul: ({ children }) => <ul className="list-disc list-inside mb-4">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal list-inside mb-4">{children}</ol>,
    li: ({ children }) => <li className="mb-2">{children}</li>,
  },
  mark: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-gray-100 text-red-600 px-1 py-0.5 rounded">
        {children}
      </code>
    ),
    link: ({ children, value }) => (
      <a
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }: { value: SanityImageSource & { alt?: string } }) => (
      <div className="my-4">
        <Image
          src={urlForfix(value)?.width(800).height(450).url() || ""}
          alt={value?.alt || "Imagem do post"} // Usa 'alt' se estiver presente
          width={800}
          height={450}
          className="rounded-md"
        />
      </div>
    ),
  },
};

interface PortableTextProps {
  value: any;
}

const PortableTextComponent: React.FC<PortableTextProps> = ({ value }) => {
  return <PortableText value={value} components={components} />;
};
