import React from "react";
import Product from "./components/Product";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import RootLayout from "./components/RootLayout";
import Cart from "./components/Cart";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,

      children: [
        { path: "/", element: <Dashboard /> },
        { path: "/cart", element: <Cart /> },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
