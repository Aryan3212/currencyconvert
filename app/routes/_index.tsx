import { LoaderFunction } from "@remix-run/node";
import { useLoaderData, useNavigate } from "@remix-run/react";
import { MetaFunction } from "@remix-run/node";
import type { LinksFunction } from "@remix-run/node";
import React from "react";
import CurrencyPage from "~/components/CurrencyPage";
import { fetchCurrencyData, type CurrencyDataResult } from "~/lib/currency.server";

export const links: LinksFunction = () => {
  return [
    {
      rel: "icon",
      href: "/favicon.png",
      type: "image/png",
    }
  ];
};



export const meta: MetaFunction = ({ params }) => {
  const title = "Currency Converter Pro";
  const description =
    "Best free travel-friendly currency converter. Convert USD, EUR, GBP, JPY & 150+ currencies instantly. Save calculations. Real-time exchange rates.";
  const keywords =
    "currency converter, travel calculator, offline currency converter, exchange rates, USD, EUR, GBP, JPY, THB, saved calculations, travel tools, currency calculator, multiple currency conversion";
  const baseUrl = "https://www.currencyconverterpro.com"; // Replace with your actual domain

  return [
    // Basic Meta Tags
    { title },
    { name: "description", content: description },
    { name: "keywords", content: keywords },
    { name: "robots", content: "index, follow" },
    { rel: "canonical", href: baseUrl },

    // Open Graph Tags
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: baseUrl },
    {
      property: "og:image",
      content: `${baseUrl}/currency-converter-pro-1200x630.png`,
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
      content: `${baseUrl}/currency-converter-pro-1200x630.png`,
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
  ];
};

export const loader: LoaderFunction = async ({ params }) => {
  return await fetchCurrencyData({ paramsPath: params.path });
};
export default function Index() {
  const data = useLoaderData<CurrencyDataResult>();
  const navigate = useNavigate();

  const handlePopularConversionClick = (fromCode: string, toCode: string) => {
    // Navigate to the URL then scroll to converter
    navigate(`/convert/${fromCode.toLowerCase()}-to-${toCode.toLowerCase()}`);
    // Scrolling will be handled by the navigation target component
  };

  return (
    <CurrencyPage
      currencyMap={data.currencyMap}
      timestamp={data.timestamp}
      validatedCurrencies={data.validatedCurrencies}
      isHome={true}
      onPopularConversionClick={handlePopularConversionClick}
    />
  );
}
