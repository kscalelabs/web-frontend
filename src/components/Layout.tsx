import React from "react";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";

// 1. Import MDXProvider and next/image
import { MDXProvider } from "@mdx-js/react";
import Image from "next/image";

// 2. Define which components you want to expose to MDX
const mdxComponents = {
  // Now <Image> is available in your MDX by default
  Image,
  // You can add more custom MDX components here if needed
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    // 3. Wrap children with MDXProvider
    <MDXProvider components={mdxComponents}>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <article className="mdx-content flex-1 max-w-3xl mx-auto px-4 py-8">{children}</article>
        <Footer />
      </div>
    </MDXProvider>
  );
};

export default Layout;
