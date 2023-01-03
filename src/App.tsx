import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter, Outlet, useRoutes } from "react-router-dom";
import Home from "view/home/home";
import ResultPage from "view/result-page/result_page";
import { ThemeProvider } from "@mui/material";
import { useTheme } from "core/init/themes/theme_context";
import LoginPage from "view/login-page/login_page";
import PreLoader from "view/pre-loader/pre_loader";
import Navigation from "view/navigation/navigation";

const Layout = () => {
  return (
    <Navigation
      content={
        <Suspense fallback={<PreLoader />}>
          <Outlet />
        </Suspense>
      }
    />
  );
};

const Content = () => {
  const router = useRoutes([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/home",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },

        {
          path: "/home/map/:id",
          element: <ResultPage />,
        },
      ],
    },
  ]);
  return router;
};

function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Content />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
