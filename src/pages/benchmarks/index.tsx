import type { GetStaticProps } from "next";
import type { BundledLanguage } from "shiki";
import { codeToHtml } from "@/components/util/shiki";
import { Hero } from "@/components/Layout/Hero";
import { CodeBlock } from "@/components/ui/Code/CopyCode";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Arrow from "@/assets/icons/icon_arrowTR.svg";
import { Button } from "@/components/ui/Button/Button";
import Discord from "@/assets/icons/icon_discord.svg";

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
      <Hero heading={"The humanoid robotics challenge"} eyebrow={"GPR-AGI benchmarks"}>
        Train an RL policy tonight; watch it run on a real humanoid tomorrow.
      </Hero>
      <section className="section--short">
        <div className="section-container">
          <div className="section-prose2 mb-6">
            {/* <h2 className="text-body-2 font-medium text-stone-400 mb-1">Products</h2> */}
            <h2 className="text-heading-2 mb-6">
              This leaderboard is a challenge for people who want to try programming and training
              humanoid robots in simulation and watching it run on a real humanoid tomorrow.
            </h2>
            <p className="text-body-1 mb-12">
              All submissions that pass sim2sim evaluation will get a spot on the leaderboard, and
              we will be grateful for your assistance in helping us move towards our mission.
            </p>
            <p className="text-body-1">
              Our office is based in Palo Alto, and we would love to invite all of you to visit and
              see the robots yourself and RL deployment submissions live. You can schedule a visit
              here:
            </p>
          </div>
        </div>
      </section>
      <section className="section--short">
        <div className="section-container">
          <div className="section-prose2 mb-6">
            <h2 className="text-heading-2 mb-3">
              We&apos;ve got prizes{" "}
              <span className="text-body-2 text-stone-500">(hint: free robots)</span>
            </h2>
            <p className="text-body-1 mb-6">
              For the first 100 people that submits to the <Link href="#challenge">challenge</Link>{" "}
              with a policy, we&apos;ll ship you a cool PCB ruler and t-shirt designed by us as a
              gift.
            </p>
            <p className="text-body-1">
              For the <Link href="#challenge">top contender</Link> for each category every month,
              we&apos;ll ship you a K-Bot and Z-Bot for 3 months for you to develop on for free.
            </p>
          </div>
        </div>
      </section>
      <section className="section--short">
        <div className="section-container">
          <div className="section-prose2">
            {/* <h2 className="text-body-2 font-medium text-stone-400 mb-1">Products</h2> */}
            <h2 className="text-heading-2 mb-3">Quick start in under 5 mins</h2>
            <p className="text-body-1 mb-6">
              Develop in your own environment using the code below or set up in Google Colab in one
              click.
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
          <div className="section-prose2">
            <h2 className="text-heading-1 col-span-default col-start-default mb-6">
              Start zero-shot transfer sim-to-real training with K-Sim
            </h2>
            <p className="text-body-1 mb-12">
              K-SIM is an open-source library for GPU-accelerated robot learning and sim-to-real
              transfer, made for movements from simple walking to complex human imitation.
            </p>
            <div className="mb-6 w-full aspect-video rounded-md @xs:rounded-lg @sm:rounded-xl @lg:rounded-2xl overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/nMkS6VSh-yw?autoplay=0&rel=0"
                title="See how our ML engineer Ali uses K-Sim"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="flex gap-4 md:gap-6">
              <a
                href="https://github.com/kscalelabs/ksim"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex flex-wrap text-body-2"
              >
                Github
                <Arrow className="size-6 group-hover:translate-x-[12.5%] group-hover:-translate-y-[12.5%] group-focus:translate-x-[12.5%] group-focus:-translate-y-[12.5%] transition-transform duration-300" />
              </a>
              <a
                href="https://docs.kscale.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex flex-wrap text-body-2"
              >
                Docs
                <Arrow className="size-6 group-hover:translate-x-[12.5%] group-hover:-translate-y-[12.5%] group-focus:translate-x-[12.5%] group-focus:-translate-y-[12.5%] transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="section--short">
        <div className="section-container">
          <div className="section-prose2">
            <h2 className="text-heading-1 col-span-default col-start-default mb-6">Challenges</h2>
            <p className="text-body-1 col-span-default col-start-default mb-12">
              We&apos;re planning to announce bi-weekly challenges in the future. Every week, we
              will deploy top policies on the real robot, which we&apos;ll livestream.
            </p>
            <hgroup className="col-span-default col-start-default mb-12">
              {/* <h2 className="text-body-2 font-medium text-stone-400 mb-1">Products</h2> */}
              <h3 className="text-heading-2 mb-2">Basic walk</h3>
              <p>
                Reach +1 / step if COM forward velocity &gt; 0.5 ms<sup>-1</sup>
              </p>
            </hgroup>
            <hgroup className="col-span-default col-start-default mb-12">
              {/* <h2 className="text-body-2 font-medium text-stone-400 mb-1">Products</h2> */}
              <h3 className="text-heading-2 mb-2">Uneven terrain</h3>
              <p>Survive walking through 100m of Perlin hills</p>
            </hgroup>
            <hgroup className="col-span-default col-start-default mb-12">
              {/* <h2 className="text-body-2 font-medium text-stone-400 mb-1">Products</h2> */}
              <h3 className="text-heading-2 mb-2">Push recovery</h3>
              <p>Keep torso upright after 5 random shoves of at least 50 Newtons</p>
            </hgroup>
            <hgroup className="col-span-default col-start-default mb-12">
              {/* <h2 className="text-body-2 font-medium text-stone-400 mb-1">Products</h2> */}
              <h3 className="text-heading-2 mb-2">Human motion imitation</h3>
              <p>Track a 30-sec motion capture clip</p>
            </hgroup>
          </div>
        </div>
      </section>
      <section className="section--short">
        <div className="section-container">
          <div className="section-prose2">
            <h2 className="text-heading-1 col-span-default col-start-default mb-6">
              How can I submit?
            </h2>
            <ol className="list-inside list-decimal text-body-1 mb-12">
              <li className="mb-6">Export your policy to a K-Infer model</li>
              <li className="mb-6">Evaluate in sim2sim and upload a Youtube video</li>
              <li className="mb-6">
                Upload your submission to our{" "}
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="underline text-orange-500 hover:text-orange-400 whitespace-nowrap font-medium transition-colors duration-300"
                >
                  Discord
                </a>
              </li>
              <li className="mb-6">Post the link in #benchmark-submission on Discord</li>
            </ol>
            <p className="mb-4">
              One of us will run your policy on the real robot and add the results to the
              leaderboard.
            </p>
            <p className="mb-4">
              We try to run new policies every night, so you shouldn&apos;t have to wait too long to
              see your policy on the leaderboard.
            </p>
            <p>
              We will post your sim2sim and sim2real deployment video on X/Twitter, and on top of
              passing basic, evaluation, your rank is determined by the number of likes on Twitter.
            </p>
          </div>
        </div>
      </section>
      <section className="section--short">
        <div className="section-container">
          <div className="section-prose2">
            <h2 className="text-heading-1 col-span-default col-start-default mb-6">
              Frequently asked questions
            </h2>
            <ul className="mb-12">
              <li className="mb-6">
                <h3 className="text-body-2 font-bold mb-2">What license should I use?</h3>
                <p>
                  MIT, as all of our{" "}
                  <a
                    href="https://github.com/kscalelabs"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="underline text-orange-500 hover:text-orange-400 whitespace-nowrap font-medium transition-colors duration-300"
                  >
                    stack
                  </a>
                </p>
              </li>
              <li className="mb-6">
                <h3 className="text-body-2 font-bold mb-2">Can I use use my own algorithm?</h3>
                <p>
                  Yes, you can! Check out our{" "}
                  <a
                    href="https://docs.kscale.dev/docs/task#/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="underline text-orange-500 hover:text-orange-400 whitespace-nowrap font-medium transition-colors duration-300"
                  >
                    docs
                  </a>{" "}
                  for more details.
                </p>
              </li>
              <li className="mb-6">
                <h3 className="text-body-2 font-bold mb-2">Are you hiring?</h3>
                <p>
                  Yes, we are. We currently have{" "}
                  <Link
                    href="/careers"
                    className="underline text-orange-500 hover:text-orange-400 whitespace-nowrap font-medium transition-colors duration-300"
                  >
                    3 open roles
                  </Link>{" "}
                  for engineering.
                </p>
              </li>
              <li className="mb-6">
                <h3 className="text-body-2 font-bold mb-2">Where should I submit issues?</h3>
                <p>
                  Please submit GitHub issue at the source of the repos for{" "}
                  <a
                    href="https://github.com/kscalelabs/ksim"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="underline text-orange-500 hover:text-orange-400 whitespace-nowrap font-medium transition-colors duration-300"
                  >
                    K-SIM
                  </a>{" "}
                  ,{" "}
                  <a
                    href="https://github.com/kscalelabs/ksim-gym"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="underline text-orange-500 hover:text-orange-400 whitespace-nowrap font-medium transition-colors duration-300"
                  >
                    K-SIM Gym
                  </a>{" "}
                  , and{" "}
                  <a
                    href="https://github.com/kscalelabs/kinfer"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="underline text-orange-500 hover:text-orange-400 whitespace-nowrap font-medium transition-colors duration-300"
                  >
                    K-Infer
                  </a>{" "}
                </p>
              </li>
            </ul>
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
