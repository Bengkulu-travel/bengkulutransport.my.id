export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  text: string;
  service: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Ahmad Fauzi",
    location: "Jakarta",
    avatar: "/images/testimonials/avatar-1.png",
    rating: 5,
    text: "Pelayanan travel dari bandara ke hotel sangat memuaskan. Driver ramah dan profesional, armada bersih dan nyaman. Recommended untuk yang berkunjung ke Bengkulu!",
    service: "Antar Jemput Bandara",
    date: "2024-01-15"
  },
  {
    id: "2",
    name: "Siti Rahayu",
    location: "Palembang",
    avatar: "/images/testimonials/avatar-2.png",
    rating: 5,
    text: "Paket wisata grup kami berjalan lancar berkat Bengkulu Transport. Guide berpengalaman, itinerary teratur, dan harga sangat reasonable. Pasti akan menggunakan lagi!",
    service: "Paket Wisata Grup",
    date: "2024-01-20"
  },
  {
    id: "3",
    name: "Budi Santoso",
    location: "Bandung",
    avatar: "/images/testimonials/avatar-3.png",
    rating: 5,
    text: "Rental mobil untuk keliling Bengkulu sangat praktis. Kendaraan dalam kondisi prima, AC dingin, dan harga kompetitif. Terima kasih Bengkulu Transport!",
    service: "Rental Mobil",
    date: "2024-02-05"
  },
  {
    id: "4",
    name: "Dewi Lestari",
    location: "Lampung",
    avatar: "/images/testimonials/avatar-4.png",
    rating: 5,
    text: "Travel harian ke Pantai Panjang dan Fort Marlborough sangat menyenangkan. Driver juga jadi guide yang informatif. Anak-anak sangat senang!",
    service: "Travel Harian",
    date: "2024-02-10"
  },
  {
    id: "5",
    name: "Hendra Wijaya",
    location: "Padang",
    avatar: "/images/testimonials/avatar-5.png",
    rating: 5,
    text: "Travel antar kota Bengkulu-Palembang sangat nyaman. Kursi empuk, AC dingin, dan driver berpengalaman. Perjalanan terasa lebih singkat!",
    service: "Travel Antar Kota",
    date: "2024-02-18"
  },
  {
    id: "6",
    name: "Rina Susanti",
    location: "Bengkulu",
    avatar: "/images/testimonials/avatar-6.png",
    rating: 5,
    text: "Menggunakan layanan MICE untuk acara kantor. Koordinasi lancar, armada premium, dan tim sangat profesional. Event kami sukses besar!",
    service: "MICE Services",
    date: "2024-03-01"
  }
];
