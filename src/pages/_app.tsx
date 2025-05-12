import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ReactLenis } from "lenis/dist/lenis-react";
import "katex/dist/katex.min.css";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
// import { Grid } from "@/components/grid/Grid";

const apparat = localFont({
  src: [
    {
      path: "../styles/fonts/KMR-Apparat-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-apparat",
});

const planar = localFont({
  src: [
    {
      path: "../styles/fonts/GT-Planar-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../styles/fonts/GT-Planar-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../styles/fonts/GT-Planar-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../styles/fonts/GT-Planar-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../styles/fonts/GT-Planar-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../styles/fonts/GT-Planar-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-planar",
});

const cofo = localFont({
  src: [
    {
      path: "../styles/fonts/CoFoSansMono-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../styles/fonts/CoFoSansMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-cofo",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${apparat.variable} ${planar.variable} ${cofo.variable} font-sans bg-background text-foreground`}
    >
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>K-Scale Labs</title>
        <meta
          name="description"
          content="Developing the world's most accessible platform for embodied intelligence. We're hackers, engineers, and researchers that believe in a world where robots are made for everyone."
        />
        <meta
          name="keywords"
          content="K-Scale Labs, Robot, Robots, Humanoid Robots, robotics, humanoid robotics, humanoids, Droids, droid, Androids, android, AI, Embodied intelligence, Embodied AI, Artificial intelligence, embodied artificial intelligence, AI robots, AI robotics, open source, open-source, open source robot, open-source robotics, open source AI, open-source AI, open source artificial intelligence, open-source artificial intelligence, open source humanoid, open-source humanoid, k scale, kscale, kscale labs, k scale labs, k-scale, kscale ai, k-scale ai, k-scale labs ai"
        />
        <meta property="og:title" content="K-Scale Labs" />
        <meta
          property="og:description"
          content="Developing the world's most accessible platform for embodied intelligence. We're hackers, engineers, and researchers that believe in a world where robots are made for everyone."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kscalelabs.com" />
        <meta property="og:site_name" content="K-Scale Labs" />
        <meta name="og:image" content="/meta/opengraph-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="K-Scale Labs" />
        <meta
          name="twitter:description"
          content="Developing the world's most accessible platform for embodied intelligence. We're hackers, engineers, and researchers that believe in a world where robots are made for everyone."
        />
        <meta name="twitter:image" content="/meta/twitter-image.png" />
      </Head>
      {/* <Grid /> */}
      <ReactLenis root options={{ smoothWheel: false }}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
        <GoogleAnalytics gaId="G-QG3C4SS5YY" />
      </ReactLenis>
    </div>
  );
}
