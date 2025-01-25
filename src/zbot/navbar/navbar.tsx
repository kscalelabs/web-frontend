import { useState } from "react";
import BurgerMenu from "./burgerMenu";
import BurgerOpenButton from "./burgerOpenButton";

const NavBar = ({ href }: { href: string }) => {
  const [mobileShouldOpenBurger, setMobileShouldOpenBurger] = useState(false);
  const [atTop] = useState(true);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 grid-m py-4 pointer-events-none">
      <div className="col-span-full grid grid-cols-subgrid">
        {/* <Logotype atTop={atTop} isMenuOpen={mobileShouldOpenBurger} href={href} /> */}
        <BurgerOpenButton
          className="-col-end-1 place-self-end pointer-events-auto"
          onClick={() => setMobileShouldOpenBurger(true)}
          isOpen={mobileShouldOpenBurger}
          atTop={atTop}
        />
      </div>
      <BurgerMenu
        isOpen={mobileShouldOpenBurger}
        onClose={() => setMobileShouldOpenBurger(false)}
      />
    </nav>
  );
};

export default NavBar;
