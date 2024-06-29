import { RiMenu3Line } from "react-icons/ri";

import { useTheme } from "../../contexts/themecontext/ThemeProvider";
import "./navbar.scss";
import { navLinks } from "./navLinks";
import Button from "../button/Button";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { theme, themeToggle } = useTheme();
  console.log(theme);

  const toggleSideBar = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="navbar">
      <div className="navWrapper">
        <div className="navLeft">
          <img src="/images/ukandie1.jpg" alt="logo" className="img" />
          <span className="logo">Uk.Dev</span>
        </div>

        <div className="navRight">
          <ul className="ul">
            {navLinks.map((navItem, ind) => (
              <li key={ind} className="li">
                {navItem.link}
              </li>
            ))}
            {/* <button onClick={themeToggle}>theme</button> */}
          </ul>

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
              <IoClose onClick={() => setIsOpen(false)} className="closeIcon" />
            </div>
            <ul className="mobileUl">
              {navLinks.map((navItem, ind) => (
                <li key={ind} className="mobileLi">
                  {navItem.link}
                </li>
              ))}
              {/* <button onClick={themeToggle}>theme</button> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
