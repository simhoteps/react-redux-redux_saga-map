import { Box, BoxProps, styled, Typography } from "@mui/material";
import { IPost } from "models/IPost";
import { GlobalHookFn } from "store/redux-hook";
import PreLoader from "view/pre-loader/pre_loader";
import WorldMap from "./components/map/map";

const ContainerBox = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "48px",
  gap: "12px",
  boxSizing: "border-box",
  height: "calc(100vh - 40px)",
  minHeight: "500px",
  [theme.breakpoints.down("sm")]: {
    padding: "36px 18px",
    justifyContent: " flex-start",
    alignItems: "center",
    gap: "24px",
  },
}));

const Home = () => {
  const { pending, data, error } = GlobalHookFn("Global");

  return (
    <div>
      {pending ? (
        <PreLoader />
      ) : (
        <ContainerBox data-testid="homeContainerBox">
          <Typography
            align="center"
            color={"#c32a2a"}
            textTransform={"uppercase"}
            fontWeight={700}
            variant="h5"
          >
            {" "}
            Coronavirus (COVID-19) Dashboard{" "}
          </Typography>
          <Typography variant="subtitle1">
            {" "}
            For the results, click the map.
          </Typography>
          <WorldMap />

          <Typography>
            Globally, as of{" "}
            <b>
              {" "}
              {`${new Date(data.lastChecked).getDate()}.${new Date(
                data.lastChecked
              ).getMonth()}.${new Date(data.lastChecked).getFullYear()}`}{" "}
            </b>
            there have been <b> {data.confirmed}</b> confirmed cases of
            COVID-19, including <b> {data.deaths}</b> deaths, reported to WHO.
          </Typography>
        </ContainerBox>
      )}
    </div>
  );
};

export default Home;
