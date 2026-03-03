import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckCircle, Users, Car, MapPin, Clock, Shield, Award, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tentang Kami - Travel Bengkulu',
  description: 'Travel Bengkulu adalah penyedia layanan travel dan transportasi terpercaya di Bengkulu, Curup, Palembang, dan Jambi. Melayani dengan sepenuh hati sejak bertahun-tahun.',
  openGraph: {
    title: 'Tentang Kami - Travel Bengkulu',
    description: 'Travel Bengkulu adalah penyedia layanan travel dan transportasi terpercaya di Bengkulu, Curup, Palembang, dan Jambi.',
    url: 'https://bengkulutransport.my.id/tentang-kami',
    type: 'website',
  },
}

export default function TentangKamiPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-orange-500">Tentang Kami</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Travel Bengkulu - Partner Perjalanan Anda
            </h1>
            <p className="text-lg text-blue-100">
              Melayani dengan sepenuh hati, mengantarkan Anda dengan aman dan nyaman ke berbagai destinasi.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Siapa Kami?
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>Travel Bengkulu</strong> adalah penyedia layanan transportasi dan travel yang telah dipercaya oleh ribuan pelanggan di wilayah Bengkulu dan sekitarnya. Kami berkomitmen untuk memberikan pengalaman perjalanan yang nyaman, aman, dan terpercaya bagi setiap penumpang.
                </p>
                <p>
                  Dengan pengalaman bertahun-tahun di bidang transportasi, kami memahami betapa pentingnya kenyamanan dan keamanan dalam setiap perjalanan. Tim driver kami adalah para profesional yang berpengalaman, ramah, dan mengenal seluruh rute dengan baik.
                </p>
                <p>
                  Kami melayani berbagai kebutuhan transportasi mulai dari travel antar kota, rental mobil dengan atau tanpa sopir, antar jemput bandara, hingga paket wisata untuk menjelajahi keindahan Bengkulu dan sekitarnya.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/gallery/fleet-1.png"
                  alt="Armada Travel Bengkulu"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Visi Kami</h3>
              <p className="text-gray-700 leading-relaxed">
                Menjadi layanan transportasi dan travel terdepan di wilayah Bengkulu dan Sumatera yang dikenal karena kualitas pelayanan, keamanan, dan kepuasan pelanggan yang tinggi.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Misi Kami</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Memberikan layanan transportasi yang aman, nyaman, dan terpercaya</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Mengutamakan kepuasan dan keamanan penumpang</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Menyediakan armada terawat dan driver profesional</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Berkontribusi dalam pengembangan pariwisata Bengkulu</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Keunggulan Kami</Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Mengapa Memilih Travel Bengkulu?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: 'Aman & Terpercaya',
                description: 'Armada terawat dan driver berpengalaman untuk keamanan perjalanan Anda.',
                color: 'bg-green-100 text-green-600',
              },
              {
                icon: Clock,
                title: 'Layanan 24 Jam',
                description: 'Siap melayani kapanpun Anda butuhkan, pagi, siang, malam, atau dini hari.',
                color: 'bg-blue-100 text-blue-600',
              },
              {
                icon: MapPin,
                title: 'Door to Door',
                description: 'Jemput dan antar langsung ke lokasi tujuan tanpa transit atau pindah kendaraan.',
                color: 'bg-orange-100 text-orange-600',
              },
              {
                icon: Users,
                title: 'Driver Profesional',
                description: 'Driver ramah, berpengalaman, dan mengenal rute dengan baik.',
                color: 'bg-purple-100 text-purple-600',
              },
            ].map((item, index) => (
              <div key={index} className="text-center p-6 rounded-xl border hover:shadow-lg transition-shadow">
                <div className={`w-14 h-14 ${item.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Layanan Kami</Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Berbagai Layanan untuk Kebutuhan Anda
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Travel Antar Kota',
                description: 'Layanan travel door to door ke berbagai kota seperti Palembang, Jambi, dan lainnya.',
              },
              {
                title: 'Rental Mobil',
                description: 'Sewa mobil dengan pilihan lepas kunci atau dengan sopir profesional.',
              },
              {
                title: 'Antar Jemput Bandara',
                description: 'Layanan jemput dan antar ke Bandara Fatmawati Soekarno Bengkulu.',
              },
              {
                title: 'Sewa Mobil + Driver',
                description: 'Paket sewa mobil dengan driver untuk perjalanan ke Pulau Jawa dan sekitarnya.',
              },
              {
                title: 'Paket Wisata',
                description: 'Paket tur keliling destinasi wisata populer di Bengkulu dan sekitarnya.',
              },
              {
                title: 'Kirim Paket',
                description: 'Layanan pengiriman paket cepat antar kota bersama armada travel kami.',
              },
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <Car className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Area Layanan</Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Wilayah yang Kami Layani
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { city: 'Bengkulu', description: 'Kota Bengkulu dan sekitarnya' },
              { city: 'Curup', description: 'Kabupaten Rejang Lebong' },
              { city: 'Palembang', description: 'Kota Palembang dan sekitarnya' },
              { city: 'Jambi', description: 'Kota Jambi dan sekitarnya' },
            ].map((area, index) => (
              <div key={index} className="text-center p-6 bg-blue-50 rounded-xl">
                <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-gray-900">{area.city}</h3>
                <p className="text-gray-600 text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Siap Berangkat? Hubungi Kami Sekarang!
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Dapatkan penawaran terbaik untuk perjalanan Anda. Layanan 24 jam siap membantu kapanpun Anda butuhkan.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              <a href="https://wa.me/6285268645461" target="_blank" rel="noopener noreferrer">
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp: 085268645461
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900">
              <Link href="/kontak">
                Lihat Kontak Lainnya
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
