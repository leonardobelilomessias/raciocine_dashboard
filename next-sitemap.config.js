// next-sitemap.js
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://raciocine.com', // Defina a URL do seu site
    generateRobotsTxt: true, // Gera o robots.txt automaticamente
    changefreq: 'daily', // Frequência de atualização das URLs no sitemap
    priority: 0.7, // Defina a prioridade das páginas
    sitemapSize: 7000, // Defina o tamanho máximo de URLs por arquivo
    // Caso seu site tenha páginas dinâmicas, você pode configurar para incluir ou excluir algumas
    exclude: ['/pagina-excluida'], // Excluir páginas do sitemap
    // Outras configurações possíveis
  };
  