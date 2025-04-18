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
              Our mission at K-Scale Labs is to accelerate the timeline to a world with billions of
              general-purpose robots, by making them open-source and universally accessible. We
              believe this is the best route towards making humanity into a Type 1 civilization on
              the Kardashev scale.
            </p>
            <p>
              On a technical level, making real-world AI systems that work well is very difficult
              and requires working across a huge range of disciplines, from designing and building
              physical hardware, to collecting useful data from diverse real-world environments, to
              training and deploying machine learning models. In the face of such challenges, the
              advantages that developing in the open provides, in the form of reduced friction,
              greater collaboration, and increased visibility, greatly outweigh the monetary
              downsides. There is a long historical precedent for companies capitalizing on key
              technological shifts by adopting similar strategies, and we view this as a principled
              business decision in addition to a moral one.
            </p>
            <p>
              Put differently, as a guiding principle, we are more concerned with making sure that
              the <i>goal gets achieved</i> than ensuring that no one else achieves it before us,
              and we expect that our own progress will be much faster and more efficient when work
              is done in the open. Building in the open provides a forcing function for quality that
              is absent in more opaque organizations, and working on deeply technical and integrated
              problems makes this forcing function paramount.
            </p>
            <p>
              More importantly, however, in order for embodied intelligence to achieve its full
              potential, we expect that it ultimately <i>must</i> function in a way that allows
              buy-in from humanity at large. Highly-capable robots are poised to take over large
              amounts of labor in our homes and businesses, and in a democratic society, the only
              way to make rapid forward progress is if the benefits from such changes are widely
              shared. In other words, we expect that the <i>only</i> way for humanoid robots to
              achieve mass adoption is by being open-source, auditable, and broadly accessible.
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
