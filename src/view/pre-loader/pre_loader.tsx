import React from "react";
import { Box, CircularProgress } from "@mui/material";

const PreLoader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
        backgroundColor: "#36546210",
      }}
    >
      <CircularProgress
        size={"200px"}
        sx={{
          margintop: "-50px",
          color: "#c32a2a",
        }}
      />
    </Box>
  );
};

export default PreLoader;
