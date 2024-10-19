import { json, LoaderFunction } from "@remix-run/node";

interface FixerResponse {
  success: boolean;
  timestamp: number;
  base: string;
  date: string;
  rates: {
    [key: string]: number;
  };
}

export const loader: LoaderFunction = async () => {
  const API_KEY = process.env.FIXER_API_KEY;
  if (!API_KEY) {
    throw new Error("FIXER_API_KEY is not set in environment variables");
  }

  const response = await fetch(
    `https://data.fixer.io/api/latest?access_key=${API_KEY}&format=1`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data from Fixer API");
  }

  const data: FixerResponse = await response.json();
  return json(data);
};
