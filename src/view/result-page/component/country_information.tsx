import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useTheme } from "core/init/themes/theme_context";
import React, { useEffect, useState } from "react";

interface dataProps {
  flag: string;
  capital: string;
  population: number;
  region: string;
  flags: { svg: string; png: string };
}

const CountryInformation = ({ country }: { country: string }) => {
  const { theme } = useTheme();
  const [datas, setData] = useState<dataProps[]>();
  useEffect(() => {
    fetch(`https://restcountries.com/v2/name/${country}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  console.log(datas);
  return (
    <>
      {datas && (
        <Stack direction={"column"} gap="10px">
          <img
            src={datas[0].flags.svg}
            style={{
              width: "429px",
              height: "auto",

              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
              borderRadius: "8px",
            }}
          />
          {/*    <Typography
            sx={{
              color: theme.palette.text.secondary,
              typography: theme.typography.h4,
            }}
          >
            {country.toUpperCase()}{" "}
          </Typography>
          <Typography variant="subtitle2">Population</Typography>
          <Typography>{datas[0].population} </Typography> */}
        </Stack>
      )}
    </>
  );
};

export default CountryInformation;
