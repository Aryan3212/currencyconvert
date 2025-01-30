import { LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData, useParams, useSearchParams } from "@remix-run/react";
import { MetaFunction } from "@remix-run/node";
import CurrencyConverter from "~/components/CurrencyConverter";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { countryMaps } from "~/lib/constants";
import { Currency } from "~/lib/types";
import { Redis } from "@upstash/redis";
import type { LinksFunction } from "@remix-run/node";
import { TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { Tooltip, TooltipContent } from "~/components/ui/tooltip";

export const links: LinksFunction = () => {
  return [
    {
      rel: "icon",
      href: "/favicon.png",
      type: "image/png",
    },
  ];
};

const formatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  timeZoneName: "short",
});

export const meta: MetaFunction = ({ params }) => {
  const title =
    "Currency Converter Pro | Multi-Currency Travel Calculator with Offline Storage";
  const description =
    "Best free and simple travel-friendly currency converter with offline storage. Convert USD, EUR, GBP, JPY & 150+ currencies instantly. Save calculations for quick access while traveling. Real-time exchange rates, completely free.";
  const keywords =
    "currency converter, travel calculator, offline currency converter, exchange rates, USD, EUR, GBP, JPY, THB, saved calculations, travel tools, currency calculator, multiple currency conversion";
  const canonicalUrl = "https://www.currencyconverterpro.com"; // Replace with your actual domain

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

type CurrencyCode = keyof typeof countryMaps;
export type FixerResponse = {
  success: boolean;
  timestamp: number;
  base: CurrencyCode;
  date: Date;
  rates: {
    [K in CurrencyCode]: number;
  };
};
const redis = new Redis({
  url: "https://pure-tortoise-42369.upstash.io",
  token: process.env.REDIS_KEY,
});
export function parseCurrencies(apiResponse: FixerResponse): Currency {
  const result: any = {};

  for (const [code, rate] of Object.entries(apiResponse.rates)) {
    const mapEntry = countryMaps[code as CurrencyCode];
    if (mapEntry) {
      result[code] = {
        name: mapEntry.name,
        flag: mapEntry.flag,
        code: code,
        value: rate,
      };
    }
  }

  return result as Currency;
}
const validateCurrencyParams = (path: string | undefined, currencyMap: Currency): string[] => {
  if (!path) return [];
  const currencies = path.split('-to-').map(c => c.toUpperCase());
  
  if (currencies.length < 2) return [];
  
  const validCurrencies = currencies.every(code => code in currencyMap);
  
  return validCurrencies ? currencies : [];
};
export const loader: LoaderFunction = async ({ params }) => {
  const cacheResponse = await redis.get("currency_response") as { currencyMap: Currency, timestamp: number } | null;

  let currencyMap;
  let timestamp;
  if (cacheResponse) {
    currencyMap = cacheResponse.currencyMap;
    timestamp = cacheResponse.timestamp;
  } else {
    const response = await fetch(
      `https://data.fixer.io/api/latest?access_key=${process.env.FIXER_ACCESS_KEY}&format=1`
    );

    let currencyList: FixerResponse = await response.json();
    currencyMap = parseCurrencies(currencyList);
    timestamp = currencyList.timestamp;
    await redis.set("currency_response", JSON.stringify({ currencyMap, timestamp: timestamp }), {
      ex: 32400,
    });
  }

  const validatedCurrencies = validateCurrencyParams(params.path, currencyMap);

  return {
    currencyMap,
    timestamp,
    validatedCurrencies,
  };
};

const popularCurrencies = [
  { code: "EUR", name: "Euro" },             // France
  { code: "USD", name: "US Dollar" },        // United States
  { code: "GBP", name: "British Pound" },    // United Kingdom
  { code: "CAD", name: "Canadian Dollar" },  // Canada
  { code: "TRY", name: "Turkish Lira" },     // Turkey
  { code: "THB", name: "Thai Baht" },        // Thailand
  { code: "MXN", name: "Mexican Peso" },     // Mexico
  { code: "MYR", name: "Malaysian Ringgit" }, // Malaysia
  { code: "SAR", name: "Saudi Riyal" },      // Saudi Arabia
  { code: "INR", name: "Indian Rupee" },     // India
  { code: "CNY", name: "Chinese Yuan" },     // China
  { code: "BRL", name: "Brazilian Real" },   // Brazil
  { code: "AED", name: "UAE Dirham" },       // United Arab Emirates
] as Array<{ code: CurrencyCode; name: string}>;

function generateCurrencyPairs() {
  const currencyCodes = popularCurrencies.map(c => c.code);
  const pairs = [];
  
  // Generate all possible combinations
  for (let i = 0; i < 3; i++) {
      for (let j = 0; j < currencyCodes.length; j++) {
          if (i !== j) { // Avoid pairing a currency with itself
              pairs.push([currencyCodes[i], currencyCodes[j]]);
          }
      }
  }
  
  return pairs;
}
const popularPairs = generateCurrencyPairs();

type LoaderReturn = {
  currencyMap: Currency;
  timestamp: number;
  validatedCurrencies: string[];
}
export default function index() {
  const {currencyMap, timestamp, validatedCurrencies} = useLoaderData<LoaderReturn>();

  const footerLinks = [
    { href: "/about", text: "About" },
    { href: "/contact", text: "Contact" },
    { href: "/terms-of-service", text: "Terms of Service" },
    { href: "/privacy-policy", text: "Privacy Policy" }
  ];

  return (<>
    <div className="w-[98%] max-w-[52rem] mx-auto mt-4">
      <Link to="/" className="text-blue-600 hover:text-blue-800">
        ← Go back to Saved Calculation
      </Link>
    </div>
    <Card className="w-[98%] max-w-[52rem] mx-auto mt-4">
      <CardHeader>
        <CardTitle className="text-4xl">Currency Converter Pro</CardTitle>
      </CardHeader>
      <CardContent>
        <CurrencyConverter currencyMap={currencyMap} convertList={validatedCurrencies}/>
      </CardContent>
      <CardFooter>
        <p>
          Exchange rates last updated at{" "}
          {formatter.format(new Date(timestamp * 1000))}
        </p>
      </CardFooter>
    </Card>
    <div className="w-[98%] max-w-[52rem] mx-auto mt-8 mb-8">
      <h2 className="text-2xl font-semibold mb-4">Popular Currency Conversions</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {popularPairs.map((countries) => (
            <Card key={`${countries[0]}-${countries[1]}`} className="hover:bg-slate-50">
              <Link to={`/convert/${countries[0]}-to-${countries[1]}`} className="block p-4">
              <TooltipProvider>
                <Tooltip>
                <TooltipContent>
                  {countryMaps[countries[0]].name} to {countryMaps[countries[1]].name}
                </TooltipContent>
                  <TooltipTrigger className="flex items-center justify-between w-full">

                  <div className="flex items-center gap-2">
                    <span className="text-xl">{countryMaps[countries[0]].flag}</span>
                    <span>{countries[0]}</span>
                  </div>
                  <span>→</span>
                  <div className="flex items-center gap-2">
                    <span>{countries[1]}</span>
                    <span className="text-xl">{countryMaps[countries[1]].flag}</span>
                  </div>
                </TooltipTrigger>
                </Tooltip>
                </TooltipProvider>
              </Link>
            </Card>
          )
        )}
      </div>
    </div>
    <div className="w-full bg-gray-100 p-4 mt-8">
          <h2 className="text-lg font-semibold mb-2 text-center">Useful Links</h2>
      {footerLinks.map((link) => (
          <div key={link.href} className="flex align-center gap-4">
                <Link to={link.href} className="block p-4">
                  <div className="flex items-center justify-center">
                    <span>{link.text}</span>
                  </div>
                </Link>
          </div>
      ))}
      </div>
    </>
  );
}


 // return {
  //   success: true,
  //   timestamp: 1729313584,
  //   base: "EUR",
  //   date: "2024-10-19",
  //   rates: {
  //     AED: 3.994155,
  //     AFN: 71.230643,
  //     ALL: 98.851221,
  //     AMD: 421.105563,
  //     ANG: 1.959969,
  //     AOA: 992.279154,
  //     ARS: 1065.594393,
  //     AUD: 1.620861,
  //     AWG: 1.957364,
  //     AZN: 1.852939,
  //     BAM: 1.961273,
  //     BBD: 2.195827,
  //     BDT: 129.962662,
  //     BGN: 1.956843,
  //     BHD: 0.409928,
  //     BIF: 3145.375267,
  //     BMD: 1.087424,
  //     BND: 1.427283,
  //     BOB: 7.514971,
  //     BRL: 6.190495,
  //     BSD: 1.087535,
  //     BTC: 1.5903624e-5,
  //     BTN: 91.425122,
  //     BWP: 14.500464,
  //     BYN: 3.559032,
  //     BYR: 21313.519528,
  //     BZD: 2.192117,
  //     CAD: 1.502006,
  //     CDF: 3094.810423,
  //     CHF: 0.940446,
  //     CLF: 0.037575,
  //     CLP: 1036.816161,
  //     CNY: 7.722676,
  //     CNH: 7.740249,
  //     COP: 4640.583907,
  //     CRC: 558.959781,
  //     CUC: 1.087424,
  //     CUP: 28.816748,
  //     CVE: 110.781411,
  //     CZK: 25.239453,
  //     DJF: 193.257504,
  //     DKK: 7.463434,
  //     DOP: 65.735236,
  //     DZD: 145.212532,
  //     EGP: 52.837041,
  //     ERN: 16.311367,
  //     ETB: 128.864011,
  //     EUR: 1,
  //     FJD: 2.423547,
  //     FKP: 0.832063,
  //     GBP: 0.833212,
  //     GEL: 2.958219,
  //     GGP: 0.832063,
  //     GHS: 17.480392,
  //     GIP: 0.832063,
  //     GMD: 76.120099,
  //     GNF: 9384.473525,
  //     GTQ: 8.408464,
  //     GYD: 227.522812,
  //     HKD: 8.450213,
  //     HNL: 27.298528,
  //     HRK: 7.4913,
  //     HTG: 143.119376,
  //     HUF: 400.357487,
  //     IDR: 16827.186781,
  //     ILS: 4.041751,
  //     IMP: 0.832063,
  //     INR: 91.419177,
  //     IQD: 1424.52605,
  //     IRR: 45769.696145,
  //     ISK: 149.401667,
  //     JEP: 0.832063,
  //     JMD: 172.762094,
  //     JOD: 0.770771,
  //     JPY: 162.624747,
  //     KES: 140.278138,
  //     KGS: 92.978923,
  //     KHR: 4417.118561,
  //     KMF: 492.766814,
  //     KPW: 978.681774,
  //     KRW: 1489.782809,
  //     KWD: 0.333318,
  //     KYD: 0.906329,
  //     KZT: 525.376066,
  //     LAK: 23855.378326,
  //     LBP: 97433.232507,
  //     LKR: 318.428577,
  //     LRD: 209.084582,
  //     LSL: 19.14277,
  //     LTL: 3.210882,
  //     LVL: 0.657773,
  //     LYD: 5.235991,
  //     MAD: 10.803605,
  //     MDL: 19.374063,
  //     MGA: 4996.715797,
  //     MKD: 61.512242,
  //     MMK: 3531.912247,
  //     MNT: 3695.068365,
  //     MOP: 8.703186,
  //     MRU: 43.247283,
  //     MUR: 50.500404,
  //     MVR: 16.692377,
  //     MWK: 1887.769248,
  //     MXN: 21.62239,
  //     MYR: 4.680823,
  //     MZN: 69.490479,
  //     NAD: 19.236949,
  //     NGN: 1777.939375,
  //     NIO: 39.995881,
  //     NOK: 11.880225,
  //     NPR: 146.280196,
  //     NZD: 1.79236,
  //     OMR: 0.418634,
  //     PAB: 1.087535,
  //     PEN: 4.097963,
  //     PGK: 4.290438,
  //     PHP: 62.549063,
  //     PKR: 301.92381,
  //     PLN: 4.307631,
  //     PYG: 8610.02634,
  //     QAR: 3.958773,
  //     RON: 4.978995,
  //     RSD: 116.991736,
  //     RUB: 103.490736,
  //     RWF: 1469.110453,
  //     SAR: 4.084447,
  //     SBD: 9.0625,
  //     SCR: 15.327648,
  //     SDG: 654.089813,
  //     SEK: 11.440834,
  //     SGD: 1.424639,
  //     SHP: 0.832063,
  //     SLE: 25.000292,
  //     SLL: 22802.743856,
  //     SOS: 620.919738,
  //     SRD: 35.763257,
  //     STD: 22507.490939,
  //     SVC: 9.515553,
  //     SYP: 2732.186884,
  //     SZL: 19.142641,
  //     THB: 36.04925,
  //     TJS: 11.598459,
  //     TMT: 3.81686,
  //     TND: 3.364822,
  //     TOP: 2.546861,
  //     TRY: 37.109234,
  //     TTD: 7.379593,
  //     TWD: 34.859607,
  //     TZS: 2957.794911,
  //     UAH: 44.839926,
  //     UGX: 3989.1317,
  //     USD: 1.087424,
  //     UYU: 45.567155,
  //     UZS: 13951.656258,
  //     VEF: 3939252.254264,
  //     VES: 42.541279,
  //     VND: 27365.03668,
  //     VUV: 129.10125,
  //     WST: 3.046076,
  //     XAF: 657.792575,
  //     XAG: 0.032237,
  //     XAU: 0.0004,
  //     XCD: 2.938819,
  //     XDR: 0.812668,
  //     XOF: 656.264575,
  //     XPF: 119.331742,
  //     YER: 272.23711,
  //     ZAR: 19.136888,
  //     ZMK: 9788.129001,
  //     ZMW: 28.90165,
  //     ZWL: 350.150234,
  //   },
  // };