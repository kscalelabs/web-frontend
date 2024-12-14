import { motion } from "motion/react";
import { ColorVariant } from "../color/Color";
import clsx from "clsx";

export enum IconMode {
  FULL,
  SET,
}

const getVariantClass = (variant: ColorVariant): string => {
  switch (variant) {
    case ColorVariant.METHYL:
      return "fill-methyl ";
    case ColorVariant.PLASMA:
      return "fill-plasma ";
    case ColorVariant.OXIDE:
      return "fill-oxide ";
    case ColorVariant.RUST:
      return "fill-rust ";
    case ColorVariant.MOLTEN:
      return "fill-molten ";
    case ColorVariant.SOL:
      return "fill-sol ";
    case ColorVariant.FILAMENT:
      return "fill-filament ";
    case ColorVariant.CARBON:
      return "fill-carbon ";
    default:
      return "fill-foreground ";
  }
};

const socialVariants = (mode: IconMode) => {
  return {
    initial: {
      scale: 1,
      rotate: 0,
    },
    hover: {
      scale: 1.2,
      rotate: mode === IconMode.SET ? 15 : 0,
    },
  };
};

export const Discord = ({
  mode = IconMode.FULL,
  variant = ColorVariant.FILAMENT,
}: {
  mode?: IconMode;
  variant?: ColorVariant;
}) => {
  const fill = getVariantClass(variant);

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(mode === IconMode.FULL ? "size-full" : "size-4")}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      variants={socialVariants(mode)}
    >
      <path
        className={clsx(fill)}
        d="M19.2701 5.33C17.9401 4.71 16.5001 4.26 15.0001 4C14.9737 4.00038 14.9486 4.01116 14.9301 4.03C14.7501 4.36 14.5401 4.79 14.4001 5.12C12.8091 4.88015 11.1911 4.88015 9.60012 5.12C9.46012 4.78 9.25012 4.36 9.06012 4.03C9.05012 4.01 9.02012 4 8.99012 4C7.49012 4.26 6.06012 4.71 4.72012 5.33C4.71012 5.33 4.70012 5.34 4.69012 5.35C1.97012 9.42 1.22012 13.38 1.59012 17.3C1.59012 17.32 1.60012 17.34 1.62012 17.35C3.42012 18.67 5.15012 19.47 6.86012 20C6.89012 20.01 6.92012 20 6.93012 19.98C7.33012 19.43 7.69012 18.85 8.00012 18.24C8.02012 18.2 8.00012 18.16 7.96012 18.15C7.39012 17.93 6.85012 17.67 6.32012 17.37C6.28012 17.35 6.28012 17.29 6.31012 17.26C6.42012 17.18 6.53012 17.09 6.64012 17.01C6.66012 16.99 6.69012 16.99 6.71012 17C10.1501 18.57 13.8601 18.57 17.2601 17C17.2801 16.99 17.3101 16.99 17.3301 17.01C17.4401 17.1 17.5501 17.18 17.6601 17.27C17.7001 17.3 17.7001 17.36 17.6501 17.38C17.1301 17.69 16.5801 17.94 16.0101 18.16C15.9701 18.17 15.9601 18.22 15.9701 18.25C16.2901 18.86 16.6501 19.44 17.0401 19.99C17.0701 20 17.1001 20.01 17.1301 20C18.8501 19.47 20.5801 18.67 22.3801 17.35C22.4001 17.34 22.4101 17.32 22.4101 17.3C22.8501 12.77 21.6801 8.84 19.3101 5.35C19.3001 5.34 19.2901 5.33 19.2701 5.33ZM8.52012 14.91C7.49012 14.91 6.63012 13.96 6.63012 12.79C6.63012 11.62 7.47012 10.67 8.52012 10.67C9.58012 10.67 10.4201 11.63 10.4101 12.79C10.4101 13.96 9.57012 14.91 8.52012 14.91ZM15.4901 14.91C14.4601 14.91 13.6001 13.96 13.6001 12.79C13.6001 11.62 14.4401 10.67 15.4901 10.67C16.5501 10.67 17.3901 11.63 17.3801 12.79C17.3801 13.96 16.5501 14.91 15.4901 14.91Z"
      />
    </motion.svg>
  );
};

export const LinkedIn = ({
  mode = IconMode.FULL,
  variant = ColorVariant.FILAMENT,
}: {
  mode?: IconMode;
  variant?: ColorVariant;
}) => {
  const fill = getVariantClass(variant);

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(mode === IconMode.FULL ? "size-full" : "size-4")}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      variants={socialVariants(mode)}
    >
      <path
        className={clsx(fill)}
        d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z"
      />
    </motion.svg>
  );
};

export const Twitter = ({
  mode = IconMode.FULL,
  variant = ColorVariant.FILAMENT,
}: {
  mode?: IconMode;
  variant?: ColorVariant;
}) => {
  const fill = getVariantClass(variant);

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(mode === IconMode.FULL ? "size-full" : "size-4")}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      variants={socialVariants(mode)}
    >
      <path
        className={clsx(fill)}
        d="M17.1563 4.24512H19.9141L13.8906 11.1279L20.9766 20.4951H15.4297L11.082 14.8154L6.11328 20.4951H3.35156L9.79297 13.1318L3 4.24512H8.6875L12.6133 9.43652L17.1563 4.24512ZM16.1875 18.8467H17.7148L7.85547 5.80762H6.21484L16.1875 18.8467Z"
      />
    </motion.svg>
  );
};

export const Facebook = ({
  mode = IconMode.FULL,
  variant = ColorVariant.FILAMENT,
}: {
  mode?: IconMode;
  variant?: ColorVariant;
}) => {
  const fill = getVariantClass(variant);

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(mode === IconMode.FULL ? "size-full" : "size-4")}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      variants={socialVariants(mode)}
    >
      <path
        className={clsx(fill)}
        d="M22 12.7549C22 7.23488 17.52 2.75488 12 2.75488C6.48 2.75488 2 7.23488 2 12.7549C2 17.5949 5.44 21.6249 10 22.5549V15.7549H8V12.7549H10V10.2549C10 8.32488 11.57 6.75488 13.5 6.75488H16V9.75488H14C13.45 9.75488 13 10.2049 13 10.7549V12.7549H16V15.7549H13V22.7049C18.05 22.2049 22 17.9449 22 12.7549Z"
      />
    </motion.svg>
  );
};

export const Github = ({
  mode = IconMode.FULL,
  variant = ColorVariant.FILAMENT,
}: {
  mode?: IconMode;
  variant?: ColorVariant;
}) => {
  const fill = getVariantClass(variant);

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(mode === IconMode.FULL ? "size-full" : "size-4")}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      variants={socialVariants(mode)}
    >
      <path
        className={clsx(fill)}
        d="M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21V19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26V21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z"
      />
    </motion.svg>
  );
};
