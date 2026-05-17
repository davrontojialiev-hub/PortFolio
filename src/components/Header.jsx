import HeaderLogo from "./HeaderLogo";
import Headerlist from "./Headerlist";
import HeaderActions from "./HeaderActions";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <HeaderLogo />
          <Headerlist />
          <HeaderActions />
        </nav>

      </div>
    </header>
  );
};

export default Header