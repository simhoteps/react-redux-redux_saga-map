import React from "react";
import { Box, BoxProps, styled, Typography } from "@mui/material";
import { useTheme } from "core/init/themes/theme_context";
import { IPost } from "models/IPost";

const ContainerBox = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
  justifyContent: "flex-start",
  gap: "12px",
  boxSizing: "border-box",
  padding: "24px",
  color: theme.palette.text.secondary,
  width: "280px",
  minWidth: "280px",
  height: "calc(100vh - 160px)",
  backgroundColor: "#36546210",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "100%",
  },
}));

const RowText = ({
  title,
  desciription,
}: {
  title: string;
  desciription: string | number;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <Typography sx={{ fontWeight: 700 }} variant="h6">
        {title}
      </Typography>
      <Typography fontWeight={600} color={"#c32a2a"} variant="body1">
        {desciription}
      </Typography>
    </Box>
  );
};

const CountryResult = ({ data }: { data: IPost }) => {
  const { theme } = useTheme();

  return (
    <ContainerBox>
      <Typography
        sx={{
          color: "#c32a2a",
          typography: theme.typography.h3,
          fontWeight: 700,
          marginBottom: "24px",
        }}
      >
        {data.location}
      </Typography>
      <Typography variant="subtitle2">
        The results for the country are in the table below.
      </Typography>
      <RowText title="Confirmed:" desciription={data.confirmed} />
      <RowText title="Deaths:" desciription={data.deaths} />
      <RowText
        title="Last Checked:"
        desciription={`${new Date(data.lastChecked).getDate()}.${
          new Date(data.lastChecked).getMonth() + 1
        }.${new Date(data.lastChecked).getFullYear()}`}
      />
      <RowText
        title="Last Reported:"
        desciription={`${new Date(data.lastReported).getDate()}.${
          new Date(data.lastReported).getMonth() + 1
        }.${new Date(data.lastReported).getFullYear()}`}
      />
    </ContainerBox>
  );
};

export default CountryResult;
