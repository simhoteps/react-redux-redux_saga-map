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

export const lightTheme = createTheme({
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
    mode: "light",
    primary: {
      main: "#B3B3B3",
      light: "#EEEEEE",
      dark: "#424242",
    },
    secondary: {
      main: "#798897",
      light: "#C4D3E1",
    },

    background: {
      default: "#ECECEC",
      paper: "#FFFFFF",
    },

    error: {
      main: "#D0655F",
    },

    warning: {
      main: "#ED6C02",
    },

    info: {
      main: "#89ADCF",
    },

    text: {
      primary: "#F8F8F8",
      secondary: "#424242",
      disabled: "#B3B3B3",
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
      fontWeight: 400,
      fontStyle: "normal",
      fontSize: "20px",
      lineHeight: "27px",
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
      fontWeight: 400,
      fontStyle: "normal",
      fontSize: "12px",
      lineHeight: "14px",
      letterSpacing: "0.4px",
      textTransform: "none",
    },
    tooltip: {
      fontWeight: 600,
      fontStyle: "normal",
      fontSize: 10,
      letterSpacing: "0px",
      lineHeight: "12px",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
        color: "secondary",
      },
      styleOverrides: {
        contained: { boxShadow: "none" },
      },
    },
  },
});
