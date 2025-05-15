import React from "react";
import Image from "next/image";
import { MDXProvider } from "@mdx-js/react";

const mdxComponents = {
  Image,
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <MDXProvider components={mdxComponents}>
      <div className="min-h-screen flex flex-col">
        <article className="w-full flex-1 !max-w-2xl mx-auto !pb-16 !px-4">{children}</article>
      </div>
    </MDXProvider>
  );
};

export default Layout;
