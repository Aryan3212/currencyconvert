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
    <Card className="w-full max-w-2xl mx-auto mt-4 p-6 bg-white shadow-lg rounded-lg">
      <div className="w-[98%] max-w-[52rem] mx-auto mt-4">
        <Link to="/" className="text-blue-600 hover:text-blue-800">
          ← Go back to Home{" "}
        </Link>
      </div>
      <CardHeader>
        <CardTitle className="text-4xl font-bold text-gray-800">
          Privacy Policy
        </CardTitle>
      </CardHeader>
      <CardContent className="prose dark:prose-invert text-gray-700">
        <h2 className="text-2xl font-semibold mt-4">
          1. Information We Collect
        </h2>
        <p>
          Currency Converter Pro collects minimal information to provide and
          improve our Service. We do not collect any personally identifiable
          information unless explicitly provided by you through our contact
          form.
        </p>

        <h2 className="text-2xl font-semibold mt-4">2. Usage Data</h2>
        <p>We may collect anonymous usage data including:</p>
        <ul className="list-disc list-inside ml-5">
          <li>Browser type and version</li>
          <li>The pages of our Service that you visit</li>
          <li>The time and date of your visit</li>
          <li>The time spent on those pages</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-4">3. Cookies</h2>
        <p>
          We use essential cookies to ensure the proper functioning of our
          website. These cookies do not collect any personal information and are
          strictly necessary for the Service to work correctly.
        </p>

        <h2 className="text-2xl font-semibold mt-4">
          4. How We Use Your Information
        </h2>
        <p>Any information we collect is used to:</p>
        <ul className="list-disc list-inside ml-5">
          <li>Provide and maintain our Service</li>
          <li>Improve our Service</li>
          <li>Monitor the usage of our Service</li>
          <li>Detect and address technical issues</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-4">5. Data Security</h2>
        <p>
          We implement appropriate security measures to protect against
          unauthorized access, alteration, disclosure, or destruction of your
          information.
        </p>

        <h2 className="text-2xl font-semibold mt-4">6. Third-Party Services</h2>
        <p>
          Our Service may contain links to other websites that are not operated
          by us. We have no control over and assume no responsibility for the
          content, privacy policies, or practices of any third-party sites or
          services.
        </p>

        <h2 className="text-2xl font-semibold mt-4">
          7. Changes to This Privacy Policy
        </h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page.
        </p>

        <h2 className="text-2xl font-semibold mt-4">8. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          through our{" "}
          <a href="/contact" className="text-blue-500 hover:underline">
            contact page
          </a>
          .
        </p>

        <p className="text-sm mt-8 text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
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
        <Link to="/contact" className="block p-4">
          <div className="items-center justify-center">
            <span>Contact</span>
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
