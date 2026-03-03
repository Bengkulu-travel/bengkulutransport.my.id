import { Metadata } from 'next'
import ArticleCard from '@/components/ArticleCard'
import { articles } from '@/data/articles'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Artikel Travel Bengkulu - Tips & Informasi Perjalanan',
  description: 'Baca artikel terbaru tentang tips perjalanan, destinasi wisata Bengkulu, informasi travel, dan panduan transportasi untuk perjalanan Anda.',
  openGraph: {
    title: 'Artikel Travel Bengkulu - Tips & Informasi Perjalanan',
    description: 'Baca artikel terbaru tentang tips perjalanan, destinasi wisata Bengkulu, informasi travel, dan panduan transportasi.',
    url: 'https://bengkulutransport.my.id/artikel',
    type: 'website',
  },
}

export default function ArtikelPage() {
  // Sort articles by date
  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  // Get unique categories
  const categories = [...new Set(articles.map(article => article.category))]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-orange-500">Blog & Artikel</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Artikel Travel Bengkulu
            </h1>
            <p className="text-lg text-blue-100">
              Temukan tips perjalanan, informasi destinasi wisata, dan panduan transportasi untuk perjalanan Anda di Bengkulu dan sekitarnya.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="cursor-pointer hover:bg-blue-50">
              Semua
            </Badge>
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant="outline" 
                className="cursor-pointer hover:bg-blue-50"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Featured Article */}
          <div className="mb-12">
            <ArticleCard article={sortedArticles[0]} featured />
          </div>

          {/* Other Articles */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedArticles.slice(1).map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Butuh Layanan Travel?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Hubungi kami untuk informasi lebih lanjut atau pemesanan layanan travel.
          </p>
          <a
            href="https://wa.me/6285268645461"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Hubungi via WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}
