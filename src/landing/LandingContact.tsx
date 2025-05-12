import Link from "next/link";
import { CopyCode } from "@/components/ui/Code/CopyCode";

export function LandingContact() {
  return (
    <section className="section">
      <div className="container">
        <hgroup className="col-span-default col-start-default mb-6">
          <h2 className="text-body-2 font-medium text-stone-400 mb-1">About us</h2>
          <p className="text-heading-1 mb-2">
            We&apos;re hackers, engineers, and researchers that believe in a world where robots are
            made for everyone.
          </p>
          <p className="text-body-1 mb-6">
            Shoot us an email at{" "}
            <CopyCode string="inquiries@kscale.dev" size="large" font="regular" /> for any business
            inquiries or if you want to connect with us!
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            {/* <Button onClick={() => copyEmail()} icon={Copy}>
              Copy email address
            </Button> */}
            <Link
              className="w-fit text-body-2 transition-colors duration-300 text-orange-700 hover:text-orange-800 focus:text-orange-800 active:text-orange-900"
              href="/careers"
            >
              See open roles (3)
            </Link>
          </div>
        </hgroup>
        <aside className="col-span-full md:col-span-2 lg:col-span-1 lg:-col-end-1 2xl:-col-end-2">
          <h3 className="text-body-3 font-medium text-stone-400 mb-1">Our team (10)</h3>
          <ul className="grid grid-cols-2 gap-x-4 lg:flex flex-col gap-y-2">
            <li>Aaron</li>
            <li>Ali</li>
            <li>Ben</li>
            <li>Chris</li>
            <li>Ian</li>
            <li>Jingxiang</li>
            <li>Pawel</li>
            <li>Rui</li>
            <li>Scott</li>
            <li>Wesley</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
