'use client';

import { motion } from 'framer-motion';
import { Section } from './section-wrapper';
import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';

interface Post {
  _id: string;
  title: string;
  slug: string;
  mainImage: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
  publishedAt: string;
  excerpt: string;
  author: {
    name: string;
    image: {
      asset: {
        _ref: string;
        _type: string;
      };
    };
  };
}

export const Blog = ({ posts }: { posts: Post[] }) => {
  if (!posts || posts.length === 0) return null;

  return (
    <Section id="blog">
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Latest Insights</h2>
        <div className="h-1.5 w-20 bg-primary/50 rounded-full mb-6" />
        <p className="text-muted-foreground max-w-2xl">
          Sharing my thoughts on technology, design, and digital experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {posts.map((post, index) => (
          <motion.article
            key={post._id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group glass rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-500 shadow-xl shadow-black/5"
          >
            <Link href={`/blog/${post.slug}`} className="block relative h-64 overflow-hidden">
              {post.mainImage && (
                <Image
                  src={urlForImage(post.mainImage).url()}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}
            </Link>

            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                  <Calendar className="h-3 w-3" />
                  <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <div className="h-1 w-1 rounded-full bg-border" />
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  <User className="h-3 w-3" />
                  <span>{post.author.name}</span>
                </div>
              </div>

              <Link href={`/blog/${post.slug}`}>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
              </Link>

              <p className="text-muted-foreground mb-8 text-sm leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>

              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:gap-4 transition-all"
              >
                Read Full Story
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
};
