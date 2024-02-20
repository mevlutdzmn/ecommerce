import { GiHamburgerMenu } from "react-icons/gi";

const MobileMenu = () => {
  return (
    <div className="relative flex md:hidden ">
      <GiHamburgerMenu size={25} />
    </div>
  );
}

export default MobileMenu;
