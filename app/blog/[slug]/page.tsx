"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import ScrollAnimate from "@/components/ScrollAnimate";
import { blogPosts } from "@/data/blogData";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  ArrowRight,
  Share2,
  Facebook,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Không tìm thấy bài viết</h1>
        <Button asChild>
          <Link href="/blog">
            <ArrowLeft className="mr-1 h-4 w-4" /> Quay lại Blog
          </Link>
        </Button>
      </div>
    );
  }

  // Extract headings for TOC
  const headings = post.content
    .split("\n\n")
    .filter((b) => b.startsWith("## "))
    .map((b) => b.replace("## ", ""));

  const related = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);
  const allRelated =
    related.length < 3
      ? [
          ...related,
          ...blogPosts
            .filter((p) => p.slug !== post.slug && !related.includes(p))
            .slice(0, 3 - related.length),
        ]
      : related;

  const currentUrl =
    typeof window !== "undefined" ? window.location.href : "";

  return (
    <>
      {/* Cover image */}
      <section className="relative">
        <div className="aspect-[21/9] md:aspect-[3/1] w-full overflow-hidden bg-secondary">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
        </div>

        <div className="container max-w-4xl relative -mt-32 md:-mt-40 z-10 pb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-primary-foreground/80 hover:text-primary-foreground bg-primary/60 backdrop-blur-sm px-3 py-1.5 rounded-full mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Quay lại Blog
          </Link>
          <span className="inline-block text-xs font-semibold bg-primary text-primary-foreground px-4 py-1.5 rounded-full mb-4 ml-3">
            {post.category}
          </span>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight text-foreground">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="h-4 w-4 text-primary" />
              </div>
              <span className="font-medium text-foreground">{post.author}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 md:py-12">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10">
            {/* Main article */}
            <article>
              {/* Excerpt highlight */}
              <div className="p-5 bg-primary/5 border-l-4 border-primary rounded-r-xl mb-8 text-muted-foreground italic leading-relaxed">
                {post.excerpt}
              </div>

              <div className="prose prose-lg max-w-none">
                {post.content.split("\n\n").map((block, i) => {
                  if (block.startsWith("## ")) {
                    const text = block.replace("## ", "");
                    const id = text
                      .toLowerCase()
                      .replace(/[^a-z0-9\s]/g, "")
                      .replace(/\s+/g, "-");
                    return (
                      <h2
                        key={i}
                        id={id}
                        className="text-xl md:text-2xl font-bold mt-10 mb-4 text-foreground scroll-mt-24"
                      >
                        {text}
                      </h2>
                    );
                  }
                  if (block.startsWith("**") && block.endsWith("**")) {
                    return (
                      <h3
                        key={i}
                        className="text-lg font-semibold mt-6 mb-3 text-foreground"
                      >
                        {block.replace(/\*\*/g, "")}
                      </h3>
                    );
                  }
                  if (block.startsWith("- ")) {
                    return (
                      <ul key={i} className="space-y-2.5 my-5">
                        {block.split("\n").map((line, j) => (
                          <li
                            key={j}
                            className="text-muted-foreground flex items-start gap-3"
                          >
                            <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                            <span>{line.replace("- ", "")}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  if (block.startsWith("| ")) return null;
                  if (block.match(/^\d+\.\s\*\*/)) {
                    return (
                      <ol key={i} className="space-y-3 my-5">
                        {block.split("\n").map((line, j) => {
                          const parts = line.split(/(\*\*.*?\*\*)/g);
                          return (
                            <li
                              key={j}
                              className="text-muted-foreground flex items-start gap-3"
                            >
                              <span className="h-6 w-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                                {j + 1}
                              </span>
                              <span>
                                {parts.map((part, k) =>
                                  part.startsWith("**") && part.endsWith("**") ? (
                                    <strong
                                      key={k}
                                      className="text-foreground font-semibold"
                                    >
                                      {part.replace(/\*\*/g, "")}
                                    </strong>
                                  ) : (
                                    part.replace(/^\d+\.\s/, "")
                                  )
                                )}
                              </span>
                            </li>
                          );
                        })}
                      </ol>
                    );
                  }
                  const parts = block.split(/(\*\*.*?\*\*)/g);
                  return (
                    <p
                      key={i}
                      className="text-muted-foreground leading-relaxed mb-5 text-[1.05rem]"
                    >
                      {parts.map((part, j) =>
                        part.startsWith("**") && part.endsWith("**") ? (
                          <strong key={j} className="text-foreground font-semibold">
                            {part.replace(/\*\*/g, "")}
                          </strong>
                        ) : (
                          part
                        )
                      )}
                    </p>
                  );
                })}
              </div>

              {/* Share */}
              <div className="mt-10 pt-6 border-t flex items-center gap-4">
                <span className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <Share2 className="h-4 w-4" /> Chia sẻ:
                </span>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>

              {/* Author box */}
              <div className="mt-8 p-6 bg-secondary rounded-2xl flex items-start gap-5">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <User className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">
                    {post.author}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Đội ngũ chuyên gia công nghệ tại VMST Solutions, với hơn 10
                    năm kinh nghiệm trong lĩnh vực thiết kế web, marketing và
                    giải pháp quản lý doanh nghiệp.
                  </p>
                </div>
              </div>

              {/* In-article CTA */}
              <div className="mt-10 p-8 bg-gradient-to-br from-primary to-primary/80 rounded-2xl text-center">
                <h3 className="text-xl font-bold text-primary-foreground mb-2">
                  Cần hỗ trợ về {post.category}?
                </h3>
                <p className="text-primary-foreground/80 mb-5">
                  Liên hệ VMST Solutions để nhận tư vấn miễn phí.
                </p>
                <Button variant="secondary" size="lg" asChild>
                  <Link href="/lien-he">
                    Nhận tư vấn <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-8">
                {/* TOC */}
                {headings.length > 0 && (
                  <div className="p-5 bg-secondary rounded-2xl">
                    <h4 className="font-bold text-sm uppercase tracking-wider text-foreground mb-4">
                      Mục lục
                    </h4>
                    <nav className="space-y-2">
                      {headings.map((h, i) => {
                        const id = h
                          .toLowerCase()
                          .replace(/[^a-z0-9\s]/g, "")
                          .replace(/\s+/g, "-");
                        return (
                          <a
                            key={i}
                            href={`#${id}`}
                            className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1 border-l-2 border-transparent hover:border-primary pl-3"
                          >
                            {h}
                          </a>
                        );
                      })}
                    </nav>
                  </div>
                )}

                {/* Category posts */}
                <div className="p-5 bg-secondary rounded-2xl">
                  <h4 className="font-bold text-sm uppercase tracking-wider text-foreground mb-4">
                    Cùng chuyên mục
                  </h4>
                  <div className="space-y-3">
                    {blogPosts
                      .filter(
                        (p) =>
                          p.category === post.category && p.slug !== post.slug
                      )
                      .slice(0, 4)
                      .map((p) => (
                        <Link
                          key={p.slug}
                          href={`/blog/${p.slug}`}
                          className="block text-sm text-muted-foreground hover:text-primary transition-colors leading-snug"
                        >
                          {p.title}
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related posts */}
      <section className="py-14 md:py-20 bg-secondary">
        <div className="container">
          <ScrollAnimate>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              Bài viết liên quan
            </h2>
          </ScrollAnimate>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {allRelated.map((p, i) => (
              <ScrollAnimate key={p.slug} delay={i * 100}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="group block rounded-2xl overflow-hidden border bg-background hover:shadow-xl hover:border-primary/20 transition-all duration-300"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <span className="inline-block text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full mb-3">
                      {p.category}
                    </span>
                    <h3 className="font-bold mb-2 group-hover:text-primary transition-colors leading-snug line-clamp-2">
                      {p.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {p.excerpt}
                    </p>
                  </div>
                </Link>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetail;
