
import { Card, CardContent } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Read the terms and conditions for using CpsSpeedTest. Understand your rights and responsibilities when using our website and services.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <div className="w-full">
      <header className="w-full max-w-4xl mx-auto mb-8">
        <h1 className="text-4xl font-bold text-foreground">
          Terms and Conditions
        </h1>
        <p className="text-muted-foreground mt-2 text-lg">
          Last updated: October 15, 2026
        </p>
      </header>
      <Card className="w-full max-w-4xl">
        <CardContent className="p-6 space-y-4 prose prose-lg dark:prose-invert max-w-none">
            <p>Welcome to CpsSpeedTest! These terms and conditions outline the rules and regulations for the use of CpsSpeedTest's Website.</p>
            <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use CpsSpeedTest if you do not agree to take all of the terms and conditions stated on this page.</p>
            
            <h2 className="text-2xl font-semibold">1. License to Use</h2>
            <p>Unless otherwise stated, CpsSpeedTest and/or its licensors own the intellectual property rights for all material on CpsSpeedTest. All intellectual property rights are reserved. You may access this from CpsSpeedTest for your own personal use subjected to restrictions set in these terms and conditions.</p>
            <p>You must not:</p>
            <ul>
                <li>Republish material from CpsSpeedTest</li>
                <li>Sell, rent or sub-license material from CpsSpeedTest</li>
                <li>Reproduce, duplicate or copy material from CpsSpeedTest</li>
                <li>Redistribute content from CpsSpeedTest</li>
            </ul>

            <h2 className="text-2xl font-semibold">2. User Conduct</h2>
            <p>You agree to use our website for lawful purposes only. You agree not to take any action that might compromise the security of the site, render the site inaccessible to others, or otherwise cause damage to the site or its content.</p>
            <p>When submitting scores to our public leaderboards, you agree not to use any offensive, misleading, or inappropriate names. We reserve the right to remove any submission that we deem to be in violation of this rule without notice.</p>
            
            <h2 className="text-2xl font-semibold">3. Leaderboard and User Submissions</h2>
            <p>Our website allows users to submit scores to public leaderboards. By submitting content, you grant us a non-exclusive, royalty-free, worldwide license to display this content on our website. You are responsible for the content you submit and must ensure it does not violate any laws or third-party rights.</p>

            <h2 className="text-2xl font-semibold">4. Disclaimers and Limitation of Liability</h2>
            <p>The content on our website is provided on an "as is" basis. CpsSpeedTest makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
            <p>In no event shall CpsSpeedTest or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on CpsSpeedTest's website, even if CpsSpeedTest or a CpsSpeedTest authorized representative has been notified orally or in writing of the possibility of such damage.</p>

            <h2 className="text-2xl font-semibold">5. Governing Law</h2>
            <p>These terms and conditions are governed by and construed in accordance with the laws of our jurisdiction and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
            
            <h2 className="text-2xl font-semibold">6. Changes to These Terms</h2>
            <p>We reserve the right to revise these terms and conditions at any time. By using this website, you are expected to review these terms on a regular basis to ensure you understand all terms and conditions governing use of this website.</p>
        </CardContent>
      </Card>
    </div>
  );
}
