import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data";
import { formatDate } from "@/lib/utils";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Post header */}
      <section className="section-spacing bg-void text-white">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <span className="tag-pill-dark">{post.category}</span>
            <h1 className="font-display text-display-xl text-white mt-6 text-balance">
              {post.title}
            </h1>
            <p className="text-white/50 text-sm mt-6">{formatDate(post.date)}</p>
          </div>
        </div>

        {/* Divider */}
        <div className="container-site mt-10">
          <div className="w-full h-px bg-white/10" />
        </div>
      </section>

      {/* Featured image */}
      <div className="container-site -mt-6 pb-4">
        <div className="relative aspect-[16/7] rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </div>
      </div>

      {/* Body */}
      <section className="section-spacing bg-cream">
        <div className="container-site">
          <div className="max-w-2xl mx-auto space-y-6">
            {post.body.map((paragraph, index) => (
              <p
                key={index}
                className="text-stone-editorial leading-relaxed text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Back link */}
          <div className="max-w-2xl mx-auto mt-16 pt-10 border-t border-stone-light/30">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-saffron text-sm font-semibold hover:text-saffron-dark transition-colors duration-200"
            >
              <span aria-hidden="true">←</span>
              Back to Stories
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
