import Link from "next/link";
import clsx from "clsx";
import { motion, useInView, useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";

export const LandingStack = () => {
  const [activeId, setActiveId] = useState<number>(0);
  const sectionRefs = useRef<Record<number, HTMLElement | null>>({});
  const visibleSections = useRef<Set<number>>(new Set());

  const handleInViewChange = (id: number, inView: boolean) => {
    if (inView) {
      visibleSections.current.add(id);
    } else {
      visibleSections.current.delete(id);
    }

    // Set the topmost visible section as active
    console.log("visibleSections", visibleSections.current);
    const topMost = Array.from(visibleSections.current)[0];
    if (topMost) {
      setActiveId(topMost);
    }
  };

  const reorderSet = (id: number) => {
    const arrayFromSet = Array.from(visibleSections.current).filter((e) => e !== id);
    visibleSections.current = new Set([id, ...arrayFromSet]);
  };

  const articles = [
    {
      layer: "Application",
      id: "application",
      heading: "Build and use robot policies, apps, and tools made by you and the community",
    },
    {
      layer: "ML",
      id: "ml",
      heading: "Open-source library for GPU-accelerated robot learning and sim-to-real transfer",
    },
    {
      layer: "OS",
      id: "os",
      heading: "Rust based OS to run policies on the real robot, or evaluate in simulation",
    },
    {
      layer: "Hardware",
      id: "hardware",
      heading: "Deploy policies, VLA models, and run applications on robot hardware",
    },
  ];
  return (
    <>
      <section className="section">
        <aside className="max-2xl:col-span-full sticky top-20 2xl:top-32 max-2xl:py-4 bg-background max-2xl:border-b border-b-stone-800 mb-4 h-fit z-10">
          <h2 className="text-body-2 font-medium text-stone-400 2xl:mb-4">Our stack</h2>
          <menu className="flex 2xl:flex-col gap-6 2xl:gap-4">
            {articles.map((e, i) => (
              <li>
                <Link
                  href={`#${e.id}`}
                  className={clsx(
                    "transition-colors duration-300 text-body-2 font-bold",
                    activeId == i + 1
                      ? "text-orange-600"
                      : "text-foreground hover:text-stone-400 focus:text-stone-400 peer-hover:text-stone-400"
                  )}
                  onClick={() => {
                    reorderSet(i + 1);
                    console.log(visibleSections.current);
                  }}
                >
                  {e.layer}
                </Link>
              </li>
            ))}
          </menu>
        </aside>
        {articles.map((article, i) => (
          <Article
            key={`landing-stack--${i}`}
            name={article.layer}
            id={article.id}
            heading={article.heading}
            index={i + 1}
            onInViewChange={handleInViewChange}
            registerRef={(el) => (sectionRefs.current[i] = el)}
          />
        ))}
      </section>
    </>
  );
};

const Article = ({
  name,
  id,
  heading,
  index,
  onInViewChange,
  registerRef,
}: {
  name: string;
  id: string;
  heading: string;
  index: number;
  onInViewChange: (id: number, inView: boolean) => void;
  registerRef: (el: HTMLElement | null) => void;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: "some", margin: "-320px 0px -80px 0px" }); // 50% in view

  useEffect(() => {
    onInViewChange(index, inView);
  }, [inView]);

  useEffect(() => {
    registerRef(ref.current);
  }, [ref.current]);

  return (
    <motion.article
      className="grid grid-cols-subgrid col-span-full 2xl:col-span-6 2xl:col-start-2 scroll-mt-44 2xl:scroll-mt-32"
      //   initial={{ opacity: 0 }}
      //   animate={{ opacity: inView ? 1 : 0.5 }}
      id={id}
      ref={ref}
    >
      <hgroup className="col-span-default mb-6">
        <h2 className="text-body-2 font-medium text-stone-400 mb-1">{name} layer</h2>
        <h3 className="text-heading-1 mb-2">{heading}</h3>
        <p className="text-body-1 mb-6">
          Count on us to deliver cutting-edge tech, built on high-community standards from robust
          hardware and firmware to machine learning models.
        </p>
      </hgroup>
    </motion.article>
  );
};
