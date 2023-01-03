import React, { useState, useContext } from "react";
import { Theme } from "@mui/material";
import { lightTheme } from "./light";

interface ThemeContextProps {
  theme: Theme;
  setCurrentTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

export const ThemeContext = React.createContext<ThemeContextProps>({
  theme: lightTheme,
} as ThemeContextProps);

export const ThemeProvider: React.FC = (children: any) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(lightTheme);

  return (
    <ThemeContext.Provider
      value={{
        theme: currentTheme,
        setCurrentTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
