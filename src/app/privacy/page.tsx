
import { Card, CardContent } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how CpsSpeedTest collects, uses, and protects your data. Includes our cookie policy, advertising disclosure, and your privacy rights.",
  alternates: {
    canonical: "/privacy",
  },
};

const LAST_UPDATED = "June 23, 2026";

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full">
      <header className="w-full max-w-4xl mx-auto mb-8">
        <h1 className="text-4xl font-bold text-foreground">Privacy Policy</h1>
        <p className="text-muted-foreground mt-2 text-lg">
          Last updated: {LAST_UPDATED}
        </p>
      </header>
      <Card className="w-full max-w-4xl">
        <CardContent className="p-6 sm:p-8 space-y-6 prose prose-lg dark:prose-invert max-w-none">
          <p>
            This Privacy Policy describes how CpsSpeedTest (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, and
            shares information when you visit <strong>https://www.cpsspeedtest.com</strong> (the &quot;Site&quot;). By using
            the Site, you agree to the practices described in this policy.
          </p>

          <h2 className="text-2xl font-semibold">1. Information We Collect</h2>

          <h3 className="text-xl font-semibold">Locally Stored Data</h3>
          <p>
            Most of our games store data — such as high scores, best times, and game progress — directly on your
            device using your browser&apos;s <strong>localStorage</strong>. This data is never transmitted to our servers
            and remains private to you. You can clear this data at any time by clearing your browser&apos;s storage.
          </p>

          <h3 className="text-xl font-semibold">Leaderboard Submissions</h3>
          <p>For games with a public leaderboard, if you choose to submit your score, we collect:</p>
          <ul>
            <li><strong>Display Name:</strong> The name you provide (1–49 characters).</li>
            <li><strong>Score:</strong> Your numerical score in the game.</li>
            <li><strong>Game Identifier:</strong> Which game the score was achieved in.</li>
            <li><strong>Timestamp:</strong> When the score was submitted (server time).</li>
          </ul>
          <p>
            This information is stored in our Firebase Firestore database and is <strong>publicly visible</strong> on the
            leaderboard. Scores cannot be modified or deleted once submitted. By submitting your score, you consent
            to this data being publicly displayed.
          </p>

          <h3 className="text-xl font-semibold">Contact Form Submissions</h3>
          <p>
            If you contact us through our contact form, we collect your name, email address, and the content of
            your message. This information is used solely to respond to your inquiry.
          </p>

          <h3 className="text-xl font-semibold">Automatically Collected Data</h3>
          <p>
            Like most websites, we and our third-party partners may automatically collect certain information when
            you visit the Site, including:
          </p>
          <ul>
            <li>IP address (anonymized where possible)</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Pages visited and time spent</li>
            <li>Referring website</li>
          </ul>

          <h2 className="text-2xl font-semibold">2. Cookies</h2>
          <p>
            We and our advertising partners use cookies and similar tracking technologies. Cookies are small text
            files stored on your device. We use the following types of cookies:
          </p>
          <ul>
            <li>
              <strong>Essential / Functional Cookies:</strong> Required for the Site to function correctly. These
              include cookies that remember your cookie consent preference. They cannot be disabled.
            </li>
            <li>
              <strong>Analytics Cookies:</strong> Help us understand how visitors interact with the Site so we can
              improve it. We may use Google Analytics for this purpose.
            </li>
            <li>
              <strong>Advertising Cookies:</strong> Used by our advertising partners (including Google AdSense) to
              display relevant advertisements based on your interests. These cookies track your browsing across
              websites.
            </li>
          </ul>
          <p>
            You can control cookies through your browser settings or by using our cookie consent banner. Note that
            disabling advertising cookies will still result in ads being shown — they just won&apos;t be personalised.
          </p>

          <h2 className="text-2xl font-semibold">3. Google AdSense &amp; Advertising</h2>
          <p>
            We may use Google AdSense to display advertisements on the Site. Google AdSense is a service provided
            by Google LLC. As a third-party vendor, Google uses cookies (including the DoubleClick cookie) to
            serve ads based on your prior visits to this website and other websites on the Internet.
          </p>
          <ul>
            <li>
              You may opt out of personalized advertising by visiting{" "}
              <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
                Google Ads Settings
              </a>.
            </li>
            <li>
              You can also opt out of third-party vendor advertising cookies via{" "}
              <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">
                www.aboutads.info/choices
              </a>{" "}
              or the{" "}
              <a href="http://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer">
                Network Advertising Initiative
              </a>.
            </li>
          </ul>
          <p>
            For more information on how Google uses data when you use our Site, please visit:{" "}
            <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">
              How Google uses information from sites or apps that use our services
            </a>.
          </p>

          <h2 className="text-2xl font-semibold">4. How We Use Your Information</h2>
          <ul>
            <li>To operate and improve the Site and its games</li>
            <li>To display public leaderboard rankings</li>
            <li>To respond to your inquiries via the contact form</li>
            <li>To serve relevant advertisements (via Google AdSense)</li>
            <li>To understand Site usage and improve user experience</li>
            <li>To comply with legal obligations</li>
          </ul>
          <p>
            We do <strong>not</strong> sell your personal information to third parties.
          </p>

          <h2 className="text-2xl font-semibold">5. Data Retention</h2>
          <p>
            Leaderboard submissions are retained indefinitely as they form part of the public record. Contact form
            submissions are retained for up to 12 months. You may request deletion of your contact data at any time
            by emailing us.
          </p>

          <h2 className="text-2xl font-semibold">6. Your Rights</h2>
          <p>
            Depending on your location, you may have the following rights regarding your personal data:
          </p>
          <ul>
            <li><strong>Right of Access:</strong> Request a copy of the data we hold about you.</li>
            <li><strong>Right to Rectification:</strong> Request correction of inaccurate data.</li>
            <li><strong>Right to Erasure:</strong> Request deletion of your data (where applicable).</li>
            <li><strong>Right to Opt-Out:</strong> Opt out of personalised advertising at any time.</li>
          </ul>
          <p>
            To exercise these rights, please contact us via our{" "}
            <a href="/contact">contact page</a>.
          </p>

          <h2 className="text-2xl font-semibold">7. Children&apos;s Privacy</h2>
          <p>
            Our Site is not directed to children under the age of 13. We do not knowingly collect personal
            information from children under 13. If you believe a child has provided personal information to us,
            please contact us and we will promptly delete it.
          </p>

          <h2 className="text-2xl font-semibold">8. Third-Party Links</h2>
          <p>
            Our Site may contain links to third-party websites. We are not responsible for the privacy practices
            of those websites. We encourage you to review their privacy policies before providing any information.
          </p>

          <h2 className="text-2xl font-semibold">9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an
            updated &quot;Last updated&quot; date. We encourage you to review this policy periodically.
          </p>

          <h2 className="text-2xl font-semibold">10. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us:{" "}
            <a href="/contact">through our contact page</a> or by email at{" "}
            <a href="mailto:contact@cpsspeedtest.com">contact@cpsspeedtest.com</a>.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
