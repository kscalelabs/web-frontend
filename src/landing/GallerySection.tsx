import { motion, useTransform, useScroll } from "motion/react";
import { useRef } from "react";

const GallerySection = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  });

  return (
    <section
      className="relative col-span-full bg-gradient-to-b from-methyl via-oxide to-rust min-h-[360svh]"
      ref={scrollRef}
    >
      <motion.div
        className="sticky top-16 bg-sol size-8 rounded-full"
        style={{ opacity: useTransform(scrollYProgress, [0, 0.25], [1, 0]) }}
      />
      <motion.div
        className="sticky top-16 bg-sol size-8 rounded-full translate-x-[100%]"
        style={{ opacity: useTransform(scrollYProgress, [0.25, 0.5], [1, 0]) }}
      />
      <motion.div
        className="sticky top-16 bg-sol size-8 rounded-full translate-x-[200%]"
        style={{ opacity: useTransform(scrollYProgress, [0.5, 0.75], [1, 0]) }}
      />
      <motion.div
        className="sticky top-16 bg-sol size-8 rounded-full translate-x-[300%]"
        style={{ opacity: useTransform(scrollYProgress, [0.75, 1], [1, 0]) }}
      />
      <motion.div
        className="sticky top-16 bg-sol size-8 rounded-full translate-x-[400%]"
        style={{ opacity: useTransform(scrollYProgress, [0.75, 1], [1, 0]) }}
      />
    </section>
  );
};

export default GallerySection;
