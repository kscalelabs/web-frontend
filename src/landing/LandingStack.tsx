import Link from "next/link";
import clsx from "clsx";
import { motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import Arrow from "@/assets/icons/icon_arrowTR.svg";
import Apps from "@/assets/content/application_apps.svg";
import { KOSThumbnail, KVLAThumbnail } from "@/assets/content/stack/StackThumbnail";
import Image from "next/image";
import { useInView } from "motion/react";

type ArticleItem = {
  name: string;
  description?: string[];
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
      heading:
        "Create, deploy, and share robot apps, tools, and policies—built by you and the community.",
      items: [
        {
          name: "Robot Apps Store",
          description: [
            "A single hub to install apps, customize behaviours, train new skills, and teleoperate your robot.",
          ],
          thumbnail: <Apps className="w-full h-auto" />,
          condensed: true,
        },
        {
          name: "K-LANG",
          description: [
            "Control your robot with a neural interpretation domain-specific language (DSL).",
          ],
          condensed: true,
        },
      ],
    },
    {
      layer: "ML",
      id: "ml",
      heading:
        "Open-source library for GPU-accelerated robot learning and zero-shot sim-to-real transfer",
      items: [
        {
          name: "K-SIM",
          href: "https://github.com/kscalelabs/ksim",
          code: "pip install k-sim",
          thumbnailSrc: "/photos/landing/stack/k-sim.gif",
          thumbnailAlt: "K-SIM",
          width: 2560,
          height: 1440,
          description: [
            "High-performance reinforcement learning framework optimized for training humanoid robot locomotion, manipulation, and real-world deployment.",
            "High versatility for tasks such as walking, dancing, household organization, and even cooking.",
          ],
          condensed: false,
        },
        {
          name: "K-VLA",
          // href: "https://github.com/kscalelabs/kvla",
          description: [
            "A generalist policy using large-scale robot data with novel network architecture to enable the most capable and dexterous robot",
            "Locally run and capable of integrating with other VLAs such as Pi0.5 and Gr00t.",
          ],
          condensed: false,
          thumbnail: <KVLAThumbnail />,
          // thumbnailSrc: "/photos/stack/K-VLA.webp",
          // thumbnailAlt: "K-VLA",
          // width: 991,
          // height: 512,
        },
      ],
    },
    {
      layer: "OS",
      id: "os",
      heading: "Rust-based OS to run policies on the real robot, or evaluate in simulation",
      items: [
        {
          name: "K-OS",
          href: "https://github.com/kscalelabs/kos",
          code: "pip install pykos",
          description: [
            "Rust-based, fast, and reliable robot operating system combining hardware, software, and firmware.",
            "Ships with an easy-to-use Python SDK to easily develop robot applications.",
          ],
          condensed: false,
          thumbnail: <KOSThumbnail />,
        },
        {
          name: "K-OS SIM",
          href: "https://github.com/kscalelabs/kos-sim",
          code: "pip install kos-sim",
          description: [
            "A digital twin / model evaluator for the K-Scale Operating System (K-OS) using the same gRPC interface as our real robot",
            "Effortlessly test and refine your models in simulation",
          ],
          condensed: false,
          thumbnailSrc: "/photos/landing/stack/KOSsim.gif",
          thumbnailAlt: "K-OS SIM",
          width: 640,
          height: 480,
        },
      ],
    },
    {
      layer: "Hardware",
      id: "hardware",
      heading: "Deploy policies, VLA models and applications on robot hardware in real-time",
      items: [
        {
          name: "K-Bot",
          href: "https://shop.kscale.dev/products/kbot",
          condensed: false,
          thumbnailSrc: "/photos/landing/stack/kbot.webp",
          thumbnailAlt: "K-Bot",
          width: 643,
          height: 385,
        },
        {
          name: "Z-Bot",
          href: "https://shop.kscale.dev/products/zbot",
          condensed: false,
          thumbnailSrc: "/photos/landing/stack/zbot.webp",
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
        <div className="section-container">
          <aside className="col-span-full 2xl:col-span-2 sticky top-20 2xl:top-32 max-2xl:py-4 bg-background max-2xl:border-b border-b-stone-800 mb-4 h-fit z-10">
            <h2 className="text-body-2 font-medium text-stone-400 2xl:mb-4">Our stack</h2>
            <menu className="flex 2xl:flex-col gap-4 2xl:gap-4">
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
                    }}
                  >
                    {e.layer}
                  </Link>
                </li>
              ))}
            </menu>
          </aside>
          {articles.map((article, i) => (
            <React.Fragment key={`landing-stack-fragment--${i}`}>
              <Article
                name={article.layer}
                id={article.id}
                heading={article.heading}
                index={i + 1}
                onInViewChange={handleInViewChange}
                registerRef={(el) => (sectionRefs.current[i] = el)}
                items={article.items}
              />
            </React.Fragment>
          ))}
        </div>
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
  /* eslint-disable-next-line no-unused-vars */
  onInViewChange: (index: number, visible: boolean) => void;
  /* eslint-disable-next-line no-unused-vars */
  registerRef: (element: HTMLElement | null) => void;
  items: ArticleItem[];
}) => {
  const ref = useRef(null);
  const isVisible = useInView(ref, { amount: "some", margin: "-320px 0px -80px 0px" }); // 50% in view

  useEffect(() => {
    onInViewChange(index, isVisible);
  }, [isVisible, index, onInViewChange]);

  useEffect(() => {
    registerRef(ref.current);
  }, [registerRef, ref]);

  return (
    <motion.article
      className="grid grid-cols-12 gap-x-4 md:gap-x-6 col-span-full 2xl:col-span-8 2xl:col-start-3 4xl:col-span-12 4xl:col-start-3 scroll-mt-44 2xl:scroll-mt-32 mb-16 sm:mb-24 2xl:mb-32"
      id={id}
      ref={ref}
    >
      <hgroup className="col-span-full 2xl:col-span-9 4xl:col-span-8 5xl:col-span-6">
        <h2 className="text-body-2 font-medium text-stone-400 mb-2">{name} layer</h2>
        <p className="text-heading-1 mb-6">{heading}</p>
      </hgroup>
      {items.map((item, i) => (
        <div
          key={`landing-stack-item-${id}--${i}`}
          className={clsx(
            "col-span-full md:col-span-6 first-of-type:lg:col-start-1 mb-6",
            id == "hardware" ? "lg:col-span-4" : "lg:col-span-6"
          )}
        >
          <div className="rounded-xl overflow-hidden mb-6">
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
                  className="object-cover aspect-video w-full"
                >
                  <source src={item.thumbnailSrc} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={item.thumbnailSrc}
                  alt={item.thumbnailAlt ?? ""}
                  width={item.width}
                  height={item.height}
                  className="object-cover aspect-video w-full"
                  loading={"eager"}
                  priority={true}
                  sizes={"100dvw"}
                />
              )
            ) : (
              <Placeholder condensed={item.condensed} />
            )}
          </div>
          <h3 className={clsx("mb-2", item.condensed ? "text-body-2 font-bold" : "text-heading-2")}>
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex flex-wrap"
              >
                {item.name}
                <Arrow className="size-8 group-hover:translate-x-[12.5%] group-hover:-translate-y-[12.5%] group-focus:translate-x-[12.5%] group-focus:-translate-y-[12.5%] transition-transform duration-300" />
              </a>
            ) : (
              item.name
            )}
          </h3>
          {item.description &&
            item.description.map((desc, i) => (
              <p
                key={`article-descriptor-${id}--${i}`}
                className="mb-2 text-stone-400 first-of-type:text-foreground"
              >
                {desc}
              </p>
            ))}
        </div>
      ))}
    </motion.article>
  );
};

const Placeholder = ({ condensed }: { condensed: boolean }) => {
  return (
    <div
      className={clsx(
        "bg-gradient-to-br from-background via-stone-900 to-background flex items-center justify-center select-none cursor-default",
        condensed ? "aspect-[5/1]" : "aspect-video"
      )}
    >
      <span className="text-stone-500 text-body-3 font-bold border border-stone-500 rounded-full px-3 py-1 cursor-default">
        Coming soon
      </span>
    </div>
  );
};
