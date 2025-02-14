import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import readingTime from "reading-time";
import rehypeKatex from "rehype-katex";
import remarkFootnotes from "remark-footnotes";
import remarkMath from "remark-math";
import Layout from "../../components/Layout";

const RESEARCH_PATH = path.join(process.cwd(), "src/content/research");

export async function getStaticPaths() {
  const files = fs.readdirSync(RESEARCH_PATH);
  const paths = files.map((file) => ({
    params: { slug: file.replace(/\.mdx$/, "") },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const filePath = path.join(RESEARCH_PATH, `${params.slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContents);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkMath, remarkFootnotes as any],
      rehypePlugins: [rehypeKatex],
    },
  });
  const stats = readingTime(content);

  return {
    props: {
      source: mdxSource,
      frontMatter: { ...data, readingTime: stats.text },
    },
  };
}

export default function ResearchPost({ source, frontMatter }: { source: any; frontMatter: any }) {
  return (
    <Layout>
      <header className="flex flex-col w-[90%] mx-auto gap-2 items-start justify-end pb-10 min-h-[60svh]">
        <div className="flex flex-col gap-2">
          <div className="flex items-center w-full justify-between text-xs">
            <p className="m-0 text-sm">{frontMatter.date}</p>
            <p className="text-foreground70 m-0 text-sm">{frontMatter.readingTime}</p>
          </div>
          <h1 className="!text-3xl !m-0 !font-medium font-apparat">{frontMatter.title}</h1>
        </div>
        <div className="flex items-center w-full justify-between text-sm">
          <p>{frontMatter.author}</p>
        </div>
      </header>
      <article className="mdx-content w-[90%] mx-auto !p-0">
        <MDXRemote {...source} />
      </article>
    </Layout>
  );
}
