import clsx from "clsx";
import Image from "next/image";
import Python from "@/assets/content/stack/visual_k-os_py.svg";
import Rust from "@/assets/content/stack/visual_k-os_rust.svg";

export const KOSThumbnail = () => {
  return (
    <div className={clsx("relative bg-stone-900 flex items-center justify-center aspect-video")}>
      <div className="absolute flex gap-2 lg:gap-4 bottom-4 right-4">
        <Python className="size-12 lg:size-[4.5rem]" />
        <Rust className="size-12 lg:size-[4.5rem]" />
      </div>
      <Image
        src={"/photos/landing/stack/k-os-background.png"}
        alt="K-OS"
        width={1600}
        height={900}
      />
    </div>
  );
};
