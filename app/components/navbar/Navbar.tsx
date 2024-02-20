import CardCount from "./CardCount";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import Search from "./Search";
import User from "./User";


const Navbar = () => {
  return (
    <div>
       <Logo/>
       <Search/>
       <CardCount/>
       <User/>
       <MobileMenu/>
    </div>
  );
}

export default Navbar;
