import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-pathname', request.nextUrl.pathname);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  // If the user is trying to access an /admin route
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Exempt the login page itself to prevent infinite redirects
    if (request.nextUrl.pathname === '/admin/login') {
      return response;
    }

    // Check for the secure admin session cookie
    const adminSession = request.cookies.get('admin_session');

    if (!adminSession || adminSession.value !== 'authenticated') {
      // Not authenticated, redirect to login page
      const url = request.nextUrl.clone();
      url.pathname = '/admin/login';
      return NextResponse.redirect(url);
    }
  }

  return response;
}

// Only run the middleware on /admin routes
export const config = {
  matcher: ['/admin/:path*'],
};
