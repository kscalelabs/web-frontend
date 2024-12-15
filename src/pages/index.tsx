import Footer from "@/components/footer/footer";
import { Grid } from "@/components/grid/Grid";
import NavBar from "@/components/navbar/navbar";
import HeaderSection from "@/landing/HeaderSection";
import ResearchSection from "@/landing/ResearchSection";
import SpecSection from "@/landing/SpecSection";
import RobotSection from "@/landing/RobotSection";
import GallerySection from "@/landing/GallerySection";
import PricingSection from "@/landing/PricingSection";
import DataSection from "@/landing/DataSection";
import CommunitySection from "@/landing/CommunitySection";
import Sponsors from "@/landing/Sponsors";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col ">
      <NavBar />
      <main className="gap-y-4">
        <HeaderSection />
        <ResearchSection />
        <SpecSection />
        <RobotSection />
        <GallerySection />
        <PricingSection />
        <DataSection />
        <CommunitySection />
        <Sponsors />
      </main>
      <Footer />
    </div>
  );
}
