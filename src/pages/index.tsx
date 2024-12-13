import CTAButton, { CTASubtitleButton, Size } from "@/components/buttons/ctaButton";
import { FillMode, ColorVariant } from "@/components/color/Color";
import Footer from "@/components/footer/footer";
import { Discord, IconMode } from "@/components/footer/socialMediaSvgs";
import { Grid } from "@/components/grid/Grid";
import { ExpressiveArrow } from "@/components/iconography/Iconography";
import NavBar from "@/components/navbar/navbar";
import RobotRenderer from "@/components/robot/robotRenderer";
import { motion } from "motion/react";
import Link from "next/link";

const HeaderSection = () => {
  return (
    <header className="col-span-full grid-a min-h-[90svh] auto-rows-auto items-end bg-foreground text-background">
      {/* <Image src="/images/header.png" alt="Header" fill /> */}
      <hgroup className="col-span-full sm:col-span-4 md:col-span-3 md:col-start-6 2xl:col-start-8 2xl:col-span-5 4xl:col-start-8 4xl:col-span-4 flex flex-col mb-12 gap-4">
        <h1 className="text-heading-lg">Made to be modified</h1>
        <h2 className="text-body">
          GPR 1.0 is an open-source &amp; auditable robot, for those who prefer transparency over
          trust.
        </h2>
        <CTASubtitleButton subtitle="Available on Shopify" className="w-full">
          Order GPR 0.5
        </CTASubtitleButton>
      </hgroup>
    </header>
  );
};

