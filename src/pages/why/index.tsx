import ArrowD from "@/assets/icons/icon_arrowD.svg";
import { Hero } from "@/components/Layout/Hero";
import Head from "next/head";

export default function ResearchIndex() {
  return (
    <main>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Why Open Source Robots Matter | K-Scale Labs</title>
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
      <Hero eyebrow="Our mission" heading="Why open-source robots matter">
        K-Scale Labs is building general-purpose embodied intelligence. We believe that the only way
        to achieve this is by making our robots open-source and accessible to everyone. Here's why.
      </Hero>
      <section className="section">
        <div className="section-container">
          <div className="section-prose2">
            <p className="text-body-1 mb-6">
              Our mission at K-Scale Labs is to accelerate the timeline to a world with billions of
              general-purpose robots, by making them open-source and universally accessible. We
              believe this is the best route towards making humanity into a Type 1 civilization on
              the Kardashev scale.
            </p>
            <p className="mb-6">
              On a technical level, making real-world AI systems that work well is very difficult
              and requires working across a huge range of disciplines, from designing and building
              physical hardware, to collecting useful data from diverse real-world environments, to
              training and deploying machine learning models.
            </p>
            <p className="mb-16">
              In the face of such challenges, the advantages that developing in the open provides,
              in the form of reduced friction, greater collaboration, and increased visibility,
              greatly outweigh the monetary downsides. There is a long historical precedent for
              companies capitalizing on key technological shifts by adopting similar strategies, and
              we view this as a principled business decision in addition to a moral one.
            </p>
            <p className="text-body-1 mb-6">
              Put differently, as a guiding principle, we are more concerned with making sure that
              the <strong>goal gets achieved</strong> than ensuring that no one else achieves it
              before us, and we expect that our own progress will be much faster and more efficient
              when work is done in the open.
            </p>
            <p className="mb-16">
              Building in the open provides a forcing function for quality that is absent in more
              opaque organizations, and working on deeply technical and integrated problems makes
              this forcing function paramount.
            </p>
            <p className="text-body-1 mb-6">
              More importantly, however, in order for embodied intelligence to achieve its full
              potential, we expect that it ultimately <strong>must</strong> function in a way that
              allows buy-in from humanity at large.
            </p>
            <p className="mb-16">
              Highly-capable robots are poised to take over large amounts of labor in our homes and
              businesses, and in a democratic society, the only way to make rapid forward progress
              is if the benefits from such changes are widely shared. In other words, we expect that
              the <strong>only</strong> way for humanoid robots to achieve mass adoption is by being
              open-source, auditable, and broadly accessible.
            </p>
            <p className="text-body-1 mb-6">
              K-Scale was started in a Palo Alto garage with the dream of building a way for
              everyone to share in the benefits of embodied artificial intelligence.{" "}
            </p>
            <p className="mb-6">
              This will not be possible without building a critical mass of people who also believe
              in this dream. If you believe it is important&mdash;that a world of open-source
              humanoid robots owned by everyone is better than a world run by a few
              corporations&mdash;we would be immensely grateful for your support, by{" "}
              <a
                href="http://url.kscale.dev/bounties"
                className="font-medium underline hover:text-stone-400 focus:text-stone-400 peer-hover:text-stone-400 transition-colors duration-300"
              >
                contributing to our codebase
              </a>
              ,{" "}
              <a
                href="http://url.kscale.dev/shop"
                className="font-medium underline hover:text-stone-400 focus:text-stone-400 peer-hover:text-stone-400 transition-colors duration-300"
              >
                buying a robot
              </a>
              , or simply telling your friends.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
