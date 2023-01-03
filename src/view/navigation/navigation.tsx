import React from "react";
import { useTheme } from "core/init/themes/theme_context";
import { Box, BoxProps, styled } from "@mui/material";
import Header from "view/header/header";
import { Size, useWindowSize } from "core/custom-hooks/use_window_size";

const Contents = styled(Box)<BoxProps>(({ theme }) => ({
  marginTop: "40px",
  backgroundColor: theme.palette.background.paper,
  overflow: "hidden",
}));

const Navigation = ({ content }: { content: React.ReactNode }) => {
  const { theme } = useTheme();
  const size: Size = useWindowSize();
  const windowHeight = size?.height!;
  const windowWidth = size?.width!;

  return (
    <Box
      sx={{
        display: "flex",
        overflowX: "hidden",
        backgroundColor: "#36546210",
      }}
    >
      <Header />
      <Contents
        sx={{
          width: windowWidth,
          height: `${windowHeight}-40px`,
          minHeight: `${windowHeight}-40px`,
        }}
      >
        {content}
      </Contents>
    </Box>
  );
};

export default Navigation;
