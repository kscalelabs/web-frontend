import type { GetStaticProps } from "next";
import type { BundledLanguage } from "shiki";
import { codeToHtml } from "@/components/util/shiki";
import { ArticleHero } from "@/components/Layout/Hero";
import { CodeBlock } from "@/components/ui/Code/CopyCode";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Arrow from "@/assets/icons/icon_arrowTR.svg";
import { Button } from "@/components/ui/Button/Button";
import Discord from "@/assets/icons/icon_discord.svg";
import Github from "@/assets/icons/icon_github.svg";
import Colab from "@/assets/icons/icon_colab.svg";

interface Props {
  html: string[];
  raw: string[];
}

export default function Page({ html, raw }: Props) {
  return (
    <main>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Benchmarks for General Purpose Robotics | K-Scale Labs</title>
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
      <ArticleHero
        heading={"The humanoid RL challenge"}
        // eyebrow={"GPR-AGI benchmarks"}
        href="https://github.com/kscalelabs/ksim-gym"
        src="/videos/landing/ksim_video_0514.mp4"
        external
        icon={Github}
        buttonText="Get started"
      >
        Train an RL policy tonight; watch it run on a real humanoid tomorrow.
      </ArticleHero>
      <section className="section--short">
        <div className="section-container">
          <div className="section-prose2">
            <h2 className="text-heading-1 col-span-default col-start-default mb-6">
              Start RL training and zero-shot sim-to-real transfer now with K-Sim
            </h2>
            <p className="text-body-1 mb-12">
              K-Sim is an open-source library for GPU-accelerated robot learning and sim-to-real
              transfer, made for RL whole-body control from simple walking to complex human
              imitation.
            </p>
            <h2 className="text-heading-2 mb-3">Quick start in under 5 mins</h2>
            <p className="text-body-1 mb-6">
              Develop in your own environment using the code below or set up in{" "}
              <a
                href="https://colab.research.google.com/github/kscalelabs/kscale-humanoid-benchmark/blob/master/train.ipynb"
                className="inline-flex items-center gap-1 font-medium underline relative w-fit hover:text-stone-400 focus:text-stone-400 peer-hover:text-stone-400 transition-colors duration-300"
              >
                Google Colab <Colab className="size-8" />
              </a>{" "}
              with one click.
            </p>
            <CodeBlock html={html[0]} raw={raw[0]} />
            <p className="text-body-3">
              Got stuck along the way? Ask any questions in our{" "}
              <a
                href="https://discord.com/invite/pVwubQT9Sg"
                target="_blank"
                rel="noreferrer noopener"
                className="underline text-orange-500 hover:text-orange-400 whitespace-nowrap font-medium transition-colors duration-300"
              >
                Discord
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="section--short">
        <div className="section-container">
          <div className="section-prose2 mb-6">
            {/* <h2 className="text-body-2 font-medium text-stone-400 mb-1">Products</h2> */}
            <h2 className="text-heading-2 mb-6">
              This leaderboard is a challenge for people who want to try programming and training
              humanoid robots in simulation and watching it run on a real humanoid tomorrow.
            </h2>
            <p className="text-body-2 mb-6">
              All submissions that pass sim2sim evaluation will get a spot on the leaderboard, and
              we will be grateful for your assistance in helping us move towards our mission.
            </p>
            <p className="text-body-2 mb-6">
              Our competition will feature exciting prizes&mdash;ranging from fun company-branded
              merch to free access to the full-size K-Bot robot! Stay tuned for more details.
            </p>
          </div>
        </div>
      </section>
      {/* <section className="section--short">
        <div className="section-container">
          <div className="section-prose2 mb-6">
            <p className="text-body-1 mb-6">
              Our competition will feature exciting prizes—ranging from fun company-branded merch to
              free access to the full-size K-Bot robot! Stay tuned for more details.
            </p>
          </div>
        </div>
      </section> */}

      <section className="section--short">
        <div className="section-container">
          <div className="section-prose2">
            <h2 className="text-heading-1 col-span-default col-start-default mb-6">Challenges</h2>
            <p className="text-body-1 col-span-default col-start-default mb-12">
              We&apos;re planning to announce bi-weekly challenges in the future. Every week, we
              will deploy top policies on the real robot, which we&apos;ll livestream.
            </p>
            <div className="gap-4 md:gap-6 lg:grid lg:grid-cols-2">
              <hgroup className="flex flex-col mb-12">
                {/* <h2 className="text-body-2 font-medium text-stone-400 mb-1">Products</h2> */}
                <h3 className="text-body-1 mb-1">Basic walk</h3>
                <p className="mb-4">
                  Reach +1 / step if COM forward velocity &gt; 0.5 ms<sup>-1</sup>
                </p>
                <figure className="mt-auto aspect-video overflow-hidden rounded-lg">
                  <Image
                    width="640"
                    height="360"
                    src="/photos/challenges/walk.gif"
                    alt="Example simulation of basic walk"
                    className="size-full object-cover"
                  />
                </figure>
              </hgroup>
              <hgroup className="flex flex-col mb-12">
                {/* <h2 className="text-body-2 font-medium text-stone-400 mb-1">Products</h2> */}
                <h3 className="text-body-1 mb-1">Uneven terrain</h3>
                <p className="mb-4">Survive walking through 100m of Perlin hills</p>
                <figure className="mt-auto aspect-video overflow-hidden rounded-lg">
                  <Image
                    width="640"
                    height="360"
                    src="/photos/challenges/terrain.gif"
                    alt="Example simulation of locomotion on uneven terrain"
                    className="size-full object-cover"
                  />
                </figure>
              </hgroup>
              <hgroup className="flex flex-col mb-12">
                {/* <h2 className="text-body-2 font-medium text-stone-400 mb-1">Products</h2> */}
                <h3 className="text-body-1 mb-1">Push recovery</h3>
                <p className="mb-4">
                  Keep torso upright after 5 random shoves of at least 50 Newtons
                </p>
                <figure className="mt-auto aspect-video overflow-hidden rounded-lg">
                  <Image
                    width="640"
                    height="360"
                    src="/photos/challenges/push.gif"
                    alt="Example simulation of push recovery"
                    className="size-full object-cover"
                  />
                </figure>
              </hgroup>
              <hgroup className="flex flex-col mb-12">
                {/* <h2 className="text-body-2 font-medium text-stone-400 mb-1">Products</h2> */}
                <h3 className="text-body-1 mb-1">Human motion imitation</h3>
                <p className="mb-4">Track a 30-sec motion capture clip</p>
                <figure className="mt-auto aspect-video overflow-hidden rounded-lg">
                  <Image
                    width="640"
                    height="360"
                    src="/photos/challenges/imitation.gif"
                    alt="Example simulation of human motion captured walking"
                    className="size-full object-cover"
                  />
                </figure>
              </hgroup>
            </div>

            <div className="flex flex-col items-center gap-4">
              <p className="text-center text-stone-500">
                Leaderboard coming soon. Star our repo for updates.
              </p>
              <Button href="https://github.com/kscalelabs/ksim-gym" external icon={Github}>
                Go to Github
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="section--short">
        <div className="section-container">
          <div className="section-prose2">
            <h2 className="text-heading-2 col-span-default col-start-default mb-6">
              How can I submit?
            </h2>
            <ol className="list-inside list-decimal text-body-2 mb-24">
              <li className="mb-6">Export your policy to a K-Infer model</li>
              <li className="mb-6">Evaluate in sim2sim and upload a Youtube video</li>
              <li className="mb-6">
                Upload your submission to our{" "}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdRHCm7QAMqfaonC7SiA3R-yahoz4A18J-ZqWv7WxKiuiwIWA/viewform?pli=1"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="underline text-orange-500 hover:text-orange-400 whitespace-nowrap font-medium transition-colors duration-300"
                >
                  Google Form
                </a>
              </li>
              <li className="mb-6">
                Post the link in #benchmark-submission on{" "}
                <a
                  href="https://discord.com/invite/pVwubQT9Sg"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="underline text-orange-500 hover:text-orange-400 whitespace-nowrap font-medium transition-colors duration-300"
                >
                  Discord
                </a>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="section pt-8">
        <div className="section-container">
          <hgroup className="col-span-full lg:col-span-4 lg:col-start-2 2xl:col-span-4 4xl:col-span-6 2xl:col-start-5 4xl:col-start-6 flex flex-col items-center text-center">
            <h2 className="text-heading-2 mb-6">
              Have any questions? Send them our way into our community Discord!
            </h2>

            <Button href="https://discord.com/invite/pVwubQT9Sg" external icon={Discord}>
              Join our Discord
            </Button>
          </hgroup>
        </div>
      </section>
    </main>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const steps = [
    `# 1. Clone template 
git clone --depth 1 https://github.com/kscalelabs/ksim-gym.git  # git‑lfs required 
cd kscale-humanoid-benchmark  

# 2. Install 
python -m venv .venv && source .venv/bin/activate 
pip install -r requirements.txt                 # Python ≥3.11 
pip install 'jax[cuda12]' --no-cache-dir        # optional, GPU  

# 3. Train baseline PPO for walking 
python -m train
`,
  ];

  const stepsAsHTML = await Promise.all(steps.map((step) => codeToHtml(step)));

  return {
    props: {
      html: stepsAsHTML,
      raw: steps,
    },
  };
};
