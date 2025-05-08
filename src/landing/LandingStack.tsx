import Link from "next/link";
import clsx from "clsx";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Arrow from "@/assets/icons/icon_arrowTR.svg";
import Apps from "@/assets/content/application_apps.svg";
import Image from "next/image";

type ArticleItem = {
  name: string;
  description?: string;
  href?: string;
  thumbnail?: any;
  condensed: boolean;
  video?: boolean;
  code?: string;
  thumbnailSrc?: string;
  thumbnailAlt?: string;
  width?: number;
  height?: number;
};

type Article = {
  name: string;
  id: string;
  heading: string;
  items: ArticleItem[];
};

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
      items: [
        {
          name: "Robot Apps Store",
          description:
            "All-in-one hub to install community policies, apps, and tools, as well as customize and train your very own robot–like teleop.",
          thumbnail: <Apps className="w-full h-auto mb-4" />,
          condensed: true,
        },
        {
          name: "K-Lang",
          description:
            "Skip writing ROS nodes with our domain-specific language for interfacing with neural interpretation.",
          condensed: true,
        },
      ],
    },
    {
      layer: "ML",
      id: "ml",
      heading: "Open-source library for GPU-accelerated robot learning and sim-to-real transfer",
      items: [
        {
          name: "K-SIM",
          href: "https://github.com/kscalelabs/ksim",
          code: "`pip install k-sim`",
          thumbnailSrc: "/photos/stack/K-Sim.mp4",
          thumbnailAlt: "K-SIM",
          width: 2560,
          height: 1440,
          video: true,
          // thumbnailSrc: "/photos//ksim.png",
          description:
            "High-performance reinforcement learning framework optimized for training humanoid robot locomotion, manipulation, and real world deployment. For tasks like walking, dancing, and object picking.",
          condensed: false,
        },
        {
          name: "K-VLA",
          href: "https://github.com/kscalelabs/kvla",
          description:
            "We’re training a generalist policy using large-scale robot data with a new network architecture to enable the most capable and dexterous robots, running locally. Capable of integrating with other VLAs such as Pi0.5 or Gr00t",
          condensed: false,
          thumbnailSrc: "/photos/stack/K-VLA.webp",
          thumbnailAlt: "K-VLA",
          width: 991,
          height: 512,
        },
      ],
    },
    {
      layer: "OS",
      id: "os",
      heading: "Rust based OS to run policies on the real robot, or evaluate in simulation",
      items: [
        {
          name: "K-OS",
          href: "https://github.com/kscalelabs/ksim",
          code: "`pip install pykos`",
          description:
            "Rust based fast and reliable robot operating system combining hardware, software, and firmware, with easy to use Python SDK. Easily develop robot application with Python.",
          condensed: false,
          thumbnailSrc: "/photos/stack/KOS.webp",
          thumbnailAlt: "K-OS",
          width: 992,
          height: 512,
        },
        {
          name: "K-OS SIM",
          href: "https://github.com/kscalelabs/kvla",
          code: "`pip install kos-sim`",
          description:
            "​KOS-Sim is a digital twin and model evaluator for the K-Scale Operating System (KOS), using the same gRPC interface as the real robot. Easily test and refine your models in simulation.",
          condensed: false,
          thumbnailSrc: "/photos/stack/KOSsim.gif",
          thumbnailAlt: "K-OS SIM",
          width: 640,
          height: 480,
        },
      ],
    },
    {
      layer: "Hardware",
      id: "hardware",
      heading: "Deploy policies, VLA models, and run applications on robot hardware",
      items: [
        {
          name: "K-Bot",
          href: "https://shop.kscale.dev/products/kbot",
          condensed: false,
          thumbnailSrc: "/photos/stack/kbot.webp",
          thumbnailAlt: "K-Bot",
          width: 643,
          height: 385,
        },
        {
          name: "Z-Bot",
          href: "https://zerothbot.com",
          condensed: false,
          thumbnailSrc: "/photos/stack/zbot.webp",
          thumbnailAlt: "Z-Bot",
          width: 642,
          height: 385,
        },
        {
          name: "M-Bot",
          condensed: false,
        },
      ],
    },
  ];
  return (
    <>
      <section className="section">
        <aside className="max-2xl:col-span-full sticky top-20 2xl:top-32 max-2xl:py-4 bg-background max-2xl:border-b border-b-stone-800 mb-4 h-fit z-10">
          <h2 className="text-body-2 font-medium text-stone-400 2xl:mb-4">Our stack</h2>
          <menu className="flex 2xl:flex-col gap-6 2xl:gap-4">
            {articles.map((e, i) => (
              <li key={`landing-stack-link--${i}`}>
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
            items={article.items}
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
  items,
}: {
  name: string;
  id: string;
  heading: string;
  index: number;
  onInViewChange: (id: number, inView: boolean) => void;
  registerRef: (el: HTMLElement | null) => void;
  items: ArticleItem[];
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: "some", margin: "-320px 0px -80px 0px" }); // 50% in view

  useEffect(() => {
    onInViewChange(index, inView);
  }, [inView]);

  useEffect(() => {
    registerRef(ref.current);
  }, [ref.current]);

  console.log(items);

  return (
    <motion.article
      className="grid grid-cols-subgrid col-span-full 2xl:col-span-6 2xl:col-start-2 scroll-mt-44 2xl:scroll-mt-32 mb-16"
      //   initial={{ opacity: 0 }}
      //   animate={{ opacity: inView ? 1 : 0.5 }}
      id={id}
      ref={ref}
    >
      <hgroup className="col-span-default">
        <h2 className="text-body-2 font-medium text-stone-400 mb-1">{name} layer</h2>
        <p className="text-heading-1 mb-4">{heading}</p>
      </hgroup>
      {items.map((item, i) => (
        <div
          key={`landing-stack-item-${id}--${i}`}
          className={clsx(
            "col-span-full md:col-span-2 first-of-type:lg:col-start-1 mb-6",
            id == "hardware" ? "lg:col-span-2" : "lg:col-span-3"
          )}
        >
          {item.thumbnail ? (
            item.thumbnail
          ) : item.thumbnailSrc ? (
            item.video ? (
              <video
                width="1920"
                height="1080"
                autoPlay
                muted
                loop
                playsInline
                className="object-cover aspect-video mb-4"
              >
                <source src={item.thumbnailSrc} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={item.thumbnailSrc}
                alt={item.thumbnailAlt ?? ""}
                width={item.width}
                height={item.height}
                className="object-cover aspect-video mb-4"
                loading={"eager"}
                priority={true}
                sizes={"100dvw"}
              />
            )
          ) : (
            <Placeholder condensed={item.condensed} />
          )}
          <h3 className={clsx("mb-2", item.condensed ? "text-body-2 font-bold" : "text-heading-2")}>
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex"
              >
                {item.name}
                <Arrow className="size-8 group-hover:translate-x-[12.5%] group-hover:-translate-y-[12.5%] group-focus:translate-x-[12.5%] group-focus:-translate-y-[12.5%] transition-transform duration-300" />
              </a>
            ) : (
              item.name
            )}
            {item.code && (
              <code className="inline-flex mx-2 lg:mx-4 px-1.5 bg-stone-900 rounded-md border border-stone-800 text-stone-400 text-body-3">
                {item.code}
              </code>
            )}
          </h3>
          {item.description && <p>{item.description}</p>}
        </div>
      ))}
    </motion.article>
  );
};

const Placeholder = ({ condensed }: { condensed: boolean }) => {
  return (
    <div
      className={clsx(
        "bg-stone-900 mb-4 flex items-center justify-center",
        condensed ? "aspect-[5/1]" : "aspect-video"
      )}
    >
      <span className="text-stone-500 text-body-3 font-bold border border-stone-500 rounded-full px-3 py-1">
        Coming soon
      </span>
    </div>
  );
};
