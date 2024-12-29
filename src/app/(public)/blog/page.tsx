

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { dataset, projectId } from "@/sanity/env";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { truncateText } from "@/app/util/textTrincate";
import { PaginationBlog } from "./PaginationBlog";

const POSTS_PER_PAGE = 6;
interface dataFeathPost{
  postsData:any[]
  totalCount:number
}
async function fetchPosts (start:any,end:any):Promise<dataFeathPost > {
  try {
    const [postsData, totalCount] = await Promise.all([
      client.fetch(
        `*[
          _type == "post" && defined(slug.current)
        ]|order(publishedAt desc)[$start...$end]{
          _id, title, slug, publishedAt, image, description
        }`,
        { start, end }
      ),
      client.fetch(`count(*[_type == "post" && defined(slug.current)])`),
    ]);
    return {postsData, totalCount}

  } catch (error) {
    console.error("Erro ao buscar posts:", error);
    return{postsData:[],totalCount:0}
  } finally {

  }
};
export default async  function IndexPage(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const page = searchParams?.page || '';
  const currentPage = Number(searchParams?.page) || 1;
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE
  const {postsData, totalCount} = await fetchPosts(start,end)
  const totalPages = Math.ceil(totalCount / POSTS_PER_PAGE);
  console.log('end e start=>',end,start)

  
  const urlFor = (source: SanityImageSource) =>
    projectId && dataset
      ? imageUrlBuilder({ projectId, dataset }).image(source)
      : null;
  return (
    <Suspense fallback={<div>Carregando página...</div>}>
      <main className="container  mx-auto min-h-screen pb-52 max-w-9xl p-8">
        {/* Header */}
        <div className="mb-8 gap-2">
          <h1 className="text-center text-5xl font-bold">Blog</h1>
          <p className="text-gray-600 mt-2 text-center text-sm">
            Fique por dentro de informações de software, empreendedorismo e
            marketing digital em Belo Horizonte.
          </p>
        </div>

        {/* Posts */}
        <h2 className="text-3xl ml-1  md:ml-20 font-bold mb-8">Posts</h2>
        <div className="flex flex-col  items-center place-items-center align-middle justify-items-center justify-center">
         
            <ul className="flex  max-w-6xl  flex-wrap gap-4">
              {postsData.map((post) => {
                const postImageUrl = post.image
                  ? urlFor(post.image)?.width(550).height(310).url()
                  : null;

                return (
                  <Link key={post._id} href={`/blog/${post.slug.current}`}>
                    <li className="hover:underline flex max-w-xl">
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
                            <Calendar size={18} />
                            <p className="text-sm">
                              {new Date(post.publishedAt).toLocaleDateString()}
                            </p>
                          </div>
                          <h2 className="text-xl font-semibold">
                            {post.title}
                          </h2>
                          <p>{truncateText(post.description, 100)}</p>
                          <Button className="mt-4" variant={"outline"}>
                            Ler Conteúdo
                          </Button>
                        </Card>
                      </div>
                    </li>
                  </Link>
                );
              })}
            </ul>
          
        </div>

              <PaginationBlog page={page} currentPage={currentPage} totalPages={totalPages} />
      </main>
    </Suspense>
  );
}
