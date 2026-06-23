
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Sidebar, SidebarProvider, SidebarInset, SidebarTrigger, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarGroup, SidebarGroupLabel, SidebarContent, SidebarSeparator } from '@/components/ui/sidebar';
import Link from 'next/link';
import { Zap, HomeIcon, Wind, Target, Keyboard, Type, Timer, Disc, Crosshair, BrainCircuit, MousePointerClick, Puzzle, Brain, Eye, MessageSquare, Paintbrush, FileText, Grip, GraduationCap, Blocks, Languages, Share2, Rss, Trophy, Gamepad2, Mouse, Palette } from 'lucide-react';
import { FirebaseProvider } from '@/components/firebase-provider';
import { Button } from '@/components/ui/button';
import { CookieConsent } from '@/components/cookie-consent';

const siteUrl = 'https://www.cpsspeedtest.com'; // Replace with your actual domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'CpsSpeedTest - The Ultimate Skill Gaming Hub',
    template: '%s | CpsSpeedTest',
  },
  description: 'Test and improve your clicking speed, reaction time, typing skills, and cognitive abilities with our collection of fun and challenging browser-based games.',
  keywords: ['cps test', 'click speed test', 'reaction time', 'typing test', 'aim trainer', 'memory game', 'skill games', 'online games'],
  openGraph: {
    title: {
        default: 'CpsSpeedTest - The Ultimate Skill Gaming Hub',
        template: '%s | CpsSpeedTest',
    },
    description: 'Challenge yourself with a variety of skill-based games designed to test your limits and improve your performance.',
    url: siteUrl,
    siteName: 'CpsSpeedTest',
    images: [
      {
        url: `${siteUrl}/og-image.png`, // You should create this image
        width: 1200,
        height: 630,
        alt: 'CpsSpeedTest - Fun Skill-Based Games',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: {
        default: 'CpsSpeedTest - The Ultimate Skill Gaming Hub',
        template: '%s | CpsSpeedTest',
    },
    description: 'Test your clicking speed, reaction time, and more with our fun browser games.',
    images: [`${siteUrl}/og-image.png`], // You should create this image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

const CupcakeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18.5 9.5a2.5 2.5 0 0 0-4-3.26A2.5 2.5 0 0 0 9.5 9.5" />
    <path d="M12 15a6 6 0 0 0-6 6h12a6 6 0 0 0-6-6Z" />
    <path d="M12 9.5V15" />
    <path d="M12 21v-3" />
    <path d="m9 18 1.5-1.5" />
    <path d="m15 18-1.5-1.5" />
  </svg>
);

const ButterflyIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M14 10h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4"/><path d="M10 10H6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4"/><path d="m5 11 1-1-1-1"/><path d="m19 11-1-1 1-1"/><path d="m12 10 2-3h-4l2 3z"/><path d="m12 14-2 3h4l-2-3z"/></svg>
)

const DragClickIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 5V2"/><path d="M12 10v3"/><path d="M12 18v-3"/><path d="m15 8-3-3-3 3"/><path d="M9 16.5 12 22l3-5.5"/><rect width="18" height="20" x="3" y="2" rx="4"/><path d="M12 10a2.5 2.5 0 0 1-2.5-2.5V5h5v2.5A2.5 2.5 0 0 1 12 10Z"/></svg>
);


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700;800;900&display=swap" rel="stylesheet" />
        {/* Google AdSense — uncomment and replace ca-pub-XXXXXXXXXXXXXXXX with your Publisher ID after approval */}
        {/* <meta name="google-adsense-account" content="ca-pub-XXXXXXXXXXXXXXXX" /> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": siteUrl,
            "name": "CpsSpeedTest",
            "description": "Test and improve your clicking speed, reaction time, typing skills, and cognitive abilities with 30+ free browser-based skill games."
          }) }}
        />
      </head>
      <body className="antialiased flex flex-col">
        <FirebaseProvider>
          <SidebarProvider>
            <Sidebar>
              <SidebarHeader>
                <Link href="/" className="flex items-center gap-3 p-2 hover:opacity-90 transition-opacity">
                  <Zap className="h-8 w-8 text-primary"/>
                  <span className="text-2xl font-bold text-foreground">
                    CpsSpeedTest
                  </span>
                </Link>
              </SidebarHeader>
              <SidebarContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href="/">
                        <HomeIcon />
                        Home
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href="/leaderboard">
                        <Trophy />
                        Leaderboard
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                   <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href="/games">
                        <Gamepad2 />
                        Games
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
                
                <SidebarSeparator />

                <SidebarGroup>
                  <SidebarGroupLabel className="flex items-center gap-2"><MousePointerClick /> Clicking Skills</SidebarGroupLabel>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="/cps-test">
                          <Zap />
                          CPS Test
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                     <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="/minecraft-cps-test">
                          <Mouse />
                          Minecraft CPS
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="/jitter-click-test">
                          <Wind />
                          Jitter Click Test
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="/kohi-click-test">
                          <Target />
                          Kohi Click Test
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                     <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="/butterfly-click-test">
                          <ButterflyIcon />
                          Butterfly Click
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                      <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="/drag-click-test">
                          <DragClickIcon />
                          Drag Click Test
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                     <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="/double-click-test">
                          <MousePointerClick />
                          Double Click Test
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="/aim-trainer">
                          <Crosshair />
                          Aim Trainer
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroup>

                <SidebarSeparator />

                <SidebarGroup>
                  <SidebarGroupLabel className="flex items-center gap-2"><Keyboard /> Keyboard Skills</SidebarGroupLabel>
                  <SidebarMenu>
                     <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="/spacebar-clicker">
                          <Keyboard />
                          Spacebar Clicker
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="/stimulation-clicker">
                          <Keyboard />
                          Stimulation Clicker
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="/typing-test">
                          <Type />
                          Typing Test
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                     <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="/typing-test-30s">
                          <Type />
                          Typing Test (30s)
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroup>

                <SidebarSeparator />

                <SidebarGroup>
                  <SidebarGroupLabel className="flex items-center gap-2"><Puzzle /> Strategy & Puzzle</SidebarGroupLabel>
                  <SidebarMenu>
                     <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="/coreball-game">
                          <Disc />
                          Coreball Game
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="/cupcake-2048">
                          <CupcakeIcon />
                          Cupcake 2048
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="/jigsaw-puzzle">
                          <Grip />
                          Jigsaw Puzzle
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="/sliding-puzzle">
                          <Puzzle />
                          Sliding Puzzle
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroup>

                <SidebarSeparator />

                <SidebarGroup>
                  <SidebarGroupLabel className="flex items-center gap-2"><Brain /> Memory & Reflex</SidebarGroupLabel>
                  <SidebarMenu>
                     <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="/reaction-time-test">
                          <Timer />
                          Reaction Time Test
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="/memory-game">
                          <BrainCircuit />
                          Memory Game
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="/number-memory-test">
                          <BrainCircuit />
                          Number Memory
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="/sequence-memory-test">
                          <BrainCircuit />
                          Sequence Memory
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                     <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="/chimp-test">
                          <Brain />
                          Chimp Test
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="/verbal-memory-test">
                          <MessageSquare />
                          Verbal Memory
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                     <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="/visual-memory-test">
                          <Eye />
                          Visual Memory
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                     <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="/word-memory-test">
                          <FileText />
                          Word Memory
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="/stroop-test">
                          <Palette />
                          Stroop Test
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroup>

                <SidebarSeparator />
                
                 <SidebarGroup>
                  <SidebarGroupLabel className="flex items-center gap-2"><GraduationCap /> Educational</SidebarGroupLabel>
                   <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                          <Link href="/math-quiz">
                            <GraduationCap />
                            Math Quiz
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                   </SidebarMenu>
                 </SidebarGroup>

                 <SidebarSeparator />

                 <SidebarGroup>
                  <SidebarGroupLabel className="flex items-center gap-2"><Languages /> Language</SidebarGroupLabel>
                   <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                          <Link href="/word-scramble">
                            <Languages />
                            Word Scramble
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                   </SidebarMenu>
                 </SidebarGroup>

                 <SidebarSeparator />

                 <SidebarGroup>
                  <SidebarGroupLabel className="flex items-center gap-2"><Paintbrush /> Creative</SidebarGroupLabel>
                   <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                          <Link href="/drawing-pad">
                            <Paintbrush />
                            Drawing Pad
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                       <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                          <Link href="/block-builder">
                            <Blocks />
                            Block Builder
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                       <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                          <Link href="/connect-the-dots">
                            <Share2 />
                            Connect the Dots
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                   </SidebarMenu>
                 </SidebarGroup>
              </SidebarContent>
            </Sidebar>
            <SidebarInset className="flex-1">
              <header className="sticky top-0 z-10 flex h-14 items-center justify-between border-b bg-background/80 backdrop-blur-sm px-4">
                  <div className="flex items-center gap-4">
                    <SidebarTrigger className="md:hidden" />
                    <Link href="/" className="flex items-center gap-2 font-bold text-lg">
                      <Zap className="h-6 w-6 text-primary" />
                      <span className="hidden sm:inline">CpsSpeedTest</span>
                    </Link>
                  </div>
                  <nav className="hidden md:flex items-center gap-2">
                      <Button variant="ghost" asChild><Link href="/">Home</Link></Button>
                      <Button variant="ghost" asChild><Link href="/games">Games</Link></Button>
                      <Button variant="ghost" asChild><Link href="/leaderboard">Leaderboard</Link></Button>
                      <Button variant="ghost" asChild><Link href="/blog">Blog</Link></Button>
                  </nav>
              </header>
              <main className="flex-1 p-4 sm:p-6 flex flex-col items-center">
                {children}
              </main>
              <footer className="mt-auto border-t bg-background/50">
                <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
                  <p className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} CpsSpeedTest. All rights reserved.
                  </p>
                  <nav className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
                    <Link href="/about" className="text-sm hover:underline">
                      About
                    </Link>
                     <Link href="/blog" className="text-sm hover:underline">
                      Blog
                    </Link>
                     <Link href="/contact" className="text-sm hover:underline">
                      Contact
                    </Link>
                    <Link href="/privacy" className="text-sm hover:underline">
                      Privacy
                    </Link>
                     <Link href="/terms" className="text-sm hover:underline">
                      Terms
                    </Link>
                     <Link href="/disclaimer" className="text-sm hover:underline">
                      Disclaimer
                    </Link>
                  </nav>
                </div>
              </footer>
            </SidebarInset>
          </SidebarProvider>
        </FirebaseProvider>
        <Toaster />
        <CookieConsent />
      </body>
    </html>
  );
}
