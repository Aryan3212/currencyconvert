import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

import { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
export const meta: MetaFunction = ({ params }) => {
  const title = "Privacy Policy | Currency Converter Pro";
  const description =
    "Best free travel-friendly currency converter. Convert USD, EUR, GBP, JPY & 150+ currencies instantly. Save calculations. Real-time exchange rates.";
  const keywords =
    "currency converter, travel calculator, offline currency converter, exchange rates, USD, EUR, GBP, JPY, THB, saved calculations, travel tools, currency calculator, multiple currency conversion";
  const canonicalUrl = "https://www.currencyconverterpro.com/privacy-policy"; // Replace with your actual domain

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

export default function PrivacyPolicy() {
  return (<>
    <div className="w-[98%] max-w-6xl mx-auto mt-4 mb-4">
      <Link to="/" className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-2 transition-colors">
        ← Go back to Home
      </Link>
    </div>
    <Card className="w-[98%] max-w-6xl mx-auto">
      <CardHeader>
        <CardTitle className="text-4xl font-bold">
          Privacy Policy
        </CardTitle>
      </CardHeader>
      <CardContent className="prose max-w-none">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
              1. Information We Collect
            </h2>
            <p className="text-muted-foreground leading-relaxed ml-5">
              Currency Converter Pro collects minimal information to provide and
              improve our Service. We do not collect any personally identifiable
              information unless explicitly provided by you through our contact
              form.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <span className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></span>
              2. Usage Data
            </h2>
            <p className="text-muted-foreground leading-relaxed ml-5 mb-3">We may collect anonymous usage data including:</p>
            <ul className="ml-8 space-y-2">
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></span>
                Browser type and version
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></span>
                The pages of our Service that you visit
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></span>
                The time and date of your visit
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></span>
                The time spent on those pages
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <span className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></span>
              3. Cookies
            </h2>
            <p className="text-muted-foreground leading-relaxed ml-5">
              We use essential cookies to ensure the proper functioning of our
              website. These cookies do not collect any personal information and are
              strictly necessary for the Service to work correctly.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <span className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></span>
              4. How We Use Your Information
            </h2>
            <p className="text-muted-foreground leading-relaxed ml-5 mb-3">Any information we collect is used to:</p>
            <ul className="ml-8 space-y-2">
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></span>
                Provide and maintain our Service
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></span>
                Improve our Service
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></span>
                Monitor the usage of our Service
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></span>
                Detect and address technical issues
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <span className="w-2 h-2 bg-pink-500 rounded-full flex-shrink-0"></span>
              5. Data Security
            </h2>
            <p className="text-muted-foreground leading-relaxed ml-5">
              We implement appropriate security measures to protect against
              unauthorized access, alteration, disclosure, or destruction of your
              information.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <span className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></span>
              6. Third-Party Services
            </h2>
            <p className="text-muted-foreground leading-relaxed ml-5">
              Our Service may contain links to other websites that are not operated
              by us. We have no control over and assume no responsibility for the
              content, privacy policies, or practices of any third-party sites or
              services.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <span className="w-2 h-2 bg-teal-500 rounded-full flex-shrink-0"></span>
              7. Changes to This Privacy Policy
            </h2>
            <p className="text-muted-foreground leading-relaxed ml-5">
              We may update our Privacy Policy from time to time. We will notify you
              of any changes by posting the new Privacy Policy on this page.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <span className="w-2 h-2 bg-indigo-500 rounded-full flex-shrink-0"></span>
              8. Contact Us
            </h2>
            <p className="text-muted-foreground leading-relaxed ml-5">
              If you have any questions about this Privacy Policy, please contact us
              through our{" "}
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
          <Link to="/terms-of-service" className="text-primary hover:underline underline-offset-4">
            Terms of Service
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
