import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export default function About() {
  return (
    <Card className="w-[98%] max-w-[52rem] mx-auto mt-4">
      <CardHeader>
        <CardTitle className="text-4xl">About Currency Converter Pro</CardTitle>
      </CardHeader>
      <CardContent className="prose dark:prose-invert">
        <p>
          Currency Converter Pro is a fast, reliable, and easy-to-use currency conversion tool that helps you convert between major world currencies in real-time.
        </p>

        <h2>Our Features</h2>
        <ul>
          <li>Real-time exchange rates updated regularly</li>
          <li>Support for major world currencies</li>
          <li>Simple and intuitive interface</li>
          <li>Quick access to popular currency pairs</li>
          <li>Mobile-friendly design</li>
        </ul>

        <h2>How It Works</h2>
        <p>
          We fetch the latest exchange rates from reliable financial data providers to ensure accuracy in our conversions. Our rates are updated multiple times per day to reflect the most current market values.
        </p>

        <h2>Popular Currencies</h2>
        <p>
          We support all major world currencies including EUR, USD, GBP, CAD, TRY, THB, MXN, MYR, SAR, INR, CNY, BRL, AED and many more. Whether you're traveling, doing business internationally, or just keeping track of exchange rates, we've got you covered.
        </p>

        <h2>Contact Us</h2>
        <p>
          Have questions or suggestions? We'd love to hear from you. Visit our <a href="/contact">contact page</a> to get in touch with us.
        </p>
      </CardContent>
    </Card>
  );
}
