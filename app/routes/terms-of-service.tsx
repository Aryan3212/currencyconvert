import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

import { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = ({ params }) => {
  const title = "TOS | Currency Converter Pro";
  const description =
    "Best free travel-friendly currency converter. Convert USD, EUR, GBP, JPY & 150+ currencies instantly. Save calculations. Real-time exchange rates.";
  const keywords =
    "currency converter, travel calculator, offline currency converter, exchange rates, USD, EUR, GBP, JPY, THB, saved calculations, travel tools, currency calculator, multiple currency conversion";
  const canonicalUrl = "https://www.currencyconverterpro.com/terms-of-service"; // Replace with your actual domain

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

export default function TermsOfService() {
  return (<>
    <div className="w-[98%] max-w-6xl mx-auto mt-4 mb-4">
      <Link to="/" className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-2 transition-colors">
        ← Go back to Home
      </Link>
    </div>
    <Card className="w-[98%] max-w-6xl mx-auto">
      <CardHeader>
        <CardTitle className="text-4xl font-bold">
          Terms of Service
        </CardTitle>
      </CardHeader>
      <CardContent className="prose max-w-none">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
              1. Acceptance of Terms
            </h2>
            <p className="text-muted-foreground leading-relaxed ml-5">
              By accessing and using Currency Converter Pro ("the Service"), you
              accept and agree to be bound by these Terms of Service. If you do not
              agree to these terms, please do not use the Service.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <span className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></span>
              2. Use of Service
            </h2>
            <p className="text-muted-foreground leading-relaxed ml-5">
              The Service provides currency conversion calculations based on current
              exchange rates. While we strive to provide accurate information, we
              cannot guarantee the accuracy of all conversions and rates.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <span className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></span>
              3. Disclaimer
            </h2>
            <p className="text-muted-foreground leading-relaxed ml-5">
              The currency conversion rates provided are for informational purposes
              only. We do not guarantee their accuracy and they should not be relied
              upon for financial transactions without independent verification.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <span className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></span>
              4. Service Modifications
            </h2>
            <p className="text-muted-foreground leading-relaxed ml-5">
              We reserve the right to modify or discontinue, temporarily or
              permanently, the Service with or without notice. We shall not be
              liable to you or any third party for any modification, suspension, or
              discontinuance of the Service.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <span className="w-2 h-2 bg-pink-500 rounded-full flex-shrink-0"></span>
              5. User Conduct
            </h2>
            <p className="text-muted-foreground leading-relaxed ml-5 mb-3">You agree not to:</p>
            <ul className="ml-8 space-y-2">
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></span>
                Use the Service for any unlawful purpose
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></span>
                Attempt to gain unauthorized access to the Service
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></span>
                Interfere with or disrupt the Service or servers
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></span>
                Collect any user information without authorization
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <span className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></span>
              6. Privacy
            </h2>
            <p className="text-muted-foreground leading-relaxed ml-5">
              Your use of the Service is also governed by our{" "}
              <Link to="/privacy-policy" className="text-primary underline-offset-4 hover:underline font-medium">
                Privacy Policy
              </Link>
              . Please review our Privacy Policy to understand our practices.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <span className="w-2 h-2 bg-teal-500 rounded-full flex-shrink-0"></span>
              7. Changes to Terms
            </h2>
            <p className="text-muted-foreground leading-relaxed ml-5">
              We reserve the right to update these Terms of Service at any time.
              Continued use of the Service after any changes constitutes acceptance
              of the new Terms of Service.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <span className="w-2 h-2 bg-indigo-500 rounded-full flex-shrink-0"></span>
              8. Contact
            </h2>
            <p className="text-muted-foreground leading-relaxed ml-5">
              If you have any questions about these Terms of Service, please contact
              us through our{" "}
              <Link to="/contact" className="text-primary underline-offset-4 hover:underline font-medium">
                contact page
              </Link>
              .
            </p>
          </div>

          <div className="pt-6 border-t border-border/40">
            <p className="text-sm text-muted-foreground text-center">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
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
          <Link to="/about" className="text-primary hover:underline underline-offset-4">
            About
          </Link>
          <Link to="/contact" className="text-primary hover:underline underline-offset-4">
            Contact
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
