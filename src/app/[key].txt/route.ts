import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { key: string } }) {
  const envKey = process.env.INDEXNOW_KEY;
  
  if (envKey && params.key === envKey) {
    return new NextResponse(envKey, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }

  return new NextResponse('Not Found', { status: 404 });
}
