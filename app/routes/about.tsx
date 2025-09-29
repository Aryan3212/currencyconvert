import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

import { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
export const meta: MetaFunction = ({ params }) => {
  const title = "About | Currency Converter Pro";
  const description =
    "Best free travel-friendly currency converter. Convert USD, EUR, GBP, JPY & 150+ currencies instantly. Save calculations. Real-time exchange rates.";
  const keywords =
    "currency converter, travel calculator, offline currency converter, exchange rates, USD, EUR, GBP, JPY, THB, saved calculations, travel tools, currency calculator, multiple currency conversion";
  const canonicalUrl = "https://www.currencyconverterpro.com/about"; // Replace with your actual domain

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

export default function About() {
  return (
    <>
    <div className="w-[98%] max-w-6xl mx-auto mt-4 mb-4">
      <Link to="/" className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-2 transition-colors">
        ← Go back to Home
      </Link>
    </div>
    <Card className="w-[98%] max-w-6xl mx-auto">
      <CardHeader>
        <CardTitle className="text-4xl font-bold">
          About Currency Converter Pro
        </CardTitle>
      </CardHeader>
      <CardContent className="prose max-w-none">
        <p className="mb-4">
          Currency Converter Pro is a fast, reliable, and easy-to-use currency
          conversion tool that helps you convert between major world currencies
          in real-time.
        </p>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Our Features</h2>
          <ul className="space-y-2 list-none">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
              Real-time exchange rates updated regularly
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
              Support for major world currencies
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
              Simple and intuitive interface
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
              Quick access to popular currency pairs
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></span>
              Mobile-friendly design
            </li>
          </ul>

          <h2 className="text-2xl font-semibold">How It Works</h2>
          <p className="text-muted-foreground leading-relaxed">
            We fetch the latest exchange rates from reliable financial data
            providers to ensure accuracy in our conversions. Our rates are updated
            multiple times per day to reflect the most current market values.
          </p>

          <h2 className="text-2xl font-semibold">Popular Currencies</h2>
          <p className="text-muted-foreground leading-relaxed">
            We support all major world currencies including EUR, USD, GBP, CAD,
            TRY, THB, MXN, MYR, SAR, INR, CNY, BRL, AED and many more. Whether
            you're traveling, doing business internationally, or just keeping
            track of exchange rates, we've got you covered.
          </p>

          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p className="text-muted-foreground leading-relaxed">
            Have questions or suggestions? We'd love to hear from you. Visit our{" "}
            <Link to="/contact" className="text-primary underline-offset-4 hover:underline font-medium">
              contact page
            </Link>{" "}
            to get in touch with us.
          </p>
        </div>
      </CardContent>
    </Card>
    {/* Footer Section */}
    <Card className="w-[98%] max-w-6xl mx-auto mt-8 mb-8">
      <CardHeader>
        <CardTitle className="text-lg text-center">Useful Links</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <Link to="/" className="text-primary hover:underline underline-offset-4">
            Home
          </Link>
          <Link to="/contact" className="text-primary hover:underline underline-offset-4">
            Contact
          </Link>
          <Link to="/terms-of-service" className="text-primary hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link to="/privacy-policy" className="text-primary hover:underline underline-offset-4">
            Privacy Policy
          </Link>
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-6 justify-center">
            <span className="flex items-center gap-2 text-sm font-medium">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Works offline
            </span>
            <span className="flex items-center gap-2 text-sm font-medium">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Install as app
            </span>
            <span className="flex items-center gap-2 text-sm font-medium">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              Save to home screen
            </span>
          </div>
          <div className="text-center text-muted-foreground">
            Created to make your life easier by{" "}
            <a
              className="text-primary underline-offset-4 hover:underline font-medium"
              href="https://www.aryanrahman.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aryan Rahman
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
    </>
  );
}
