
import { Card, CardContent } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how CpsSpeedTest collects, uses, and protects your data. We are committed to protecting your privacy and ensuring a safe online experience.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full">
      <header className="w-full max-w-4xl mx-auto mb-8">
        <h1 className="text-4xl font-bold text-foreground">
          Privacy Policy
        </h1>
        <p className="text-muted-foreground mt-2 text-lg">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </header>
      <Card className="w-full max-w-4xl">
        <CardContent className="p-6 space-y-4 prose prose-lg dark:prose-invert max-w-none">
            <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
            <p>We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.</p>

            <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
            <h3 className="text-xl font-semibold">Locally Stored Data</h3>
            <p>Most of our games store data, such as high scores and game progress, directly on your device using your browser's local storage. This data is not transmitted to our servers and is private to you.</p>

            <h3 className="text-xl font-semibold">Leaderboard Submissions</h3>
            <p>For certain games, we offer a public leaderboard. If you choose to submit your score, we will collect the following information:</p>
            <ul>
                <li><strong>Name:</strong> The display name you provide.</li>
                <li><strong>Score:</strong> The score you achieved in the game.</li>
                <li><strong>Game Played:</strong> The specific game you played.</li>
            </ul>
            <p>This information is stored in our Firebase Firestore database and is publicly visible on the leaderboard. By submitting your score, you consent to this information being displayed publicly.</p>
            
            <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
            <p>The information we collect for the leaderboard is used solely for the purpose of displaying public rankings for the games. We do not use this information for marketing or share it with third parties, other than as it is publicly displayed on the website.</p>

            <h2 className="text-2xl font-semibold">3. Third-Party Services and Advertising</h2>
            <p>We use third-party advertising companies, such as Google AdSense, to serve ads when you visit our website. These companies may use information about your visits to this and other websites in order to provide advertisements about goods and services of interest to you.</p>
            <ul>
                <li>Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to our website or other websites.</li>
                <li>Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet.</li>
                <li>You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Ads Settings</a>. Alternatively, you can opt out of a third-party vendor's use of cookies for personalized advertising by visiting <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">www.aboutads.info/choices</a>.</li>
            </ul>

            <h2 className="text-2xl font-semibold">4. Children's Privacy</h2>
            <p>Our website is not intended for children under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal data for the leaderboard, please contact us. If we become aware that we have collected personal data from anyone under the age of 13 without verification of parental consent, we take steps to remove that information from our servers.</p>
            
            <h2 className="text-2xl font-semibold">5. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

            <h2 className="text-2xl font-semibold">6. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, you can contact us through our <a href="/contact">contact page</a>.</p>
        </CardContent>
      </Card>
    </div>
  );
}
