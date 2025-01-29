import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export default function Contact() {
  return (
    <Card className="w-[98%] max-w-[52rem] mx-auto mt-4">
      <CardHeader>
        <CardTitle className="text-4xl">Contact Us</CardTitle>
      </CardHeader>
      <CardContent className="prose dark:prose-invert">
        <p>
          We apologize, but our contact form is currently under development. We are working hard to implement a secure and reliable way for you to get in touch with us.
        </p>

        <p>
          Please check back later. We appreciate your patience and understanding.
        </p>
      </CardContent>
    </Card>
  );
}
