import Link from "next/link";

export const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="bg-orange-600 hover:bg-orange-700 focus:bg-orange-700 active:bg-orange-800 transition-colors duration-300 text-body-2 py-[0.75rem] px-2 rounded-lg font-medium">
      {children}
    </button>
  );
};

export const AButton = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <a
      className="bg-orange-600 hover:bg-orange-700 focus:bg-orange-700 active:bg-orange-800 transition-colors duration-300 text-body-2 py-[0.75rem] px-2 rounded-lg font-medium"
      href={href}
      target="_blank"
    >
      {children}
    </a>
  );
};

export const LinkButton = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link
      className="bg-orange-600 hover:bg-orange-700 focus:bg-orange-700 active:bg-orange-800 transition-colors duration-300 text-body-2 py-[0.75rem] px-3 rounded-lg font-medium"
      href={href}
    >
      {children}
    </Link>
  );
};
