import { dataset, projectId } from "@/sanity/env";

import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt,image, description}`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
  const urlFor = (source: SanityImageSource) =>
    projectId && dataset
      ? imageUrlBuilder({ projectId, dataset }).image(source)
      : null;
  console.log(posts)
  return (
    <>
    <main className="container  mx-auto min-h-screen max-w-9xl p-8">
      <div className="flex flex-col items-center justify-center mb-8 gap-2">
        <h1 className="text-center text-5xl font-bold ">Blog</h1>
        <p className="text-gray-600 max-w-4xl text-center text-sm">Fique por dentro de informaçoes de software,empreeendedorismo, e marketing digital em Belo Horizonte. Conteúdo atualizado para você ficar por dentro das melhores indromações do mercado.</p>
      </div>
        <h2 className="text-3xl font-bold mb-8">Posts</h2>
      <ul className="flex flex-wrap gap-4">

        {posts.map((post) => {  
  const postImageUrl = post.image
  ? urlFor(post.image)?.width(550).height(310).url()
  : null;
            return (
                    <Link href={`/blog/${post.slug.current}`}>
            <li className="hover:underline flex max-w-xl " key={post._id}>
                <div className="max-w-lg flex">

                <Card className="flex flex-col p-8">

                   {postImageUrl && (
                       <Image
                       src={postImageUrl}
                       alt={post.title}
                       className="aspect-video rounded-xl"
                       width="550"
                       height="310"
                       />
                      )}
            
              
                <div className="flex gap-2 mt-2 items-center mb-2"> 
                    <Calendar size={18}/>
                    <p className="text-sm">{new Date(post.publishedAt).toLocaleDateString()}</p>
                </div>
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p>{post.description}</p>
              <Button className="mt-4" variant={'outline'}>Ler Conteúdo</Button>
            </Card>
            </div>
          </li>
            </Link>
          )
        }
      )}
      </ul>
    </main>
      </>
  );
}