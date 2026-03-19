"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollAnimate from "@/components/ScrollAnimate";
import { blogPosts, blogCategories } from "@/data/blogData";
import { Calendar, Clock, ArrowRight, User, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("Tất cả");

  const filtered =
    activeCategory === "Tất cả"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container text-center">
          <ScrollAnimate>
            <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-3">
              VMST Blog
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              Kiến thức & Xu hướng Công nghệ
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Chia sẻ kiến thức chuyên sâu về thiết kế web, marketing, SEO và
              giải pháp quản lý doanh nghiệp.
            </p>
          </ScrollAnimate>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          {/* Categories */}
          <ScrollAnimate>
            <div className="flex flex-wrap gap-2 mb-12 justify-center">
              {blogCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
                      : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollAnimate>

          {/* Featured post */}
          {featured && (
            <ScrollAnimate>
              <Link
                href={`/blog/${featured.slug}`}
                className="group block mb-12 rounded-2xl overflow-hidden border bg-card hover:shadow-xl transition-all duration-300"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="aspect-[16/10] md:aspect-auto overflow-hidden">
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 md:p-10 flex flex-col justify-center">
                    <span className="inline-block text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full mb-4 w-fit">
                      {featured.category}
                    </span>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                      {featured.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {featured.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <User className="h-4 w-4" />
                        {featured.author}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4" />
                        {featured.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4" />
                        {featured.readTime}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Eye className="h-4 w-4" />
                        {featured.views.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollAnimate>
          )}

          {/* Posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post, i) => (
              <ScrollAnimate key={post.slug} delay={i * 80}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block rounded-2xl overflow-hidden border bg-card hover:shadow-xl hover:border-primary/20 transition-all duration-300 h-full"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full mb-3">
                      {post.category}
                    </span>
                    <h2 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="h-3.5 w-3.5" />
                        {post.views.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="container text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-primary-foreground mb-4">
            Cần tư vấn giải pháp?
          </h2>
          <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">
            Liên hệ VMST Solutions để nhận tư vấn miễn phí về giải pháp công
            nghệ phù hợp cho doanh nghiệp của bạn.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/lien-he">
              Liên hệ ngay <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Blog;
