"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Lock, Mail, Eye, EyeOff, Zap } from "lucide-react";
import { loginAdmin } from "./actions";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    startTransition(async () => {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      
      const result = await loginAdmin(formData);
      
      if (result.success) {
        router.push("/admin/blog/new");
        router.refresh();
      } else {
        setError(result.error || "Authentication failed");
      }
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] p-4 font-inter">
      {/* Header section outside the card */}
      <div className="flex flex-col items-center mb-8 text-white">
        <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-lg shadow-lg mb-4">
          <Zap className="w-7 h-7 text-primary-foreground" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Admin Login</h1>
        <p className="text-gray-400 text-sm">Sign in to access your dashboard</p>
      </div>

      {/* Login Card */}
      <Card className="w-full max-w-md shadow-2xl border-0 bg-white dark:bg-card rounded-2xl overflow-hidden">
        <CardContent className="p-8">
          <form onSubmit={handleLogin} className="space-y-6">
            
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-600 dark:text-gray-300">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-4 w-4 text-gray-400" />
                </div>
                <Input 
                  type="email" 
                  placeholder="admin@cpsspeedtest.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-10 bg-gray-50/50 dark:bg-muted/50 border-gray-200 dark:border-border h-11 text-sm text-gray-900 dark:text-gray-100"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-600 dark:text-gray-300">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-4 w-4 text-gray-400" />
                </div>
                <Input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Enter your password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="pl-10 pr-10 bg-gray-50/50 dark:bg-muted/50 border-gray-200 dark:border-border h-11 text-sm text-gray-900 dark:text-gray-100"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {error && (
              <p className="text-sm text-destructive text-center font-medium bg-destructive/10 py-2 rounded-md">{error}</p>
            )}

            <Button type="submit" className="w-full h-11 font-semibold tracking-wide uppercase text-sm" disabled={isPending}>
              {isPending ? "Signing In..." : "Sign In"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
