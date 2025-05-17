import TheInformation from "@/assets/logos/logo_theinformation.svg";

export const LandingSocialProof = () => {
  return (
    <section className="section">
      <div className="section-container">
        <div className="flex flex-col items-center col-span-full sm:col-span-4 md:col-start-2 2xl:col-span-6 2xl:col-start-4 4xl:col-span-8 4xl:col-start-5 text-center lg:my-12 2xl:my-20 4xl:my-24">
          <blockquote className="text-heading-1 font-medium not-italic mb-4">
            &ldquo;The open-source robotics startup that caught OpenAI&apos;s eye&rdquo;
          </blockquote>

          <TheInformation className="h-8 mb-6" />

          <a
            href="https://www.theinformation.com/articles/open-source-robotics-startup-caught-openais-eye"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit font-medium text-body-2 transition-colors duration-300 text-orange-500 hover:text-orange-400 focus:text-orange-400 active:text-orange-900"
          >
            Read the article
          </a>
        </div>
      </div>
    </section>
  );
};
