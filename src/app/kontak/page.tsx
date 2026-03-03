import { Metadata } from 'next'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Kontak - Travel Bengkulu',
  description: 'Hubungi Travel Bengkulu untuk informasi dan pemesanan layanan travel, rental mobil, dan antar jemput bandara. Layanan 24 jam via WhatsApp.',
  openGraph: {
    title: 'Kontak - Travel Bengkulu',
    description: 'Hubungi Travel Bengkulu untuk informasi dan pemesanan layanan travel, rental mobil, dan antar jemput bandara.',
    url: 'https://bengkulutransport.my.id/kontak',
    type: 'website',
  },
}

export default function KontakPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-orange-500">Kontak Kami</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Hubungi Travel Bengkulu
            </h1>
            <p className="text-lg text-blue-100">
              Kami siap membantu Anda 24 jam. Hubungi kami untuk informasi dan pemesanan layanan travel.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Informasi Kontak
              </h2>
              
              <div className="space-y-6">
                {/* WhatsApp */}
                <div className="flex items-start gap-4 p-6 bg-green-50 rounded-xl border border-green-100">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
                    <p className="text-gray-600 text-sm mb-2">Hubungi kami langsung via WhatsApp untuk respon cepat</p>
                    <a 
                      href="https://wa.me/6285268645461" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-600 font-semibold hover:text-green-700 transition-colors"
                    >
                      085268645461
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl border border-blue-100">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Telepon</h3>
                    <p className="text-gray-600 text-sm mb-2">Hubungi nomor berikut untuk informasi layanan</p>
                    <a 
                      href="tel:085268645461" 
                      className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                    >
                      085268645461
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 p-6 bg-orange-50 rounded-xl border border-orange-100">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Area Operasional</h3>
                    <p className="text-gray-600 text-sm mb-2">Wilayah layanan kami mencakup:</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Bengkulu</Badge>
                      <Badge variant="outline">Curup</Badge>
                      <Badge variant="outline">Palembang</Badge>
                      <Badge variant="outline">Jambi</Badge>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 p-6 bg-purple-50 rounded-xl border border-purple-100">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Jam Operasional</h3>
                    <p className="text-gray-600 text-sm mb-2">Layanan kami tersedia:</p>
                    <p className="text-purple-600 font-semibold">24 Jam (Reservasi via WhatsApp)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Kirim Pesan
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <MessageCircle className="h-12 w-12 mx-auto mb-4 opacity-80" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Reservasi Cepat via WhatsApp
          </h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Untuk respon tercepat, hubungi kami langsung via WhatsApp. Tim kami siap membantu Anda 24 jam!
          </p>
          <Button asChild size="lg" className="bg-white text-green-600 hover:bg-green-50">
            <a href="https://wa.me/6285268645461" target="_blank" rel="noopener noreferrer">
              <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat WhatsApp Sekarang
            </a>
          </Button>
        </div>
      </section>
    </>
  )
}
