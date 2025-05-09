import { CopyButton } from "@/components/ui/Button/CopyButton";
import Arrow from "@/assets/icons/icon_arrowTR.svg";
import Image from "next/image";

export default function Page() {
  const jobs = [
    {
      title: "Head of Human Resources",
      description: "$70K - $160K · 1+ Years of Experience",
      link: "https://www.ycombinator.com/companies/k-scale-labs/jobs/iZiLfNw-head-of-human-resources",
    },
    {
      title: "Robotics Engineer (Software)",
      description: "$100K - $250K · Any (New Grads OK)",

      link: "https://www.ycombinator.com/companies/k-scale-labs/jobs/DK5GZzD-robotics-engineer-software",
    },
    {
      title: "Robotics Engineer (Electrical)",
      description: "$100K - $250K · Any (New Grads OK)",
      link: "https://www.ycombinator.com/companies/k-scale-labs/jobs/8CEmad4-robotics-engineer-electrical",
    },
  ];
  return (
    <>
      <section className="relative w-full h-[50vh]">
        <Image
          src="/photos/team_garage.jpg"
          alt="K-Scale team in a garage"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
          priority
        />
      </section>

      <section className="px-layout flex flex-col grid-r py-16">
        <div className="col-span-full lg:col-span-4 2xl:col-span-3 2xl:col-start-1 mb-16">
          <hgroup>
            <h1 className="text-body-3 text-stone-400 mb-2">Careers</h1>
            <h2 className="mb-4">Come build the future of robotics</h2>
            <p className="text-body-2 text-stone-200 mb-4">
              Our mission is to build general purpose robotics and open-source it to everyone.
            </p>
            <p className="text-body-2 text-stone-200 mb-4">
              Over the past six months, we&apos;ve built a humanoid robot stack from
              state-of-the-art machine learning models trained on our infrastructure, building the
              operating system, designing the hardware, and manufactured it:
            </p>
          </hgroup>
        </div>

        <div className="col-span-full lg:col-span-4 2xl:col-span-3 2xl:col-start-1 mb-16">
          <hgroup>
            <h2 className="text-heading-2 mb-4">Our Team</h2>
            <p className="text-body-2 text-stone-200 mb-4">K-Scale is 10 people across 3 teams:</p>
            <ul className="flex flex-col gap-4">
              <li>
                The <span className="font-bold underline">ML Team</span> bulding machine learning
                infrasturcture state of the art VLA and RL models.
              </li>
              <li>
                The <span className="font-bold underline">Product Team</span> designs and
                manufactures the product, including the hardware and software.
              </li>
              <li>
                The <span className="font-bold underline">Operations and Marketing Team</span>{" "}
                maintains company infrastucture, press, partnership, and logistics.
              </li>
            </ul>
          </hgroup>
        </div>

        <div className="col-span-full lg:col-span-4 2xl:col-span-3 2xl:col-start-1 mb-16">
          <hgroup>
            <h2 className="text-heading-2 mb-4">Who we&apos;re looking for</h2>
            <p className="text-body-2 text-stone-200 mb-4">
              We don&apos;t care about degrees or backgrounds. We&apos;re building a world-class
              team in shipping cutting-edge engineering, research, and product. Show us your GitHub,
              open-source work, standout projects, or competition wins.
            </p>

            <p className="text-body-2 text-stone-200 mb-4">
              Prove your skills with either of these:
            </p>
            <ol className="flex flex-col gap-4 list-decimal pl-5">
              <li>
                <a
                  className="underline"
                  href="https://bounties.kscale.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bounties
                </a>
                : contribute to our open-source projects and get paid.
              </li>
              <li>
                <a
                  className="underline"
                  href="https://github.com/k-scale-labs/k-scale-robotics/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hackathons
                </a>
                : join our hackathon for ML, software, and hardware challenges.
              </li>
            </ol>
          </hgroup>
        </div>
      </section>

      <section className="px-layout grid-responsive py-8">
        <h2 className="text-heading-2 col-span-full lg:col-span-4 2xl:col-span-3 2xl:col-start-1 mb-2">
          We&apos;re actively hiring:
        </h2>
        <ul className="col-span-full lg:col-span-4 2xl:col-span-3 2xl:col-start-1 flex flex-col gap-8 mb-16">
          {jobs.map((item, i) => (
            <li key={`job-listing-${i}`} className="flex flex-col gap-4">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 w-fit group"
              >
                <div>
                  <h3 className="font-bold text-body-2 mb-1">{item.title}</h3>
                  <p className="text-body-3 text-stone-400">{item.description}</p>
                </div>
                <Arrow className="size-8 group-hover:translate-x-1/4 group-hover:-translate-y-1/4 group-focus:translate-x-1/4 group-focus:-translate-y-1/4 transition-transform duration-300" />
              </a>
            </li>
          ))}
        </ul>
        <aside className="col-span-full lg:col-span-4 2xl:col-span-3 2xl:col-start-1 mb-16">
          <p className="mb-4"> Don&apos;t see a role that matches you?</p>
          <CopyButton />
        </aside>
      </section>

      <section className="px-layout grid-responsive py-8">
        <h2 className="text-heading-2 col-span-full lg:col-span-4 2xl:col-span-3 2xl:col-start-1 mb-2">
          Applying
        </h2>
        <ol className="col-span-full lg:col-span-4 2xl:col-span-3 2xl:col-start-1 flex flex-col gap-8 mb-16 list-decimal pl-5">
          <li>
            <h3 className="font-bold text-body-2 mb-1">Challenge</h3>
            <p className="text-body-2 text-stone-200">
              Choose any of the challenges from the{" "}
              <a
                className="underline"
                href="https://leaderboard.kscale.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                leaderboard
              </a>{" "}
              or{" "}
              <a
                className="underline"
                href="https://bounties.kscale.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                bounties
              </a>
              , solve it, then reach out to us on Discord.
            </p>
          </li>
          <li>
            <h3 className="font-bold text-body-2 mb-1">Video screen</h3>
            <p className="text-body-2 text-stone-200">
              Typically, we do two video calls. A quick intro and screen, then an in-depth technical
              interview with a division head.
            </p>
          </li>
          <li>
            <h3 className="font-bold text-body-2 mb-1">Paid Residency</h3>
            <p className="text-body-2 text-stone-200">
              We&apos;ll fly you out to meet the team and work on a real problem for a few days. In
              most cases, the project will be scoped such that you&apos;ll ship it to real users by
              the end.
            </p>
          </li>
        </ol>
        <p className="col-span-full lg:col-span-4 2xl:col-span-3 2xl:col-start-1 text-body-2 text-stone-200">
          If all goes well, we&apos;ll make you a full-time job offer.
        </p>
      </section>
    </>
  );
}
