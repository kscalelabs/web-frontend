import { CopyButton } from "@/components/ui/Button/CopyButton";
import Arrow from "@/assets/icons/icon_arrowTR.svg";
import Image from "next/image";
import Head from "next/head";
import { Hero } from "@/components/Layout/Hero";
import Link from "next/link";
import { VisualStack } from "@/assets/content/VisualStack";
import { Button } from "@/components/ui/Button/Button";
import Discord from "@/assets/icons/icon_discord.svg";
import { CopyString } from "@/components/ui/Code/CopyCode";

export default function Page() {
  const jobs = [
    {
      title: "Firmware Engineer (Rust/Nix)",
      description: <>$100K · 3+ years of experience</>,
      link: "https://www.ycombinator.com/companies/k-scale-labs/jobs/DK5GZzD-software-engineer-humanoid-robots",
    },
    {
      title: "Electrical Engineer",
      description: <>$100K &ndash; $250K · Any (New Grads OK)</>,

      link: "https://www.ycombinator.com/companies/k-scale-labs/jobs/8CEmad4-electrical-engineer-humanoid-robots",
    },
    {
      title: "ML Engineer (RL/VLA)",
      description: <>$100K &ndash; $250K · Any (New Grads OK)</>,
      link: "https://www.ycombinator.com/companies/k-scale-labs/jobs/2RlZIaA-ml-engineer-rl-vla",
    },
  ];
  return (
    <main>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Join us at K-Scale Labs</title>
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
      <Hero heading={"Adventurers wanted"} eyebrow={"Join us"} src="/photos/thumbnails/join.webp">
        We&apos;re looking for ML researchers, robotics engineers, and software developers, looking
        to pioneer the next generation of physical embodied intelligence.
      </Hero>
      <section className="section">
        <div className="section-container">
          <div className="section-prose2 mb-6">
            <h2 className="text-body-2 font-medium text-stone-400 mb-1">About us</h2>
            <h3 className="text-heading-1 mb-6">
              We&apos;re a small team of engineers and researchers from Tesla AI, Meta FAIR, Xiaomi,
              and MILA.
            </h3>
            <p className="text-body-1 mb-24">
              We work 18 hours a day, 7 days a week. Most of us live, eat, and work at our facility.
              Hard problems, failures, and long hours don&apos;t deter us. While others talk, we
              ship.
            </p>
          </div>
          <p className="col-span-full sm:col-span-4 md:col-start-2 2xl:col-span-6 2xl:col-start-4 4xl:col-span-8 4xl:col-start-5 text-heading-1 text-center mb-32">
            We&apos;re driven by our belief that general-purpose robots are possible, and we must
            open-source it to everyone.
          </p>
          <div className="section-prose2 mb-24">
            <div className="col-span-4 md:col-span-3 lg:col-span-2 2xl:col-span-3 4xl:col-span-5">
              <p className="text-body-1 mb-6">
                In the last six months, we&apos;ve trained state-of-the-art machine-learning models
                on our training infrastructure, developed the operating system, designed and
                manufactured 2 humanoid robots.
              </p>
              <p className="text-body-1 mb-6">
                In the next six months, we will be pushing the boundary on whole-body and
                manipulation models and manufacturing our hardware at scale.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section--short">
        <div className="section-container">
          <div className="section-prose2 mb-32">
            <h2 className="text-heading-1 mb-2">Who we&apos;re looking for</h2>
            <p className="text-body-1 mb-2">
              Our goal is to build a world-class team in cutting-edge engineering, research, and
              product.
            </p>
            <p>
              Show us your GitHub, your projects, and your competition wins. We love people
              who&apos;re already involved with our open-source communities.
            </p>
          </div>
          <h2 className="text-heading-2 section-prose2 md:text-center mb-6">
            Prove your skills through one of these paths:
          </h2>
          <ul className="md:grid grid-cols-3 col-span-full 2xl:col-span-8 2xl:col-start-3 4xl:col-span-12 4xl:col-start-3 gap-x-4 md:gap-x-6 ">
            <li className="mb-12">
              <a
                href="https://bounties.kscale.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="flex w-fit mb-1">
                  <h3 className="text-body-1">Bounties</h3>
                  <Arrow className="size-7 2xl:size-9 group-hover:translate-x-1/4 group-hover:-translate-y-1/4 group-focus:translate-x-1/4 group-focus:-translate-y-1/4 transition-transform duration-300" />
                </div>
                <p>Get paid by contributing to any of our active open-source projects</p>
              </a>
            </li>
            <li className="mb-12">
              {/* <a
                href="https://bounties.kscale.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
              <div className="flex w-fit">
              <h3 className="text-body-1 mb-1">Hackathons</h3>
              <Arrow className="size-9 group-hover:translate-x-1/4 group-hover:-translate-y-1/4 group-focus:translate-x-1/4 group-focus:-translate-y-1/4 transition-transform duration-300" />
              </div> */}
              <h3 className="text-body-1 mb-1">Hackathons</h3>
              <p>Join our hackathon for ML, software, and hardware challenges.</p>
              {/* </a> */}
            </li>
            <li className="mb-12">
              <h3 className="text-body-1 mb-1">Personal/team projects</h3>
              <p>Show us the hardest projects you have done.</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="section">
        <div className="section-container">
          <div className="section-prose2 mb-6">
            {/* <h2 className="text-body-2 font-medium text-stone-400 mb-1">About us</h2> */}
            <h2 className="text-heading-1 mb-2">Open roles (3)</h2>
            <p className="mb-6">
              All roles are on-site in Palo Alto, CA, USA. People currently enrolled in college are
              encouraged to drop out.
            </p>
            <ul className="col-span-full lg:col-span-4 2xl:col-span-3 2xl:col-start-1 flex flex-col gap-12 mb-16">
              {jobs.map((item, i) => (
                <li key={`job-listing-${i}`} className="flex flex-col gap-2">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-4 w-fit group"
                  >
                    <div>
                      <h3 className="text-body-1 mb-1">{item.title}</h3>
                      <p className="text-body-3 text-stone-400">{item.description}</p>
                    </div>
                    <Arrow className="size-9 group-hover:translate-x-1/4 group-hover:-translate-y-1/4 group-focus:translate-x-1/4 group-focus:-translate-y-1/4 transition-transform duration-300" />
                  </a>
                </li>
              ))}
            </ul>
            <aside className="col-span-full lg:col-span-4 2xl:col-span-3 2xl:col-start-1 mb-16">
              <p className="mb-4">
                {" "}
                Don&apos;t see a role that matches you? Shoot us an email at{" "}
                <CopyString string="inquiries@kscale.dev" font="regular" />
              </p>
            </aside>
          </div>
        </div>
      </section>
      <section className="section--short">
        <div className="section-container">
          <div className="section-prose2 mb-6">
            <h2 className="text-body-2 font-medium text-stone-400 mb-1">Our hiring process</h2>
            <h3 className="text-heading-1 mb-6">Apply and join us</h3>
            <ol className="col-span-full lg:col-span-4 2xl:col-span-3 2xl:col-start-1 flex flex-col gap-12 mb-16 list-inside list-decimal">
              <li>
                <h4 className="text-body-1 mb-2">Choose a challenge</h4>
                <p className="mb-4">
                  Choose any of the challenges from our leaderboard or bounties, solve it, then
                  reach out to us on our{" "}
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
                <p>Alternatively, you can pitch us an project that you think will be impactful.</p>
              </li>
              <li>
                <h4 className="text-body-1 mb-2">Video screening</h4>
                <p>
                  We will have two videos calls: an initial video call, and an in-depth technical
                  presentation of the challenge you completed and another project you have done
                  before.
                </p>
              </li>
              <li>
                <h4 className="text-body-1 mb-2">Paid residency</h4>
                <p className="mb-4">
                  We&apos;ll fly you out to Palo Alto where you will meet the team and work on a
                  (paid) technical project for 2 weeks that will be integrated into part of our
                  stack.
                </p>
                <p className="mb-4">Room and board provided.</p>
              </li>
            </ol>
          </div>
        </div>
      </section>
      <section className="section--short">
        <div className="section-container">
          <div className="section-prose2 mb-6">
            {/* <h2 className="text-body-2 font-medium text-stone-400 mb-1">About us</h2> */}
            <h2 className="text-heading-1 mb-6">FAQ</h2>
            <ul className="col-span-full lg:col-span-4 2xl:col-span-3 2xl:col-start-1 flex flex-col gap-12 mb-16">
              <li>
                <h3 className="text-body-2 font-bold mb-2">Do you do internships?</h3>
                <p>
                  Our team sometimes accepts interns involved in our community or through our our
                  hosted hackathons. If you&apos;re interested, reach out to us on our{" "}
                  <a
                    href="https://discord.com/invite/pVwubQT9Sg"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="underline text-orange-500 hover:text-orange-400 whitespace-nowrap font-medium transition-colors duration-300"
                  >
                    Discord
                  </a>{" "}
                  with a completed bounty or leadership submission, or a tough engineering project.
                </p>
              </li>
              <li>
                <h3 className="text-body-2 font-bold mb-2">Can I work remotely?</h3>
                <p>All positions are on-site in Palo Alto, CA, USA.</p>
              </li>
              <li>
                <h3 className="text-body-2 font-bold mb-2">What bounty should I submit for?</h3>
                <p>
                  Choosing what you find most interesting and fulfilling typically end in better
                  results.
                </p>
              </li>
              <li>
                <h3 className="text-body-2 font-bold mb-2">What about non-technical roles?</h3>
                <p>We currently only hire people with strong technical background. </p>
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
