import { Box, BoxProps, styled, Typography } from "@mui/material";
import React from "react";

const ResponsiveBox = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "100%",

  boxSizing: "border-box",
  backgroundColor: "#c32a2a25",
}));

const ErrorPage = ({ message }: { message?: string }) => {
  return (
    <ResponsiveBox>
      <img
        style={{
          height: "auto",
          width: "60%",
        }}
        src="http://localhost:3000/error_page.png
        "
      />
      <Typography
        fontWeight={700}
        textTransform="uppercase"
        color={"#F03D5F"}
        maxWidth="500px"
        variant="h6"
      >
        {message}
      </Typography>
    </ResponsiveBox>
  );
};

export default ErrorPage;
