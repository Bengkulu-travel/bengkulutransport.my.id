import { Metadata } from 'next'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Disclaimer - Travel Bengkulu',
  description: 'Syarat dan ketentuan penggunaan layanan Travel Bengkulu. Baca informasi penting sebelum menggunakan layanan kami.',
}

export default function DisclaimerPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-orange-500">Disclaimer</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Syarat & Ketentuan
            </h1>
            <p className="text-lg text-blue-100">
              Informasi penting mengenai penggunaan layanan Travel Bengkulu.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Disclaimer Layanan</h2>
              <p className="text-gray-700 mb-6">
                Dengan menggunakan layanan Travel Bengkulu, Anda dianggap telah membaca, memahami, dan menyetujui syarat dan ketentuan yang berlaku. Mohon baca dengan seksama sebelum melakukan pemesanan.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-8">1. Ketentuan Umum</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Travel Bengkulu berhak mengubah jadwal keberangkatan sesuai kondisi dan situasi.</li>
                <li>Harga yang tertera dapat berubah sewaktu-waktu tanpa pemberitahuan terlebih dahulu.</li>
                <li>Pemesanan dianggap sah setelah melakukan pembayaran sesuai ketentuan.</li>
                <li>Penumpang wajib memberikan informasi yang benar dan akurat saat pemesanan.</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-8">2. Pembatalan dan Pengembalian Dana</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Pembatalan H-3 atau lebih: Pengembalian dana 100% (dikurangi biaya admin).</li>
                <li>Pembatalan H-2: Pengembalian dana 50%.</li>
                <li>Pembatalan H-1 dan H: Tidak ada pengembalian dana.</li>
                <li>Pembatalan oleh pihak Travel Bengkulu (karena force majeure): Pengembalian dana 100%.</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-8">3. Tanggung Jawab</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Travel Bengkulu bertanggung jawab atas keamanan dan keselamatan penumpang selama perjalanan.</li>
                <li>Barang berharga adalah tanggung jawab masing-masing penumpang.</li>
                <li>Travel Bengkulu tidak bertanggung jawab atas keterlambatan yang disebabkan oleh faktor di luar kendali (cuaca, kemacetan, dll).</li>
                <li>Kerusakan atau kehilangan barang karena kelalaian penumpang bukan tanggung jawab Travel Bengkulu.</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-8">4. Ketentuan Sewa Mobil</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Penyewa wajib menunjukkan KTP dan SIM A yang masih berlaku (untuk lepas kunci).</li>
                <li>Kendaraan harus dikembalikan dalam kondisi yang sama saat disewa.</li>
                <li>Kerusakan akibat kelalaian penyewa menjadi tanggung jawab penyewa.</li>
                <li>Deposit jaminan akan dikembalikan setelah pemeriksaan kendaraan.</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-8">5. Larangan</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Dilarang membawa barang-barang ilegal atau terlarang.</li>
                <li>Dilarang merokok di dalam kendaraan.</li>
                <li>Dilarang membawa hewan peliharaan tanpa izin terlebih dahulu.</li>
                <li>Dilarang memaksa driver untuk melanggar aturan lalu lintas.</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-8">6. Force Majeure</h3>
              <p className="text-gray-700">
                Travel Bengkulu tidak bertanggung jawab atas keterlambatan, pembatalan, atau kerugian yang disebabkan oleh keadaan kahar (force majeure) seperti bencana alam, cuaca ekstrem, kerusuhan, pandemi, atau kejadian lain di luar kendali.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-8">7. Kontak</h3>
              <p className="text-gray-700">
                Untuk pertanyaan lebih lanjut mengenai syarat dan ketentuan, silakan hubungi kami via WhatsApp di nomor <strong>085268645461</strong>.
              </p>

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
