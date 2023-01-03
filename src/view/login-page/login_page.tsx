import { styled, BoxProps, Box, Typography, Stack } from "@mui/material";
import useFetch from "api/useFeach";
import { IPost } from "models/IPost";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchPostsRequest } from "store/actions/postsActions/postsActions";
import { RootState } from "store/reducers/rootReducer";
import ErrorPage from "view/error-page/error_page";
import PreLoader from "view/pre-loader/pre_loader";
import "./styled/login_page_styles.css";

const ResponsiveBox = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  gap: "48px",
  alignItems: "center",
  height: "100vh",
  width: "100%",
  padding: "60px",
  boxSizing: "border-box",
  backgroundColor: "#c32a2a25",
  [theme.breakpoints.down("sm")]: {
    alignItems: "flex-start",
  },
  /*   [theme.breakpoints.down("sm")]: { width: "373px" },
  [theme.breakpoints.between("sm", "md")]: { width: "779px" },
  [theme.breakpoints.between("md", "lg")]: { width: "1183px" },
  [theme.breakpoints.between("lg", "xl")]: { width: "1588px" },
  [theme.breakpoints.up("xl")]: { width: "1993px" }, */
}));

const ImageBox = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.down("sm")]: { display: "none" },
}));

const LoginPage = () => {
  const navigate = useNavigate();

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
      {error && <ErrorPage />}
      {pending && <PreLoader />}
      {data && (
        <ResponsiveBox>
          <Stack gap={"16px"} alignItems="center">
            <Typography align="center" sx={{ fontWeight: 700 }} variant="h4">
              COVID-19 CORONAVIRUS PANDEMIC
            </Typography>
            <Typography
              sx={{
                width: "100%",
                maxWidth: "100%",
              }}
              variant="caption"
            >
              In the face of this unprecedented pandemic, Gavi is working with
              countries to support COVID-19 response and to maintain and restore
              routine immunisation. The Alliance is also co-leading global
              efforts on equitable access to COVID-19 vaccines.
            </Typography>

            <Typography sx={{ marginTop: "24px" }} variant="h6">
              Number of confirmed cases
            </Typography>
            <Typography sx={{ fontWeight: 700 }} variant="body1">
              {data.confirmed}
            </Typography>
            <Typography variant="h6">Deaths:</Typography>
            <Typography sx={{ fontWeight: 700 }} variant="body1">
              {data.deaths}
            </Typography>

            <Box
              sx={{
                marginTop: "40px",
              }}
              className="btn-one"
              onClick={() => {
                navigate("/home");
              }}
            >
              <span> view by country</span>
            </Box>
          </Stack>
          <ImageBox>
            <img
              style={{
                width: "100%",
              }}
              className="loginPagePng"
              src="./login_page.png"
              alt=""
            />
          </ImageBox>
        </ResponsiveBox>
      )}
    </>
  );
};

export default LoginPage;
