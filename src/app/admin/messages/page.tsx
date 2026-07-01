import { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";

export const metadata: Metadata = {
  title: "Contact Messages | Admin",
  description: "View messages submitted through the contact form.",
};

// Next.js dynamic rendering
export const dynamic = 'force-dynamic';

export default async function AdminMessagesPage() {
  const messages = await prisma.contactMessage.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Contact Messages</h1>
        <p className="text-muted-foreground mt-2">
          View all inquiries and feedback submitted through the contact form.
        </p>
      </div>

      <div className="grid gap-4">
        {messages.length === 0 ? (
          <Card>
            <CardContent className="pt-6 text-center text-muted-foreground">
              No messages found. When users submit the contact form, they will appear here.
            </CardContent>
          </Card>
        ) : (
          messages.map((msg) => (
            <Card key={msg.id} className={msg.isRead ? "opacity-75 bg-muted/50" : ""}>
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <CardTitle className="text-lg">{msg.subject}</CardTitle>
                    <CardDescription className="mt-1">
                      From: <span className="font-medium text-foreground">{msg.name}</span> ({msg.email})
                    </CardDescription>
                  </div>
                  <div className="text-right shrink-0">
                    <Badge variant={msg.isRead ? "secondary" : "default"}>
                      {msg.isRead ? "Read" : "New"}
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-2">
                      {formatDistanceToNow(new Date(msg.createdAt), { addSuffix: true })}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="p-4 bg-muted/30 rounded-md text-sm whitespace-pre-wrap">
                  {msg.message}
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
