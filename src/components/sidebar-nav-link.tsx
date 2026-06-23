"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarMenuButton, useSidebar } from "@/components/ui/sidebar";
import { ReactNode } from "react";

interface SidebarNavLinkProps {
  href: string;
  children: ReactNode;
}

export function SidebarNavLink({ href, children }: SidebarNavLinkProps) {
  const pathname = usePathname();
  const { setOpenMobile, isMobile } = useSidebar();
  
  // Determine if this link is currently active
  const isActive = pathname === href || (href !== '/' && pathname?.startsWith(href));

  // Auto-close mobile drawer when navigating
  const handleClick = () => {
    if (isMobile) {
      setOpenMobile(false);
    }
  };

  return (
    <SidebarMenuButton asChild isActive={isActive} onClick={handleClick}>
      <Link href={href}>
        {children}
      </Link>
    </SidebarMenuButton>
  );
}
