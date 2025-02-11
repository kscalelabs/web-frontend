import fs from "fs";
import path from "path";
import matter from "gray-matter";
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

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
}

export default function ResearchPost({ source, frontMatter }: { source: any; frontMatter: any }) {
  return (
    <Layout>
      {/*
        No <header> here -- we'll rely on whatever is in the MDX
        (like # My Heading) to show the main title.
      */}
      <article className="mdx-content max-w-3xl mx-auto px-4 py-8">
        <MDXRemote {...source} />
      </article>
    </Layout>
  );
}
