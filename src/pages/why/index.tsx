import Footer from "@/components/footer/footer";
import { DownArrowIcon } from "@/components/iconography/Iconography";
import NavBar from "@/components/navbar/navbar";

export default function ResearchIndex() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="gap-y-4">
        <header className="col-span-full flex flex-row min-h-[90svh] auto-rows-auto items-center text-foreground bg-background relative overflow-hidden px-[5vw]">
          <div className="flex flex-col self-end gap-1 md:gap-4 justify-center items-start">
            <h1 className="text-4xl md:text-[4.2rem] tracking-tight">Why Open-Source</h1>
            <h1 className="text-4xl md:text-[4.2rem] tracking-tight">Robots Matter</h1>
            <h4 className="text-base md:text-[1.1rem] tracking-tight max-w-lg leading-snug">
              At K-Scale, we are building general-purpose embodied intelligence. We believe that the
              only way to achieve this is by making our robots open-source and accessible to
              everyone. Here&apos;s why.
            </h4>
          </div>
        </header>
        <div className="flex col-span-full pt-4 justify-center">
          <DownArrowIcon />
        </div>
        <div className="col-span-full flex flex-col items-start text-justify auto-rows-auto text-foreground bg-background relative overflow-hidden px-[5vw] py-20">
          <div className="flex flex-col gap-4 max-w-2xl mx-auto">
            <p>
              Our mission at K-Scale Labs is to build a world with billions of general-purpose
              robots. We think that making generally-useful embodied artificial intelligence is the
              most important challenge of our generation, and we expect that doing so will spark the
              most important industrial revolution of this century.
            </p>
            <p>
              In our opinion, the only path to achieving this is by building robots that are
              open-source and accessible to everyone. On a technical level, making real-world AI
              systems that work well is very difficult and requires working across a huge range of
              disciplines, from training and deploying machine learning models to designing and
              building physical hardware to collecting useful data from diverse real-world
              environments. In the face of such large operational challenges, any additional
              friction only serve to slow down progress and reduce the efficient allocation of
              resources towards achieving that end goal.
            </p>
            <p>
              Put differently, as a guiding principle, we are more concerned with making sure that
              the <i>goal gets achieved</i> than ensuring that no one else achieves it before us,
              and we expect that our own progress will be much faster and more efficient when work
              is done in the open. Building in the open provides a forcing function for quality that
              is absent in more opaque organizations, and working on deeply technical and integrated
              problems makes this forcing function paramount. The sunlight of open development
              provides much-needed oversight that prevents bad actors from exploiting information
              asymmetry for personal gain at the expense of customers, investors and other
              stakeholders, a problem which is particularly acute when working on ambitious
              long-horizon projects like humanoid robots.
            </p>
            <p>
              More importantly, however, in order for embodied intelligence to achieve its full
              potential, we expect that it ultimately <i>must</i> function in a way that allows
              buy-in from humanity at large. Highly-capable robots are poised to take over large
              amounts of labor in our homes and businesses, and if their benefits are not
              decentralized, it will be extremely difficult to overcome the social barriers to
              widespread acceptance that exist in a free society. In other words, we expect that the{" "}
              <i>only</i> way for humanoid robots to achieve mass adoption is by being open-source,
              auditable, and broadly accessible.
            </p>
            <p>
              K-Scale was started in a Palo Alto garage with the dream of building a way for
              everyone to share in the benefits of embodied artificial intelligence. We are
              immensely grateful to those who have supported us thus far, and we intend to work
              diligently until this dream is achieved. We hope you will join us.
            </p>
            <p className="text-right">
              <i>- The K-Scale Team</i>
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
