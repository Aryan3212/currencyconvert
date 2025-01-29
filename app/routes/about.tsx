import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export default function About() {
  return (
    <Card className="w-[98%] max-w-[52rem] mx-auto mt-4 p-6 bg-white shadow-lg rounded-lg">
      <CardHeader>
        <CardTitle className="text-4xl font-bold text-gray-800">About Currency Converter Pro</CardTitle>
      </CardHeader>
      <CardContent className="prose dark:prose-invert text-gray-700">
        <p className="mb-4">
          Currency Converter Pro is a fast, reliable, and easy-to-use currency conversion tool that helps you convert between major world currencies in real-time.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Our Features</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Real-time exchange rates updated regularly</li>
          <li>Support for major world currencies</li>
          <li>Simple and intuitive interface</li>
          <li>Quick access to popular currency pairs</li>
          <li>Mobile-friendly design</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">How It Works</h2>
        <p className="mb-4">
          We fetch the latest exchange rates from reliable financial data providers to ensure accuracy in our conversions. Our rates are updated multiple times per day to reflect the most current market values.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Popular Currencies</h2>
        <p className="mb-4">
          We support all major world currencies including EUR, USD, GBP, CAD, TRY, THB, MXN, MYR, SAR, INR, CNY, BRL, AED and many more. Whether you're traveling, doing business internationally, or just keeping track of exchange rates, we've got you covered.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Us</h2>
        <p>
          Have questions or suggestions? We'd love to hear from you. Visit our <a href="/contact" className="text-blue-500 hover:underline">contact page</a> to get in touch with us.
        </p>
      </CardContent>
    </Card>
  );
}
