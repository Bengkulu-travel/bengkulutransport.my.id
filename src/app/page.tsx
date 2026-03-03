import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle, MapPin, Clock, Phone, Shield, Car, Users, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import ArticleCard from '@/components/ArticleCard'
import { articles, getRecentArticles } from '@/data/articles'
import { services } from '@/data/services'
import { destinations } from '@/data/destinations'

export default function Home() {
  const recentArticles = getRecentArticles(3)
  const featuredServices = services.slice(0, 3)
  const popularDestinations = destinations.slice(0, 6)

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero/hero-main.png')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-transparent" />
        <div className="container mx-auto px-4 py-20 lg:py-32 relative">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-orange-500 hover:bg-orange-600 text-white">
              Layanan 24 Jam
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Travel Bengkulu - Solusi Perjalanan Nyaman & Terpercaya
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
              Layanan travel antar kota, rental mobil, dan antar jemput bandara terpercaya di Bengkulu, Curup, Palembang, dan Jambi. Nikmati perjalanan nyaman dengan driver profesional.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                <a href="https://wa.me/6285268645461" target="_blank" rel="noopener noreferrer">
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Hubungi via WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900">
                <Link href="/artikel">
                  Lihat Artikel
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">10+</div>
                <div className="text-sm text-blue-200">Tahun Pengalaman</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">5000+</div>
                <div className="text-sm text-blue-200">Pelanggan Puas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">24/7</div>
                <div className="text-sm text-blue-200">Layanan</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">100%</div>
                <div className="text-sm text-blue-200">Kepuasan</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Layanan Kami</Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Layanan Travel Terpercaya
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami menyediakan berbagai layanan transportasi untuk memenuhi kebutuhan perjalanan Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <Card key={service.id} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                    <Car className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-blue-600 font-semibold mb-4">{service.price}</div>
                  <Button asChild variant="outline" className="w-full group/btn">
                    <a href="https://wa.me/6285268645461" target="_blank" rel="noopener noreferrer">
                      Pesan Sekarang
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Mengapa Memilih Kami</Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Kenapa Travel Bengkulu Pilihan Tepat?
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Shield className="h-5 w-5 text-green-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Aman & Terpercaya</h3>
                    <p className="text-gray-600 text-sm">Armada terawat dan driver berpengalaman untuk keamanan perjalanan Anda</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Clock className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Layanan 24 Jam</h3>
                    <p className="text-gray-600 text-sm">Siap melayani kapanpun Anda butuhkan, pagi, siang, malam, atau dini hari</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-orange-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Door to Door</h3>
                    <p className="text-gray-600 text-sm">Jemput dan antar langsung ke lokasi tujuan tanpa transit</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-purple-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Driver Profesional</h3>
                    <p className="text-gray-600 text-sm">Driver ramah, berpengalaman, dan mengenal rute dengan baik</p>
                  </div>
                </div>
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
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-blue-200 border-2 border-white flex items-center justify-center text-xs font-bold text-blue-600">
                        {['A', 'B', 'C', 'D'][i - 1]}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="font-bold text-gray-900">4.9</span>
                    </div>
                    <div className="text-xs text-gray-500">5000+ Review</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Destinasi Populer</Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Destinasi Wisata Bengkulu
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Jelajahi keindahan Bengkulu dengan layanan travel kami. Kunjungi destinasi wisata terbaik dengan nyaman.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularDestinations.map((destination) => (
              <Card key={destination.id} className="group overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-bold text-white mb-1">{destination.name}</h3>
                    <p className="text-sm text-gray-200 flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {destination.distance}
                    </p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-gray-600 line-clamp-2">{destination.shortDescription}</p>
                </CardContent>
              </Card>
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
              <a href="tel:085268645461">
                <Phone className="h-5 w-5 mr-2" />
                Telepon Sekarang
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <Badge className="mb-4">Artikel Terbaru</Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Informasi & Tips Perjalanan
              </h2>
            </div>
            <Link 
              href="/artikel" 
              className="hidden md:inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              Lihat Semua Artikel
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Button asChild variant="outline">
              <Link href="/artikel">
                Lihat Semua Artikel
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Testimoni</Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Apa Kata Pelanggan Kami
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Ahmad Fauzi",
                location: "Jakarta",
                text: "Pelayanan travel dari bandara ke hotel sangat memuaskan. Driver ramah dan profesional, armada bersih dan nyaman. Recommended!",
                rating: 5
              },
              {
                name: "Siti Rahayu",
                location: "Palembang",
                text: "Travel Palembang Bengkulu door to door sangat nyaman. Tidak perlu repot ke terminal lagi. Terima kasih Travel Bengkulu!",
                rating: 5
              },
              {
                name: "Budi Santoso",
                location: "Bandung",
                text: "Rental mobil untuk keliling Bengkulu sangat praktis. Kendaraan dalam kondisi prima, AC dingin, dan harga kompetitif.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm mb-4">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                    <div className="text-xs text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
