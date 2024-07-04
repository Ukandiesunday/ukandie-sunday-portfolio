import { HiMenuAlt4 } from "react-icons/hi";

import { Link } from "react-scroll";

import { useTheme } from "../../contexts/themecontext/ThemeProvider";
import "./navbar.scss";
import { navLinks } from "./navLinks";
import Button from "../button/Button";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import Logo from "../logo/Logo";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [link, setLink] = useState("");
  const { theme } = useTheme();

  const toggleSideBar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={`navbar ${theme === "light" ? "light" : "dark"}`}>
      <div className="navWrapper">
        <Logo />
        <ThemeToggle />
        <div className="navRight">
          <nav className="nav">
            {navLinks.map((navItem, ind) => (
              <Link
                className={`nav-link ${navItem.link === link && "activeLink"}`}
                onClick={() => {
                  setLink(navItem.link);
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
          </nav>

          <div className="menuButton">
            <Button
              icon={<HiMenuAlt4 className="menuIcon" />}
              onClick={toggleSideBar}
            />
          </div>
        </div>

        {/* mobile nav */}

        <div
          onClick={toggleSideBar}
          className={`mobileNav ${isOpen && "toggleSidebar"}`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="mobileNavWrapper"
          >
            <div className="closeIconContainer">
              <IoClose onClick={toggleSideBar} className="closeIcon" />
            </div>
            <nav className="mobileUl">
              {navLinks.map((navItem, ind) => (
                <Link
                  className={`mobileLi ${
                    navItem.link === link && "activeLink"
                  }`}
                  onClick={() => {
                    setLink(navItem.link);
                    toggleSideBar();
                  }}
                  to={navItem.link}
                  key={ind}
                  smooth={true}
                  duration={700}
                >
                  {navItem.link}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
