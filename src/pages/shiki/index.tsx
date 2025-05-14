// pages/shiki.tsx
import type { GetStaticProps } from "next";
import type { BundledLanguage } from "shiki";
import { codeToHtml } from "shiki";
import { CodeBlock } from "@/components/ui/Code/CopyCode";

interface Props {
  html: string;
  raw: string;
}

export default function Page({ html, raw }: Props) {
  return (
    <main>
      <section className="section">
        <div className="section-container">
          <hgroup>
            <h2>Hello Example</h2>
            <CodeBlock html={html} raw={raw} />
          </hgroup>
        </div>
      </section>
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
      html: helloHtml,
      raw: helloCode,
    },
  };
};
