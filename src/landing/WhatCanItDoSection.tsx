import { InlineCTA } from "@/components/buttons/CTAButtons";
import { ExpressiveArrow } from "@/components/iconography/Iconography";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const requests = [
  // Home Chores
  "make me a sandwich?",
  "break down these cardboard boxes for recycling?",
  "water my plants while I'm away?",
  "help me organize this closet?",
  "load the dishwasher?",
  "fold my laundry?",
  "vacuum the living room?",
  "clean the windows?",
  "take out the trash?",
  "meal prep for the week?",
  "sort through my mail?",
  "pack these moving boxes?",
  "organize my garage?",
  "dust the bookshelves?",
  "mop the kitchen floor?",
  "put away the groceries?",
  "organize my desk?",
  "clean the bathroom?",
  "sort my recycling?",
  "tidy up the kids' toys?",
  "scrub the shower tiles?",
  "clean the gutters?",
  "organize the pantry?",
  "wipe down kitchen cabinets?",
  "change the bed sheets?",
  "iron my clothes?",
  "clean the microwave?",
  "sweep the patio?",
  "organize the medicine cabinet?",
  "clean the refrigerator?",

  // Business & Commercial
  "prep vegetables in the restaurant kitchen?",
  "sanitize restaurant tables between guests?",
  "restock the shelves?",
  "help my grandma pick up the remote control?",
  "clean up the third-floor rooms in my hotel?",
  "organize our warehouse inventory?",
  "keep our office clean?",
  "catalog our inventory?",

  // Additional Home Tasks
  "clean the oven?",
  "organize the garage tools?",
  "sort through old clothes?",
  "clean under the furniture?",
  "clean ceiling fans?",
  "wash the car?",
  "organize the spice rack?",
  "clean up after my cat?",
  "organize the junk drawer?",
  "organize the linen closet?",
  "clean window tracks?",
  "weed the garden?",
  "organize my cables?",
];

interface RequestItemProps {
  request: string;
}

const RequestItem = ({ request }: RequestItemProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Transform scrollYProgress to opacity and scale
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.5, 0.6, 1], [0.3, 0.8, 1, 0.8, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.4, 0.5, 0.6, 1], [0.95, 1, 1.05, 1, 0.95]);

  return (
    <motion.article
      ref={ref}
      style={{
        opacity,
        scale,
      }}
      className="pt-2 rounded-lg backdrop-blur-sm transition-colors duration-300 italic"
      transition={{ duration: 0.2 }}
    >
      <h3 className="text-heading-sm mb-2">... {request}</h3>
    </motion.article>
  );
};

const WhatCanItDoSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section className="relative col-span-full grid grid-cols-subgrid py-16 gap-y-16">
      <motion.aside className="col-span-full sm:col-span-5 md:col-span-6 lg:col-span-4 xl:col-span-4 2xl:col-span-6 4xl:col-span-5 flex flex-col gap-8">
        <div className="lg:sticky top-32">
          <hgroup>
            <span className="text-heading-md text-foreground60 font-apparat">
              What can K-Bot do?
            </span>
            <h2 className="text-heading-md">
              Designed by top AI researchers and engineers to be the best robot for AGI.
            </h2>
            <InlineCTA href="https://github.com/kscalelabs">
              Continuously learning and improving <ExpressiveArrow size="size-4" />
            </InlineCTA>
          </hgroup>
        </div>
      </motion.aside>

      <article className="col-span-full lg:col-span-5 2xl:col-span-6 2xl:-col-end-1 4xl:col-span-7 4xl:-col-end-1 grid grid-cols-subgrid gap-y-4">
        <div className="relative col-span-full sm:col-span-5 sm:col-start-2 md:col-span-5 md:col-start-4 lg:col-span-4 lg:col-start-2 xl:col-span-3 xl:col-start-2 2xl:col-span-5 2xl:col-start-2 3xl:col-span-5 3xl:col-start-2 4xl:col-span-4 4xl:col-start-2">
          <div className="sticky top-16 z-20 isolate overflow-hidden">
            <div className="relative inline-block bg-background/80 backdrop-blur-sm px-6 py-3 rounded-2xl">
              <h3 className="text-heading-sm">Hey K-Bot, can you...</h3>
              <div className="absolute left-6 bottom-0 w-4 h-4 bg-background/80 transform rotate-45 translate-y-2"></div>
            </div>
          </div>
          <div className="mt-8 relative rounded-md">
            {requests.map((request, index) => (
              <RequestItem key={index} request={request} />
            ))}
          </div>
        </div>
      </article>
    </section>
  );
};

export default WhatCanItDoSection;
