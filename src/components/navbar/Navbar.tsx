import { RiMenu3Line } from "react-icons/ri";
import { Link, animateScroll as scroll } from "react-scroll";
import { useTheme } from "../../contexts/themecontext/ThemeProvider";
import "./navbar.scss";
import { navLinks } from "./navLinks";
import Button from "../button/Button";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import Logo from "../logo/Logo";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [link, setLink] = useState("");
  const { theme, themeToggle } = useTheme();
  console.log(theme);

  const toggleSideBar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="navbar">
      <div className="navWrapper">
        <Logo />

        <div className="navRight">
          <nav className="nav">
            {navLinks.map((navItem, ind) => (
              <Link
                className={`nav-link ${navItem.link === link && "activeLink"}`}
                onClick={() => {
                  setLink(navItem.link);
                  toggleSideBar;
                }}
                to={navItem.link}
                key={ind}
                smooth={true}
                duration={700}
                spy={true}
              >
                {navItem.link}
              </Link>
            ))}
            {/* <button onClick={themeToggle}>theme</button> */}
          </nav>

          <div className="menuButton">
            <Button
              icon={<RiMenu3Line className="menuIcon" />}
              onClick={toggleSideBar}
            />
          </div>
        </div>

        {/* mobile nav */}
        <div className={`mobileNav ${isOpen && "toggleSidebar"}`}>
          <div className="mobileNavWrapper">
            <div className="closeIconContainer">
              <IoClose onClick={toggleSideBar} className="closeIcon" />
            </div>
            <nav className="mobileUl">
              {navLinks.map((navItem, ind) => (
                <Link
                  activeClass="active"
                  className={`mobileLi ${
                    navItem.link === link && "activeLink"
                  }`}
                  onClick={() => {
                    setLink(navItem.link);
                    toggleSideBar;
                  }}
                  to={navItem.link}
                  key={ind}
                  smooth={true}
                  duration={700}
                >
                  {navItem.link}
                </Link>
              ))}
              {/* <button onClick={themeToggle}>theme</button> */}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
