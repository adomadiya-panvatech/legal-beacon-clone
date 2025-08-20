
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Solutions from "../pages/Solutions";
import Products from "../pages/Products";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ExploreServices from "../components/ExploreServices";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout><Home /></Layout>,
    },
    {
        path: "/solutions",
        element: <Layout><Solutions /></Layout>,
    },
    {
        path: "/products",
        element: <Layout><Products /></Layout>,
    },
    {
        path: "/about",
        element: <Layout><About /></Layout>,
    },
    {
        path: "/contact",
        element: <Layout><Contact /></Layout>,
    },
    {
        path: "/services",
        element: <Layout><ExploreServices /></Layout>,
    }
]);
