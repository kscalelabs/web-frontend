import { Button } from "@/components/ui/Button/Button";
import { useWindowSize } from "@/components/util/functions";
import { useEffect, useMemo, useState, useRef, useCallback } from "react";
import ArrowL from "@/assets/icons/icon_arrowL.svg";
import ArrowR from "@/assets/icons/icon_arrowR.svg";
import Image from "next/image";

const imgs = [
  {
    name: "K-Bot V2",
    src: "/photos/landing/achievements/KBotV2.webp",
    alt: "Photo of K-Bot V2",
    dateTime: "2025-02",
    time: "Feb. 2025",
    desc: "Our latest humanoid robot, designed and built for developers. Strong, modular and capable of everything from chores to industrial applications",
    width: 600,
    height: 800,
  },
  {
    name: "Z-Bot V2",
    src: "/photos/landing/achievements/ZBotV2.webp",
    alt: "Photo of Z-Bot V2",
    dateTime: "2025-01",
    time: "Jan. 2025",
    desc: "Mass-manufacturable, robust tabletop humanoid robot. Used in Stanford's reinforcement learning class (CS 234) to teach about PPO.",
    width: 600,
    height: 800,
  },
  {
    name: "K-Bot V1",
    src: "/photos/landing/achievements/KBotV1.webp",
    alt: "Photo of K Bot V1",
    dateTime: "2024-11",
    time: "Nov. 2024",
    desc: "Our initial full-sized complete aluminum prototype. Built as a lightweight, customizable, and developer-friendly test bench for our ML stack. Optimized for sim-to-real focus.",
    width: 600,
    height: 800,
  },
  {
    name: "Z-Bot V1",
    src: "/photos/landing/achievements/ZBotV1.webp",
    alt: "Photo of Z-Bot V1",
    dateTime: "2024-11",
    time: "Nov. 2024",
    desc: "Open-source 3D printed small-scale humanoid robot with BOM < 350. Optimized for portability and affordability. Leveraged as learning tool at universities for teaching robotics and RL.",
    width: 600,
    height: 800,
  },
  {
    name: "Stompy Mini",
    src: "/photos/landing/achievements/Stompymini.webp",
    alt: "Photo of Stompy Mini",
    dateTime: "2024-08",
    time: "Aug. 2024",
    desc: "Enhanced version of Stompy with a smaller form factor, new actuators, upgraded battery, and wiring harness. Optimized for simulation training.",
    width: 600,
    height: 800,
  },
  {
    name: "Stompy",
    src: "/photos/landing/achievements/Stompy.webp",
    alt: "Photo of Stompy",
    dateTime: "2024-04",
    time: "Apr. 2024",
    desc: "Our first 3D printed robot was built in 2 months with 4 3D printers. Optimized for cuteness.",
    width: 600,
    height: 800,
  },
];

export const LandingAchievements = () => {
  const width = useWindowSize().width;
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const cardDimensions = useMemo(() => {
    return {
      width: width < 768 ? 80 : width < 1024 ? 40 : width < 1440 ? 30 : 20,
      gap: width < 768 ? 1 : 1.5,
      visibleItems:
        width < 768
          ? 1
          : width < 1024
            ? 2
            : width < 1440
              ? 3
              : 3,
    };
  }, [width]);

  const updateScrollButtonStates = useCallback(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollLeft = container.scrollLeft;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < maxScrollLeft - 10);
    }
  }, []);

  const scrollLeft = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -(cardDimensions.width + cardDimensions.gap * 16),
        behavior: 'smooth'
      });
    }
  }, [cardDimensions.width, cardDimensions.gap]);
  
  const scrollRight = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: cardDimensions.width + cardDimensions.gap * 16,
        behavior: 'smooth'
      });
    }
  }, [cardDimensions.width, cardDimensions.gap]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      updateScrollButtonStates();
      container.addEventListener('scroll', updateScrollButtonStates);
      return () => {
        container.removeEventListener('scroll', updateScrollButtonStates);
      };
    }
  }, [updateScrollButtonStates]);

  return (
    <section className="section">
      <div className="section-container">
        <hgroup className="col-span-default col-start-default mb-6">
          <h2 className="text-body-2 font-medium text-stone-400 mb-1">Our achievements</h2>
          <p className="text-heading-1">
            We&apos;ve completed 6 generations of robots in less than a year
          </p>
        </hgroup>
        <div className="mb-6 flex gap-2 md:place-self-end max-md:col-start-1 md:-col-end-1 2xl:-col-end-2">
          <Button onClick={scrollLeft} icon={ArrowL} disabled={!canScrollLeft} />
          <Button onClick={scrollRight} icon={ArrowR} disabled={!canScrollRight} />
        </div>
        <div
          className="-mx-5 px-5 lg:-mx-10 lg:px-10 col-span-full overflow-x-auto no-scrollbar snap-x snap-mandatory"
          ref={containerRef}
          style={{
            scrollSnapType: "x mandatory",
            scrollBehavior: "smooth",
          }}
        >
          <div className="grid-r">
            <div className="relative flex 2xl:col-start-3">
              <div className="flex gap-x-4 md:gap-x-6 pr-5 md:pr-10">
                {imgs.map((item, idx) => (
                  <article
                    key={idx}
                    className="flex-grow w-[80vw] sm:w-[40vw] lg:w-[30vw] 2xl:w-[20vw] max-w-[600px] flex flex-col gap-4 select-none"
                    style={{ scrollSnapAlign: "center" }}
                  >
                    <hgroup>
                      <h3 className="text-body-3 font-bold inline-flex gap-4">
                        <time dateTime={item.dateTime}>{item.time}</time>
                        <span>{item.name}</span>
                      </h3>
                      <p>{item.desc}</p>
                    </hgroup>
                    <Image
                      src={item.src}
                      className="md:-order-1 max-md:mt-auto aspect-[3/4] rounded-2xl pointer-events-none object-cover object-top"
                      width={item.width}
                      height={item.height}
                      alt={item.alt}
                    />
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
