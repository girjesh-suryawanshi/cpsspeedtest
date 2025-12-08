
import { Card, CardContent } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Official disclaimer for CpsSpeedTest. Information on website content, external links, and limitation of liability.",
  alternates: {
    canonical: "/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <div className="w-full">
      <header className="w-full max-w-4xl mx-auto mb-8">
        <h1 className="text-4xl font-bold text-foreground">
          Disclaimer
        </h1>
        <p className="text-muted-foreground mt-2 text-lg">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </header>
      <Card className="w-full max-w-4xl">
        <CardContent className="p-6 space-y-4 prose prose-lg dark:prose-invert max-w-none">
            <p>The information provided by CpsSpeedTest ("we," "us," or "our") on this website is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.</p>
            
            <h2 className="text-2xl font-semibold">External Links Disclaimer</h2>
            <p>The site may contain (or you may be sent through the site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.</p>
            <p>We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the site or any website or feature linked in any banner or other advertising. We will not be a party to or in any way be responsible for monitoring any transaction between you and third-party providers of products or services.</p>

            <h2 className="text-2xl font-semibold">Professional Disclaimer</h2>
            <p>The site cannot and does not contain professional advice. The information is provided for general informational and entertainment purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of professional advice. THE USE OR RELIANCE OF ANY INFORMATION CONTAINED ON THIS SITE IS SOLELY AT YOUR OWN RISK.</p>

             <h2 className="text-2xl font-semibold">Gaming and Performance Disclaimer</h2>
            <p>The games and tests on CpsSpeedTest are intended for entertainment and informational purposes. While they can be used as a tool to practice and potentially improve certain skills (like click speed or reaction time), we make no claims or guarantees that using our services will result in improved performance in professional gaming, academic pursuits, or any other real-world activity. Scores are provided for personal comparison and enjoyment only.</p>

            <h2 className="text-2xl font-semibold">Errors and Omissions Disclaimer</h2>
            <p>While we have made every attempt to ensure that the information contained in this site has been obtained from reliable sources, CpsSpeedTest is not responsible for any errors or omissions or for the results obtained from the use of this information.</p>
        </CardContent>
      </Card>
    </div>
  );
}
