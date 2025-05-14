// pages/shiki.tsx
import type { GetStaticProps } from "next";
import type { BundledLanguage } from "shiki";
import { codeToHtml } from "shiki";
import { CodeBlock } from "@/components/CodeBlock";

interface Props {
  helloHtml: string;
  addHtml: string;
}

export default function Page({ helloHtml, addHtml }: Props) {
  return (
    <main className="space-y-8">
      <h2>Hello Example</h2>
      <CodeBlock html={helloHtml} />

      <h2>Add Function</h2>
      <CodeBlock html={addHtml} />
    </main>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const helloCode = `console.log("Hello, world!");`;
  const addCode = `function add(a: number, b: number): number {\n  return a + b;\n}`;

  const [helloHtml, addHtml] = await Promise.all([
    codeToHtml(helloCode, { lang: "ts" as BundledLanguage, theme: "github-dark" }),
    codeToHtml(addCode, { lang: "ts" as BundledLanguage, theme: "github-dark" }),
  ]);

  return {
    props: {
      helloHtml,
      addHtml,
    },
  };
};

// components/CodeBlock.tsx
interface CodeBlockProps {
  html: string;
}

export function CodeBlock({ html }: CodeBlockProps) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
