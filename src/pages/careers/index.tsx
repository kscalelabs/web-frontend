import { CopyButton } from "@/components/ui/Button/CopyButton";
import Arrow from "@/assets/icons/icon_arrowTR.svg";

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
      <section className="min-h-[20rem] h-[80svh] px-layout flex flex-col grid-r content-end bg-gradient-to-t py-16">
        <hgroup className="col-span-full lg:col-span-4 2xl:col-span-3 2xl:col-start-1 mb-16">
          <h1 className="text-body-3 text-stone-400 mb-2">Careers</h1>
          <h2 className="mb-4">Come build friendly open-source robots</h2>
          <p>
            We&apos;re K-Scale Labs, a team of hackers, engineers and researchers building humanoids
            and a robotics general purpose foundation model in Palo Alto, USA.
          </p>
        </hgroup>
      </section>
      <section className="px-layout min-h-screen grid-responsive py-8">
        <h2 className="text-heading-2 col-span-full lg:col-span-4 2xl:col-span-3 2xl:col-start-1 mb-2">
          Open roles (3)
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
          <p className="mb-4"> Don&apos;t see an role that matches you?</p>
          <CopyButton />
        </aside>
        <div className="col-span-full lg:col-span-4 2xl:col-span-3 2xl:col-start-1 mb-16">
          {/* <p className="text-body-3 text-stone-400 mb-2">People of K-Scale</p> */}
          <h2 className="text-heading-2 mb-4">Who we&apos;re looking for</h2>
          <p className="text-body-2">
            We don&apos;t care about degrees or traditional backgrounds. We care about people who
            can independently ship top-tier open-source humanoid robots. Show us your GitHub,
            open-source work, standout projects, or competition wins.
          </p>
        </div>
      </section>
    </>
  );
}
