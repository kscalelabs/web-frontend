import TableTrue from "@/assets/icons/table_true.svg";
import TableFalse from "@/assets/icons/table_false.svg";
// import Play from "@/assets/icons/icon_play.svg";
import { Button } from "@/components/ui/Button/Button";
// import { MediaPlaceholder } from "@/components/ui/Media/MediaPlaceholder";

export const LandingKSim = () => {
  const tableItems = [
    {
      name: "Differentiable physics",
      ksim: true,
      mujoco: true,
      issac: false,
      brax: true,
      gazebo: false,
    },
    {
      name: "GPU acceleration",
      ksim: true,
      mujoco: true,
      issac: true,
      brax: true,
      gazebo: false,
    },
    {
      name: "Single-file training scripts",
      ksim: true,
      mujoco: true,
      issac: false,
      brax: false,
      gazebo: false,
    },
    {
      name: "Real robot deployment scripts",
      ksim: true,
      mujoco: false,
      issac: false,
      brax: false,
      gazebo: false,
    },
    {
      name: "AMP implementation",
      ksim: true,
      mujoco: false,
      issac: false,
      brax: false,
      gazebo: false,
    },
    {
      name: "Stateful (RNNs, SSMs)",
      ksim: true,
      mujoco: false,
      issac: true,
      brax: false,
      gazebo: false,
    },
    {
      name: "Open-source",
      ksim: true,
      mujoco: true,
      issac: false,
      brax: false,
      gazebo: false,
    },
  ];

  return (
    <>
      <section className="section">
        <hgroup className="col-span-default col-start-default mb-6">
          <h2 className="text-heading-1 mb-2">K-SIM</h2>
          <p className="text-body-1">
            K-SIM is a lightweight, modular framework for developing reinforcement-learning policies
            in simulation and deploying them on physical robots.
          </p>
        </hgroup>
        {/* <div className="col-span-full lg:col-span-2 lg:col-start-1 2xl:col-start-2 2xl:col-span-2 lg:mb-6 grid gap-x-4 md:gap-x-4 grid-cols-subgrid items-center">
          <MediaPlaceholder className="lg:col-span-full" />
          <hgroup className="max-lg:my-4 lg:mt-4 sm:col-span-3 lg:col-span-full">
            <h3 className="text-body-2 font-bold">See how our ML lead, Ali uses K-Sim</h3>
            <div className="flex w-full items-center gap-2">
              <p className="inline-flex w-fit items-center gap-1 ">
                <Play className="size-6 -ml-0.5" /> Play video
              </p>
              <span className="text-body-3 text-stone-400"> (2:30)</span>
            </div>
          </hgroup>
        </div> */}
      </section>
      <section className="section">
        <div className="mb-6 col-span-full sm:col-span-2 lg:col-span-3 2xl:col-start-2">
          <h3 className="text-body-2 font-bold mb-1">Made for speed</h3>
          <p>
            Built on JAX and MuJoCo-XLA, K-Sim can run thousands of parallel environments on a
            single GPU—over 50,000 samples per second on an RTX 4090.
          </p>
        </div>
        <div className="mb-6 col-span-full sm:col-span-2 lg:col-span-3">
          <h3 className="text-body-2 font-bold mb-1">Single-file workflows</h3>
          <p>
            A complete experiment—model, task, and config—lives in one python file, so you can
            easily root cause performance regressions.
          </p>
        </div>
        <div className="mb-6 col-span-full sm:col-span-2 lg:col-span-3 2xl:col-start-2">
          <h3 className="text-body-2 font-bold mb-1">Sim-to-real focus</h3>
          <p>
            Domain-randomisation utilities, real-time vizualization, accurate motor models, and CLI
            deploy helpers let you seamlessly deploy a trained policy on a real robot.
          </p>
        </div>
        <div className="mb-6 col-span-full sm:col-span-2 lg:col-span-3">
          <h3 className="text-body-2 font-bold mb-1">Extensible by design</h3>
          <p>
            Customize your own environment, rewards and algorithms or choose from several built-in
            tasks ready to go.
          </p>
        </div>
        <table className="relative col-span-full 2xl:col-span-6 2xl:col-start-2 mt-12">
          <thead className="max-lg:sticky top-20 ">
            <tr className="grid grid-cols-3 md:grid-cols-6 items-start py-4 bg-background border-b border-b-stone-800">
              <th scope="col" className="text-body-3 font-bold md:col-start-2">
                K-SIM
              </th>
              <th scope="col" className="text-body-3 font-bold">
                MuJoCo Playground
              </th>
              <th scope="col" className="text-body-3 font-bold">
                Issac Lab
              </th>
              <th scope="col" className="max-md:hidden text-body-3 font-bold">
                Brax
              </th>
              <th scope="col" className="max-md:hidden text-body-3 font-bold">
                Gazebo Sim
              </th>
            </tr>
          </thead>
          <tbody className="flex flex-col">
            {tableItems.map((item, index) => (
              <tr
                className="grid grid-cols-3 md:grid-cols-6 col-span-full items-center"
                key={`ksim-table-row--${index}`}
              >
                <th
                  scope="row"
                  className="max-md:col-span-full py-2 text-left text-body-2 font-bold"
                >
                  {item.name}
                </th>
                <td>
                  {item.ksim ? (
                    <TableTrue className="size-8 mx-auto" />
                  ) : (
                    <TableFalse className="size-8 mx-auto" />
                  )}
                </td>
                <td>
                  {item.mujoco ? (
                    <TableTrue className="size-8 mx-auto" />
                  ) : (
                    <TableFalse className="size-8 mx-auto" />
                  )}
                </td>
                <td>
                  {item.issac ? (
                    <TableTrue className="size-8 mx-auto" />
                  ) : (
                    <TableFalse className="size-8 mx-auto" />
                  )}
                </td>
                <td className="max-md:hidden">
                  {item.brax ? (
                    <TableTrue className="size-8 mx-auto" />
                  ) : (
                    <TableFalse className="size-8 mx-auto" />
                  )}
                </td>
                <td className="max-md:hidden">
                  {item.gazebo ? (
                    <TableTrue className="size-8 mx-auto" />
                  ) : (
                    <TableFalse className="size-8 mx-auto" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section className="section bg-stone-900">
        <hgroup className="col-span-full lg:col-span-4 lg:col-start-2 2xl:col-start-3 flex flex-col items-center">
          <h2 className="text-heading-2 text-center mb-2">
            K-SIM lets you iterate quickly and trust the code that you deploy on your hardware.{" "}
          </h2>
          <p className="text-body-2 text-center mb-4">
            Check out the source on{" "}
            <a
              href="https://github.com/kscalelabs/ksim"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-body-2 lg:text-body-3 font-medium lg:font-bold relative w-fit hover:text-stone-400 focus:text-stone-400 peer-hover:text-stone-400 transition-colors duration-300"
            >
              <span className="absolute h-12 top-1/2 -translate-y-1/2 w-full  [@media(pointer:fine)]:hidden" />
              Github
            </a>{" "}
            or browse our{" "}
            <a
              href="https://docs.kscale.dev/docs/ksim"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-body-2 lg:text-body-3 font-medium lg:font-bold relative w-fit hover:text-stone-400 focus:text-stone-400 peer-hover:text-stone-400 transition-colors duration-300"
            >
              <span className="absolute h-12 top-1/2 -translate-y-1/2 w-full  [@media(pointer:fine)]:hidden" />
              docs
            </a>
          </p>
          <Button href="/benchmarks">See community benchmarks</Button>
        </hgroup>
      </section>
    </>
  );
};
