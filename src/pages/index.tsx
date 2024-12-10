import { motion } from "motion/react";
import Link from "next/link";
import { navMotionTransition, scaleMotionNumber } from "@/components/util/constants";

export default function Home() {
  return (
    <div
      className={`grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 
      gap-16 sm:p-20 `}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-xl font-planar font-normal text-foreground ">
          We're cooking something 👀
        </h1>
        <div className={"flex flex-row items-baseline gap-2 "}>
          <p className="text-md font-planar font-normal text-foreground">Join </p>
          <motion.a
            initial={{ scale: 1 }}
            whileHover={scaleMotionNumber}
            transition={navMotionTransition}
            className={"font-bold text-foreground hover:text-accent-blood-orange"}
            href={"https://discord.gg/kscale"}
            target={"_blank"}
          >
            our Discord
          </motion.a>
          <p className="text-md font-planar font-normal text-foreground">
            for most updated info :)
          </p>
        </div>
        {/*<div className="flex flex-col gap-4 text-2xl">*/}
        {/*    <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">*/}
        {/*        <rect width="50" height="50" x="10" y="10" className={"fill-accent-aubergine"}/>*/}
        {/*    </svg>*/}
        {/*    Aubergine*/}
        {/*    <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">*/}
        {/*        <rect width="50" height="50" x="10" y="10" className={"fill-accent-dragonfruit"}/>*/}
        {/*    </svg>*/}
        {/*    Dragonfruit*/}
        {/*    <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">*/}
        {/*        <rect width="50" height="50" x="10" y="10" className={"fill-accent-apple"}/>*/}
        {/*    </svg>*/}
        {/*    Apple*/}
        {/*    <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">*/}
        {/*        <rect width="50" height="50" x="10" y="10" className={"fill-accent-blood-orange"}/>*/}
        {/*    </svg>*/}
        {/*    Blood Orange*/}
        {/*    <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">*/}
        {/*        <rect width="50" height="50" x="10" y="10" className={"fill-accent-tangerine"}/>*/}
        {/*    </svg>*/}
        {/*    Tangerine*/}
        {/*    <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">*/}
        {/*        <rect width="50" height="50" x="10" y="10" className={"fill-accent-butter"}/>*/}
        {/*    </svg>*/}
        {/*    Butter*/}
        {/*</div>*/}

        {/*<div className="flex flex-col gap-4 text-2xl">*/}
        {/*    <h2 className="font-planar font-bold">GT Planar Bold</h2>*/}
        {/*    <h2 className="font-planar font-normal">GT Planar Regular</h2>*/}
        {/*    <h2 className="font-apparat font-bold">KMR Apparat Bold</h2>*/}
        {/*    <h2 className="font-apparat font-medium">KMR Apparat Medium</h2>*/}
        {/*    <h2 className="font-mono font-normal">CoFo Sans Regular</h2>*/}
        {/*    <h2 className="font-mono font-medium">CoFo Sans Medium</h2>*/}
        {/*</div>*/}

        {/*<div className="flex flex-col gap-4 text-2xl">*/}
        {/*    <h2 className="font-planar font-bold">GT Planar Bold</h2>*/}
        {/*    <h2 className="font-planar font-normal">GT Planar Regular</h2>*/}
        {/*    <h2 className="font-apparat font-bold">KMR Apparat Bold</h2>*/}
        {/*    <h2 className="font-apparat font-medium">KMR Apparat Medium</h2>*/}
        {/*    <h2 className="font-mono font-normal">CoFo Sans Regular</h2>*/}
        {/*    <h2 className="font-mono font-medium">CoFo Sans Medium</h2>*/}
        {/*</div>*/}

        {/*<div className="flex flex-col gap-4 text-2xl">*/}
        {/*    <h2 className="font-planar font-bold">GT Planar Bold</h2>*/}
        {/*    <h2 className="font-planar font-normal">GT Planar Regular</h2>*/}
        {/*    <h2 className="font-apparat font-bold">KMR Apparat Bold</h2>*/}
        {/*    <h2 className="font-apparat font-medium">KMR Apparat Medium</h2>*/}
        {/*    <h2 className="font-mono font-normal">CoFo Sans Regular</h2>*/}
        {/*    <h2 className="font-mono font-medium">CoFo Sans Medium</h2>*/}
        {/*</div>*/}

        {/*<div className="flex flex-col gap-4 text-2xl">*/}
        {/*    <h2 className="font-planar font-bold">GT Planar Bold</h2>*/}
        {/*    <h2 className="font-planar font-normal">GT Planar Regular</h2>*/}
        {/*    <h2 className="font-apparat font-bold">KMR Apparat Bold</h2>*/}
        {/*    <h2 className="font-apparat font-medium">KMR Apparat Medium</h2>*/}
        {/*    <h2 className="font-mono font-normal">CoFo Sans Regular</h2>*/}
        {/*    <h2 className="font-mono font-medium">CoFo Sans Medium</h2>*/}
        {/*</div>*/}
        {/*<div className="flex flex-col gap-4 text-2xl">*/}
        {/*    <h2 className="font-planar font-bold">GT Planar Bold</h2>*/}
        {/*    <h2 className="font-planar font-normal">GT Planar Regular</h2>*/}
        {/*    <h2 className="font-apparat font-bold">KMR Apparat Bold</h2>*/}
        {/*    <h2 className="font-apparat font-medium">KMR Apparat Medium</h2>*/}
        {/*    <h2 className="font-mono font-normal">CoFo Sans Regular</h2>*/}
        {/*    <h2 className="font-mono font-medium">CoFo Sans Medium</h2>*/}
        {/*</div>*/}
        {/*<div className="flex flex-col gap-4 text-2xl">*/}
        {/*    <h2 className="font-planar font-bold">GT Planar Bold</h2>*/}
        {/*    <h2 className="font-planar font-normal">GT Planar Regular</h2>*/}
        {/*    <h2 className="font-apparat font-bold">KMR Apparat Bold</h2>*/}
        {/*    <h2 className="font-apparat font-medium">KMR Apparat Medium</h2>*/}
        {/*    <h2 className="font-mono font-normal">CoFo Sans Regular</h2>*/}
        {/*    <h2 className="font-mono font-medium">CoFo Sans Medium</h2>*/}
        {/*</div>*/}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
