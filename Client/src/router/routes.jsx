import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import ListPage from "../pages/ListPage";

export const pages = [
  {
    path: "*",
    label: "*",
    inNav: false,
    rightNav: false,
    element: <>Error page</>,
  },
  {
    path: "/",
    label: "Hem",
    inNav: true,
    rightNav: false,
    element: <LandingPage />,
  },
  {
    path: "/logga-in",
    label: "Logga In",
    inNav: true,
    loggedIn: false,
    rightNav: true,
    element: <LoginPage />,
  },
  {
    path: "/lista",
    label: "Inköpslista",
    inNav: true,
    loggedIn: false,
    rightNav: true,
    element: <ListPage />,
  }
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: pages,
  },
]);
