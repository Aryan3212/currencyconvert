# An offline first multiple currency converter. 
## Compare across multiple currencies, keep calculations saved in your browser.
## An overview of the technical details can be found here: https://aryanrahman.dev/post/portfolio/currency-converter/

<img width="520" alt="image" src="https://github.com/user-attachments/assets/6d24326e-4258-452d-96df-89d197ea26c1" />


Exchange rates use the temporary Redis cache first (50,000-second expiry). On a cache miss or Redis read failure, the server requests Fixer with `FIXER_API_KEY` and refreshes both the temporary cache and the permanent fallback cache. Cache write failures do not discard fresh rates. If Fixer fails, the server reads the permanent cache, then uses the bundled October 7, 2026 snapshot if no cached fallback is available. The permanent cache has no expiry and can contain older rates. Redis requires `REDIS_KEY`. Server logs report API and cache failures without exposing credentials.
