import Link from "next/link";
import { BlogCard } from "@/components/ui/card";
import type { BlogPost } from "@/lib/data";
import { formatDate } from "@/lib/utils";

interface StoriesSectionProps {
  posts: BlogPost[];
}

export default function StoriesSection({ posts }: StoriesSectionProps) {
  return (
    <section className="section-spacing bg-cream border-t border-void/[0.06]">
      <div className="container-site">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-xs uppercase tracking-widest font-sans font-semibold text-saffron">
              News from the field
            </p>
            <h2 className="font-display text-display-md text-void mt-1.5 font-light">
              Latest Stories
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-void/50 text-xs font-semibold hover:text-void transition-colors inline-flex items-center gap-1.5 uppercase tracking-wide"
          >
            View all
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 lg:pb-0 lg:grid lg:grid-cols-3 snap-x snap-mandatory lg:snap-none">
          {posts.map((post) => (
            <div
              key={post.slug}
              className="flex-shrink-0 w-[80vw] sm:w-[60vw] lg:w-auto snap-start"
            >
              <BlogCard
                title={post.title}
                category={post.category}
                date={formatDate(post.date)}
                image={post.image}
                href={`/blog/${post.slug}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
