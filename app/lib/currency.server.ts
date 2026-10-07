import { Redis } from "@upstash/redis";
import { countryMaps } from "~/lib/constants";
import { Currency } from "~/lib/types";

type CurrencyCode = keyof typeof countryMaps;

export type FixerResponse = {
  success: boolean;
  timestamp: number;
  base: CurrencyCode;
  date: Date;
  rates: {
    [key: string]: number;
  };
};

const redis = new Redis({
  url: "https://pure-tortoise-42369.upstash.io",
  token: process.env.REDIS_KEY,
});

function fallbackApiResponse(): FixerResponse {
  return {
    success: true,
    timestamp: 1791355445,
    base: "EUR",
    date: new Date(1791355445 * 1000),
    rates: {
      AED: 4.12261,
      AFN: 71.843731,
      ALL: 91.769073,
      AMD: 406.175493,
      ANG: 2.009795,
      AOA: 1029.388586,
      ARS: 1707.002157,
      AUD: 1.610434,
      AWG: 2.023417,
      AZN: 1.902848,
      BAM: 1.951838,
      BBD: 2.259843,
      BDT: 137.890093,
      BGN: 1.889766,
      BHD: 0.423047,
      BIF: 3372.229722,
      BMD: 1.122561,
      BND: 1.43462,
      BOB: 13.491613,
      BRL: 5.59305,
      BSD: 1.121997,
      BTC: 1.3309596e-5,
      BTN: 108.126511,
      BWP: 15.4346,
      BYN: 3.446857,
      BYR: 22002.201142,
      BZD: 2.256489,
      CAD: 1.596422,
      CDF: 2601.537436,
      CHF: 0.934864,
      CLF: 0.027688,
      CLP: 1093.265609,
      CNY: 7.526327,
      CNH: 7.528603,
      COP: 3639.040587,
      CRC: 513.664163,
      CUC: 1.122561,
      CUP: 26.927739,
      CVE: 110.041624,
      CZK: 24.411498,
      DJF: 199.807076,
      DKK: 7.475091,
      DOP: 67.653572,
      DZD: 151.107579,
      EGP: 58.756427,
      ERN: 16.838419,
      ETB: 180.732877,
      EUR: 1,
      FJD: 2.52436,
      FKP: 0.849344,
      GBP: 0.847337,
      GEL: 2.890643,
      GGP: 0.849344,
      GHS: 13.206192,
      GIP: 0.849344,
      GMD: 83.0698,
      GNF: 9871.094301,
      GTQ: 8.569604,
      GYD: 234.743488,
      HKD: 8.809715,
      HNL: 30.146374,
      HRK: 7.534293,
      HTG: 146.925025,
      HUF: 366.219344,
      IDR: 20083.74391,
      ILS: 3.423255,
      IMP: 0.849344,
      INR: 108.559759,
      IQD: 1470.55528,
      IRR: 1944444.525385,
      ISK: 137.199825,
      JEP: 0.849344,
      JMD: 178.300446,
      JOD: 0.79592,
      JPY: 177.688005,
      KES: 145.831728,
      KGS: 98.168077,
      KHR: 4544.875452,
      KMF: 491.681995,
      KPW: 1010.305511,
      KRW: 1504.321642,
      KWD: 0.348286,
      KYD: 0.935002,
      KZT: 506.372102,
      LAK: 25161.14885,
      LBP: 100604.43372,
      LKR: 370.928781,
      LRD: 191.860537,
      LSL: 18.583642,
      LTL: 3.314631,
      LVL: 0.679026,
      LYD: 7.212456,
      MAD: 11.189087,
      MDL: 20.022534,
      MGA: 4969.889352,
      MKD: 61.45026,
      MMK: 2356.332635,
      MNT: 4038.619867,
      MOP: 9.069829,
      MRU: 44.925405,
      MUR: 53.187155,
      MVR: 17.298315,
      MWK: 1945.542026,
      MXN: 20.24711,
      MYR: 4.587125,
      MZN: 71.731134,
      NAD: 18.600425,
      NGN: 1488.831081,
      NIO: 41.164517,
      NOK: 10.738006,
      NPR: 173.005124,
      NZD: 2.00209,
      OMR: 0.431632,
      PAB: 1.122022,
      PEN: 3.86364,
      PGK: 4.995026,
      PHP: 70.444095,
      PKR: 310.758363,
      PLN: 4.377416,
      PYG: 6573.743622,
      QAR: 4.089942,
      RON: 5.347997,
      RSD: 117.478254,
      RUB: 96.53859,
      RWF: 1655.777892,
      SAR: 4.208999,
      SBD: 9.053502,
      SCR: 15.644537,
      SDG: 675.195548,
      SEK: 11.264006,
      SGD: 1.435902,
      SHP: 0.846928,
      SLE: 27.704223,
      SLL: 23539.539704,
      SOS: 641.54852,
      SRD: 42.264756,
      STD: 23234.752111,
      STN: 24.864732,
      SVC: 9.817116,
      SYP: 14595.542084,
      SZL: 18.601003,
      THB: 37.807683,
      TJS: 10.344801,
      TMT: 3.928964,
      TND: 3.364372,
      TOP: 2.702858,
      TRY: 55.227207,
      TTD: 7.605392,
      TWD: 35.777712,
      TZS: 2968.858014,
      UAH: 50.398371,
      UGX: 4526.810905,
      USD: 1.122561,
      UYU: 45.27829,
      UZS: 13240.610345,
      VES: 979.743031,
      VND: 29167.50981,
      VUV: 135.016826,
      WST: 3.124199,
      XAF: 655.957,
      XAG: 0.018547,
      XAU: 0.000271551164,
      XCD: 3.033778,
      XCG: 2.022104,
      XDR: 0.793709,
      XOF: 655.957,
      XPF: 119.331742,
      YER: 265.177056,
      ZAR: 18.632093,
      ZMK: 10104.402492,
      ZMW: 22.187664,
      ZWL: 361.464275,
      SSP: 6422.049474,
      MXV: 2.288416,
    },
  };
}

