import CTAButton from "@/components/buttons/ctaButton";
import Footer from "@/components/footer/footer";
import NavBar from "@/components/navbar/navbar";
import RobotRenderer from "@/components/robot/robotRenderer";

const HeaderSection = () => {
  return (
    <section className="pt-16">
      <div className="flex flex-col items-center text-center pt-10 px-4 max-w-full">
        <h1 className="text-5xl mt-16">The world&apos;s freest humanoid robot</h1>
        <h2 className="text-3xl mt-8">Built to move humanity up the Kardashev scale</h2>
      </div>
    </section>
  );
};

const RobotSection = () => {
  return (
    <div className="flex flex-col items-center text-center pt-10 max-w-full aspect-square my-8">
      <RobotRenderer />
    </div>
  );
};

const MissionSection = () => {
  return (
    <section className="flex flex-col items-center text-center py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-4xl mb-8">Built By Hackers, For Hackers</h2>
      <p className="text-xl mb-6">
        We&apos;re building the next generation of embodied artificial intelligence, pushing
        humanity up the Kardashev scale through accessible robotics.
      </p>
      <p className="text-lg mb-6">
        Open source at heart, our robots are designed for those who want to hack, experiment, and
        push the boundaries of what&apos;s possible with embodied AI.
      </p>
    </section>
  );
};

const TeamSection = () => {
  return (
    <section className="flex flex-col items-center text-center py-16 px-4 max-w-4xl mx-auto bg-gray-50">
      <h2 className="text-4xl mb-8">Building the Future of Embodied AI</h2>
      <p className="text-xl mb-6">
        K-Scale Labs is building a platform for the next generation of embodied artificial
        intelligence.
      </p>
      <p className="text-lg">
        We are working towards a future where embodied intelligence is affordable, accessible,
        useful and safe for everyone.
      </p>
    </section>
  );
};

const BuyNowSection = () => {
  return (
    <div className="flex flex-col items-center text-center pt-10 max-w-full">
      <CTAButton />
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow p-8 max-w-7xl mx-auto px-4 w-full">
        <HeaderSection />
        <RobotSection />
        <MissionSection />
        <TeamSection />
        <BuyNowSection />
      </main>
      <Footer />
    </div>
  );
}
