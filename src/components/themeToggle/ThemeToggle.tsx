import "./styles.scss";
import { useTheme } from "../../contexts/themecontext/ThemeProvider";
import { IoSunnyOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
const ThemeToggle = () => {
  const { theme, themeToggle } = useTheme();
  return (
    <div className="themeToggle" onClick={themeToggle}>
      {theme === "light" ? (
        <FaMoon className="icon" />
      ) : (
        <IoSunnyOutline className="icon" />
      )}
    </div>
  );
};

export default ThemeToggle;
