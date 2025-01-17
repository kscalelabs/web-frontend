import Footer from "@/components/footer/footer";
import NavBar from "@/components/navbar/navbar";
import Script from "next/script";
import CommunitySection from "@/zbot/CommunitySection";
import GallerySection from "@/zbot/GallerySection";
import HeaderSection from "@/zbot/HeaderSection";
import ResearchSection from "@/zbot/ResearchSection";
import SpecSection from "@/zbot/SpecSection";
import { useLenis } from "lenis/dist/lenis-react";
import { useEffect } from "react";

export default function ZBot() {
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      const handleScroll = () => {
        if (lenis.isScrolling) {
          document.body.classList.toggle("scroll-bar", true);
        }
        if (!lenis.isScrolling) {
          document.body.classList.toggle("scroll-bar", false);
        }
      };

      lenis.on("scroll", handleScroll);

      return () => {
        lenis.off("scroll", handleScroll);
      };
    }
  }, [lenis]);

  return (
    <div className="min-h-screen flex flex-col">
      <Script
        src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
        strategy="afterInteractive"
      />
      <NavBar href="/zbot" />
      <main className="gap-y-4">
        <HeaderSection />
        <ResearchSection />
        <SpecSection />
        <GallerySection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
}
