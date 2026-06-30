"use client";

import React, { useState } from "react";
import { SidebarMenu } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

export function CollapsibleMenu({ children, maxItems = 3 }: { children: React.ReactNode, maxItems?: number }) {
  const [expanded, setExpanded] = useState(false);
  const items = React.Children.toArray(children);
  const visibleItems = expanded ? items : items.slice(0, maxItems);
  const hasMore = items.length > maxItems;

  return (
    <SidebarMenu>
      {visibleItems}
      {hasMore && (
        <li>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setExpanded(!expanded)} 
            className="w-full text-xs mt-1 justify-start px-2 h-8 text-muted-foreground hover:text-foreground font-medium"
          >
            {expanded ? (
              <><ChevronUp className="w-3 h-3 mr-2" /> Show Less</>
            ) : (
              <><ChevronDown className="w-3 h-3 mr-2" /> Show {items.length - maxItems} More</>
            )}
          </Button>
        </li>
      )}
    </SidebarMenu>
  );
}
