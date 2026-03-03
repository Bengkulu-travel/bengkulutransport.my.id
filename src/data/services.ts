export interface Service {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  features: string[];
  price: string;
}

export const services: Service[] = [
  {
    id: "travel-bandara",
    title: "Antar Jemput Bandara",
    description: "Layanan antar jemput ke/dari Bandara Fatmawati Soekarno dengan armada nyaman dan terpercaya.",
    fullDescription: "Layanan antar jemput bandara profesional ke dan dari Bandara Fatmawati Soekarno Bengkulu. Kami menyediakan layanan door-to-door dengan armada yang nyaman dan pengemudi berpengalaman. Tersedia layanan 24 jam untuk kenyamanan Anda.",
    image: "/images/services/travel-van.png",
    features: [
      "Layanan 24 jam",
      "Door-to-door service",
      "Armada AC dingin",
      "Driver profesional",
      "Free waiting time 30 menit",
      "Bantuan bagasi"
    ],
    price: "Mulai Rp 150.000"
  },
  {
    id: "travel-harian",
    title: "Travel Harian",
    description: "Layanan travel harian ke berbagai destinasi wisata di Bengkulu dan sekitarnya.",
    fullDescription: "Jelajahi keindahan Bengkulu dengan layanan travel harian kami. Kunjungi destinasi wisata populer seperti Pantai Panjang, Fort Marlborough, Danau Dendam Tak Sudah, dan tempat wisata lainnya dengan nyaman dan aman.",
    image: "/images/services/travel-van.png",
    features: [
      "Destinasi wisata lengkap",
      "Paket wisata terintegrasi",
      "Pemandu wisata berpengalaman",
      "Include makan siang",
      "Tiket masuk wisata",
      "Dokumentasi foto"
    ],
    price: "Mulai Rp 350.000/orang"
  },
  {
    id: "rental-mobil",
    title: "Rental Mobil",
    description: "Sewa mobil dengan atau tanpa sopir untuk kebutuhan pribadi maupun bisnis Anda.",
    fullDescription: "Layanan rental mobil untuk berbagai kebutuhan Anda. Tersedia berbagai pilihan kendaraan dari city car hingga minibus dengan kondisi prima. Pilih dengan atau tanpa sopir sesuai kebutuhan Anda.",
    image: "/images/services/private-car.png",
    features: [
      "Berbagai pilihan kendaraan",
      "Dengan/tanpa sopir",
      "Asuransi lengkap",
      "Kondisi kendaraan prima",
      "Harga kompetitif",
      "Antar jemput kendaraan"
    ],
    price: "Mulai Rp 300.000/hari"
  },
  {
    id: "wisata-grup",
    title: "Paket Wisata Grup",
    description: "Paket wisata grup untuk rombongan dengan harga terjangkau dan fasilitas lengkap.",
    fullDescription: "Layanan paket wisata grup untuk rombongan keluarga, kantor, atau komunitas. Kami menyediakan paket wisata yang dapat disesuaikan dengan kebutuhan dan budget Anda dengan fasilitas lengkap dan harga terjangkau.",
    image: "/images/services/travel-van.png",
    features: [
      "Harga grup terjangkau",
      "Paket custom sesuai kebutuhan",
      "Fasilitas lengkap",
      "Guide berpengalaman",
      "Akomodasi hotel",
      "Transportasi PP"
    ],
    price: "Mulai Rp 500.000/orang"
  },
  {
    id: "travel-luar-kota",
    title: "Travel Antar Kota",
    description: "Layanan travel antar kota dari Bengkulu ke kota-kota besar di Sumatera.",
    fullDescription: "Layanan travel antar kota dari Bengkulu menuju berbagai kota besar di Sumatera seperti Palembang, Lampung, Padang, dan kota lainnya. Perjalanan nyaman dengan jadwal keberangkatan yang fleksibel.",
    image: "/images/services/travel-van.png",
    features: [
      "Rute lengkap Sumatera",
      "Jadwal fleksibel",
      "Kursi empuk nyaman",
      "AC dingin",
      "Entertainment",
      "Asuransi perjalanan"
    ],
    price: "Mulai Rp 250.000"
  },
  {
    id: "mice",
    title: "MICE Services",
    description: "Layanan transportasi untuk Meeting, Incentive, Conference, dan Exhibition.",
    fullDescription: "Layanan transportasi profesional untuk kebutuhan MICE (Meeting, Incentive, Conference, Exhibition). Kami menyediakan armada dan koordinasi transportasi yang handal untuk acara bisnis Anda.",
    image: "/images/services/travel-van.png",
    features: [
      "Armada premium",
      "Koordinasi terintegrasi",
      "VIP service",
      "Manajemen waktu tepat",
      "Dekorasi kendaraan",
      "Dedicated coordinator"
    ],
    price: "Hubungi untuk penawaran"
  }
];

export function getServiceById(id: string): Service | undefined {
  return services.find(service => service.id === id);
}
