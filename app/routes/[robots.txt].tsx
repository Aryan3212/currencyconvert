export const loader = () => {
  const content = `User-agent: *
Allow: /
Allow: /about
Allow: /contact
Allow: /privacy-policy 
Allow: /terms-of-service
Allow: /*-to-*

# Block access to API endpoints
Disallow: /api/

# Sitemap
Sitemap: https://www.currencyconverterpro.com/sitemap.xml

# Crawl-delay
Crawl-delay: 10`;

  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
