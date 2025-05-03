import Link from "next/link";
export const TextLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link
      className="bg-orange-600 hover:bg-orange-700 focus:bg-orange-700 active:bg-orange-800 transition-colors duration-300 text-body-2 py-[0.75rem] px-2 rounded-lg font-medium"
      href={href}
    >
      {children}
    </Link>
  );
};
