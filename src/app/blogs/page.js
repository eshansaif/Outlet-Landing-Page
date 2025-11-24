import Link from "next/link";
import Image from "next/image";

const accentBorder =
  "border border-slate-200/70 dark:border-white/10 shadow-[0_25px_70px_rgba(15,23,42,0.08)] dark:shadow-[0_25px_70px_rgba(2,6,23,0.8)]";

const BLOGS_API_URL = process.env.NEXT_PUBLIC_BLOGS_API_URL;

async function getBlogs() {
  try {
    if (!BLOGS_API_URL) {
      console.warn("NEXT_PUBLIC_BLOGS_API_URL is not set");
      return [];
    }

    const res = await fetch(BLOGS_API_URL, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!res.ok) {
      console.warn("Failed to fetch blogs:", res.status);
      return [];
    }

    const data = await res.json();
    if (Array.isArray(data)) {
      return data;
    }

    if (data?.data && Array.isArray(data.data)) {
      return data.data;
    }

    return [];
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

const Blogs = async () => {
  const blogs = await getBlogs();

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white via-slate-50 to-white dark:from-[#030615] dark:via-[#050b1d] dark:to-[#030615] text-slate-900 dark:text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-40 blur-3xl">
          <div className="absolute inset-y-0 left-1/3 w-[800px] rounded-full bg-[radial-gradient(circle,_rgba(59,130,246,0.35),_transparent_70%)]" />
          <div className="absolute top-10 right-0 w-[500px] rounded-full bg-[radial-gradient(circle,_rgba(14,165,233,0.35),_transparent_70%)]" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 pb-24 pt-10 text-center">
          <span className="text-xs uppercase tracking-[0.5em] text-slate-500 dark:text-slate-300">
            Our Blog
          </span>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            Insights & Updates from{" "}
            <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-emerald-400 bg-clip-text text-transparent">
              Outlet Expense
            </span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-white/70 md:w-3/4">
            Stay informed with the latest industry trends, product updates, and expert insights
            on inventory management and retail technology.
          </p>
        </div>
      </section>

      {/* Blogs Grid or Empty State */}
      <section className="relative w-full pb-20">
        <div className="mx-auto max-w-6xl px-6">
          {blogs && Array.isArray(blogs) && blogs.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {blogs.map((blog) => (
                <article
                  key={blog.id}
                  className={`group flex flex-col overflow-hidden rounded-3xl bg-white/80 transition-all duration-300 hover:scale-105 dark:bg-white/5 ${accentBorder} hover:shadow-2xl`}
                >
                  {blog.image && (
                    <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                      <Image
                        src={blog.image}
                        alt={blog.title || "Blog image"}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        unoptimized
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    {blog.category && (
                      <span className="mb-2 inline-block w-fit rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-600 dark:bg-blue-300/10 dark:text-blue-300">
                        {blog.category}
                      </span>
                    )}
                    <h2 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white line-clamp-2">
                      {blog.title}
                    </h2>
                    {blog.excerpt && (
                      <p className="mb-4 flex-1 text-sm text-slate-600 dark:text-white/70 line-clamp-3">
                        {blog.excerpt}
                      </p>
                    )}
                    <div className="flex items-center justify-between border-t border-slate-200 pt-4 dark:border-white/10">
                      {blog.date && (
                        <span className="text-xs text-slate-500 dark:text-white/60">
                          {new Date(blog.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      )}
                      {blog.slug && (
                        <Link
                          href={`/blogs/${blog.slug}`}
                          className="text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                          Read More →
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            // Empty State
            <div className="flex min-h-[400px] items-center justify-center">
              <div className={`rounded-3xl bg-white/80 p-12 text-center dark:bg-white/5 ${accentBorder}`}>
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 dark:bg-white/10">
                  <svg
                    className="h-10 w-10 text-slate-400 dark:text-white/40"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-2xl font-semibold text-slate-900 dark:text-white">
                  No Blogs Available
                </h3>
                <p className="text-slate-600 dark:text-white/70">
                  We're working on bringing you insightful content. Check back soon for updates!
                </p>
                <div className="mt-8">
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                      />
                    </svg>
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA - Only show if blogs exist */}
      {blogs && Array.isArray(blogs) && blogs.length > 0 && (
        <section className="relative w-full py-20">
          <div className="absolute inset-0 opacity-30 blur-3xl">
            <div className="absolute bottom-0 right-1/4 w-[600px] rounded-full bg-[radial-gradient(circle,_rgba(52,211,153,0.2),_transparent_70%)]" />
          </div>
          <div className="relative mx-auto max-w-6xl px-6 text-center">
            <div className={`rounded-3xl bg-white/80 p-10 dark:bg-white/5 ${accentBorder}`}>
              <h2 className="text-3xl font-semibold md:text-4xl">
                Stay in the{" "}
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  loop
                </span>
              </h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-white/70 mx-auto md:w-3/4">
                Subscribe to our newsletter for the latest updates, insights, and exclusive content.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  Get Started
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Blogs;

