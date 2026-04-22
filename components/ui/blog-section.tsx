import Link from 'next/link'
import { LazyImage } from '@/components/ui/lazy-image'

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  image: string
}

interface BlogSectionProps {
  posts: BlogPost[]
}

export function BlogSection({ posts }: BlogSectionProps) {
  return (
    <div className="grid p-4 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Link
          href={`/blog/${post.slug}`}
          key={post.slug}
          className="group flex flex-col gap-2 rounded-xl p-2 hover:bg-void/[0.03] active:bg-void/[0.06] transition-colors duration-150 cursor-pointer"
        >
          <LazyImage
            src={post.image}
            fallback="https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=640&q=80"
            inView={true}
            alt={post.title}
            ratio={16 / 9}
            className="transition-transform duration-500 group-hover:scale-[1.03]"
            AspectRatioClassName="border border-void/6"
          />
          <div className="space-y-2 px-2 pb-2">
            <div className="flex items-center gap-2 text-[11px] text-stone-muted">
              <span className="eyebrow text-saffron">{post.category}</span>
              <div className="size-1 rounded-full bg-void/20" />
              <span>{new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
            </div>
            <h2 className="font-display text-display-sm text-void leading-snug line-clamp-2 group-hover:text-saffron transition-colors duration-200">
              {post.title}
            </h2>
            <p className="font-sans text-sm text-stone-editorial leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>
          </div>
        </Link>
      ))}
    </div>
  )
}
