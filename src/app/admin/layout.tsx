import { ReactNode } from "react";
import Link from "next/link";
import { Zap, LayoutDashboard, FileText, Settings, LogOut, Tags } from "lucide-react";
import { headers } from "next/headers";

export default function AdminLayout({ children }: { children: ReactNode }) {
  const pathname = headers().get("x-pathname") || "";

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen bg-background">
      {/* Admin Sidebar */}
      <aside className="w-64 border-r border-border/20 bg-card/50 backdrop-blur-md hidden md:flex flex-col">
        <div className="p-6 border-b border-border/10">
          <Link href="/admin" className="flex items-center gap-2 font-bold text-xl">
            <Zap className="h-6 w-6 text-primary" />
            Admin Panel
          </Link>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link href="/admin" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-primary/10 hover:text-primary transition-colors text-muted-foreground hover:font-medium">
            <LayoutDashboard className="h-5 w-5" /> Dashboard
          </Link>
          <Link href="/admin/blog" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-primary/10 hover:text-primary transition-colors text-muted-foreground hover:font-medium">
            <FileText className="h-5 w-5" /> Blog Posts
          </Link>
          <Link href="/admin/blog/categories" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-primary/10 hover:text-primary transition-colors text-muted-foreground text-sm hover:font-medium">
            <Tags className="h-4 w-4" /> Categories
          </Link>
        </nav>
        <div className="p-4 border-t border-border/10">
          <Link href="/" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-destructive/10 hover:text-destructive transition-colors text-muted-foreground">
            <LogOut className="h-5 w-5" /> Exit to Site
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b border-border/20 bg-background/80 backdrop-blur-sm flex items-center px-6 md:px-8">
          <h1 className="font-semibold text-lg">Blog Management</h1>
        </header>
        <div className="flex-1 p-6 md:p-8 overflow-y-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