export function parseCurrencies(apiResponse: FixerResponse): Currency {
  const result: Currency = {};

  for (const [code, rate] of Object.entries(apiResponse.rates)) {
    const mapEntry = countryMaps[code as CurrencyCode];
    if (mapEntry) {
      result[code] = {
        name: mapEntry.name,
        flag: mapEntry.flag,
        code: code,
        value: rate,
        symbol: mapEntry.symbol
      };
    } else {
      result[code] = {
        name: code,
        flag: "🏳️",
        symbol: code,
        value: rate,
        code: code
      };
    }
  }

  return result;
}

const validateCurrencyParams = (
  path: string | undefined,
  currencyMap: Currency
): string[] => {
  if (!path) return [];
  const currencies = path.split("-to-").map((c) => c.toUpperCase());

  if (currencies.length < 2) return [];

  const validCurrencies = currencies.every((code) => code in currencyMap);

  return validCurrencies ? currencies : [];
};

export type CurrencyDataResult = {
  currencyMap: Currency;
  timestamp: number;
  validatedCurrencies: string[];
};

export async function fetchCurrencyData({ paramsPath }: { paramsPath?: string }): Promise<CurrencyDataResult> {
  type CachedRates = { currencyMap: Currency; timestamp: number };
  let data: CachedRates | null = null;

  try {
    data = await redis.get<CachedRates>("currency_response");
  } catch {
    console.warn("Unable to read temporary currency cache");
  }

  if (!data) {
    try {
      if (!process.env.FIXER_API_KEY) {
        throw new Error("FIXER_API_KEY is not configured");
      }

      const response = await fetch(
        `https://data.fixer.io/api/latest?access_key=${encodeURIComponent(process.env.FIXER_API_KEY)}&format=1`,
        { signal: AbortSignal.timeout(10000) }
      );
      if (!response.ok) {
        throw new Error(`Fixer HTTP status ${response.status}`);
      }

      const currencyList: FixerResponse & { error?: { code?: number } } = await response.json();
      if (
        currencyList.success !== true ||
        !Number.isFinite(currencyList.timestamp) ||
        !currencyList.rates ||
        typeof currencyList.rates !== "object" ||
        Array.isArray(currencyList.rates) ||
        Object.keys(currencyList.rates).length === 0 ||
        Object.values(currencyList.rates).some((rate) => !Number.isFinite(rate) || rate <= 0)
      ) {
        throw new Error(`Invalid Fixer response (code: ${currencyList.error?.code ?? "unknown"})`);
      }

      data = {
        currencyMap: parseCurrencies(currencyList),
        timestamp: currencyList.timestamp,
      };
    } catch (error) {
      // Log only our own error messages; network errors can contain the API URL/key.
      console.warn("Unable to fetch Fixer rates", error instanceof Error &&
        /^(FIXER_API_KEY|Fixer HTTP status|Invalid Fixer response)/.test(error.message)
        ? error.message : "Request failed");
    }

    if (data) {
      const cachedData = JSON.stringify(data);
      const writes = await Promise.allSettled([
        redis.set("currency_response", cachedData, { ex: 50000 }),
        redis.set("currency_response_fallback", cachedData),
      ]);
      if (writes.some((result) => result.status === "rejected")) {
        console.warn("Unable to update one or more currency caches");
      }
    } else {
      try {
        data = await redis.get<CachedRates>("currency_response_fallback");
      } catch {
        console.warn("Unable to read permanent currency cache");
      }

      if (!data) {
        const fallbackData = fallbackApiResponse();
        data = {
          currencyMap: parseCurrencies(fallbackData),
          timestamp: fallbackData.timestamp,
        };
      }
    }
  }

  const { currencyMap, timestamp } = data;

  const validatedCurrencies = validateCurrencyParams(paramsPath, currencyMap);

  return {
    currencyMap,
    timestamp,
    validatedCurrencies,
  };
}
