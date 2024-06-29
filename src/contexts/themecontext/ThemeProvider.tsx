import React, { useContext, createContext, useState } from "react";

interface ThemeProps {
  theme: string;
  themeToggle: () => void;
}

const ThemeContext = createContext<ThemeProps | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState("light");

  console.log(theme);
  const themeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, themeToggle }}>
      {/* <div data-theme={theme}>{children}</div> */}
      <div className={theme === "light" ? "light" : "dark"}>{children}</div>
    </ThemeContext.Provider>
  );
};
