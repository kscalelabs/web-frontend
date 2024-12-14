import RobotRenderer from "@/components/robot/robotRenderer";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const RobotSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className=" col-span-full flex flex-col items-center text-center max-w-full aspect-square md:aspect-video bg-plasma">
      <div className="w-full h-full relative" ref={ref}>
        <motion.aside
          layout
          className="absolute w-full h-full bg-carbon z-5 flex flex-col gap-2 items-center pointer-events-none select-none p-12"
          initial={{
            backgroundColor: "var(--carbon-50)",
            pointerEvents: "auto",
          }}
          animate={{
            backgroundColor: isInView ? "var(--carbon-0)" : "var(--carbon-50)",

            pointerEvents: isInView ? "none" : "auto",
          }}
          style={{
            justifyContent: isInView ? "flex-end" : "center",
          }}
          transition={{ duration: 0.5, ease: "circOut", delay: 2.5 }}
        >
          <motion.hgroup
            layoutId="robot-section-text"
            className="flex flex-col gap-2 items-center"
            key="robot-section-text"
            transition={{ duration: 0.9, ease: "circOut", delay: 2.5 }}
          >
            <motion.svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="size-8"
              initial={{
                opacity: 1,
              }}
              animate={{
                opacity: isInView ? 0 : 1,
              }}
              transition={{ duration: 0.5, ease: "circOut", delay: 2.5 }}
            >
              <path
                d="M8 14.25L4.75 11H7C7.25 5.39 9.39 1 12 1C14 1 15.77 3.64 16.55 7.45C20.36 8.23 23 10 23 12C23 13.83 20.83 15.43 17.6 16.3L17.89 14.27C19.8 13.72 21 12.91 21 12C21 10.94 19.35 10 16.87 9.5C16.95 10.29 17 11.13 17 12C17 18.08 14.76 23 12 23C10.17 23 8.57 20.83 7.7 17.6L9.73 17.89C10.28 19.8 11.09 21 12 21C13.66 21 15 16.97 15 12C15 11 14.95 10.05 14.85 9.15C13.95 9.05 13 9 12 9L10.14 9.06L10.43 7.05L12 7C12.87 7 13.71 7.05 14.5 7.13C14 4.65 13.06 3 12 3C10.46 3 9.18 6.5 9 11H11.25L8 14.25ZM14.25 16L11 19.25V17C5.39 16.75 1 14.61 1 12C1 10.17 3.17 8.57 6.4 7.7L6.11 9.73C4.2 10.28 3 11.09 3 12C3 13.54 6.5 14.82 11 15V12.75L14.25 16Z"
                fill="var(--filament)"
              />
            </motion.svg>
            <h3 className="text-filament text-heading-sm font-apparat">Drag to orbit</h3>
          </motion.hgroup>
        </motion.aside>
        <RobotRenderer />
      </div>
    </section>
  );
};

export default RobotSection;
