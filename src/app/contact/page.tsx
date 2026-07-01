import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageCircle, Clock } from "lucide-react";
import { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the CpsSpeedTest team. We welcome feedback, bug reports, partnership inquiries, and any questions about our games.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <header className="mb-10 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">
          Contact Us
        </h1>
        <p className="text-muted-foreground mt-3 text-lg">
          We&apos;d love to hear from you. Reach out with feedback, questions, or ideas!
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Contact info sidebar */}
        <div className="flex flex-col gap-4">
          <Card className="bg-card/50 border-primary/20 p-5">
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <h3 className="font-semibold text-sm mb-1">Email Us</h3>
                <a
                  href="mailto:contact@cpsspeedtest.com"
                  className="text-sm text-primary hover:underline break-all"
                >
                  contact@cpsspeedtest.com
                </a>
              </div>
            </div>
          </Card>
          <Card className="bg-card/50 border-primary/20 p-5">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <h3 className="font-semibold text-sm mb-1">Response Time</h3>
                <p className="text-sm text-muted-foreground">We typically respond within 24–48 hours.</p>
              </div>
            </div>
          </Card>
          <Card className="bg-card/50 border-primary/20 p-5">
            <div className="flex items-start gap-3">
              <MessageCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <h3 className="font-semibold text-sm mb-1">What to Include</h3>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
                  <li>Bug reports with browser details</li>
                  <li>Game suggestions</li>
                  <li>Partnership inquiries</li>
                  <li>General feedback</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* Contact form */}
        <div className="md:col-span-2">
          <Card className="bg-card/50 border-border/20">
            <CardHeader>
              <CardTitle className="text-xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
