import { clsx } from "clsx";
export const MediaPlaceholder = ({ className }: { className?: string }) => {
  return (
    <div className={clsx("@container", className)}>
      <div className="aspect-video bg-gradient-to-br from-rust via-background to-methyl rounded-md @xs:rounded-lg @sm:rounded-xl @lg:rounded-2xl" />
    </div>
  );
};
