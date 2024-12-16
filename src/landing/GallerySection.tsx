import { motion, useTransform, useScroll, MotionValue } from "motion/react";
import { useContext } from "react";
import { createContext } from "react";
import { useRef } from "react";
import Image from "next/image";
import { photoPathAltText, photoPaths } from "@/components/util/photoPaths";

const Images = [
  {
    src: photoPaths.GALLERY_1,
    alt: photoPathAltText.GALLERY_1_ALT,
  },
  {
    src: photoPaths.GALLERY_2,
    alt: photoPathAltText.GALLERY_2_ALT,
  },
  {
    src: photoPaths.GALLERY_3,
    alt: photoPathAltText.GALLERY_3_ALT,
  },
  {
    src: photoPaths.GALLERY_4,
    alt: photoPathAltText.GALLERY_4_ALT,
  },
  {
    src: photoPaths.GALLERY_5,
    alt: photoPathAltText.GALLERY_5_ALT,
  },
  {
    src: photoPaths.GALLERY_6,
    alt: photoPathAltText.GALLERY_6_ALT,
  },
];

const GalleryItem = ({ src, alt, index }: { src: string; alt: string; index: number }) => {
  const scrollYProgress = useContext(ScrollContext);
  return (
    <motion.figure
      className="sticky top-24 h-[60svh] min-h-[16rem] bg-gradient-to-b from-methyl via-oxide to-rust rounded-lg overflow-hidden"
      style={{
        opacity: useTransform(scrollYProgress, [index * 0.25, (index + 1) * 0.25], [1, 0]),
        scale: useTransform(scrollYProgress, [index * 0.25, (index + 1) * 0.25], [1, 0.8]),
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        loading={"eager"}
        priority={true}
        sizes={"100dvw"}
      />
    </motion.figure>
  );
};

const ScrollContext = createContext(new MotionValue());

const GallerySection = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  });

  return (
    <section
      className="relative col-span-full lg:col-span-5 lg:col-start-3 2xl:col-span-8 2xl:col-start-3 flex flex-col gap-y-32"
      ref={scrollRef}
    >
      <ScrollContext.Provider value={scrollYProgress}>
        {Images.map((image, index) => (
          <GalleryItem
            key={`gallery-image-${index}`}
            src={image.src}
            alt={image.alt}
            index={index}
          />
        ))}
      </ScrollContext.Provider>
    </section>
  );
};

export default GallerySection;
