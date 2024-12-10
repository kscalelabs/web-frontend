import BurgerButton from "@/components/navbar/burgerButton";

const BurgerMenu = (isOpen: boolean, buttonText: string[], buttonLinks: string[]) => {
  return isOpen ? (
    <div className={"flex flex-col items-start w-[100%] gap-10 py-12"}>
      {buttonText.map((text, index) => {
        return (
          <li key={index}>
            <BurgerButton text={text} text2={buttonLinks[index]} />
          </li>
        );
      })}
    </div>
  ) : (
    <></>
  );
};

export default BurgerMenu;
