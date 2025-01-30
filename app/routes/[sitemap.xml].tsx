export const loader = () => {
    // handle "GET" request
  // separating xml content from Response to keep clean code. 
      const content = `
         <?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Homepage -->
  <url>
    <loc>https://www.currencyconverterpro.com/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- EUR pairs -->
  <url>
    <loc>https://www.currencyconverterpro.com/convert/eur-to-usd</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.currencyconverterpro.com/convert/eur-to-gbp</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.currencyconverterpro.com/convert/eur-to-cad</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.currencyconverterpro.com/convert/eur-to-try</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.currencyconverterpro.com/convert/eur-to-thb</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.currencyconverterpro.com/convert/eur-to-mxn</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.currencyconverterpro.com/convert/eur-to-myr</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.currencyconverterpro.com/convert/eur-to-sar</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.currencyconverterpro.com/convert/eur-to-inr</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.currencyconverterpro.com/convert/eur-to-cny</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.currencyconverterpro.com/convert/eur-to-brl</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.currencyconverterpro.com/convert/eur-to-aed</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- USD pairs -->
  <url>
    <loc>https://www.currencyconverterpro.com/convert/usd-to-eur</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.currencyconverterpro.com/convert/usd-to-gbp</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.currencyconverterpro.com/convert/usd-to-cad</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.currencyconverterpro.com/convert/usd-to-try</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.currencyconverterpro.com/convert/usd-to-thb</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.currencyconverterpro.com/convert/usd-to-mxn</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.currencyconverterpro.com/convert/usd-to-myr</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.currencyconverterpro.com/convert/usd-to-sar</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.currencyconverterpro.com/convert/usd-to-inr</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.currencyconverterpro.com/convert/usd-to-cny</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.currencyconverterpro.com/convert/usd-to-brl</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.currencyconverterpro.com/convert/usd-to-aed</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- GBP pairs -->
  <url>
    <loc>https://www.currencyconverterpro.com/convert/gbp-to-eur</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.currencyconverterpro.com/convert/gbp-to-usd</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.currencyconverterpro.com/convert/gbp-to-cad</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.currencyconverterpro.com/convert/gbp-to-try</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.currencyconverterpro.com/convert/gbp-to-thb</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.currencyconverterpro.com/convert/gbp-to-mxn</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.currencyconverterpro.com/convert/gbp-to-myr</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.currencyconverterpro.com/convert/gbp-to-sar</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.currencyconverterpro.com/convert/gbp-to-inr</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.currencyconverterpro.com/convert/gbp-to-cny</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.currencyconverterpro.com/convert/gbp-to-brl</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.currencyconverterpro.com/convert/gbp-to-aed</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Additional pages -->
  <url>
    <loc>https://www.currencyconverterpro.com/about</loc>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://www.currencyconverterpro.com/contact</loc>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://www.currencyconverterpro.com/privacy-policy</loc>
    <changefreq>monthly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://www.currencyconverterpro.com/terms-of-service</loc>
    <changefreq>monthly</changefreq>
    <priority>0.3</priority>
  </url>
</urlset>
      `
      // Return the response with the content, a status 200 message, and the appropriate headers for an XML page
      return new Response(content,{
        status: 200,
        headers: {
          "Content-Type": "application/xml",
          "xml-version": "1.0",
          "encoding": "UTF-8"
        }
      });
  };
  
  