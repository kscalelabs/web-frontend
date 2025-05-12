import Diagram from "@/assets/content/diagram-stack.svg";
import DiagramMobile from "@/assets/content/diagram-stackmobile.svg";
export function LandingDiagram() {
  return (
    <section className="section pb-0">
      <div className="section-container">
        <figure className="col-span-full 2xl:col-span-4 2xl:col-start-2 4xl:col-span-6 4xl:col-start-2 justify-center mb-6">
          <Diagram className="hidden sm:block" />
          <DiagramMobile className="sm:hidden" />
        </figure>
      </div>
    </section>
  );
}
