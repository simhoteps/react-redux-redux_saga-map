import {
  AppBar,
  Box,
  BoxProps,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useTheme } from "core/init/themes/theme_context";
import ThemeSwitcher from "core/init/themes/theme_switcher";

const ResponsiveBox = styled(Box)<BoxProps>(({ theme }) => ({
  // maxWidth: "2560px",

  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  paddingLeft: "36px",
  width: "100%",
  /*   [theme.breakpoints.down("sm")]: { width: "373px" },
  [theme.breakpoints.between("sm", "md")]: { width: "779px" },
  [theme.breakpoints.between("md", "lg")]: { width: "1183px" },
  [theme.breakpoints.between("lg", "xl")]: { width: "1588px" },
  [theme.breakpoints.up("xl")]: { width: "1993px" }, */
}));

const Header = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const refreshPage = () => {
    navigate("/");
  };

  return (
    <>
      <AppBar
        sx={{
          backgroundColor: theme.palette.primary.dark,
          color: theme.palette.text.secondary,
          display: "flex",
          justifyItems: "center",
          height: "40px",
          zIndex: 1500,
        }}
        elevation={0}
      >
        <Toolbar
          variant="dense"
          sx={{
            height: "40px",
            minHeight: "40px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ResponsiveBox>
            <Typography
              onClick={() => {
                refreshPage();
              }}
              sx={{ cursor: "pointer" }}
              color="common.white"
              variant="body1"
            >
              Coronavirus (COVID-19) Dashboard
              {/*   WHO Coronavirus (COVID-19) Dashboard */}
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                columnGap: "16px",
              }}
            ></Box>
          </ResponsiveBox>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
