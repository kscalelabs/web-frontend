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

export const KVLAThumbnail = () => {
  return (
    <div className={clsx("relative bg-stone-900 flex items-center justify-center aspect-video")}>
      <span className="absolute z-10 text-stone-500 text-body-3 font-bold border border-stone-500 rounded-full px-3 py-1 cursor-default">
        Coming soon
      </span>
      <Image
        src={"/photos/landing/stack/k-vla-background.png"}
        alt="K-OS"
        width={1600}
        height={900}
        // className="brightness-[0.8]"
      />
    </div>
  );
};
