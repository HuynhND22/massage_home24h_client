// next.config.js
const envDomains = process.env.NEXT_PUBLIC_IMAGE_DOMAIN
  ? process.env.NEXT_PUBLIC_IMAGE_DOMAIN.split(',').map((d) => d.trim()).filter(Boolean)
  : [];

const nextConfig = {
  images: {
    // Keep explicit domains for backward compatibility
    domains: envDomains,
    // Allow R2 CDN and other remote hosts via patterns
    remotePatterns: [
      { protocol: 'https', hostname: '**.r2.dev' },
      { protocol: 'https', hostname: '**.railway.app' },
      // You can extend with more CDNs if needed
    ],
  },
};

module.exports = nextConfig;