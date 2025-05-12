import TableTrue from "@/assets/icons/table_true.svg";
import TableFalse from "@/assets/icons/table_false.svg";
import { Button } from "@/components/ui/Button/Button";
import Visual1 from "@/assets/content/visual_ksim_1.svg";
import Visual2 from "@/assets/content/visual_ksim_2.svg";
import Visual3 from "@/assets/content/visual_ksim_3.svg";
import Visual4 from "@/assets/content/visual_ksim_4.svg";
import Arrow from "@/assets/icons/icon_arrowTR.svg";

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
      <section className="section pb-0">
        <div className="section-container">
          <hgroup className="col-span-default col-start-default mb-6">
            <h2 className="text-heading-1 mb-2 flex items-center">
              <a
                href="https://github.com/kscalelabs/ksim"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center"
              >
                K-SIM
                <Arrow className="size-8 group-hover:translate-x-[12.5%] group-hover:-translate-y-[12.5%] group-focus:translate-x-[12.5%] group-focus:-translate-y-[12.5%] transition-transform duration-300 ml-2" />
              </a>
            </h2>
            <p className="text-body-1">
              A lightweight, modular framework for developing reinforcement learning policies in
              simulation and subsequently deploying on physical robots
            </p>
          </hgroup>
          <div className="col-span-full mb-6 flex flex-col items-center">
            <div className="w-full lg:w-3/4 2xl:w-2/3 aspect-video rounded-md @xs:rounded-lg @sm:rounded-xl @lg:rounded-2xl overflow-hidden shadow-lg">
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
            <h3 className="mt-4 text-body-2 font-bold text-center px-4">
              See how our ML engineer Ali uses K-Sim
            </h3>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="section-container">
          <div className="mb-6 col-span-full sm:col-span-2 4xl:col-span-3 2xl:col-start-2 4xl:col-start-2">
            <Visual1 className="size-[4.5rem] mb-4" />
            <h3 className="text-body-2 font-bold mb-2">Made for speed</h3>
            <p>
              Built on JAX and MuJoCo-XLA, K-Sim can run thousands of parallel environments on a
              single GPU—over 50,000 samples per second on an RTX 4090.
            </p>
          </div>
          <div className="mb-6 col-span-full sm:col-span-2 4xl:col-span-3">
            <Visual2 className="size-[4.5rem] mb-4" />
            <h3 className="text-body-2 font-bold mb-2">Single-file workflows</h3>
            <p>
              A complete experimental package - model, task, and config - lives in a python file, so
              you can quickly pinpoint the root cause of training issues.
            </p>
          </div>
          <div className="mb-6 col-span-full sm:col-span-2 4xl:col-span-3 2xl:col-start-2 4xl:col-start-2">
            <Visual3 className="size-[4.5rem] mb-4" />
            <h3 className="text-body-2 font-bold mb-2">Sim-to-real focus</h3>
            <p>
              Domain-randomization utilities, real-time visualization, accurate motor models, and
              CLI deploy helpers let you seamlessly deploy a trained policy on a real robot.
            </p>
          </div>
          <div className="mb-6 col-span-full sm:col-span-2 4xl:col-span-3">
            <Visual4 className="size-[4.5rem] mb-4" />
            <h3 className="text-body-2 font-bold mb-2">Extensible by design</h3>
            <p>
              Customize your own environment, rewards, and algorithms or choose from several
              built-in tasks ready to go.
            </p>
          </div>
          <table className="relative col-span-full 2xl:col-span-4 2xl:col-start-2 4xl:col-span-6 4xl:col-start-2 mt-12">
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
        </div>
      </section>
      <section className="section mb-8">
        <div className="section-container">
          <hgroup className="col-span-full lg:col-span-4 lg:col-start-2 4xl:col-start-3 flex flex-col items-center">
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
        </div>
      </section>
    </>
  );
};
