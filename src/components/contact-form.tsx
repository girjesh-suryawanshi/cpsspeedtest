"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, CheckCircle2 } from "lucide-react";
import { submitContactForm } from "@/app/contact/actions";
import { useToast } from "@/components/ui/use-toast";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" size="lg" disabled={pending} className="w-full sm:w-auto gap-2 shadow-md shadow-primary/20">
      {pending ? (
        <span className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></span>
      ) : (
        <Mail className="w-4 h-4" />
      )}
      {pending ? "Sending..." : "Send Message"}
    </Button>
  );
}

export function ContactForm() {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  async function action(formData: FormData) {
    const result = await submitContactForm(formData);

    if (result.error) {
      toast({
        title: "Error",
        description: result.error,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We will get back to you soon.",
        className: "bg-green-600 text-white border-green-700",
      });
      formRef.current?.reset();
    }
  }

  return (
    <form ref={formRef} action={action} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="contact-name">Name <span className="text-destructive">*</span></Label>
          <Input id="contact-name" name="name" placeholder="Your Name" required disabled={false} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-email">Email <span className="text-destructive">*</span></Label>
          <Input id="contact-email" name="email" type="email" placeholder="your@email.com" required disabled={false} />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-subject">Subject <span className="text-destructive">*</span></Label>
        <Input id="contact-subject" name="subject" placeholder="What is your message about?" required disabled={false} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-message">Message <span className="text-destructive">*</span></Label>
        <Textarea
          id="contact-message"
          name="message"
          placeholder="Write your message here..."
          className="min-h-[140px] resize-none"
          required
          disabled={false}
        />
      </div>
      {/* Honeypot for spam prevention */}
      <input type="text" name="_gotcha" className="hidden" />
      <SubmitButton />
      <p className="text-xs text-muted-foreground">
        By submitting this form, you agree to our{" "}
        <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
      </p>
    </form>
  );
}
