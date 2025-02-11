import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";
import readingTime from "reading-time";
import Footer from "@/components/footer/footer";
import NavBar from "@/components/navbar/navbar";
import { DownArrowIcon } from "@/components/iconography/Iconography";

const RESEARCH_PATH = path.join(process.cwd(), "src/content/research");

export async function getStaticProps() {
  const files = fs.readdirSync(RESEARCH_PATH);

  const posts = files.map((file) => {
    const filePath = path.join(RESEARCH_PATH, file);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const { content, data } = matter(fileContents);
    const stats = readingTime(content);

    return {
      slug: file.replace(".mdx", ""),
      title: data.title || "Untitled",
      description: data.description || "No description available.",
      date: data.date || "Unknown date",
      image: data.image || "/images/research/css-pattern1.png",
      readingTime: stats.text,
    };
  });

  const sortedPosts = posts.sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  return { props: { posts: sortedPosts } };
}

export default function ResearchIndex({ posts }: { posts: any[] }) {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="gap-y-4">
        <header className="col-span-full flex flex-row min-h-[90svh] auto-rows-auto items-center text-foreground bg-background relative overflow-hidden px-[5vw]">
          <div className="flex flex-col self-end gap-5 justify-center items-start">
            <div className="flex flex-col gap-4">
              <h1 className="text-[4.2rem] tracking-tight">Beyond Black Boxes</h1>
              <h4 className="text-[1.1rem] tracking-tight leading-snug">
                Unraveling the science behind intelligent general-purpose
                <br />
                robots and shaping the future of human-machine interaction.
              </h4>
            </div>
          </div>
        </header>
        <div className="flex col-span-full pt-4 justify-center">
          <DownArrowIcon />
        </div>
        <div className="col-span-full flex flex-col items-start text-justify auto-rows-auto text-foreground bg-background relative overflow-hidden px-[5vw] py-20">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/research/${post.slug}`}
              className="flex flex-row justify-start w-full gap-4 border-b border-white/20 py-6"
            >
              <div className="w-48 flex flex-col gap-2 py-2">
                <p className="font-planar text-xs">{post.date}</p>
                <p className="font-planar text-foreground70 text-xs">{post.readingTime}</p>
              </div>
              <div className="flex flex-col w-full items-start justify-start gap-2">
                <h3 className="text-2xl text-left font-planar">{post.title}</h3>
                <p className="text-foreground70 tracking-tight max-w-2xl leading-snug text-body text-left">
                  {post.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}
