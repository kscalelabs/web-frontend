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
      <style jsx global>{`
        .mdx-content p {
          line-height: 1.5 !important;
          text-align: left;
        }

        .mdx-content img {
          border-radius: 0px !important;
        }

        .mdx-content h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          text-align: left !important;
        }

        .mdx-content h1 {
          font-size: 2rem !important;
          margin-top: 1.5rem !important;
          margin-bottom: 1rem !important;
        }

        .mdx-content h2 {
          font-size: 1.75rem !important;
          margin-top: 1.5rem !important;
          margin-bottom: 1rem !important;
        }

        .mdx-content h3 {
           font-size: 1.5rem !important;
           margin-top: 1.5rem !important;
           margin-bottom: 1rem !important;
         }

         .mdx-content h4 {
           font-size: 1.25rem !important;
           margin-top: 1.5rem !important;
           margin-bottom: 1rem !important;
         }

         .mdx-content h5 {
           font-size: 1.125rem !important;
           margin-top: 1.5rem !important;
           margin-bottom: 1rem !important;
         }

         .mdx-content h6 {
           font-size: 1rem !important;
           margin-top: 1.5rem !important;
           margin-bottom: 1rem !important;
         }
      }
      `}</style>
      <header className="flex flex-col w-full gap-4 items-start justify-end pb-10 min-h-[60svh]">
        <h1 className="!text-3xl !m-0 !font-medium">{frontMatter.title}</h1>
        <div className="flex items-center w-full justify-between text-xs">
          <div className="flex items-center gap-4">
            <p>{frontMatter.author}</p>
            <p>{frontMatter.date}</p>
          </div>
          <p className="text-foreground70">{frontMatter.readingTime}</p>
        </div>
      </header>
      <article className="mdx-content mx-auto !p-0">
        <MDXRemote {...source} />
      </article>
    </Layout>
  );
}
