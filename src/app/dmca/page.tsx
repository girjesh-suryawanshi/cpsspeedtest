import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Mail, AlertTriangle, FileText, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "DMCA & Copyright Compliance Policy | CpsSpeedTest",
  description:
    "Review CpsSpeedTest's Digital Millennium Copyright Act (DMCA) policy, copyright notice, takedown request procedure, and designated agent contact details.",
  alternates: {
    canonical: "https://www.cpsspeedtest.com/dmca",
  },
  openGraph: {
    title: "DMCA & Copyright Compliance Policy | CpsSpeedTest",
    description:
      "Review CpsSpeedTest's DMCA copyright notice, infringement notification procedure, and designated agent details.",
    url: "https://www.cpsspeedtest.com/dmca",
  },
};

export default function DmcaPage() {
  return (
    <div className="w-full max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Header */}
      <div className="border-b border-border/20 pb-6 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
          <ShieldCheck className="w-3.5 h-3.5" />
          Intellectual Property & Compliance
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
          DMCA &amp; Copyright Policy
        </h1>
        <p className="text-sm text-muted-foreground">
          Last updated: October 15, 2026
        </p>
      </div>

      {/* Intro */}
      <div className="prose prose-invert max-w-none space-y-6 text-foreground/90 text-sm sm:text-base leading-relaxed">
        <p>
          <strong>CpsSpeedTest</strong> (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects the intellectual property rights of others and expects its users and visitors to do the same. In accordance with the Digital Millennium Copyright Act of 1998 (&ldquo;DMCA&rdquo;), Title 17, United States Code, Section 512, we respond promptly to notices of alleged copyright infringement that comply with the requirements described below.
        </p>
        <p>
          All interactive benchmarks, games, calculation algorithms, and educational guides on CpsSpeedTest are developed in-house or utilized under appropriate open-source licenses. If you believe in good faith that any content hosted on this site infringes upon your copyright, please submit a written notification to our Designated Copyright Agent.
        </p>

        {/* Requirements Box */}
        <div className="bg-card/60 border border-border/30 rounded-2xl p-6 space-y-4 my-6">
          <div className="flex items-center gap-2 text-primary font-bold text-base">
            <FileText className="w-5 h-5" />
            Information Required in a DMCA Notice
          </div>
          <p className="text-sm text-muted-foreground">
            To file a valid infringement notice, please provide our Designated Agent with the following information in writing:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
            <li>
              A physical or electronic signature of the copyright owner or a person authorized to act on their behalf.
            </li>
            <li>
              Identification of the copyrighted work claimed to have been infringed (e.g., URL to original work or detailed description).
            </li>
            <li>
              Identification of the material that is claimed to be infringing on CpsSpeedTest, including the exact URL(s) so we can locate it.
            </li>
            <li>
              Your contact details: full legal name, mailing address, telephone number, and email address.
            </li>
            <li>
              A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.
            </li>
            <li>
              A statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.
            </li>
          </ul>
        </div>

        {/* Designated Agent Contact */}
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 space-y-3">
          <div className="flex items-center gap-2 text-primary font-bold text-base">
            <Mail className="w-5 h-5" />
            Designated Copyright Agent
          </div>
          <p className="text-sm text-muted-foreground">
            Please direct all copyright-related notices and inquiries to:
          </p>
          <div className="text-sm space-y-1 text-foreground">
            <p><strong>CpsSpeedTest Compliance &amp; Legal Desk</strong></p>
            <p>Email: <a href="mailto:contact@cpsspeedtest.com" className="text-primary underline">contact@cpsspeedtest.com</a></p>
            <p>Subject Line: &ldquo;DMCA Copyright Infringement Notice&rdquo;</p>
            <p className="text-xs text-muted-foreground pt-1">Typical review &amp; response time: 24–48 business hours.</p>
          </div>
        </div>

        {/* Counter Notification */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-foreground">
            Counter-Notification Procedure
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            If you believe your content was removed or disabled by mistake or misidentification, you may submit a written counter-notification pursuant to Sections 512(g)(2) and (3) of the DMCA. Upon receipt of a valid counter-notification, we will forward a copy to the original complaining party. If the copyright holder does not file a court action within 10–14 business days, we may restore the removed material at our discretion.
          </p>
        </div>

        {/* Repeat Infringers */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-foreground">
            Repeat Infringers Policy
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            In accordance with the DMCA and applicable digital rights frameworks, CpsSpeedTest maintains a strict policy that provides for the termination, in appropriate circumstances, of user accounts, leaderboard submissions, or community privileges of repeat infringers.
          </p>
        </div>

        {/* Disclaimer Notice */}
        <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200">
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <p>
            Please note that under Section 512(f) of the DMCA, any person who knowingly materially misrepresents that material or activity is infringing may be subject to civil liability and damages, including costs and attorney fees.
          </p>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="pt-6 border-t border-border/20 flex flex-wrap gap-4 text-xs text-muted-foreground">
        <Link href="/privacy" className="hover:text-primary transition-colors underline">
          Privacy Policy
        </Link>
        <span>•</span>
        <Link href="/terms" className="hover:text-primary transition-colors underline">
          Terms of Service
        </Link>
        <span>•</span>
        <Link href="/disclaimer" className="hover:text-primary transition-colors underline">
          Disclaimer
        </Link>
        <span>•</span>
        <Link href="/contact" className="hover:text-primary transition-colors underline">
          Contact Us
        </Link>
      </div>
    </div>
  );
}
