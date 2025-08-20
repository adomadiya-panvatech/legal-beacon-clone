import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main";
import ExploreServices from "../components/ExploreServices";


export const router = createBrowserRouter([
    {
      path: "/*",
      element: <Main />,
    },
    {
      path: "/services",
      element: <ExploreServices />,
    },
  ]);