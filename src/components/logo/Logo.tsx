import { animateScroll as scroll } from "react-scroll";
import "./logo.scss";
import logo from "../../assets/images/logo.png";
const Logo = () => {
  return (
    <a href={"#"}>
      <div className="navLogo" onClick={() => scroll.scrollToTop()}>
        <img src={logo} width={35} height={35} alt="logo" className="img" />
        <span className="logo">Uk.Dev</span>
      </div>
    </a>
  );
};

export default Logo;
