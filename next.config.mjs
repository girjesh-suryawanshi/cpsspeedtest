import withMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  webpack: (config, { isServer }) => {
    config.experiments = { ...config.experiments, asyncWebAssembly: true };
    return config;
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'placehold.co', pathname: '/**' },
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
      { protocol: 'https', hostname: 'picsum.photos', pathname: '/**' },
    ],
  },

  // ─── Security Headers ────────────────────────────────────────────────────
  async headers() {
    return [
      {
        // Apply to ALL routes
        source: '/(.*)',
        headers: [
          // Prevent site from being embedded in iframes (stops hotlinking & clickjacking)
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          // Prevent MIME-type sniffing
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // XSS filter (legacy browsers)
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          // Control referrer info sent with requests
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // Restrict browser features
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
          // Force HTTPS for 1 year (enable only when on HTTPS/production)
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          // Content Security Policy — allows scripts from self + Google Fonts + Firebase
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://apis.google.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: blob: https:",
              "connect-src 'self' https://firestore.googleapis.com https://firebase.googleapis.com wss://*.firebaseio.com",
              "frame-src 'self'",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "upgrade-insecure-requests",
            ].join('; '),
          },
        ],
      },
      {
        // Block search engines from indexing admin routes
        source: '/admin(.*)',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, nofollow' },
          { key: 'X-Frame-Options', value: 'DENY' },
        ],
      },
    ];
  },
};

const mdxConfig = withMDX({});

export default mdxConfig(nextConfig);

