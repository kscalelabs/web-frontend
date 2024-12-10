import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Navbar from "@/components/navbar/navbar";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  // const scrollbar: string = "scrollbar-visible";
  // useEffect(() => {
  //     let scrollTimeout: NodeJS.Timeout | undefined;
  //
  //     const handleScroll = () => {
  //         document.body.classList.add(scrollbar);
  //         clearTimeout(scrollTimeout);
  //
  //         scrollTimeout = setTimeout(() => {
  //             document.body.classList.remove(scrollbar);
  //         }, 2000);
  //     };
  //
  //     window.addEventListener("scroll", handleScroll);
  //
  //     return () => {
  //         window.removeEventListener("scroll", handleScroll);
  //     };
  // }, []);
  return (
    <>
      <Head>
        <title>K-Scale</title>
        <meta name="description" content="Buy, sell and build androids online" />
        <meta
          name="keywords"
          content="K-Scale Labs, Robot, Robots, Humanoid Robots, Droids, Androids, "
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon_16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon_32x32.png" />

        <meta name="msapplication-TileColor" content="#EA530E" />
        <meta name="msapplication-TileImage" content="/favicons/favicon_144x144.png" />

        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/favicon_180x180.png" />

        <link
          rel="apple-touch-icon-precomposed"
          sizes="180x180"
          href="/favicons/favicon_180x180.png"
        />

        <link rel="icon" type="image/png" sizes="192x192" href="/favicons/favicon_192x192.png" />

        <link rel="icon" type="image/png" sizes="194x194" href="/favicons/favicon_194x194.png" />

        <link rel="mask-icon" href="/favicons/favicon_svg.svg" color="#EA530E" />

        <link rel="icon" sizes="32x32 48x48" type="image/x-icon" href="/favicons/favicon.ico" />

        <link rel="shortcut icon" type="image/x-icon" href="/favicons/favicon.ico" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
