import { Hero } from "@/components/Layout/Hero";
import { CopyCode } from "@/components/ui/Code/CopyCode";
import Head from "next/head";
import Image from "next/image";

export default function Page() {
  return (
    <>
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
      <Hero heading={"Steer the future of robotics"} eyebrow={"GPR-AGI benchmarks"}>
        Join the open-source effort in benchmarking humanoid robotics locomotion and manipulation.
        K-Scale Labs makes it easier to rapidly test robotics policies using sim-to-real transfer.
      </Hero>
      <section className="section">
        <div className="section-container">
          <hgroup className="col-span-default col-start-default mb-6">
            {/* <h2 className="text-body-2 font-medium text-stone-400 mb-1">Products</h2> */}
            <h2 className="text-heading-1 mb-6">
              To date, there is no consensus metric for end-to-end humanoid autonomy and
              general-purpose control.
            </h2>
            <p className="text-body-1">
              Without benchmarks, it becomes increasingly difficult to transparently audit each
              advancement in robotics systems.
            </p>
          </hgroup>
        </div>
      </section>
      <section className="section">
        <div className="section-container">
          <h2 className="text-heading-1 col-span-default col-start-default mb-6">
            With K-SIM to train and deploy policies with sim-to-real
          </h2>
          <hgroup className="col-span-default col-start-default mb-6">
            {/* <h2 className="text-body-2 font-medium text-stone-400 mb-1">Products</h2> */}
            <h3 className="text-heading-2 mb-4">Quick start</h3>
            <ol className="list-decimal list-inside">
              <li>
                Create a new Github repository using our template.
                <CopyCode
                  string={"git clone https://github.com/kscalelabs/kscale-humanoid-benchmark.git"}
                  code={"git clone https://github.com/kscalelabs/kscale-humanoid-benchmark.git"}
                ></CopyCode>
              </li>
            </ol>
          </hgroup>
        </div>
      </section>
    </>
  );
}
