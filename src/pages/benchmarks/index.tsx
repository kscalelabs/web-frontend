import Image from "next/image";

export default function Page() {
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
            <h1 className="text-body-3 text-stone-400 mb-2">GPR-AGI Benchmarks</h1>
            <h2 className="mb-4">Come build the future of robotics</h2>
            <p className="text-body-2 text-stone-200 mb-4">
              Steve Wozniak proposed a compelling benchmark for assessing useful, general-purpose
              robotics known as the coffee test:
            </p>
            <p className="text-body-2 text-stone-200 mb-4">
              <i>
                &quot;A [robot] is required to enter an average American home and figure out how to
                make coffee: find the coffee machine, find the coffee, add water, find a mug, and
                brew the coffee by pushing the proper buttons.&quot;
              </i>
            </p>
            <p className="text-body-2 text-stone-200 mb-4">This has not yet been completed.</p>
          </hgroup>
        </div>

        <div className="col-span-full lg:col-span-4 2xl:col-span-3 2xl:col-start-1 mb-16">
          <hgroup>
            <h2 className="text-heading-2 mb-4">Easy for humans, hard for robots</h2>

            <p className="text-body-2 text-stone-200 mb-4">
              At the heart of robotics, there are two problems:
            </p>

            <ul className="flex flex-col gap-4">
              <li>
                1. Locomotion: How robots effectively navigate complex and unpredictable
                environments.
              </li>
              <li>
                2. Manipulation: How robots accurately perceive, plan, and interact with objects in
                real-world scenarios.
              </li>
            </ul>

            <p className="text-body-2 text-stone-200 mb-4 my-4">
              While easy and straightforward for humans, these tasks remain difficult for robots. If
              we can solve the coffee test, then we can make robots do almost anything around our
              houses and businesses — the potential of usefulness is limitless.{" "}
            </p>
          </hgroup>

          <div className="mt-8">
            <div className="relative aspect-video w-full">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/g0TaYhjpOfo"
                title="K-Scale Robotics Progress"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-body-3 text-stone-400 mt-2">
              See our latest advancements in robotics technology
            </p>
          </div>
        </div>

        <div className="col-span-full lg:col-span-4 2xl:col-span-3 2xl:col-start-1 mb-16">
          <hgroup>
            <h2 className="text-heading-2 mb-4">Why we built this</h2>
            <p className="text-body-2 text-stone-200 mb-4">
              In the last two years, humanoids have gone from science fiction fantasy to a seeming
              inevitability, propelled the surge of investments in the supply chain and the
              breakthrough in ML method.
            </p>
            <p className="text-body-2 text-stone-200 mb-4">
              Two major projects were dropped in the last year that brought lots of optimism, and
              hype, to the robotics space.
            </p>
            <ul className="list-disc list-inside text-body-2 text-stone-200 mb-4 pl-4">
              <li>
                The OpenVLA project by Stanford introduced the first generalist robot manipulation
                policies that. [can replace this with ALOHA]
              </li>
              <li>
                The Isaac Gym by NVIDIA introduced sim2real Rl locomotion policies that makes
                low-level control, making it more competitive with classical wheeled methods.
              </li>
            </ul>
            <p className="text-body-2 text-stone-200 mb-4">
              However, watching the ecosystem unfold, we feel pessimistic about a world of humanoid
              robots controlled by big corporations. Even today, we&apos;re seeing humanoid robots
              with software backdoors to autocratic governments, and massive investments from people
              trying to build &quot;I, Robot&quot;-style conglomerates. Our goal at K-Scale is to
              build a great, open-source, affordable humanoid robot that anyone can program and
              audit, and that can eventually scale to billions of homes and businesses without
              worrying about whether someone else is controlling it.
            </p>
            <p className="text-body-2 text-stone-200 mb-4">
              We set out to solve general purpose robotics by building affordable,
              mass-manufacturable humanoid robot capable of running modern machine learning models,
              and make it open-source for other developers.
            </p>
          </hgroup>
        </div>

        <div className="col-span-full lg:col-span-4 2xl:col-span-3 2xl:col-start-1 mb-16">
          <hgroup>
            <h2 className="text-heading-2 mb-4">
              Introducing K-Sim, for locomotion GPR-AGI benchmark
            </h2>
            <p className="text-body-2 text-stone-200 mb-4">
              K-Sim (
              <a
                href="https://github.com/kscalelabs/ksim"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                https://github.com/kscalelabs/ksim
              </a>
              ) is an open-source library for GPU-accelerated robot learning and sim-to-real
              transfer that you can try today to make a robot walk, dance, and pick up objects in
              the simulation.
            </p>
            <p className="text-body-2 text-stone-200 mb-4">
              We&apos;ve made it to be modular, simple, and fast so anyone who knows a little bit
              about ML and Python can design and deploy their policy in an hour — you can specify
              your reward function manually (for example, the Euclidean distance between the hand
              and some target position), or by using some reference motions as priors and training
              with AMP or similar methods.
            </p>
            <p className="text-body-2 text-stone-200 mb-4">To get started:</p>
            <ol className="list-decimal list-inside text-body-2 text-stone-200 mb-4 pl-4 flex flex-col gap-2">
              <li>
                <code>git clone https://github.com/kscalelabs/kscale-humanoid-benchmark.git</code>
              </li>
              <li>
                <code>python train.py</code> to spin up the simulator and start training.
              </li>
              <li>
                <code>python deploy.py</code> to see how the robot performs in the simulation
                digital twin.
              </li>
            </ol>
            <p className="text-body-2 text-stone-200 mb-4">
              Or try on Colab:{" "}
              <a
                href="https://colab.research.google.com/github/kscalelabs/kscale-humanoid-benchmark/blob/master/train.ipynb"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                https://colab.research.google.com/github/kscalelabs/kscale-humanoid-benchmark/blob/master/train.ipynb
              </a>
            </p>
            {/* TODO: Add image here */}
            <p className="text-body-2 text-stone-200 my-4">
              (30-sec demo video:{" "}
              <a
                href="https://kscale.dev/leaderboard"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                &quot;https://kscale.dev/leaderboard&quot;
              </a>
              )
            </p>
            <p className="text-body-2 text-stone-200 mb-4">
              After training a model and verifying it with the deployment script, you can send it to
              us and we will run it on one of our physical robots so you can see it in action.
              We&apos;re building a leaderboard from the submissions:{" "}
              <a
                href="https://url.kscale.dev/leaderboard"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                https://url.kscale.dev/leaderboard
              </a>
            </p>
          </hgroup>
        </div>

        <div className="col-span-full lg:col-span-4 2xl:col-span-3 2xl:col-start-1 mb-16">
          <hgroup>
            <h2 className="text-heading-2 mb-4">Tasks</h2>
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="text-heading-3 mb-2">1. Basic Walk</h3>
                <p className="text-body-2 text-stone-200 mb-1">
                  <strong>Objective:</strong> Walk straight on flat terrain.
                </p>
                <p className="text-body-2 text-stone-200">
                  <strong>Metrics:</strong> Speed, balance, and efficiency of movement.
                </p>
              </div>
              <div>
                <h3 className="text-heading-3 mb-2">2. Directional Control</h3>
                <p className="text-body-2 text-stone-200 mb-1">
                  <strong>Objective:</strong> Walk while navigating to specified waypoints in
                  various directions.
                </p>
                <p className="text-body-2 text-stone-200">
                  <strong>Metrics:</strong> Accuracy, speed, stability during direction changes.
                </p>
              </div>
              <div>
                <h3 className="text-heading-3 mb-2">3. Uneven Terrain / Stairs</h3>
                <p className="text-body-2 text-stone-200 mb-1">
                  <strong>Objective:</strong> Walk effectively over irregular surfaces, such as
                  uneven tiles or simulated gravel.
                </p>
                <p className="text-body-2 text-stone-200">
                  <strong>Metrics:</strong> Stability, adaptability, ability to maintain speed.
                </p>
              </div>
              <div>
                <h3 className="text-heading-3 mb-2">6. Push Recovery</h3>
                <p className="text-body-2 text-stone-200 mb-1">
                  <strong>Objective:</strong> Maintain balance and continue walking after unexpected
                  pushes or disturbances.
                </p>
                <p className="text-body-2 text-stone-200">
                  <strong>Metrics:</strong> Recovery speed, stability, resilience to various push
                  forces.
                </p>
              </div>
              <div>
                <h3 className="text-heading-3 mb-2">7. Dancing / AMP</h3>
                <p className="text-body-2 text-stone-200 mb-1">
                  <strong>Objective:</strong> Make the robot walk and dance like a human
                </p>
                <p className="text-body-2 text-stone-200">
                  <strong>Metrics:</strong> Stability during dynamic sequences, movement fluidity,
                  pose tracking.
                </p>
              </div>
            </div>
          </hgroup>
        </div>
      </section>
    </>
  );
}
