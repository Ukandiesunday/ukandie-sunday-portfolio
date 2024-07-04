import React, { useContext, createContext, useState, useEffect } from "react";

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

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  const themeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, themeToggle }}>
      <div className={theme === "light" ? "light" : "dark"}>{children}</div>
    </ThemeContext.Provider>
  );
};
