import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css' //TailwindCSS 적용

import App from './App'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Pages/Home";
import CategoryPage from "./Pages/CategoryPage";
import PricePage from "./Pages/PricePage";
import SortPage from "./Pages/SortPage";
import AdminPage from "./Pages/AdminPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
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
      }

    ]
  }  
]);

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
