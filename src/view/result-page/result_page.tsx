import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  styled,
  Box,
  BoxProps,
  Button,
  ButtonProps,
  alpha,
  Typography,
  Stack,
} from "@mui/material";
import useFetch from "api/useFeach";
import PreLoader from "view/pre-loader/pre_loader";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ErrorPage from "view/error-page/error_page";
import CountryResult from "./component/country_result";
import { fetchPostsRequest } from "store/actions/postsActions/postsActions";
import { IPost } from "models/IPost";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/reducers/rootReducer";

const ContainerBox = styled(Box)<BoxProps>({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "48px",
  boxSizing: "border-box",
  paddingTop: "24px",
});

const ContentBox = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "80px",
  boxSizing: "border-box",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: "8px",
  },
}));

const NavigationBox = styled(Box)<BoxProps>({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "12px",
});

const BackButton = styled(Button)<ButtonProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "12px",
  width: "90px",
  height: "36px",
  padding: "0px",
  color: theme.palette.text.disabled,
  "&:hover": {
    backgroundColor: "transparent",
    color: theme.palette.text.secondary,
  },
}));

const ResultPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pending, posts, error } = useSelector(
    (state: RootState) => state.posts
  );
  const data: IPost = posts;

  useEffect(() => {
    id && dispatch(fetchPostsRequest(id));
  }, []);

  return (
    <>
      {pending && <PreLoader />}
      {error && <ErrorPage />}
      {data && (
        <Box sx={{ boxSizing: "border-box", padding: "24px 60px" }}>
          <NavigationBox>
            <BackButton
              onClick={() => {
                navigate("/home");
              }}
            >
              <ArrowBackIcon sx={{ width: "16px", height: "16px" }} />
              back
            </BackButton>
          </NavigationBox>
          <ContentBox>
            {id && <CountryResult data={data} />}
            <Stack>
              <Stack sx={{ width: "100%", gap: "16px", alignItems: "center" }}>
                <Typography
                  align="left"
                  width={"100%"}
                  fontWeight={700}
                  variant="h5"
                  marginTop={"36px"}
                >
                  Prevent COVID-19: How to Protect Yourself from the Coronavirus
                </Typography>
                <Typography align="left" width={"100%"} variant="h6">
                  Follow these simple precautions to reduce your chances of
                  contracting COVID-19.
                </Typography>

                <img
                  style={{ maxWidth: "600px", width: "100%" }}
                  src={`http://localhost:3000/coronavirus_global.png`}
                />

                <Typography variant="body1">
                  The COVID-19 pandemic has been a part of our daily lives since
                  March 2020, but with about 151,000 new cases a day in the
                  United States, it remains as important as ever to stay
                  vigilant and know how to protect yourself from coronavirus.
                  According to the Centers for Disease Control and Prevention
                  (CDC), “The best way to prevent illness is to avoid being
                  exposed to this virus.” As the vaccines continue their roll
                  out, here are the simple steps you can take to help prevent
                  the spread of COVID-19 and protect yourself and others.
                </Typography>
              </Stack>
            </Stack>
          </ContentBox>
        </Box>
      )}
    </>
  );
};

export default ResultPage;
