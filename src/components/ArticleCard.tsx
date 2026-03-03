import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface ArticleCardProps {
  article: {
    id: string
    title: string
    slug: string
    excerpt: string
    image: string
    author: string
    date: string
    category: string
    tags: string[]
    readTime: string
  }
  featured?: boolean
}

export default function ArticleCard({ article, featured = false }: ArticleCardProps) {
  const formattedDate = new Date(article.date).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <Card className={`group overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col ${featured ? 'lg:flex-row' : ''}`}>
      {/* Image */}
      <div className={`relative overflow-hidden ${featured ? 'lg:w-1/2' : ''}`}>
        <div className={`${featured ? 'aspect-[16/9] lg:aspect-[4/3] h-64 lg:h-full' : 'aspect-[16/9]'}`}>
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes={featured ? '(max-width: 1024px) 100vw, 50vw' : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
          />
        </div>
        <Badge className="absolute top-4 left-4 bg-blue-600 hover:bg-blue-700">
          {article.category}
        </Badge>
      </div>

      {/* Content */}
      <div className={`flex flex-col flex-1 ${featured ? 'lg:w-1/2' : ''}`}>
        <CardContent className="p-5 flex-1">
          <h3 className={`font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2 line-clamp-2 ${featured ? 'text-xl lg:text-2xl' : 'text-lg'}`}>
            <Link href={`/artikel/${article.slug}`}>
              {article.title}
            </Link>
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2 mb-4">
            {article.excerpt}
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {article.readTime}
            </span>
          </div>
        </CardContent>
        <CardFooter className="p-5 pt-0 mt-auto">
          <Link 
            href={`/artikel/${article.slug}`}
            className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 group/link"
          >
            Baca Selengkapnya
            <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </CardFooter>
      </div>
    </Card>
  )
}
