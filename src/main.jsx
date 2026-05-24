import React from "react";
import ReactDom from "react-dom/client";
import "./index.css"; //TailwindCSS 적용

import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import PricePage from "./pages/PricePage";
import SortPage from "./pages/SortPage";
import AdminPage from "./pages/AdminPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, //부모 경로("/")의 기본 페이지
        element: <Home />,
      },
      {
        path: "category",
        element: <CategoryPage />,
      },
      {
        path: "price",
        element: <PricePage />,
      },
      {
        path: "sort",
        element: <SortPage />,
      },
      {
        path: "admin",
        element: <AdminPage />,
      },
    ],
  },
]);

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
