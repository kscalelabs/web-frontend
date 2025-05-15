import Head from "next/head";
import React from "react";

export default function Privacy() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Privacy | K-Scale Labs</title>
        <meta
          name="description"
          content="K-Scale Labs is building the most integrated open-source stack—from hardware to machine learning—powering the next era of general-purpose robotics."
        />
        <meta
          name="keywords"
          content="K-Scale Labs, Robot, Robots, Humanoid Robots, robotics, humanoid robotics, humanoids, Droids, droid, Androids, android, AI, Embodied intelligence, Embodied AI, Artificial intelligence, embodied artificial intelligence, AI robots, AI robotics, open source, open-source, open source robot, open-source robotics, open source AI, open-source AI, open source artificial intelligence, open-source artificial intelligence, open source humanoid, open-source humanoid, k scale, kscale, kscale labs, k scale labs, k-scale, kscale ai, k-scale ai, k-scale labs ai"
        />
        <meta property="og:title" content="K-Scale Labs" />
        <meta
          property="og:description"
          content="K-Scale Labs is building the most integrated open-source stack—from hardware to machine learning—powering the next era of general-purpose robotics"
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
      <main className="px-layout py-4 flex flex-col">
        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="mb-4 text-sm text-background">
          Last updated {new Date().toLocaleDateString()}
        </p>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">1. Information We Collect</h2>
          <p>We collect information you provide directly to us when using our services.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">2. How We Use Your Information</h2>
          <p>We use the information we collect to provide, maintain, and improve our services.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">3. Information Sharing and Disclosure</h2>
          <p>
            We do not share your personal information with third parties except as described in this
            policy.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">4. Data Security</h2>
          <p>
            We take reasonable measures to help protect your personal information from loss, theft,
            misuse, and unauthorized access.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">5. Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify you of any changes
            by posting the new policy on this page.
          </p>
        </section>

        <p className="mt-8 text-sm text-background">
          © {new Date().getFullYear()} K-Scale Labs. All Rights Reserved.
        </p>
      </main>
    </>
  );
}
