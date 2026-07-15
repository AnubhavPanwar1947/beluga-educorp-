import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  return (
    <>
      <header className="page-band">
        <div className="wrap">
          <p className="eyebrow">Blog</p>
          <h1>Blog</h1>
          <p className="section-lead">
            Updates and insights from Beluga Education Corp.
          </p>
        </div>
      </header>

      <section className="section wrap page-enter">
        <div className="blog-empty">
          <h2>Check back soon</h2>
          <p>Once posts are published, you&apos;ll see them here.</p>
        </div>
      </section>
    </>
  );
}
