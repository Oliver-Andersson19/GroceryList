import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LandingPage from "../pages/LandingPage";

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
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: pages,
  },
]);
