import Image from "next/image";
import { SponsorPngWrapperProps } from "@/components/util/interfaces";

const SponsorPngWrapper = (props: SponsorPngWrapperProps) => {
  return (
    <Image
      width={100}
      height={100}
      src={props.imgLink}
      alt={props.altDescription}
      className={"filter  " + props.styling}
    />
  );
};

export default SponsorPngWrapper;
