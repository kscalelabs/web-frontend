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
        src="https://code.jquery.com/jquery-3.7.1.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          // Load Mailchimp code after jQuery is available
          const script = document.createElement("script");
          script.text = `(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]="EMAIL";ftypes[0]="email";fnames[1]="FNAME";ftypes[1]="text";fnames[2]="LNAME";ftypes[2]="text";fnames[3]="ADDRESS";ftypes[3]="address";fnames[4]="PHONE";ftypes[4]="phone";fnames[5]="BIRTHDAY";ftypes[5]="birthday";}(jQuery));var $mcj = jQuery.noConflict(true);`;
          document.body.appendChild(script);
        }}
      />
      <Script
        src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
        strategy="afterInteractive"
      />
      <NavBar href="/zbot" />
      <main className="gap-y-4">
        <HeaderSection />
        <SpecSection />
        <ResearchSection />
        <GallerySection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
}
