import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { MDXRemote } from "next-mdx-remote";
import Layout from "../../components/Layout";
import { serialize } from "next-mdx-remote/serialize";

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

  const mdxSource = await serialize(content);
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
      <header className="flex flex-col w-[90%] mx-auto gap-4 items-start justify-end pb-10 min-h-[60svh]">
        <h1 className="!text-3xl !m-0 !font-medium">{frontMatter.title}</h1>
        <div className="flex items-center w-full justify-between text-xs">
          <div className="flex items-center gap-4">
            <p>{frontMatter.author}</p>
            <p>{frontMatter.date}</p>
          </div>
          <p className="text-foreground70">{frontMatter.readingTime}</p>
        </div>
      </header>
      <article className="mdx-content w-[90%] mx-auto !p-0">
        <MDXRemote {...source} />
      </article>
    </Layout>
  );
}
