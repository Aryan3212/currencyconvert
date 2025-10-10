import React from "react";
import { Link, useNavigate } from "@remix-run/react";
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
import { TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { Tooltip, TooltipContent } from "~/components/ui/tooltip";
import PWAStatus from "./PWAStatus";

type CurrencyCode = keyof typeof countryMaps;

const formatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  timeZoneName: "short",
});

const popularCurrencies = [
  { code: "EUR", name: "Euro" },
  { code: "USD", name: "US Dollar" },
  { code: "GBP", name: "British Pound" },
  { code: "CAD", name: "Canadian Dollar" },
  { code: "TRY", name: "Turkish Lira" },
  { code: "THB", name: "Thai Baht" },
  { code: "MXN", name: "Mexican Peso" },
  { code: "MYR", name: "Malaysian Ringgit" },
  { code: "SAR", name: "Saudi Riyal" },
  { code: "INR", name: "Indian Rupee" },
  { code: "CNY", name: "Chinese Yuan" },
  { code: "BRL", name: "Brazilian Real" },
  { code: "AED", name: "UAE Dirham" },
] as Array<{ code: CurrencyCode; name: string }>;

function generateCurrencyPairs() {
  const currencyCodes = popularCurrencies.map((c) => c.code);
  const pairs = [];

  // Generate all possible combinations
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < currencyCodes.length; j++) {
      if (i !== j) {
        // Avoid pairing a currency with itself
        pairs.push([currencyCodes[i], currencyCodes[j]]);
      }
    }
  }

  return pairs;
}

const popularPairs = generateCurrencyPairs();

let isHydrating = true;

type CurrencyPageProps = {
  currencyMap: Currency;
  timestamp: number;
  validatedCurrencies: string[];
  isHome?: boolean;
  onPopularConversionClick?: (fromCode: string, toCode: string) => void;
};

export default function CurrencyPage({
  currencyMap,
  timestamp,
  validatedCurrencies,
  onPopularConversionClick,
}: CurrencyPageProps) {
  const navigate = useNavigate();
  const converterRef = React.useRef<HTMLDivElement>(null);
  
  const [isHydrated, setIsHydrated] = React.useState(!isHydrating);
  React.useEffect(() => {
    isHydrating = false;
    setIsHydrated(true);
    localStorage.setItem('currencyData', JSON.stringify({
      currencyMap,
      timestamp,
      validatedCurrencies
    }));
  }, []);

  const handlePopularPairClick = (fromCode: string, toCode: string) => {
    if (onPopularConversionClick) {
      onPopularConversionClick(fromCode, toCode);
    } else {
      // Default behavior - navigate to the URL
      navigate(`/convert/${fromCode.toLowerCase()}-to-${toCode.toLowerCase()}`);
    }
  };

  const footerLinks = [
    { href: "/about", text: "About" },
    { href: "/contact", text: "Contact" },
    { href: "/terms-of-service", text: "Terms of Service" },
    { href: "/privacy-policy", text: "Privacy Policy" },
  ];

  return (
    <>
      {isHydrated && <PWAStatus />}
      <Card className="w-[98%] max-w-6xl mx-auto mt-4 mb-[15rem]">
        <CardHeader>
          <div className="flex items-center gap-3 flex-wrap">
            <CardTitle className="text-4xl" ref={converterRef}>Currency Converter Pro</CardTitle>
            <span className="flex items-center gap-1 text-xs bg-green-50 px-2 py-1 rounded-full border border-green-200">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
              Works offline
            </span>
          </div>
        </CardHeader>
        <CardContent>
          <CurrencyConverter
            currencyMap={currencyMap}
            convertList={validatedCurrencies}
          />
        </CardContent>
        <CardFooter>
          {isHydrated && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <p>
                Exchange rates last updated at{" "}
                {formatter.format(new Date(timestamp * 1000))}
              </p>
            </div>
          )}
        </CardFooter>
      </Card>
      {/* Popular Currency Conversions Section */}
        <Card className="w-[98%] max-w-6xl mx-auto mt-8">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-center">
              Popular Currency Conversions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {popularPairs.map((countries) => (
                <Card
                  key={`${countries[0]}-${countries[1]}`}
                  className="hover:bg-slate-50 cursor-pointer transition-colors border-border/40"
                  onClick={() => handlePopularPairClick(countries[0], countries[1])}
                >
                  <CardContent className="p-4">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipContent>
                          {countryMaps[countries[0]].name} to{" "}
                          {countryMaps[countries[1]].name}
                        </TooltipContent>
                        <TooltipTrigger className="flex items-center justify-between w-full">
                          <div className="flex items-center gap-2">
                            <span className="text-xl">
                              {countryMaps[countries[0]].flag}
                            </span>
                            <span className="font-medium">{countries[0]}</span>
                          </div>
                          <span className="text-muted-foreground">→</span>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{countries[1]}</span>
                            <span className="text-xl">
                              {countryMaps[countries[1]].flag}
                            </span>
                          </div>
                        </TooltipTrigger>
                      </Tooltip>
                    </TooltipProvider>
                  </CardContent>
                </Card>
              ))}
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
            {footerLinks.map((link) => (
              <Link
                rel="prefetch"
                key={link.href}
                to={link.href}
                className="text-primary hover:underline underline-offset-4"
              >
                {link.text}
              </Link>
            ))}
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

// Export the converter ref for external access
export function useConverterRef() {
  return React.useRef<HTMLDivElement>(null);
}
