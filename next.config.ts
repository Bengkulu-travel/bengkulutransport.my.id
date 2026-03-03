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
      // Artikel 1: Travel Bengkulu ke Pulau Jawa
      {
        source: '/2026/02/travel-bengkulu-ke-pulau-jawa-sewa-mobil-driver.html',
        destination: '/artikel/travel-bengkulu-ke-pulau-jawa-sewa-mobil-driver',
        permanent: true,
      },
      // Artikel 2: Rental Mobil Curup - redirect dari slug lama ke yang benar
      {
        source: '/artikel/rental-mobil-curup-murah-lepas-kunci',
        destination: '/artikel/rental-mobil-curup-murah',
        permanent: true,
      },
      // Artikel 3: Travel Palembang Bengkulu
      {
        source: '/2026/02/travel-palembang-bengkulu.html',
        destination: '/artikel/travel-palembang-bengkulu',
        permanent: true,
      },
      // Artikel 4: Jadwal Travel Bengkulu Palembang
      {
        source: '/2026/02/jadwal-travel-bengkulu-palembang-setiap-hari.html',
        destination: '/artikel/jadwal-travel-bengkulu-palembang',
        permanent: true,
      },
      // Artikel 5: Tempat Wisata Bengkulu
      {
        source: '/2026/02/tempat-wisata-di-bengkulu-dan-jaraknya.html',
        destination: '/artikel/tempat-wisata-bengkulu-dari-bandara',
        permanent: true,
      },
      // Artikel 6: Wisata Pantai Panjang
      {
        source: '/2026/02/wisata-pantai-panjang-bengkulu-lokasi.html',
        destination: '/artikel/wisata-pantai-panjang-bengkulu',
        permanent: true,
      },
      // Artikel 7: Travel Bandara ke Lebong
      {
        source: '/2026/02/travel-bandara-fatmawati-bengkulu-ke.html',
        destination: '/artikel/travel-bandara-fatmawati-ke-lebong',
        permanent: true,
      },
      // Artikel 8: Travel Bengkulu Jambi
      {
        source: '/2026/02/travel-bengkulu-jambi-antar-jemput-door.html',
        destination: '/artikel/travel-bengkulu-jambi-door-to-door',
        permanent: true,
      },
      // Artikel 9: Antar Jemput Bandara Bengkulu Curup
      {
        source: '/2026/02/antar-jemput-bandara-bengkulu-curup.html',
        destination: '/artikel/antar-jemput-bandara-bengkulu-curup',
        permanent: true,
      },
      // Artikel 10: Travel Bengkulu Palembang Door to Door
      {
        source: '/2026/02/travel-bengkulu-palembang-antar-jemput.html',
        destination: '/artikel/travel-bengkulu-palembang-door-to-door',
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
