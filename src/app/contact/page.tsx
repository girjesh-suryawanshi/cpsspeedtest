import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageCircle, Clock } from "lucide-react";
import { Metadata } from "next";

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
              <form
                action="https://formspree.io/f/YOUR_FORM_ID"
                method="POST"
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Name <span className="text-destructive">*</span></Label>
                    <Input id="contact-name" name="name" placeholder="Your Name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email <span className="text-destructive">*</span></Label>
                    <Input id="contact-email" name="email" type="email" placeholder="your@email.com" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-subject">Subject <span className="text-destructive">*</span></Label>
                  <Input id="contact-subject" name="subject" placeholder="What is your message about?" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-message">Message <span className="text-destructive">*</span></Label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    placeholder="Write your message here..."
                    className="min-h-[140px] resize-none"
                    required
                  />
                </div>
                {/* Honeypot for spam prevention */}
                <input type="text" name="_gotcha" className="hidden" />
                <Button type="submit" size="lg" className="w-full sm:w-auto gap-2 shadow-md shadow-primary/20">
                  <Mail className="w-4 h-4" />
                  Send Message
                </Button>
                <p className="text-xs text-muted-foreground">
                  By submitting this form, you agree to our{" "}
                  <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
