import "./footer.scss";

import SocialLinks from "../socialLinks/SocialLinks";
import Logo from "../logo/Logo";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer ">
        <div className="footerLogo">
          <Logo />

          <SocialLinks className={" bgwhite "} />
        </div>
        <div className="linksContainer">
          <div className="quickLinks">
            <h4>QuickLinks</h4>
            <Link to="about" smooth={true} duration={700} spy={true}>
              About
            </Link>
            <Link to="service" smooth={true} duration={700} spy={true}>
              Service
            </Link>
            <Link to="projects" smooth={true} duration={700} spy={true}>
              Projects
            </Link>
          </div>

          <div className="quickLinks ">
            <h4>Let's connect</h4>
            <Link to="resume" smooth={true} duration={700} spy={true}>
              Resume
            </Link>
            <Link to="contact" smooth={true} duration={700} spy={true}>
              Contact
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <div className="copyRight">
        &copy; Ukandie Sunday {new Date().getFullYear()}. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
