import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

interface Post {
  id: string
  title: string
  summary: string
  label: string
  author: string
  published: string
  url: string
  image: string
}

interface Blog7Props {
  tagline: string
  heading: string
  description: string
  buttonText: string
  buttonUrl: string
  posts: Post[]
}

const Blog7 = ({
  tagline,
  heading,
  description,
  buttonText,
  buttonUrl,
  posts,
}: Blog7Props) => {
  return (
    <section className="bg-cream-warm border-b border-void/6">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <Badge variant="secondary" className="mb-4 eyebrow tracking-widest rounded-none px-0 bg-transparent border-0 text-saffron">
              {tagline}
            </Badge>
            <h2 className="font-display text-display-xl text-void leading-tight">
              {heading}
            </h2>
            <p className="font-sans text-sm text-stone-editorial leading-relaxed mt-3 max-w-lg">
              {description}
            </p>
          </div>
          <Link
            href={buttonUrl}
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-void border-b border-saffron pb-0.5 hover:text-saffron transition-colors duration-200 shrink-0"
          >
            {buttonText} <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="grid grid-rows-[auto_auto_1fr_auto] bg-cream border border-void/8 rounded-2xl overflow-hidden shadow-none hover:shadow-md transition-shadow duration-300">
              <div className="aspect-[16/9] w-full overflow-hidden">
                <Link href={post.url} className="block w-full h-full">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04]"
                  />
                </Link>
              </div>
              <div className="px-6 pt-6 pb-2">
                <span className="eyebrow mb-2 block">{post.label}</span>
                <h3 className="font-display text-display-sm text-void leading-snug hover:text-saffron transition-colors duration-200">
                  <Link href={post.url}>{post.title}</Link>
                </h3>
              </div>
              <div className="px-6 pb-4">
                <p className="font-sans text-sm text-stone-editorial leading-relaxed line-clamp-3">
                  {post.summary}
                </p>
              </div>
              <div className="px-6 pb-6 pt-4 border-t border-void/8 flex items-center">
                <Link
                  href={post.url}
                  className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-void border-b border-saffron pb-0.5 hover:text-saffron transition-colors duration-200"
                >
                  Read more <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="font-sans text-xs text-stone-muted ml-auto">{post.published}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export { Blog7 }
