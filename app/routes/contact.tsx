import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

import { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
export const meta: MetaFunction = ({ params }) => {
  const title = "About | Currency Converter Pro";
  const description =
    "Best free travel-friendly currency converter. Convert USD, EUR, GBP, JPY & 150+ currencies instantly. Save calculations. Real-time exchange rates.";
  const keywords =
    "currency converter, travel calculator, offline currency converter, exchange rates, USD, EUR, GBP, JPY, THB, saved calculations, travel tools, currency calculator, multiple currency conversion";
  const canonicalUrl = "https://www.currencyconverterpro.com/contact"; // Replace with your actual domain

  return [
    // Basic Meta Tags
    { title },
    { name: "description", content: description },
    { name: "keywords", content: keywords },
    { name: "robots", content: "index, follow" },
    { rel: "canonical", href: canonicalUrl },

    // Open Graph Tags
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: canonicalUrl },
    {
      property: "og:image",
      content: `${canonicalUrl}/currency-converter-pro-1200x630.png`,
    },
    {
      property: "og:image:alt",
      content:
        "Currency Converter Pro interface showing multiple currency conversion",
    },
    { property: "og:site_name", content: "Currency Converter Pro" },
    { property: "og:locale", content: "en_US" },

    // Twitter Card Tags
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    {
      name: "twitter:image",
      content: `${canonicalUrl}/currency-converter-pro-1200x630.png`,
    },
    {
      name: "twitter:image:alt",
      content:
        "Currency Converter Pro interface showing multiple currency conversion",
    },

    // Additional SEO Tags
    { name: "application-name", content: "Currency Converter Pro" },
    { name: "apple-mobile-web-app-title", content: "Currency Converter Pro" },
    { name: "theme-color", content: "#FFFFFF" }, // Replace with your brand color

    // Schema.org JSON-LD
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "Currency Converter Pro",
        description: description,
        url: canonicalUrl,
        applicationCategory: "FinanceApplication",
        operatingSystem: "All",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        featureList: [
          "Multiple currency conversion",
          "Offline storage for saved calculations",
          "Travel-friendly interface",
          "Real-time exchange rates",
        ],
      },
    },
  ];
};

export default function Contact() {
  return (
    <>
    <Card className="w-[98%] max-w-[52rem] mx-auto mt-4">
      <div className="w-[98%] max-w-[52rem] mx-auto mt-4">
        <Link to="/" className="text-blue-600 hover:text-blue-800">
          ← Go back to Home{" "}
        </Link>
      </div>
      <CardHeader>
        <CardTitle className="text-4xl">Contact Us</CardTitle>
      </CardHeader>
      <CardContent className="prose dark:prose-invert">
        <p>
          We apologize, but our contact form is currently under development. We
          are working hard to implement a secure and reliable way for you to get
          in touch with us.
        </p>

        <p>
          Please check back later. We appreciate your patience and
          understanding.
        </p>
      </CardContent>
    </Card>
    <div className="flex flex-wrap w-full bg-gray-100 p-4 mt-8">
      <h2 className="text-lg basis-full font-semibold mb-2 text-center">Useful Links</h2>
      <div className="basis-1/4 align-center gap-4">
        <Link to="/" className="block p-4">
          <div className="items-center justify-center">
            <span>Home</span>
          </div>
        </Link>
      </div>
      <div className="basis-1/4 align-center gap-4">
        <Link to="/about" className="block p-4">
          <div className="items-center justify-center">
            <span>About</span>
          </div>
        </Link>
      </div>
      <div className="basis-1/4 align-center gap-4">
        <Link to="/terms-of-service" className="block p-4">
          <div className="items-center justify-center">
            <span>Terms of Service</span>
          </div>
        </Link>
      </div>
      <div className="basis-1/4 align-center gap-4">
        <Link to="/privacy-policy" className="block p-4">
          <div className="items-center justify-center">
            <span>Privacy Policy</span>
          </div>
        </Link>
      </div>
      <div className="mt-10 space-y-2 basis-full">
        <div className="flex flex-wrap gap-4 justify-center text-sm text-gray-600 mb-4">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Works offline
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            Install as app
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            Save to home screen
          </span>
        </div>
        <h2 className="text-lg">Created to make your life easier by <a className="text-blue-500 underline" href="https://www.aryanrahman.dev">Aryan Rahman</a></h2>
      </div>
    </div>
    </>
  );
}
