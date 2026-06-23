"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const CONSENT_KEY = "cpsspeedtest_cookie_consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(CONSENT_KEY);
      if (!stored) {
        // Small delay so the banner doesn't flash immediately on load
        const t = setTimeout(() => setVisible(true), 1200);
        return () => clearTimeout(t);
      }
    } catch {
      // localStorage unavailable (e.g., privacy mode) — hide banner
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(CONSENT_KEY, "accepted");
    } catch {}
    setVisible(false);
  };

  const decline = () => {
    try {
      localStorage.setItem(CONSENT_KEY, "declined");
    } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50",
        "border-t border-border/40 bg-background/95 backdrop-blur-md shadow-2xl",
        "animate-in slide-in-from-bottom-4 duration-500"
      )}
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
    >
      <div className="container mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 py-4 px-4 sm:px-6">
        <Cookie className="h-6 w-6 text-primary shrink-0 mt-0.5 sm:mt-0" />
        <div className="flex-1 min-w-0">
          <p className="text-sm text-foreground font-medium mb-0.5">
            We use cookies to improve your experience
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            We and our partners (including Google AdSense) use cookies to
            personalise content and ads, to provide social media features, and
            to analyse our traffic. By clicking &ldquo;Accept All&rdquo; you
            consent to our use of cookies.{" "}
            <Link
              href="/privacy"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              Learn more
            </Link>
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <Button
            variant="outline"
            size="sm"
            onClick={decline}
            className="text-xs h-8"
          >
            Reject Non-Essential
          </Button>
          <Button
            size="sm"
            onClick={accept}
            className="text-xs h-8 bg-primary hover:bg-primary/90"
          >
            Accept All
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={decline}
            className="h-8 w-8 text-muted-foreground hover:text-foreground"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
