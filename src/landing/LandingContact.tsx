import Link from "next/link";
import { CopyString } from "@/components/ui/Code/CopyCode";

const members = ["Aaron", "Ali", "Ben", "Chris", "Ian", "Jingxiang", "Rui", "Scott", "Wesley"];

export function LandingContact() {
  return (
    <section className="section">
      <div className="section-container">
        <hgroup className="col-span-default col-start-default mb-6">
          <h2 className="text-body-2 font-medium text-stone-400 mb-1">About us</h2>
          <p className="text-heading-1 mb-2">
            We&apos;re hackers, engineers, and researchers that believe in a world where robots are
            made for everyone.
          </p>
          <p className="text-body-1 mb-6">
            Shoot us an email at{" "}
            <CopyString string="inquiries@kscale.dev" size="large" font="regular" /> for any
            business inquiries or if you want to connect with us!
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
        <aside className="col-span-full md:col-span-2 lg:col-span-1 lg:-col-end-1 2xl:-col-end-3 2xl:col-span-2 4xl:-col-end-5">
          <h3 className="text-body-3 font-medium text-stone-400 mb-1">
            Our team ({members.length})
          </h3>
          <ul className="grid grid-cols-2 gap-x-4 md:gap-x-6 lg:flex flex-col gap-y-2">
            {members.map((member) => (
              <li key={member} className="text-body-2">
                {member}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
