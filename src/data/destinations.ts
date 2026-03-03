export interface Destination {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  image: string;
  gallery: string[];
  location: string;
  distance: string;
  highlights: string[];
  bestTime: string;
  tips: string[];
}

export const destinations: Destination[] = [
  {
    id: "pantai-panjang",
    name: "Pantai Panjang",
    slug: "pantai-panjang",
    shortDescription: "Pantai terpanjang di Bengkulu dengan pemandangan sunset yang memukau.",
    description: "Pantai Panjang adalah destinasi wisata utama di Bengkulu yang terkenal dengan garis pantainya yang memanjang sekitar 7 km. Pantai ini menawarkan pemandangan sunset yang spektakuler, pasir putih yang lembut, dan deretan pohon kelapa yang menambah keindahan alam. Pengunjung dapat menikmati berbagai aktivitas seperti berenang, bermain pasir, atau sekadar bersantai menikmati suasana pantai.",
    image: "/images/destinations/pantai-panjang.png",
    gallery: ["/images/destinations/pantai-panjang.png"],
    location: "Kelurahan Padang Harapan, Kota Bengkulu",
    distance: "3 km dari pusat kota",
    highlights: [
      "Sunset spektakuler",
      "Pasir putih lembut",
      "Pohon kelapa berjejer",
      "Tempat makan pinggir pantai",
      "Spot fotografi indah",
      "Olahraga pantai"
    ],
    bestTime: "Sore hari untuk menikmati sunset, pukul 16:00-18:00 WIB",
    tips: [
      "Bawa topi dan sunscreen",
      "Kunjungi saat sore untuk sunset",
      "Cicipi makanan laut di warung pinggir pantai",
      "Hindari musim hujan untuk pengalaman terbaik"
    ]
  },
  {
    id: "fort-marlborough",
    name: "Fort Marlborough",
    slug: "fort-marlborough",
    shortDescription: "Benteng peninggalan Inggris dari abad ke-18 dengan arsitektur megah.",
    description: "Fort Marlborough adalah benteng bersejarah peninggalan Inggris yang dibangun pada tahun 1714-1719 Masehi. Benteng ini merupakan salah satu benteng Inggris terbesar di Asia Tenggara dan menjadi saksi bisu sejarah kolonialisme di Bengkulu. Dengan arsitektur yang masih terawat, pengunjung dapat menjelajahi lorong-lorong benteng, melihat meriam kuno, dan menikmati pemandangan laut dari atas tembok benteng.",
    image: "/images/destinations/fort-marlborough.png",
    gallery: ["/images/destinations/fort-marlborough.png"],
    location: "Kelurahan Ford Marlborough, Kota Bengkulu",
    distance: "2 km dari pusat kota",
    highlights: [
      "Arsitektur kolonial Inggris",
      "Meriam bersejarah",
      "Museum di dalam benteng",
      "Pemandangan laut",
      "Spot foto instagramable",
      "Nilai sejarah tinggi"
    ],
    bestTime: "Pagi hari pukul 08:00-10:00 WIB untuk menghindari panas",
    tips: [
      "Gunakan pakaian nyaman",
      "Bawa kamera untuk dokumentasi",
      "Dengarkan penjelasan guide untuk sejarah lengkap",
      "Kombinasikan dengan wisata Pantai Panjang"
    ]
  },
  {
    id: "danau-dendam-tak-sudah",
    name: "Danau Dendam Tak Sudah",
    slug: "danau-dendam-tak-sudah",
    shortDescription: "Danau legendaris dengan bunga teratai dan jembatan kayu yang instagramable.",
    description: "Danau Dendam Tak Sudah adalah danau yang terletak di Kelurahan Dusun Besar, Bengkulu. Danau ini terkenal dengan legenda yang menyelimutinya serta keindahan bunga teratai yang mekar di permukaan air. Jembatan kayu yang melintasi danau menjadi spot favorit untuk berfoto. Area sekitar danau juga dilengkapi dengan taman dan gazebo untuk bersantai.",
    image: "/images/destinations/danau-dendam.png",
    gallery: ["/images/destinations/danau-dendam.png"],
    location: "Kelurahan Dusun Besar, Kota Bengkulu",
    distance: "6 km dari pusat kota",
    highlights: [
      "Bunga teratai indah",
      "Jembatan kayu foto spot",
      "Legenda menarik",
      "Taman yang asri",
      "Suasana tenang",
      "Gazebo untuk bersantai"
    ],
    bestTime: "Pagi hari saat bunga teratai mekar, pukul 07:00-09:00 WIB",
    tips: [
      "Kunjungi pagi untuk teratai yang mekar",
      "Bawa bekal untuk piknik",
      "Jangan lupa kamera untuk foto",
      "Dengarkan cerita legenda dari warga sekitar"
    ]
  },
  {
    id: "bukit-kaba",
    name: "Bukit Kaba",
    slug: "bukit-kaba",
    shortDescription: "Gunung berapi aktif dengan pemandangan kawah yang menakjubkan.",
    description: "Bukit Kaba adalah gunung berapi aktif yang terletak di Kabupaten Rejang Lebong, Bengkulu. Dengan ketinggian 1.952 meter di atas permukaan laut, gunung ini menawarkan pengalaman pendakian yang menantang dengan reward pemandangan kawah vulkanik yang spektakuler. Pengunjung dapat melihat aktivitas vulkanik dari dekat dan menikmati udara pegunungan yang sejuk.",
    image: "/images/destinations/bukit-kaba.png",
    gallery: ["/images/destinations/bukit-kaba.png"],
    location: "Kabupaten Rejang Lebong, Bengkulu",
    distance: "100 km dari Kota Bengkulu",
    highlights: [
      "Kawah vulkanik aktif",
      "Pendakian menantang",
      "Udara sejuk pegunungan",
      "Flora fauna khas",
      "Pemandangan spektakuler",
      "Pengalaman adventure"
    ],
    bestTime: "Musim kemarau (April-Oktober) untuk pendakian optimal",
    tips: [
      "Persiapkan fisik dengan baik",
      "Bawa jaket tebal dan peralatan mendaki",
      "Gunakan jasa guide lokal",
      "Cek kondisi gunung sebelum mendaki"
    ]
  },
  {
    id: "pulau-baai",
    name: "Pulau Baai",
    slug: "pulau-baai",
    shortDescription: "Pulau eksotis dengan pantai pasir putih dan air jernih untuk snorkeling.",
    description: "Pulau Baai adalah sebuah pulau kecil yang terletak di Teluk Bengkulu. Pulau ini menawarkan keindahan pantai dengan pasir putih bersih dan air laut yang jernih. Pengunjung dapat melakukan aktivitas snorkeling untuk melihat keindahan terumbu karang dan ikan-ikan warna-warni. Akses ke pulau ini menggunakan perahu nelayan dari Dermaga Pulau Baai.",
    image: "/images/destinations/pulau-baai.png",
    gallery: ["/images/destinations/pulau-baai.png"],
    location: "Teluk Bengkulu, Kota Bengkulu",
    distance: "15 km dari pusat kota (via dermaga)",
    highlights: [
      "Pasir putih bersih",
      "Air jernih untuk snorkeling",
      "Terumbu karang indah",
      "Ikan warna-warni",
      "Suasana tenang",
      "Pantai private"
    ],
    bestTime: "Pagi hari saat air tenang, pukul 08:00-12:00 WIB",
    tips: [
      "Bawa peralatan snorkeling sendiri",
      "Sewa perahu dari dermaga pagi hari",
      "Bawa bekal makanan dan minuman",
      "Jaga kebersihan pantai"
    ]
  },
  {
    id: "air-terjun-kembiri",
    name: "Air Terjun Kembiri",
    slug: "air-terjun-kembiri",
    shortDescription: "Air terjun alami di tengah hutan tropis dengan kolam alami untuk berenang.",
    description: "Air Terjun Kembiri adalah air terjun alami yang tersembunyi di tengah hutan tropis Bengkulu. Dengan ketinggian sekitar 15 meter, air terjun ini membentuk kolam alami yang dapat digunakan untuk berenang. Perjalanan menuju air terjun ini menjadi bagian dari petualangan dengan trekking melewati hutan yang asri.",
    image: "/images/destinations/air-terjun-kembiri.png",
    gallery: ["/images/destinations/air-terjun-kembiri.png"],
    location: "Kabupaten Bengkulu Tengah",
    distance: "45 km dari Kota Bengkulu",
    highlights: [
      "Air terjun alami",
      "Kolam untuk berenang",
      "Hutan tropis asri",
      "Trekking adventure",
      "Udara segar",
      "Keindahan alam murni"
    ],
    bestTime: "Musim kemarau (April-Oktober) untuk akses mudah",
    tips: [
      "Gunakan sepatu anti slip",
      "Bila pakaian cadangan",
      "Hati-hati saat berenang",
      "Jaga kebersihan area"
    ]
  }
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find(dest => dest.slug === slug);
}
