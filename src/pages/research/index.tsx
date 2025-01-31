import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Layout from "../../components/Layout";

const RESEARCH_PATH = path.join(process.cwd(), "src/content/research");

export async function getStaticProps() {
  const files = fs.readdirSync(RESEARCH_PATH);

  const posts = files.map((file) => {
    const filePath = path.join(RESEARCH_PATH, file);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContents);

    return {
      slug: file.replace(".mdx", ""),
      title: data.title || "Untitled",
      description: data.description || "No description available.",
      // We rely on `data.date` for sorting. Make sure it's a valid date format (e.g. "YYYY-MM-DD" or "September 9, 2024").
      date: data.date || "Unknown date",
      image: data.image || "/images/research/css-pattern1.png",
    };
  });

  // Sort by oldest date first
  const sortedPosts = posts.sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  return { props: { posts: sortedPosts } };
}

export default function ResearchIndex({ posts }: { posts: any[] }) {
  return (
    <Layout>
      {/* 1) Override .mdx-content paragraph text alignment */}
      <style jsx global>{`
        .mdx-content p {
          text-align: left !important;
          font-size: 70% !important;
        }
      `}</style>

      <div className="min-h-screen px-6 py-8 max-w-5xl mx-auto">
        <h1 className="text-3xl font-semibold mb-2 text-left">Research</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-fr">
          {posts.map((post) => (
            <Link key={post.slug} href={`/research/${post.slug}`} className="group card-link">
              <div className="flex flex-col h-full rounded-lg overflow-hidden shadow-md bg-white dark:bg-gray-900 transition transform hover:-translate-y-1">
                {/* Top image background */}
                <div className="relative w-full aspect-[16/9] overflow-hidden">
                  <div
                    className="absolute top-0 left-0 w-full h-[200%]"
                    style={{
                      backgroundImage: `url(${post.image})`,
                      backgroundSize: "100% auto",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "top center",
                    }}
                  ></div>
                </div>

                <div className="p-4 text-left flex flex-col flex-1">
                  <h2 className="card-h2 text-base font-medium leading-snug line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-3">
                    {post.description}
                  </p>
                  <div className="mt-auto pt-2">
                    <p className="text-xs text-gray-500">{post.date}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
