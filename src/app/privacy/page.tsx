import { Metadata } from 'next'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Kebijakan Privasi - Travel Bengkulu',
  description: 'Kebijakan privasi dan perlindungan data pengguna Travel Bengkulu. Pelajari bagaimana kami melindungi informasi Anda.',
}

export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-orange-500">Kebijakan Privasi</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Perlindungan Data Anda
            </h1>
            <p className="text-lg text-blue-100">
              Kami berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Kebijakan Privasi</h2>
              <p className="text-gray-700 mb-6">
                Travel Bengkulu menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi yang Anda berikan kepada kami. Kebijakan privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-8">1. Informasi yang Kami Kumpulkan</h3>
              <p className="text-gray-700 mb-3">Kami mengumpulkan informasi berikut saat Anda menggunakan layanan kami:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Data Identitas:</strong> Nama lengkap, nomor telepon, alamat email</li>
                <li><strong>Data Perjalanan:</strong> Alamat jemput, alamat tujuan, tanggal dan waktu perjalanan</li>
                <li><strong>Data Pembayaran:</strong> Informasi pembayaran (tidak menyimpan data kartu kredit)</li>
                <li><strong>Data Perangkat:</strong> Alamat IP, jenis browser, informasi perangkat (untuk analisis website)</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-8">2. Penggunaan Informasi</h3>
              <p className="text-gray-700 mb-3">Informasi yang kami kumpulkan digunakan untuk:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Memproses pemesanan dan reservasi layanan</li>
                <li>Menghubungi Anda terkait layanan yang dipesan</li>
                <li>Mengirimkan konfirmasi dan update perjalanan</li>
                <li>Meningkatkan kualitas layanan kami</li>
                <li>Mengirimkan informasi promosi (dengan persetujuan Anda)</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-8">3. Perlindungan Data</h3>
              <p className="text-gray-700 mb-3">Kami menerapkan langkah-langkah keamanan untuk melindungi data Anda:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Enkripsi data sensitif saat transmisi</li>
                <li>Akses terbatas hanya untuk personel yang berwenang</li>
                <li>Sistem keamanan website dengan SSL/TLS</li>
                <li>Penyimpanan data yang aman dan terenkripsi</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-8">4. Berbagi Informasi</h3>
              <p className="text-gray-700">
                Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga untuk tujuan pemasaran. Informasi Anda hanya dibagikan kepada:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-3">
                <li>Driver dan mitra yang terlibat dalam layanan Anda</li>
                <li>Pihak berwenang jika diwajibkan oleh hukum</li>
                <li>Penyedia layanan pembayaran (untuk transaksi)</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-8">5. Hak Anda</h3>
              <p className="text-gray-700 mb-3">Anda memiliki hak untuk:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Mengakses data pribadi yang kami simpan tentang Anda</li>
                <li>Meminta koreksi data yang tidak akurat</li>
                <li>Meminta penghapusan data (dengan batasan tertentu)</li>
                <li>Menolak pengiriman informasi promosi</li>
                <li>Menarik persetujuan penggunaan data</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-8">6. Cookie</h3>
              <p className="text-gray-700">
                Website kami menggunakan cookie untuk meningkatkan pengalaman pengguna. Cookie adalah file kecil yang disimpan di perangkat Anda. Anda dapat mengatur browser untuk menolak cookie, namun hal ini dapat mempengaruhi fungsi website.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-8">7. Retensi Data</h3>
              <p className="text-gray-700">
                Kami menyimpan data pribadi Anda selama diperlukan untuk menyediakan layanan dan memenuhi kewajiban hukum. Data yang tidak lagi diperlukan akan dihapus secara aman.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-8">8. Perubahan Kebijakan</h3>
              <p className="text-gray-700">
                Kebijakan privasi ini dapat diperbarui sewaktu-waktu. Perubahan akan diumumkan di halaman ini. Kami menyarankan Anda untuk mengecek halaman ini secara berkala.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-8">9. Hubungi Kami</h3>
              <p className="text-gray-700">
                Jika Anda memiliki pertanyaan tentang kebijakan privasi ini atau ingin menggunakan hak Anda terkait data pribadi, silakan hubungi kami:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-3">
                <p className="text-gray-700">
                  <strong>Travel Bengkulu</strong><br />
                  WhatsApp: 085268645461<br />
                  Website: bengkulutransport.my.id
                </p>
              </div>

              <div className="mt-8 pt-8 border-t">
                <p className="text-sm text-gray-500">
                  Terakhir diperbarui: Januari 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
