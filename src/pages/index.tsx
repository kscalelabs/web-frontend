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
      <h2 className="text-4xl mb-8">Built for Developers, By Developers</h2>
      <p className="text-xl mb-6">
        Our humanoid robots are the easiest, most cost-effective way to bring the latest in AI and
        robotics into your workflow.
      </p>
      <p className="text-lg mb-6">
        Designed with developers in mind and built in the open by a community of experts, our robots
        enable seamless integration with your existing systems.
      </p>
    </section>
  );
};

const TeamSection = () => {
  return (
    <section className="flex flex-col items-center text-center py-16 px-4 max-w-4xl mx-auto bg-gray-50">
      <h2 className="text-4xl mb-8">Silicon Valley Excellence</h2>
      <p className="text-xl mb-6">
        Backed by top investors and built by industry leaders from Tesla, Meta, Stanford, MIT, and
        more.
      </p>
      <p className="text-lg">
        Our collective expertise drives innovation in humanoid robotics, pushing humanity up the
        Kardashev scale.
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
