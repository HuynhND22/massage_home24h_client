// next.config.js
const nextConfig = {
    images: {
      domains: process.env.NEXT_PUBLIC_IMAGE_DOMAIN
        ? [process.env.NEXT_PUBLIC_IMAGE_DOMAIN]
        : [],
    },
  };
  
  module.exports = nextConfig;
  