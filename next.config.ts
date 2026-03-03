import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  
  // Redirects from old Blogger URLs to new Next.js URLs
  async redirects() {
    return [
      // Rental Mobil Curup - redirect slug lama ke yang benar
      {
        source: '/artikel/rental-mobil-curup-murah-lepas-kunci',
        destination: '/artikel/rental-mobil-curup-murah',
        permanent: true,
      },
      // Halaman About
      {
        source: '/p/tentang-kami.html',
        destination: '/tentang-kami',
        permanent: true,
      },
      // Catch all for old Blogger post URLs
      {
        source: '/:year/:month/:slug.html',
        destination: '/artikel/:slug',
        permanent: true,
      },
      // Catch all for old Blogger pages
      {
        source: '/p/:slug.html',
        destination: '/:slug',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
