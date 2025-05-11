import { SvgProps } from "@/components/util/interfaces";

const AIGrant = (props: SvgProps) => {
  return (
    <svg
      className={props.styling}
      xmlns="http://www.w3.org/2000/svg"
      width="1258"
      height="180"
      viewBox="0 0 1258 180"
      fill="none"
    >
      <path
        d="M440 138C458.4 138 467.333 134.667 472 132V88H512V158C505.667 165.333 482.4 180 440 180C387 180 344 145 344 88C344 31 396 0 442 0C478.8 0 506.667 17.6667 516 27L488 60C481 53 468 42 442 42C427 42 394 53 394 88C394 123 418 138 440 138Z"
        className={"fill-foreground"}
      />
      <path d="M266 2H216V178H266V2Z" className={"fill-foreground"} />
      <path
        d="M922 2H966L1044 106V2H1088V178H1044L966 76V178H922V2Z"
        className={"fill-foreground"}
      />
      <path d="M1108 2H1258V40H1206V178H1160V40H1108V2Z" className={"fill-foreground"} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M124 2L200 178H150L137.045 148H62.9551L50 178H0L76 2H124ZM100 53.8948L123.5 112H76.5L100 53.8948Z"
        className={"fill-foreground"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M908 178L832 2H784L708 178H758L770.955 148H845.045L858 178H908ZM831.5 112L808 53.8948L784.5 112H831.5Z"
        className={"fill-foreground"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M638 2H544V178H590V128H622.619L650 178H702L666.436 120.551C684.291 108.429 698 87.7809 698 64C698 15 662 2 638 2ZM590 38H626C648 38 652 53 652 67C652 79 644 92 628 92H590V38Z"
        className={"fill-foreground"}
      />
    </svg>
  );
};

export default AIGrant;
