import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

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
      </Head>
      <Component {...pageProps} />
    </>
  );
}
