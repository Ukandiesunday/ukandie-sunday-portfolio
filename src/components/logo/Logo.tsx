import { animateScroll as scroll } from "react-scroll";
import "./logo.scss";

const Logo = () => {
  return (
    <a href={"#"}>
      <div className="navLogo" onClick={() => scroll.scrollToTop()}>
        <img src="/images/ukandie1.jpg" alt="logo" className="img" />
        <span className="logo">Uk.Dev</span>
      </div>
    </a>
  );
};

export default Logo;
