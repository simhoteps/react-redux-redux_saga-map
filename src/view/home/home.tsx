import {
  Box,
  BoxProps,
  CircularProgress,
  styled,
  Typography,
} from "@mui/material";
import useFetch from "api/useFeach";
import { IPost } from "models/IPost";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsRequest } from "store/actions/postsActions/postsActions";
import { RootState } from "store/reducers/rootReducer";
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
  },
}));

const Home = () => {
  const dispatch = useDispatch();
  const { pending, posts, error } = useSelector(
    (state: RootState) => state.posts
  );
  const data: IPost = posts;

  useEffect(() => {
    dispatch(fetchPostsRequest("Global"));
  }, []);

  return (
    <>
      {pending ? (
        <PreLoader />
      ) : (
        <ContainerBox>
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
    </>
  );
};

export default Home;
