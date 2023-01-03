import React from "react";
import { IconButton } from "@mui/material";
import { useTheme } from "./theme_context";
import { darkTheme } from "./dark";
import { lightTheme } from "./light";
import { IconMoon, IconSun } from "core/components/icon/icon";

const ThemeSwitcher = () => {
  const { theme, setCurrentTheme } = useTheme();

  /*   const setThemeFromString = (themeName: string | null) => {
    switch (themeName) {
      case "dark":
        setCurrentTheme(darkTheme);
        break;
      case "light":
        setCurrentTheme(lightTheme);
        break;
      default:
        setCurrentTheme(lightTheme);
        break;
    }
  };
  setThemeFromString(localStorage.getItem("theme")); */

  const switchTheme = () => {
    switch (theme) {
      case lightTheme:
        setCurrentTheme(darkTheme);
        localStorage.setItem("theme", "dark");
        break;
      case darkTheme:
        setCurrentTheme(lightTheme);
        localStorage.setItem("theme", "light");
        break;
    }
  };

  return (
    <IconButton
      disableRipple
      onClick={() => setCurrentTheme(darkTheme)}
      sx={{
        width: 30,
        height: 30,
      }}
    >
      {localStorage.getItem("theme") === "light" ? (
        <IconMoon sx={{ width: 20, height: "auto" }} />
      ) : localStorage.getItem("theme") === "dark" ? (
        <IconSun sx={{ width: 20, height: "auto" }} />
      ) : (
        <IconMoon sx={{ width: 20, height: "auto" }} />
      )}
    </IconButton>
  );
};

export default ThemeSwitcher;
