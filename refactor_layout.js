const fs = require('fs');
let content = fs.readFileSync('src/app/layout.tsx', 'utf8');

content = content.replace(/<SidebarMenuButton asChild>\s*<Link href="([^"]+)">([\s\S]*?)<\/Link>\s*<\/SidebarMenuButton>/g, '<SidebarNavLink href="$1">$2</SidebarNavLink>');

content = content.replace(
  /import { Sidebar, SidebarProvider, SidebarInset, SidebarTrigger, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarGroup, SidebarGroupLabel, SidebarContent, SidebarSeparator } from '@\/components\/ui\/sidebar';/,
  "import { Sidebar, SidebarProvider, SidebarInset, SidebarTrigger, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarGroup, SidebarGroupLabel, SidebarContent, SidebarSeparator } from '@/components/ui/sidebar';\nimport { SidebarNavLink } from '@/components/sidebar-nav-link';"
);

fs.writeFileSync('src/app/layout.tsx', content);
