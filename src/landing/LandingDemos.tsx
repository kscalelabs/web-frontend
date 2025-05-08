import { motion } from "motion/react";
import { useState } from "react";

export const LandingDemos = () => {
  const [activeItem, setActiveItem] = useState(0);

  const items = ["Locomotion", "Manipulation"];

  return (
    <section className="section pt-0">
      <hgroup className="col-span-default col-start-default mb-4 sm:mb-6">
        <h2 className="text-body-2 font-medium text-stone-400 mb-1">Demos</h2>
        <p className="text-heading-1">See our general purpose humanoid robot in action</p>
      </hgroup>

      <div className="relative col-span-full 2xl:col-span-6 2xl:col-start-2">
        <menu className="sm:absolute sm:w-fit sm:top-4 sm:left-4 w-full p-1 flex gap-2 rounded-full mb-4 bg-stone-800/80 backdrop-blur-md border border-stone-700">
          {items.map((item, index) => (
            <li key={`demo-item--${index}`} className="flex-1">
              <motion.button
                className="w-full relative px-4 py-3 text-body-2"
                onClick={() => setActiveItem(index)}
              >
                {activeItem == index && (
                  <motion.span
                    className="absolute size-full bg-orange-600 inset-0 rounded-full"
                    layoutId="test"
                  />
                )}
                <span className="relative z-10">{item}</span>
              </motion.button>
            </li>
          ))}
        </menu>
        <div>
          {
            <article className="aspect-[3/4] sm:aspect-video bg-gradient-to-br from-rust via-background to-methyl rounded-2xl p-6 flex flex-col justify-end">
              <p>An impressive statistic about the current state of locomotion.</p>
            </article>
          }
        </div>
      </div>
    </section>
  );
};