const ResearchSection = () => {
  return (
    <section className="col-span-full grid grid-cols-subgrid auto-rows-min py-16">
      <hgroup className="col-span-full sm:col-span-4 2xl:col-span-4 flex flex-col mb-12 gap-4">
        <span className="text-caption uppercase opacity-70 relative y-1/2">Research</span>
        <h2 className="text-heading-md">
          The humanoid robot is as strong as its brain, not its body.
        </h2>
        <p>
          While we provide robust, accessible hardware, our end-to-end model is what makes GPR 1.0
          perform. Here&apos;s some of the progress we&apos;ve made:
        </p>
      </hgroup>
      <div className="col-span-full overflow-hidden relative -mx-[5vw] px-[5vw]">
        <div className="flex flex-row flex-none gap-x-[5vw] sm:gap-x-[2.5vw] 2xl:gap-x-[1.25vw]">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.a
              className="border border-foreground rounded-lg w-[66.25vw] sm:w-[59.167vw] md:w-[38.611vw] 2xl:w-[29.167vw] 4xl:w-[21.5625vw] flex-none"
              key={`research-card--${i}`}
              href="/"
              target="_blank"
            >
              <article className="p-4 flex flex-col gap-y-24">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L2 22H22L12 2Z"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex flex-col gap-y-4">
                  <h3 className="text-body">Edge VLA</h3>
                  <p className="text-caption">
                    Our general purpose foundation AI model, helping robots complete tasks
                    autonomously. Through open-source data contributions, we&apos;re training a
                    highly efficient model together.
                  </p>
                </div>
              </article>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

const SpecSection = () => {
  return (
    <section className="col-span-full grid grid-cols-subgrid min-h-[90svh] py-16 gap-y-16">
      <article className="col-span-full sm:col-span-5 md:col-span-6 lg:col-span-5 xl:col-span-4 2xl:col-span-6 4xl:col-span-5 flex flex-col gap-8 lg:sticky top-32">
        <hgroup className="">
          <span className="text-heading-md opacity-60 font-apparat">What is GPR?</span>
          <h2 className="text-heading-md">
            A 4.5 foot humanoid robot, optimized for our approach to software for embodied AI.
          </h2>
        </hgroup>
        <Link
          href="/"
          className="text-body w-fit text-plasma dark:text-plasma-dark flex flex-row gap-1 items-center"
        >
          Read tech specs{" "}
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.0195 16L7.01953 11L8.41953 9.55L11.0195 12.15V4H13.0195V12.15L15.6195 9.55L17.0195 11L12.0195 16ZM6.01953 20C5.46953 20 4.99886 19.8043 4.60753 19.413C4.2162 19.0217 4.0202 18.5507 4.01953 18V15H6.01953V18H18.0195V15H20.0195V18C20.0195 18.55 19.8239 19.021 19.4325 19.413C19.0412 19.805 18.5702 20.0007 18.0195 20H6.01953Z"
              className="fill-plasma dark:fill-plasma-dark"
            />
          </svg>
        </Link>
      </article>
      <article className="col-span-full grid grid-cols-subgrid gap-y-4">
        <h3 className="col-span-full sm:col-span-5 sm:col-start-2 md:col-span-5 md:col-start-4 lg:col-span-4 lg:col-start-6 xl:col-span-3 xl:col-start-6 2xl:col-span-6 2xl:col-start-7 3xl:col-span-5 3xl:col-start-8 4xl:col-span-4 4xl:col-start-7 text-heading-sm">
          {`We've built GPR 0.5 with an aerospace-grade alumininum body, for under $20,000 USD. `}
          <span className="inline opacity-60">
            Anodized with a matte black finish, because it looks cooler.
          </span>
        </h3>
        <div className="col-span-full sm:col-span-5 sm:col-start-2 md:col-span-5 md:col-start-4 lg:col-span-4 lg:col-start-6 xl:col-span-4 xl:col-start-6 2xl:col-span-6 2xl:col-start-7 3xl:col-span-5 3xl:col-start-8 4xl:col-span-5 4xl:col-start-7 bg-gradient-to-b from-methyl via-oxide to-rust aspect-video rounded-md" />
      </article>
      <article className="col-span-full grid grid-cols-subgrid gap-y-4">
        <h3 className="col-span-full sm:col-span-5 sm:col-start-2 md:col-span-5 md:col-start-4 lg:col-span-4 lg:col-start-6 xl:col-span-3 xl:col-start-6 2xl:col-span-6 2xl:col-start-7 3xl:col-span-5 3xl:col-start-8 4xl:col-span-4 4xl:col-start-7 text-heading-sm">
          Equipped with 120 Nm actuators at the hips, taking advantage of strong torque for dynamic
          walking and manipulation.
        </h3>
        <div className="col-span-full sm:col-span-5 sm:col-start-2 md:col-span-5 md:col-start-4 lg:col-span-4 lg:col-start-6 xl:col-span-4 xl:col-start-6 2xl:col-span-6 2xl:col-start-7 3xl:col-span-5 3xl:col-start-8 4xl:col-span-5 4xl:col-start-7 bg-gradient-to-b from-methyl via-oxide to-rust aspect-video rounded-md" />
      </article>
      <article className="col-span-full grid grid-cols-subgrid gap-y-4">
        <h3 className="col-span-full sm:col-span-5 sm:col-start-2 md:col-span-5 md:col-start-4 lg:col-span-4 lg:col-start-6 xl:col-span-3 xl:col-start-6 2xl:col-span-6 2xl:col-start-7 3xl:col-span-5 3xl:col-start-8 4xl:col-span-4 4xl:col-start-7 text-heading-sm">
          Explore the potential of any idea with 32 TOPS of AI performance.
        </h3>
        <div className="col-span-full sm:col-span-5 sm:col-start-2 md:col-span-5 md:col-start-4 lg:col-span-4 lg:col-start-6 xl:col-span-4 xl:col-start-6 2xl:col-span-6 2xl:col-start-7 3xl:col-span-5 3xl:col-start-8 4xl:col-span-5 4xl:col-start-7 bg-gradient-to-b from-methyl via-oxide to-rust aspect-video rounded-md" />
      </article>
    </section>
  );
};

const RobotSection = () => {
  return (
    <section className="col-span-full flex flex-col items-center text-center max-w-full aspect-square md:aspect-video bg-plasma">
      <RobotRenderer />
    </section>
  );
};

const GallerySection = () => {
  return (
    <section className="col-span-full flex flex-col bg-gradient-to-b from-methyl via-oxide to-rust min-h-[270svh]"></section>
  );
};

const PricingSection = () => {
  return (
    <section className="col-span-full grid md:grid-cols-2 3xl:col-span-10 3xl:col-start-2 4xl:col-span-8 4xl:col-start-3 sm:gap-x-[2.5vw] 2xl:gap-x-[1.25vw] gap-y-4 py-16">
      <article className="flex flex-col gap-y-4 p-8 bg-gradient-to-br from-methyl via-oxide to-rust rounded-lg text-background dark:text-background-dark">
        <hgroup>
          <span className="text-caption opacity-60">Limited edition &mdash; 20 units total</span>
          <h3 className="text-heading-md font-apparat">
            Get free yearly hardware upgrades as a founder
          </h3>
        </hgroup>
        <p className=" text-body mb-24">
          Priority delivery and yearly service on new parts and hardware, for the rest of your life.
        </p>
        <CTASubtitleButton
          className="mt-auto"
          href="https://shop.kscale.dev/products/kbot-fe"
          subtitle="$833 per month"
          mode={FillMode.INVERT}
        >
          Order GPR Founders&apos; Edition
        </CTASubtitleButton>
      </article>

      <article className="flex flex-col gap-y-4 p-8 border border-rust dark:border-foreground-dark rounded-lg text-rust dark:text-foreground-dark">
        <hgroup>
          <span className="text-caption opacity-60">Available for all engineers</span>
          <h3 className="text-heading-md font-apparat">
            Our plug and play robotics solution, at an accessible price.
          </h3>
        </hgroup>
        <p className="text-body mb-8">
          {`Invest in yourself and your engineering potential with GPR's embodied AI ecosystem.`}
        </p>
        <CTASubtitleButton
          className="mt-auto"
          href="https://shop.kscale.dev/products/kbot"
          subtitle="$533 per month"
        >
          Order GPR Developers&apos; Edition
        </CTASubtitleButton>
      </article>
    </section>
  );
};

const DataSection = () => {
  return (
    <section className="col-span-full grid grid-cols-subgrid py-16">
      <hgroup className="col-span-full sm:col-span-4 md:col-start-2 flex flex-col mb-12 gap-4">
        <span className="text-caption uppercase opacity-70 relative y-1/2">Data buy-back</span>
        <h2 className="text-heading-md">Get refunded each month that you send us data.</h2>
        <p>
          If you collect at least 100 hours of telemetry over the course of a month we&apos;ll pay
          you back the month&apos;s payment.
        </p>
      </hgroup>
    </section>
  );
};

const CommunitySection = () => {
  return (
    <section className="col-span-full grid grid-cols-subgrid auto-rows-min gap-y-4 py-16">
      <hgroup className="col-span-full sm:col-span-4 2xl:col-span-4 flex flex-col gap-4">
        <span className="text-caption uppercase opacity-70 relative y-1/2">Community</span>
        <h2 className="text-heading-md">Take ownership of how we keep building.</h2>
        <p>
          With over 2000 people in our Discord, our community has collaboratively on 6 humanoid
          robot projects, building off each other&apos;s work and publishing papers on the forefront
          of embodied AI tools.
        </p>
      </hgroup>
      <menu className="col-span-full flex flex-row gap-x-4">
        <CTAButton href="/" variant={ColorVariant.PLASMA} size={Size.NORMAL}>
          Join the Discord <Discord mode={IconMode.SET} />
        </CTAButton>

        <motion.a
          href="/"
          className="text-body w-fit text-plasma dark:text-plasma-dark flex flex-row gap-1 items-center"
          initial="initial"
          whileHover="hover"
          variants={{
            initial: {
              opacity: 0.6,
            },
            hover: {
              opacity: 1,
            },
          }}
        >
          Send feedback <ExpressiveArrow />
        </motion.a>
      </menu>

      <article className="col-span-full md:col-span-4 flex flex-col gap-y-4 my-16">
        <h2 className="text-caption uppercase opacity-70 relative y-1/2">About us</h2>
        <p>
          We&apos;re hackers, engineers, and researchers that believe in a world where robots are
          made for everyone
        </p>
        <p>
          We&apos;re from Tesla AI, Google, Meta FAIR, Stanford, and Xiaomi building opportunities
          for robots to be more than workers.
        </p>
      </article>
    </section>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <Grid />
      <HeaderSection />
      <main className="grid-a gap-y-4">
        <ResearchSection />
        <SpecSection />
        <RobotSection />
        <GallerySection />
        <PricingSection />
        <DataSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
}
