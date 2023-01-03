import React from "react";
import { createTheme } from "@mui/material/styles";

/* Added from material-ui to create a custom typography inside the typography. */
declare module "@mui/material/styles" {
  interface TypographyVariants {
    tooltip: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    tooltip?: React.CSSProperties;
  }
}

export const darkTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 827,
      md: 1260,
      lg: 1636,
      xl: 2041,
    },
  },

  palette: {
    mode: "dark",
    primary: {
      main: "#A9A9A9",
      light: "#424242",
      dark: "#F7F7F7",
    },

    secondary: {
      main: "#A0B3C6",
      light: "#788897",
    },

    background: {
      default: "#000000",
      paper: "#424242",
    },

    error: {
      main: "#F9D4D1",
    },

    warning: {
      main: "#FBC89F",
    },

    info: {
      main: "#89ADCF",
    },

    text: {
      primary: "#252525",
      secondary: "#F7F7F7",
      disabled: "#A9A9A9",
    },

    success: {
      main: "#6BB27B",
    },
  },

  typography: {
    fontFamily: "Nunito",

    h1: {
      fontWeight: 300,
      fontSize: 96,
      letterSpacing: "-1.5px",
    },

    h2: {
      fontWeight: 300,
      fontSize: 60,
      letterSpacing: "-0.5px",
      textTransform: "none",
    },

    h3: {
      fontWeight: 500,
      fontStyle: "normal",
      fontSize: 48,
      lineHeight: "56px",
      letterSpacing: "0px",
      textTransform: "none",
    },
    h4: {
      fontWeight: 500,
      fontStyle: "normal",
      fontSize: 34,
      lineHeight: "36px",
      letterSpacing: "0.25px",
      textTransform: "none",
    },
    h5: {
      fontWeight: 500,
      fontStyle: "normal",
      fontSize: 24,
      lineHeight: "24px",
      letterSpacing: "0px",
      textTransform: "none",
    },
    h6: {
      fontWeight: 700,
      fontStyle: "normal",
      fontSize: "20px",
      lineHeight: "24px",
      letterSpacing: "0.15px",
      textTransform: "none",
    },

    subtitle1: {
      fontWeight: 500,
      fontStyle: "normal",
      fontSize: 16,
      lineHeight: "18px",
      letterSpacing: "0.15px",
    },
    subtitle2: {
      fontWeight: 700,
      fontStyle: "normal",
      fontSize: 14,
      lineHeight: "24px",
      letterSpacing: "0.1px",
    },
    body1: {
      fontWeight: 500,
      fontStyle: "normal",
      fontSize: 16,
      lineHeight: "24px",
      letterSpacing: "0.15px",
    },

    body2: {
      fontWeight: 500,
      fontStyle: "normal",
      fontSize: 14,
      lineHeight: "20px",
      textTransform: "none",
      letterSpacing: "0.15px",
    },
    button: {
      fontWeight: 700,
      fontSize: 14,
      fontStyle: "normal",
      lineHeight: "16px",
      letterSpacing: "0.4px",
      textTransform: "uppercase",
    },
    overline: {
      fontWeight: 500,
      fontStyle: "normal",
      fontSize: 10,
      letterSpacing: "1px",
      lineHeight: "16px",
      textTransform: "uppercase",
    },
    caption: {
      fontWeight: 500,
      fontStyle: "normal",
      fontSize: 12,
      lineHeight: "14px",
      letterSpacing: "0.4px",
      textTransform: "none",
    },
    tooltip: {
      fontWeight: 500,
      fontStyle: "normal",
      fontSize: 10,
      letterSpacing: "0px",
      lineHeight: "14px",
    },
  },
});
