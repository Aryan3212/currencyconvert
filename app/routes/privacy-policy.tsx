import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export default function PrivacyPolicy() {
  return (
    <Card className="w-[98%] max-w-[52rem] mx-auto mt-4">
      <CardHeader>
        <CardTitle className="text-4xl">Privacy Policy</CardTitle>
      </CardHeader>
      <CardContent className="prose dark:prose-invert">
        <h2>1. Information We Collect</h2>
        <p>
          Currency Converter Pro collects minimal information to provide and improve our Service. We do not collect any personally identifiable information unless explicitly provided by you through our contact form.
        </p>

        <h2>2. Usage Data</h2>
        <p>
          We may collect anonymous usage data including:
        </p>
        <ul>
          <li>Browser type and version</li>
          <li>The pages of our Service that you visit</li>
          <li>The time and date of your visit</li>
          <li>The time spent on those pages</li>
        </ul>

        <h2>3. Cookies</h2>
        <p>
          We use essential cookies to ensure the proper functioning of our website. These cookies do not collect any personal information and are strictly necessary for the Service to work correctly.
        </p>

        <h2>4. How We Use Your Information</h2>
        <p>
          Any information we collect is used to:
        </p>
        <ul>
          <li>Provide and maintain our Service</li>
          <li>Improve our Service</li>
          <li>Monitor the usage of our Service</li>
          <li>Detect and address technical issues</li>
        </ul>

        <h2>5. Data Security</h2>
        <p>
          We implement appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your information.
        </p>

        <h2>6. Third-Party Services</h2>
        <p>
          Our Service may contain links to other websites that are not operated by us. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
        </p>

        <h2>7. Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
        </p>

        <h2>8. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us through our <a href="/contact">contact page</a>.
        </p>

        <p className="text-sm mt-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </CardContent>
    </Card>
  );
}
