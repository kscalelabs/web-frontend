import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export const LandingDemos = () => {
  const [activeItem, setActiveItem] = useState(0);

  const items = [
    { name: "Locomotion", src: "/videos/landing/demo_locomotion.mp4" },
    { name: "Manipulation", src: "/videos/landing/demo_manipulation.mp4" },
  ];

  return (
    <section className="section pt-0">
      <div className="container">
        <hgroup className="col-span-default col-start-default mb-4 sm:mb-6">
          <h2 className="text-body-2 font-medium text-stone-400 mb-1">Demos</h2>
          <p className="text-heading-1">Experience our humanoid robots in action</p>
        </hgroup>
        <div className="relative col-span-full 2xl:col-span-4 2xl:col-start-2 4xl:col-span-6 4xl:col-start-2">
          <menu className="z-10 sm:absolute sm:w-fit sm:top-4 sm:left-4 w-full p-1 flex gap-2 rounded-full mb-4 bg-stone-800/80 backdrop-blur-md border border-stone-700">
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
                  <span className="relative z-10">{item.name}</span>
                </motion.button>
              </li>
            ))}
          </menu>
          <div>
            {
              <article className="relative aspect-[3/4] sm:aspect-video rounded-2xl p-6 flex flex-col justify-end overflow-hidden">
                <AnimatePresence>
                  {items.map(
                    (item, i) =>
                      i == activeItem && (
                        <motion.video
                          width="1920"
                          height="1080"
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="absolute inset-0 size-full object-cover brightness-50 rounded-2xl"
                          src={items[activeItem].src}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          key={`demo-video--${item.name.toLowerCase()}`}
                        />
                      )
                  )}
                </AnimatePresence>
                {/* <p className="z-10">An impressive statistic about the current state of locomotion.</p> */}
              </article>
            }
          </div>
        </div>
      </div>
    </section>
  );
};
