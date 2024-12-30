const { createClient } = require('next-sanity');

// Configuração do cliente Sanity
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-12-26',
  useCdn: true, // Defina como false se você estiver usando ISR ou revalidação baseada em tags
});

module.exports = {
  siteUrl: process.env.SITE_URL || 'https://raciocine.com', // Defina a URL do seu site
  generateRobotsTxt: true, // Gera o robots.txt automaticamente
  changefreq: 'daily', // Frequência de atualização das URLs no sitemap
  priority: 0.7, // Defina a prioridade das páginas
  sitemapSize: 7000, // Tamanho máximo de URLs por arquivo
  exclude: ['/pagina-excluida'], // Excluir páginas do sitemap

  // Gerar URLs dinâmicas para o /blog/[slug] e páginas estáticas automaticamente
  additionalPaths: async (config) => {
    // Buscar os slugs dos posts do Sanity
    const slugs = await getBlogSlugs();

    // Gerar as URLs dinâmicas do blog
    const blogUrls = slugs.map((slug) => ({
      loc: `${config.siteUrl}/blog/${slug}`, // Monta a URL para cada slug
      lastmod: new Date().toISOString(), // Última modificação, pode ser ajustada conforme necessário
      changefreq: 'daily',
      priority: 0.7,
    }));

    // Retornar as URLs dinâmicas junto com as páginas estáticas automaticamente
    return blogUrls; // Não é necessário definir manualmente as páginas estáticas
  },
};

// Função para buscar os slugs dos posts do Sanity usando a SDK
async function getBlogSlugs() {
  try {
    // Consulta para buscar os slugs dos posts
    const posts = await client.fetch(
      `*[_type == "post" && defined(slug.current)] {
        slug {
          current
        }
      }`
    );

    // Extrair os slugs dos posts
    return posts.map(post => post.slug.current);
  } catch (error) {
    console.error('Erro ao buscar os slugs do Sanity:', error);
    return [];
  }
}
