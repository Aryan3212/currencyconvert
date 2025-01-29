import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export default function TermsOfService() {
  return (
    <Card className="w-full max-w-2xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
      <CardHeader>
        <CardTitle className="text-4xl font-bold text-gray-800">Terms of Service</CardTitle>
      </CardHeader>
      <CardContent className="prose dark:prose-invert text-gray-700">
        <h2 className="text-2xl font-semibold mt-4">1. Acceptance of Terms</h2>
        <p>
          By accessing and using Currency Converter Pro ("the Service"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.
        </p>

        <h2 className="text-2xl font-semibold mt-4">2. Use of Service</h2>
        <p>
          The Service provides currency conversion calculations based on current exchange rates. While we strive to provide accurate information, we cannot guarantee the accuracy of all conversions and rates.
        </p>

        <h2 className="text-2xl font-semibold mt-4">3. Disclaimer</h2>
        <p>
          The currency conversion rates provided are for informational purposes only. We do not guarantee their accuracy and they should not be relied upon for financial transactions without independent verification.
        </p>

        <h2 className="text-2xl font-semibold mt-4">4. Service Modifications</h2>
        <p>
          We reserve the right to modify or discontinue, temporarily or permanently, the Service with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the Service.
        </p>

        <h2 className="text-2xl font-semibold mt-4">5. User Conduct</h2>
        <p>You agree not to:</p>
        <ul className="list-disc list-inside ml-5">
          <li>Use the Service for any unlawful purpose</li>
          <li>Attempt to gain unauthorized access to the Service</li>
          <li>Interfere with or disrupt the Service or servers</li>
          <li>Collect any user information without authorization</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-4">6. Privacy</h2>
        <p>
          Your use of the Service is also governed by our <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a>. Please review our Privacy Policy to understand our practices.
        </p>

        <h2 className="text-2xl font-semibold mt-4">7. Changes to Terms</h2>
        <p>
          We reserve the right to update these Terms of Service at any time. Continued use of the Service after any changes constitutes acceptance of the new Terms of Service.
        </p>

        <h2 className="text-2xl font-semibold mt-4">8. Contact</h2>
        <p>
          If you have any questions about these Terms of Service, please contact us through our <a href="/contact" className="text-blue-600 hover:underline">contact page</a>.
        </p>

        <p className="text-sm mt-8 text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </CardContent>
    </Card>
  );
}
