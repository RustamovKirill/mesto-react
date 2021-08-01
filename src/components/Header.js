import logo from "../images/mesto-logo.svg"

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="логотип место" className="header__logo" />
    </header>
  );
};

export default Header;
