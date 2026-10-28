import Link from "next/link";
import { Gamepad2, Home, Search, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="w-full max-w-2xl mx-auto py-16 px-4 text-center space-y-8">
      {/* Animated 404 */}
      <div className="space-y-4">
        <div className="text-8xl sm:text-9xl font-black text-primary/20 select-none animate-pulse">
          404
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
          Page Not Found
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg max-w-md mx-auto leading-relaxed">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been
          moved. Let&apos;s get you back on track.
        </p>
      </div>

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <Button asChild size="lg" className="gap-2">
          <Link href="/">
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="gap-2">
          <Link href="/games">
            <Gamepad2 className="w-4 h-4" />
            Browse Games
          </Link>
        </Button>
      </div>

      {/* Quick links */}
      <div className="pt-6 border-t border-border/20">
        <p className="text-sm text-muted-foreground mb-4 font-medium">
          Popular destinations:
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {[
            { label: "CPS Test", href: "/cps-test" },
            { label: "Typing Test", href: "/typing-test" },
            { label: "Aim Trainer", href: "/aim-trainer" },
            { label: "Reaction Time", href: "/reaction-time-test" },
            { label: "2048", href: "/2048" },
            { label: "Leaderboard", href: "/leaderboard" },
            { label: "Blog & Guides", href: "/blog" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 rounded-full text-xs font-medium border border-border/30 bg-card/50 hover:bg-primary/10 hover:border-primary/40 hover:text-primary transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
